<?php
ini_set('display_errors', '0');
error_reporting(0);

function redirect_with_status($status)
{
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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_with_status('invalid');
}

if (!empty($_POST['website'])) {
    redirect_with_status('success');
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
    redirect_with_status('invalid');
}

$recipient = 'hritik.solanki@iihmr.edu.in';
$emailSubject = 'New Contact Form Submission - SEAPHEIN Network';

$emailBody = "New contact form submission received from the SEAPHEIN Network website.\n\n";
$emailBody .= "Name: {$name}\n";
$emailBody .= "Email: {$email}\n";
$emailBody .= "Phone: {$phone}\n";
$emailBody .= "Subject: {$subject}\n\n";
$emailBody .= "Message:\n{$message}\n";

$headers = array(
    'From: no-reply@seaphein-network.org',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
);

$sent = mail($recipient, $emailSubject, $emailBody, implode("\r\n", $headers));

redirect_with_status($sent ? 'success' : 'error');
