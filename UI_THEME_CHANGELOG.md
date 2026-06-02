# UI Theme Changelog

## 2026-06-02 11:39:30 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_THEME_CHANGELOG.md`

### Sections Updated
- Global typography, color tokens, focus states, links, and section spacing.
- Header, topbar, desktop navigation, dropdowns, sticky navigation, and mobile slicknav menu.
- Mobile hamburger menu normal and sticky states unified so the first open menu and scrolled menu use the same deep-blue styling.
- Mobile identity strip compacted so the logo, two-line network name, member-country flags, hamburger, and hero all fit with less vertical clutter.
- Home-page country strip before the footer compacted for mobile to avoid oversized stacked flag cards.
- Top white institutional identity strip refined with a stronger logo lockup, requested network name line, and labeled country flag chips.
- Network name lockup adjusted to a two-line desktop treatment.
- Removed dummy anchor wrappers from country flag images and replaced them with non-link `.country-flag` spans.
- Home carousel/hero image presentation, indicators, and carousel controls.
- Shared section backgrounds for about, events, partner/member, committee, awards, and contact sections.
- Home leadership profile section refined from oversized portrait cards into compact readable profile panels.
- Executive Committee carousel cards refined for better portrait alignment, text hierarchy, button balance, and consistent card rhythm.
- Executive Committee carousel button baselines aligned and Slick dot pseudo-overlap removed.
- Cards used by events, teams, member institutions, awards, media room, committee members, logos, contact panels, and footer columns.
- Shared buttons and CTAs, including event buttons, slider buttons, blue buttons, tab buttons, contact submit button, award buttons, and load-more buttons.
- Inner page title banner.
- Footer, footer columns, footer links, contact details, and copyright area.
- Footer contact card email overflow fixed with long-text wrapping and a wider balanced footer grid.
- Footer bottom/copyright strip corrected to remove the old teal band and stray white spacing.
- Mobile/tablet refinements for spacing, navigation, hero images, cards, buttons, and tabs.

### CSS Classes Added Or Modified
- Added design variables in `:root`: `--primary-blue`, `--primary-blue-dark`, `--accent-blue`, `--link-blue`, `--gold-accent`, `--white`, `--light-bg`, `--section-bg`, `--text-dark`, `--text-muted`, `--border-light`, `--shadow-soft`, and `--shadow-card`.
- Remapped existing SEAPHEIN variables to the new institutional palette: `--seaphein-primary`, `--seaphein-primary-deep`, `--seaphein-primary-soft`, `--seaphein-primary-pale`, `--seaphein-accent`, `--seaphein-text`, `--seaphein-heading`, `--seaphein-surface`, `--seaphein-page`, `--seaphein-border`, `--seaphein-shadow`, and `--seaphein-shadow-soft`.
- Modified typography selectors: `body`, `p`, `span`, `a`, `ul li`, `input`, `textarea`, `select`, `button`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `.title`, and `.section-title`.
- Modified header/navigation selectors: `.topbar`, `.brand-logo img`, `.top-socail ul`, `.top-socail ul li a`, `.header-fixed.header-one`, `.header-fixed.header-one.stick`, `.navbar-light .navbar-nav .nav-link`, `.navbar-light .navbar-nav .nav-item .dropdown`, `.slicknav_menu`, and `.slicknav_nav a`.
- Modified mobile navigation selectors: `.slicknav_menu`, `.stick .slicknav_menu`, `.slicknav_nav`, `.stick .slicknav_nav`, `.slicknav_btn`, `.slicknav_brand`, `.slicknav_icon-bar`, `.slicknav_row`, and `.slicknav_arrow`.
- Modified mobile topbar selectors for compact rendering at `max-width: 576px`, including smaller logo, hidden country labels, compact flag row, and safer hamburger placement.
- Modified `.mid-socail` mobile selectors so the pre-footer country list uses compact two-column pills with controlled flag sizes and tighter spacing.
- Modified identity-strip selectors: `.brand-logo`, `.brand-logo::before`, `.brand-logo::after`, `.topbar::after`, `.top-socail ul li a::before`, `.top-socail ul li a::after`, and country-specific `.top-socail ul li:nth-child(...) a::after` labels.
- Added `.country-flag` styling selectors so country chips do not depend on anchor tags.
- Modified hero/carousel selectors: `#carouselExampleIndicators`, `#carouselExampleIndicators .carousel-item::after`, `.banner-img`, `.carousel-indicators li`, `.carousel-indicators .active`, `.carousel-control-prev-icon`, and `.carousel-control-next-icon`.
- Modified shared section/card selectors: `.row.single-about`, `.testimonials-slider .row.single-about`, `.home-leadership-grid .row.single-about`, `.evetn-card`, `.evetn-card-page`, `.website-content.team-page`, `.media-room-box`, `.Leadership-award-box`, `.team-cie`, `.award3rd-box`, `.public-logos-box`, `.public-logos-boxbhutan`, `.award-card`, `.patnet-logo`, `.one-time .patnet-logo`, `.contact-us .contact-form`, `.contact-us .contact-info`, and `.mid-socail`.
- Modified CTA selectors: `.slider-btn`, `.blu-btn`, `.evetn-card a.evnt-btn`, `.evetn-card-page a.evnt-btn`, `.team-page a`, `.patnet-logo a`, `.award-card .btn`, `button.contact-btn`, `a.nav-btn`, `a.btn-6`, `.load-more .btn-6`, `.tab-btn`, and `.tab-btn.active`.
- Modified footer selectors: `footer.same-section-spacing.footer-bg`, `footer.same-section-spacing.footer-bg::before`, `footer .footer-about`, `footer .usefull-links`, `footer .contact-us`, `footer h4.footer-title`, `footer .usefull-links ul li a`, `footer .contact-us a`, and `.copy-right`.
- Modified footer layout selectors: `footer.same-section-spacing.footer-bg .row`, `footer.same-section-spacing.footer-bg .row > [class*="col-"]`, `footer .contact-us p`, `footer .contact-us li`, and `footer .contact-us a`.
- Modified footer bottom selectors: `footer.same-section-spacing.footer-bg .copy-right`, `footer.same-section-spacing.footer-bg .copy-right::before`, `footer.same-section-spacing.footer-bg .copy-right p`, and `footer.same-section-spacing.footer-bg .copy-right-seprater`.
- Modified responsive selectors in `css/responsive.css` for breakpoints at `1199px`, `992px`, `768px`, and `480px`.

### Layout Changes
- No content or page sections were removed.
- No HTML content, menu labels, links, form fields, scripts, or slider markup were changed.
- Mobile menu behavior was preserved; only the visual state mismatch between initial and sticky hamburger menus was corrected.
- Existing layouts were preserved and visually refined through CSS.
- Country names were added via CSS pseudo-elements, preserving the original flag image markup and links.
- Country flag chips are now presentational/non-clickable instead of dummy `href="#"` links.
- Section spacing was standardized for a cleaner institutional rhythm.
- Cards now use consistent white surfaces, light borders, soft shadows, hover elevation, and responsive padding.
- Leadership cards now use a tighter horizontal profile layout on desktop, left-aligned text, reduced empty space, smaller portraits, and a slim institutional accent.
- Executive Committee cards now use consistent portrait sizing, cleaner flag badges, stronger readable body text, lighter outline CTAs, and tighter vertical spacing.
- Executive Committee cards now use fixed internal rows for title, description, and CTA so buttons align consistently; default Slick dot pseudo-elements are suppressed.
- Header and footer now use a deep-blue institutional treatment with a restrained gold accent line.
- Copyright/footer bottom now uses the same deep-blue footer system with a small gold accent and no white band separating it from the footer.
- Long email text in the footer contact card now wraps inside the card instead of overflowing.
- The home carousel now has a subtle deep-blue overlay treatment while preserving the same images and slider behavior.

### Backup File Path
- `backups/ui-theme-20260602-113930/style.css.bak`
- `backups/ui-theme-20260602-113930/responsive.css.bak`
- `backups/ui-theme-20260602-113930/UI_CHANGELOG.md.bak`
- `backups/ui-theme-20260602-113930/UI_REFERENCE.md.bak`

### How To Revert Changes
1. Replace `css/style.css` with `backups/ui-theme-20260602-113930/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-theme-20260602-113930/responsive.css.bak`.
3. Delete `UI_THEME_CHANGELOG.md` if you want to remove this theme-change record.
4. No HTML rollback is required because this pass did not modify HTML files.
