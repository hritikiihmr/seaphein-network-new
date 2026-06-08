# UI Changelog

## 2026-06-08 13:35:00 +05:30

### Files Changed
- `membership.html`
- Site header navigation in existing `.html` pages
- `css/style.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Add a new Membership page with a professional Coming Soon presentation and add a Membership menu item to the website header while preserving existing routes, content, scripts, and theme styling.

### UI Improvements Done
- Reuse the existing static inner-page structure, topbar, header, footer, scripts, and page-title banner.
- Add a centered Coming Soon section with an icon, heading, supporting copy, subtle surface, rounded corners, and existing button style.
- Add only scoped Membership page CSS using existing SEAPHEIN theme variables and breakpoints.
- Add Membership as a top-level navigation item in a position aligned with the current information architecture.
- Replaced the inherited image-based preloader with a CSS-only SEAPHEIN-themed blue/gold loader to avoid the generic loader image and remove the missing image request.

### Backup File Path
- `backups/membership-20260608-133500/style.css.bak`
- `backups/membership-20260608-133500/UI_CHANGELOG.md.bak`
- `backups/membership-20260608-133500/html/*.html`
- `backups/membership-20260608-133500/screenshots/*.png`

### Revert Instructions
1. Delete `membership.html`.
2. Remove the `Membership` list item linking to `membership.html` from page headers.
3. Remove the `Membership page` CSS block from `css/style.css`.
4. Restore the original `#preloader` background image rule if you want to bring back the previous image loader.
5. Remove this changelog entry if reverting the documentation too.

## 2026-05-29 14:19:52 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`
- `UI_REFERENCE.md`

### Short Reason For Change
Improve the existing SEAPHEIN website presentation so it feels cleaner, more modern, professional, and premium while preserving content, font usage, brand colors, routes, scripts, and existing page structure.

### UI Improvements Done
- Added a reusable premium UI refinement layer using the existing SEAPHEIN teal, blue, light-blue, white, and red accent colors.
- Improved section spacing and vertical rhythm for shared sections.
- Improved header/navigation spacing, hover states, dropdown styling, and keyboard focus visibility.
- Improved card styling for events, executive members, teams, media room, awards, public health logos, and related card blocks.
- Improved buttons and links with consistent rounded shape, shadows, and subtle hover transitions.
- Improved image presentation with consistent object-fit behavior, rounded corners, and controlled dimensions on card images.
- Improved contact form and contact information panel styling without changing form fields, IDs, names, validation attributes, or submit text.
- Tightened mobile contact form width, column padding, and form-control constraints to prevent clipped fields on narrow screens.
- Improved map presentation and table overflow handling.
- Added responsive refinements for desktop, tablet, and mobile breakpoints to reduce horizontal overflow risk and improve stacking.

### Backup File Path
- `backups/ui-20260529-141952/style.css.bak`
- `backups/ui-20260529-141952/responsive.css.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-20260529-141952/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-20260529-141952/responsive.css.bak`.
3. Remove the `2026-05-29 14:19:52 +05:30` entry from this changelog if you want the documentation reverted too.
4. Review `UI_REFERENCE.md` and remove or update the matching design-rule entry if reverting the UI system.

## 2026-05-29 14:46:21 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`
- `UI_REFERENCE.md`

### Short Reason For Change
Focused second-pass refinement for the home page after review showed that only the banner felt premium while the lower sections still looked plain and Executive Committee cards had uneven visual balance.

### UI Improvements Done
- Added a home-page premium finish layer for the profile slider, Executive Committee slider, Events section, country network strip, and footer.
- Made Executive Committee carousel cards equal height using flex-based slick slide alignment.
- Improved Executive Committee card composition with consistent portrait sizing, flag placement, spacing, button alignment, and softer premium surfaces.
- Improved the profile slider card with stronger image treatment, better balance, and more polished navigation controls.
- Redesigned the Events section presentation using the existing blue theme, equal-height event cards, better image framing, and clearer section hierarchy.
- Improved the country network strip into consistent responsive tiles.
- Added responsive fixes so the long Executive Committee heading wraps cleanly on narrow screens.

### Backup File Path
- `backups/ui-home-20260529-144621/style.css.bak`
- `backups/ui-home-20260529-144621/responsive.css.bak`
- `backups/ui-home-20260529-144621/UI_CHANGELOG.md.bak`
- `backups/ui-home-20260529-144621/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-home-20260529-144621/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-home-20260529-144621/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-home-20260529-144621/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.
4. Replace `UI_REFERENCE.md` with `backups/ui-home-20260529-144621/UI_REFERENCE.md.bak` if you want to undo the reference update.

## 2026-05-29 15:00:27 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`
- `UI_REFERENCE.md`

### Short Reason For Change
Focused correction for the home page Events section after review showed the title block created too much empty space and the carousel controls felt awkward.

### UI Improvements Done
- Converted the Events section into a full-width modern section with the heading centered above the cards.
- Removed the detached left title-card layout for Events.
- Repositioned carousel arrows onto the slider area for better visual balance.
- Increased event card image height, spacing, and card balance.
- Preserved all event text, links, image paths, and ordering.
- Kept responsive behavior so Events stacks cleanly on smaller screens.

### Backup File Path
- `backups/ui-events-20260529-150027/style.css.bak`
- `backups/ui-events-20260529-150027/responsive.css.bak`
- `backups/ui-events-20260529-150027/UI_CHANGELOG.md.bak`
- `backups/ui-events-20260529-150027/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-events-20260529-150027/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-events-20260529-150027/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-events-20260529-150027/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.
4. Replace `UI_REFERENCE.md` with `backups/ui-events-20260529-150027/UI_REFERENCE.md.bak` if you want to undo the reference update.

## 2026-05-29 15:55:48 +05:30

### Files Changed
- `js/main.js`
- `css/style.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Fix home page top navigation links not working until the sticky/fixed header state appeared.

### UI Improvements Done
- Updated the navbar click handler so it only intercepts true in-page `#section` links.
- Allowed normal page links such as `about-us.html`, `events.html`, and `contact-us.html` to navigate normally.
- Added normal-header stacking rules so the visible top nav receives pointer events above the banner/slider.
- Preserved all menu text, link URLs, classes, IDs, and order.

### Backup File Path
- `backups/ui-header-nav-20260529-155548/main.js.bak`
- `backups/ui-header-nav-20260529-155548/style.css.bak`
- `backups/ui-header-nav-20260529-155548/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `js/main.js` with `backups/ui-header-nav-20260529-155548/main.js.bak`.
2. Replace `css/style.css` with `backups/ui-header-nav-20260529-155548/style.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-header-nav-20260529-155548/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-29 16:03:01 +05:30

### Files Changed
- `css/style.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Fix sticky header not appearing after the normal-header stacking fix.

### UI Improvements Done
- Restored fixed positioning for `.header-fixed.header-one.stick`.
- Kept the normal top header clickable while ensuring the sticky header wins in the CSS cascade when scroll adds the `stick` class.
- Preserved all header content, menu text, links, colors, and JavaScript behavior.

### Backup File Path
- `backups/ui-sticky-header-20260529-160000/style.css.bak`
- `backups/ui-sticky-header-20260529-160000/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-sticky-header-20260529-160000/style.css.bak`.
2. Replace `UI_CHANGELOG.md` with `backups/ui-sticky-header-20260529-160000/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-29 16:39:23 +05:30

### Files Changed
- `css/style.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Fix event card poster images being cropped, which cut off text inside images such as SEAPHEIN Annual Meeting banners.

### UI Improvements Done
- Changed event card image rendering from cropped cover behavior to full-image contain behavior.
- Added the existing light-blue brand background behind contained event images.
- Preserved all image paths, event text, card order, links, colors, and layout structure.

### Backup File Path
- `backups/ui-event-image-fit-20260529-161000/style.css.bak`
- `backups/ui-event-image-fit-20260529-161000/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-event-image-fit-20260529-161000/style.css.bak`.
2. Replace `UI_CHANGELOG.md` with `backups/ui-event-image-fit-20260529-161000/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-29 17:09:50 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Move the Contact page “Get in touch” information panel to the left side and keep the contact form on the right.

### UI Improvements Done
- Reordered the Contact page columns visually using CSS only.
- Kept all contact text, form fields, IDs, validation attributes, and submit button text unchanged.
- Removed the right-side margin from the contact info panel and added right spacing for the new left-side layout.
- Added a mobile/tablet override so the contact section stacks cleanly on smaller screens.

### Backup File Path
- `backups/ui-contact-left-info-20260529-170950/style.css.bak`
- `backups/ui-contact-left-info-20260529-170950/responsive.css.bak`
- `backups/ui-contact-left-info-20260529-170950/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-contact-left-info-20260529-170950/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-contact-left-info-20260529-170950/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-contact-left-info-20260529-170950/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-29 17:25:46 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Fix distorted country flag images on the Executive Committee Members page.

### UI Improvements Done
- Scoped country flag image styling separately from committee profile portrait styling.
- Restored flags to compact rectangular badges instead of stretched oval portrait shapes.
- Added consistent flag placement, size, radius, and light shadow inside committee member cards.
- Added a mobile/tablet flag-size override so the badges stay aligned on smaller screens.
- Preserved all member names, text, image paths, links, colors, fonts, and card order.

### Backup File Path
- `backups/ui-committee-flags-20260529-172546/style.css.bak`
- `backups/ui-committee-flags-20260529-172546/responsive.css.bak`
- `backups/ui-committee-flags-20260529-172546/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-committee-flags-20260529-172546/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-committee-flags-20260529-172546/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-committee-flags-20260529-172546/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-30 10:56:54 +05:30

### Files Changed
- `1st-seaphein-annual-meeting.html`
- `2nd-seaphein-annual-meeting.html`
- `3rd-seaphein-annual-meeting.html`
- `5th-Seaphein-meeting.html`
- `6th-Seaphein-meeting.html`
- `about-us.html`
- `biennial-seaphein-meeting.html`
- `collaborationmembers.html`
- `committeemembers.html`
- `contact-us.html`
- `dr-bazid.html`
- `dr-mynit-htwe.html`
- `dr-sd-gupta.html`
- `events.html`
- `index.html`
- `individuals-contributions-award.html`
- `leadership-team.html`
- `leadershipaward.html`
- `lifetime-achivement-award.html`
- `mebmerinstutions.html`
- `mediaroom.html`
- `prof-pr-sodhani.html`
- `public-health-award.html`
- `seaphein-annual-meeting.html`
- `webinar1-details.html`
- `webinar2-details.html`
- `UI_CHANGELOG.md`

### Short Reason For Change
Remove new-tab behavior from the header link for Collaboration with Member Institutions across site pages.

### UI Improvements Done
- Removed only the `target="_blank"` attribute from header navigation links pointing to `collaborationmembers.html`.
- Kept all header link text, menu order, URLs, classes, IDs, scripts, and other page links unchanged.
- Preserved external links and content-area download/read-more links that still intentionally open in a new tab.

### Backup File Path
- `backups/ui-remove-collab-target-20260530-105654/*.html.bak`
- `backups/ui-remove-collab-target-20260530-105654/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace any changed HTML page with its matching `.html.bak` file from `backups/ui-remove-collab-target-20260530-105654/`.
2. Replace `UI_CHANGELOG.md` with `backups/ui-remove-collab-target-20260530-105654/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-30 11:08:45 +05:30

### Files Changed
- `index.html`
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`
- `UI_REFERENCE.md`

### Short Reason For Change
Remove Dr. Baizid Khoorshid Riaz from the home page second section and replace the small carousel with a cleaner static two-card layout.

### UI Improvements Done
- Removed the Dr. Baizid Khoorshid Riaz home-section card and related home-section read-more link.
- Converted the home second section from an Owl Carousel wrapper to a static two-card grid for the remaining people.
- Added scoped card styling for equal two-column desktop cards, circular portraits, centered text, consistent CTA placement, and subtle hover elevation.
- Added responsive rules so the two cards stack cleanly on tablet/mobile without horizontal scrolling.
- Preserved remaining text, font usage, brand colors, image paths, scripts, and all unrelated links/routes.

### Backup File Path
- `backups/ui-home-leadership-two-cards-20260530-110845/index.html.bak`
- `backups/ui-home-leadership-two-cards-20260530-110845/style.css.bak`
- `backups/ui-home-leadership-two-cards-20260530-110845/responsive.css.bak`
- `backups/ui-home-leadership-two-cards-20260530-110845/UI_CHANGELOG.md.bak`
- `backups/ui-home-leadership-two-cards-20260530-110845/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `index.html` with `backups/ui-home-leadership-two-cards-20260530-110845/index.html.bak`.
2. Replace `css/style.css` with `backups/ui-home-leadership-two-cards-20260530-110845/style.css.bak`.
3. Replace `css/responsive.css` with `backups/ui-home-leadership-two-cards-20260530-110845/responsive.css.bak`.
4. Replace `UI_CHANGELOG.md` with `backups/ui-home-leadership-two-cards-20260530-110845/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.
5. Replace `UI_REFERENCE.md` with `backups/ui-home-leadership-two-cards-20260530-110845/UI_REFERENCE.md.bak` if you want to undo the reference update.

## 2026-05-30 12:46:19 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`
- `UI_REFERENCE.md`

### Short Reason For Change
Enhance the shared inner-page title banner used on About Us and other pages, and ensure it is visible before scrolling.

### UI Improvements Done
- Upgraded `.page-title-area` with the existing light-blue/teal brand styling, centered heading panel, subtle depth, and refined underline.
- Added responsive title-banner spacing and heading sizing for tablet/mobile.
- Added header clearfix and title-area clearing so the banner is not hidden by floated normal-header layout before the sticky header appears.
- Preserved all page title text, URLs, markup, font family, and brand color values.

### Backup File Path
- `backups/ui-shared-page-title-20260530-124619/style.css.bak`
- `backups/ui-shared-page-title-20260530-124619/responsive.css.bak`
- `backups/ui-shared-page-title-20260530-124619/UI_CHANGELOG.md.bak`
- `backups/ui-shared-page-title-20260530-124619/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-shared-page-title-20260530-124619/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-shared-page-title-20260530-124619/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-shared-page-title-20260530-124619/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.
4. Replace `UI_REFERENCE.md` with `backups/ui-shared-page-title-20260530-124619/UI_REFERENCE.md.bak` if you want to undo the reference update.

## 2026-05-30 13:19:00 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Reduce the shared inner-page title banner height after review showed the enhanced section felt too large.

### UI Improvements Done
- Reduced `.page-title-area` minimum height and vertical padding.
- Tightened the centered title panel width and padding.
- Slightly reduced page-title font size and underline width for better proportion.
- Adjusted mobile/tablet title banner sizing to stay compact.
- Preserved all page title text, markup, fonts, brand colors, routes, and shared behavior.

### Backup File Path
- `backups/ui-shared-page-title-compact-20260530-131900/style.css.bak`
- `backups/ui-shared-page-title-compact-20260530-131900/responsive.css.bak`
- `backups/ui-shared-page-title-compact-20260530-131900/UI_CHANGELOG.md.bak`
- `backups/ui-shared-page-title-compact-20260530-131900/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-shared-page-title-compact-20260530-131900/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-shared-page-title-compact-20260530-131900/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-shared-page-title-compact-20260530-131900/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.
4. Replace `UI_REFERENCE.md` with `backups/ui-shared-page-title-compact-20260530-131900/UI_REFERENCE.md.bak` if needed; this compact sizing change did not require a new reference-rule update.

## 2026-05-30 15:10:41 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Enhance the About Us page content presentation for desktop, tablet, and mobile screens.

### UI Improvements Done
- Added scoped styling for the About Us content section below the shared title banner.
- Converted the plain content blocks into polished white cards with a subtle brand-blue accent rail, border, shadow, and soft background treatment.
- Improved heading hierarchy, spacing, paragraph line-height, and reading rhythm.
- Added responsive rules for tablet and mobile so cards remain contained, readable, and free from horizontal clipping.
- Preserved all About Us text, headings, sequence, markup, font family, links, routes, and brand colors.

### Backup File Path
- `backups/ui-about-content-20260530-151041/style.css.bak`
- `backups/ui-about-content-20260530-151041/responsive.css.bak`
- `backups/ui-about-content-20260530-151041/UI_CHANGELOG.md.bak`
- `backups/ui-about-content-20260530-151041/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-about-content-20260530-151041/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-about-content-20260530-151041/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-about-content-20260530-151041/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-30 15:31:02 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Update the profile detail page UI for `dr-sd-gupta.html` and `prof-pr-sodhani.html` to match the polished page style used elsewhere.

### UI Improvements Done
- Added shared scoped styling for profile detail pages using the existing `section.about-us` portrait-and-biography layout.
- Improved the portrait column with a soft light-blue panel, circular image treatment, white border, and subtle shadow.
- Improved the biography column with a clean white card, better spacing, clearer heading/role hierarchy, and readable paragraph rhythm.
- Added responsive stacking rules so portrait and biography cards work cleanly on smaller screens.
- Adjusted long mobile page-title text to wrap safely instead of clipping.
- Preserved all profile text, headings, image paths, links, routes, markup, font family, and brand colors.

### Backup File Path
- `backups/ui-profile-detail-pages-20260530-153102/style.css.bak`
- `backups/ui-profile-detail-pages-20260530-153102/responsive.css.bak`
- `backups/ui-profile-detail-pages-20260530-153102/UI_CHANGELOG.md.bak`
- `backups/ui-profile-detail-pages-20260530-153102/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-profile-detail-pages-20260530-153102/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-profile-detail-pages-20260530-153102/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-profile-detail-pages-20260530-153102/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-30 15:44:37 +05:30

### Files Changed
- `css/style.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Fix the header navigation hover/active underline alignment.

### UI Improvements Done
- Changed the navigation underline pseudo-element to use centered absolute positioning.
- Kept the underline inside the existing nav pill while aligning it evenly below the text.
- Applied the same alignment for hover, focus, and active menu states.
- Preserved all menu text, links, colors, font family, and header behavior.

### Backup File Path
- `backups/ui-nav-underline-20260530-154437/style.css.bak`
- `backups/ui-nav-underline-20260530-154437/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-nav-underline-20260530-154437/style.css.bak`.
2. Replace `UI_CHANGELOG.md` with `backups/ui-nav-underline-20260530-154437/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-30 17:06:49 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Enhance the Events & Webinars page UI to match the modern card and section styling used across the updated site.

### UI Improvements Done
- Improved the Events/Webinars tab navigation with a centered pill control, icon spacing, active state, hover state, and keyboard focus styling.
- Refined the page content section background and spacing below the shared page title banner.
- Improved event and webinar cards with equal-height flex layout, modern white surfaces, subtle brand-blue accents, rounded image frames, shadows, and bottom-aligned buttons.
- Improved event image treatment with contained image presentation and consistent frame height.
- Improved date, title, and button hierarchy for better scanning on desktop/tablet.
- Added responsive CSS rules for smaller screens, while leaving final mobile visual confirmation to user review as requested.
- Preserved all event/webinar text, dates, image paths, tab labels, links, onclick handlers, routes, font family, and brand colors.

### Backup File Path
- `backups/ui-events-page-20260530-170649/style.css.bak`
- `backups/ui-events-page-20260530-170649/responsive.css.bak`
- `backups/ui-events-page-20260530-170649/UI_CHANGELOG.md.bak`
- `backups/ui-events-page-20260530-170649/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-events-page-20260530-170649/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-events-page-20260530-170649/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-events-page-20260530-170649/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-30 17:16:18 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Enhance the Collaboration among Member Institutions page UI to match the updated premium page styling.

### UI Improvements Done
- Improved the MOU section heading with centered spacing and a brand underline.
- Restyled the two-column MOU table with a framed white surface, rounded corners, shadow, and stronger teal table header.
- Converted institution cells into card-like blocks with better spacing, borders, shadows, and consistent logo presentation.
- Improved logo containment so mixed institution logos align more consistently.
- Added responsive rules for table overflow and smaller screen spacing, with final mobile visual confirmation left to user review as requested.
- Preserved all institution names, table structure, links, targets, image paths, page title text, font family, and brand colors.

### Backup File Path
- `backups/ui-collaboration-members-20260530-171618/style.css.bak`
- `backups/ui-collaboration-members-20260530-171618/responsive.css.bak`
- `backups/ui-collaboration-members-20260530-171618/UI_CHANGELOG.md.bak`
- `backups/ui-collaboration-members-20260530-171618/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-collaboration-members-20260530-171618/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-collaboration-members-20260530-171618/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-collaboration-members-20260530-171618/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-05-30 17:26:00 +05:30

### Files Changed
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Increase collaboration page institution logo visibility after the logo cards appeared too small.

### UI Improvements Done
- Enlarged the institution logo frame size in the Collaboration among Member Institutions table.
- Increased the maximum logo render size while preserving the existing image paths and proportions.
- Adjusted responsive logo limits so smaller screens still keep the table readable without horizontal layout breakage beyond the intended table scroll.
- Preserved all institution names, links, table labels, font family, and brand colors.

### Backup File Path
- `backups/ui-collaboration-logo-size-20260530-172600/style.css.bak`
- `backups/ui-collaboration-logo-size-20260530-172600/responsive.css.bak`
- `backups/ui-collaboration-logo-size-20260530-172600/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-collaboration-logo-size-20260530-172600/style.css.bak`.
2. Replace `css/responsive.css` with `backups/ui-collaboration-logo-size-20260530-172600/responsive.css.bak`.
3. Replace `UI_CHANGELOG.md` with `backups/ui-collaboration-logo-size-20260530-172600/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.

## 2026-06-01 10:37:43 +05:30

### Files Changed
- `individuals-contributions-award.html`
- `css/style.css`
- `css/responsive.css`
- `UI_CHANGELOG.md`
- `UI_REFERENCE.md`

### Short Reason For Change
Enhance the Public Health Education Leadership Award for Individuals page UI to match the modern premium styling used on other updated pages.

### UI Improvements Done
- Added a page-specific class to the existing award section so the improved card styling is scoped to this page.
- Improved the intro award description panel with a white premium surface, soft blue brand background, stronger heading hierarchy, and centered underline.
- Rebuilt the individual award cards through CSS with equal-height flex layout, circular portrait frames, softer shadows, subtle hover lift, and bottom accent bars.
- Improved image presentation with consistent circular cropping while preserving all original image paths and alt text.
- Added responsive rules for stacked small-screen cards and tighter spacing, with final mobile visual confirmation left to user review as requested.
- Preserved all names, titles, descriptions, headings, menu text, font family, brand colors, scripts, routes, and links.

### Backup File Path
- `backups/ui-individual-award-20260601-103743/individuals-contributions-award.html.bak`
- `backups/ui-individual-award-20260601-103743/style.css.bak`
- `backups/ui-individual-award-20260601-103743/responsive.css.bak`
- `backups/ui-individual-award-20260601-103743/UI_CHANGELOG.md.bak`
- `backups/ui-individual-award-20260601-103743/UI_REFERENCE.md.bak`

### Revert Instructions
1. Replace `individuals-contributions-award.html` with `backups/ui-individual-award-20260601-103743/individuals-contributions-award.html.bak`.
2. Replace `css/style.css` with `backups/ui-individual-award-20260601-103743/style.css.bak`.
3. Replace `css/responsive.css` with `backups/ui-individual-award-20260601-103743/responsive.css.bak`.
4. Replace `UI_CHANGELOG.md` with `backups/ui-individual-award-20260601-103743/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.
5. Replace `UI_REFERENCE.md` with `backups/ui-individual-award-20260601-103743/UI_REFERENCE.md.bak` if you want to undo this reference update.

## 2026-06-01 10:56:18 +05:30

### Files Changed
- `css/style.css`
- `UI_CHANGELOG.md`

### Short Reason For Change
Fix cropped person head/portrait display on the individual leadership award page.

### UI Improvements Done
- Changed the scoped individual award portrait image fit from cropped cover mode to contained mode.
- Preserved the existing circular portrait frame, card styling, image paths, alt text, names, titles, font family, and brand colors.

### Backup File Path
- `backups/ui-individual-award-image-fit-20260601-105618/style.css.bak`
- `backups/ui-individual-award-image-fit-20260601-105618/UI_CHANGELOG.md.bak`

### Revert Instructions
1. Replace `css/style.css` with `backups/ui-individual-award-image-fit-20260601-105618/style.css.bak`.
2. Replace `UI_CHANGELOG.md` with `backups/ui-individual-award-image-fit-20260601-105618/UI_CHANGELOG.md.bak` if you want to undo this documentation entry.
