<?php
ini_set('display_errors', '0');
error_reporting(0);

const CONTACT_RECIPIENT = 'hritik.solanki@iihmr.edu.in';
const CONTACT_SENDER = 'noreply@iihmr.edu.in';
const CONTACT_SENDER_NAME = 'SEAPHEIN Website';
const CONTACT_LOG_FILE = __DIR__ . '/contact-mail.log';
const CONTACT_MAIL_CONFIG_FILE = __DIR__ . '/contact-mail-config.php';

function is_ajax_request()
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    $requestedWith = $_SERVER['HTTP_X_REQUESTED_WITH'] ?? '';

    return stripos($accept, 'application/json') !== false ||
        strcasecmp($requestedWith, 'XMLHttpRequest') === 0;
}

function respond_with_status($status)
{
    if (is_ajax_request()) {
        $messages = array(
            'success' => 'Thank you. Your message has been sent successfully.',
            'error' => 'Sorry, your message could not be sent. Please try again later.',
            'invalid' => 'Please fill all required fields correctly.',
        );
        $httpStatus = $status === 'success' ? 200 : ($status === 'invalid' ? 422 : 500);

        http_response_code($httpStatus);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(array(
            'success' => $status === 'success',
            'status' => $status,
            'message' => $messages[$status] ?? $messages['error'],
        ));
        exit;
    }

    header('Location: contact-us.html?status=' . rawurlencode($status));
    exit;
}

function clean_text($value)
{
    return trim(strip_tags((string) $value));
}

function clean_header_value($value)
{
    return str_replace(array("\r", "\n"), '', clean_text($value));
}

function log_contact_mail_error($message)
{
    $line = '[' . date('Y-m-d H:i:s') . '] ' . $message . PHP_EOL;
    @file_put_contents(CONTACT_LOG_FILE, $line, FILE_APPEND | LOCK_EX);
}

function load_contact_mail_config()
{
    if (!is_file(CONTACT_MAIL_CONFIG_FILE)) {
        return array();
    }

    $config = require CONTACT_MAIL_CONFIG_FILE;
    return is_array($config) ? $config : array();
}

function smtp_read_response($connection)
{
    $response = '';

    while (($line = fgets($connection, 515)) !== false) {
        $response .= $line;

        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }

    return $response;
}

function smtp_expect($connection, $expectedCode)
{
    $response = smtp_read_response($connection);
    $code = (int) substr($response, 0, 3);

    if ($code !== $expectedCode) {
        throw new RuntimeException('SMTP expected ' . $expectedCode . ' but received: ' . trim($response));
    }

    return $response;
}

function smtp_command($connection, $command, $expectedCode)
{
    fwrite($connection, $command . "\r\n");
    return smtp_expect($connection, $expectedCode);
}

function smtp_format_address($email, $name = '')
{
    $email = clean_header_value($email);
    $name = clean_header_value($name);

    if ($name === '') {
        return '<' . $email . '>';
    }

    return '"' . addcslashes($name, '"\\') . '" <' . $email . '>';
}

function smtp_escape_body($body)
{
    $body = str_replace(array("\r\n", "\r"), "\n", $body);
    $body = str_replace("\n", "\r\n", $body);
    return preg_replace('/^\./m', '..', $body);
}

function send_contact_mail_smtp($config, $subject, $body, $replyToEmail)
{
    $host = $config['smtp_host'] ?? '';
    $port = (int) ($config['smtp_port'] ?? 587);
    $secure = strtolower((string) ($config['smtp_secure'] ?? 'tls'));
    $username = $config['smtp_user'] ?? '';
    $password = $config['smtp_pass'] ?? '';
    $fromEmail = $config['from_email'] ?? CONTACT_SENDER;
    $fromName = $config['from_name'] ?? CONTACT_SENDER_NAME;
    $toEmail = $config['to_email'] ?? CONTACT_RECIPIENT;
    $toName = $config['to_name'] ?? '';

    if (
        $host === '' ||
        $username === '' ||
        $password === '' ||
        !filter_var($fromEmail, FILTER_VALIDATE_EMAIL) ||
        !filter_var($toEmail, FILTER_VALIDATE_EMAIL)
    ) {
        throw new RuntimeException('SMTP config is incomplete.');
    }

    $connection = @stream_socket_client(
        'tcp://' . $host . ':' . $port,
        $errorNumber,
        $errorMessage,
        30,
        STREAM_CLIENT_CONNECT
    );

    if (!$connection) {
        throw new RuntimeException('SMTP connection failed: ' . $errorMessage . ' (' . $errorNumber . ')');
    }

    stream_set_timeout($connection, 30);

    try {
        smtp_expect($connection, 220);
        smtp_command($connection, 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), 250);

        if ($secure === 'tls') {
            smtp_command($connection, 'STARTTLS', 220);

            if (!stream_socket_enable_crypto($connection, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('SMTP STARTTLS negotiation failed.');
            }

            smtp_command($connection, 'EHLO ' . ($_SERVER['SERVER_NAME'] ?? 'localhost'), 250);
        }

        smtp_command($connection, 'AUTH LOGIN', 334);
        smtp_command($connection, base64_encode($username), 334);
        smtp_command($connection, base64_encode($password), 235);
        smtp_command($connection, 'MAIL FROM:<' . $fromEmail . '>', 250);
        smtp_command($connection, 'RCPT TO:<' . $toEmail . '>', 250);
        smtp_command($connection, 'DATA', 354);

        $headers = array(
            'From: ' . smtp_format_address($fromEmail, $fromName),
            'To: ' . smtp_format_address($toEmail, $toName),
            'Reply-To: ' . smtp_format_address($replyToEmail),
            'Subject: ' . clean_header_value($subject),
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'X-Mailer: SEAPHEIN Website SMTP',
        );

        fwrite($connection, implode("\r\n", $headers) . "\r\n\r\n" . smtp_escape_body($body) . "\r\n.\r\n");
        smtp_expect($connection, 250);
        smtp_command($connection, 'QUIT', 221);
    } finally {
        fclose($connection);
    }

    return true;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond_with_status('invalid');
}

if (!empty($_POST['website'])) {
    respond_with_status('success');
}

$name = clean_header_value($_POST['name'] ?? '');
$email = clean_header_value($_POST['email'] ?? '');
$phone = clean_text($_POST['phone_number'] ?? '');
$subject = clean_header_value($_POST['msg_subject'] ?? '');
$message = clean_text($_POST['message'] ?? '');

$email = filter_var($email, FILTER_SANITIZE_EMAIL);

if (
    $name === '' ||
    $email === '' ||
    $subject === '' ||
    $message === '' ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    log_contact_mail_error('Invalid contact form submission. Name/email/subject/message validation failed.');
    respond_with_status('invalid');
}

$emailSubject = 'New Contact Form Submission - SEAPHEIN Network';

$emailBody = "New contact form submission received from the SEAPHEIN Network website.\n\n";
$emailBody .= "Name: {$name}\n";
$emailBody .= "Email: {$email}\n";
$emailBody .= "Phone: {$phone}\n";
$emailBody .= "Subject: {$subject}\n\n";
$emailBody .= "Message:\n{$message}\n";

$mailConfig = load_contact_mail_config();

try {
    $sent = send_contact_mail_smtp($mailConfig, $emailSubject, $emailBody, $email);
} catch (Throwable $exception) {
    $sent = false;
    log_contact_mail_error($exception->getMessage());
}

respond_with_status($sent ? 'success' : 'error');
