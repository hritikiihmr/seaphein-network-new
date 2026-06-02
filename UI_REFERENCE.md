# UI Reference

## Existing Font Usage
- Body, paragraphs, links, spans, and list items use `WorkSans-Regular` from the existing CSS.
- Headings use the existing `Montserrat`, sans-serif declaration.
- No new font family was added in this UI update.

## Existing Color Theme Values Found In CSS
- Primary teal/blue: `#0e648c`, `#10648c`, `#0f648d`, `#137caf`, `#0b5a7f`
- Deep blue: `#04293a`, `#19243f`
- Light blue section colors: `#c3e5f6`, `#c3e6f6`, `#def0fa`, `#acdcf2`
- Red accent: `#b40d1a`, `#f00`
- Neutrals: `#ffffff`, `#fbfcfd`, `#f7f7f7`, `#f9f9f9`, `#f3f3f3`, `#585858`, `#212121`, `#000`

## Common Spacing System Used
- Shared section spacing uses 72px desktop, 60px medium desktop, 48px tablet, and 38px small mobile vertical padding.
- Card interiors use 14px to 30px padding depending on component density.
- Section title blocks use 24px to 34px bottom spacing.
- Mobile cards use 22px bottom spacing to keep stacked content clear.

## Button Style Rules
- Keep existing button text, classes, hrefs, and form behavior unchanged.
- Primary buttons use existing teal backgrounds and white text.
- Buttons use pill-radius styling for a more premium, consistent interaction pattern.
- Hover states remain subtle and use existing darker brand blues.
- Focus-visible states use a teal outline for keyboard accessibility.

## Card Style Rules
- Cards use white or existing light-blue surfaces, 14px radius, 1px teal-tinted borders, and soft teal shadows.
- Hover movement is limited to a small `translateY(-4px)` style lift.
- Card images use controlled dimensions, `object-fit: cover` or `contain` where appropriate, and rounded corners.
- Fixed heights are reduced where possible in favor of `min-height` to prevent clipped content.
- Award/person cards should use equal-height flex layouts, circular portrait frames, bottom accent bars, and page-scoped selectors when only one award page needs the change.

## Section Layout Rules
- Preserve HTML content order and all existing text.
- Prefer CSS-only improvements before changing markup.
- Use shared section classes such as `.ws-section-spacing`, `.same-section-spacing`, and `.section-spacing`.
- Shared inner-page headings use `.page-title-area`; keep this banner clear of floated header elements so it is visible before scrolling and under the sticky header.
- Use existing brand backgrounds and gradients; do not introduce a new palette.
- Avoid heavy animation and keep transitions short.

## Responsive Breakpoint Rules
- `1199px`: tighten navigation and section spacing.
- `1024px`: reduce header padding, card minimum heights, and form panel padding.
- `992px`: use the existing slicknav mobile menu and center top flag links.
- `768px`: reduce title/section spacing, stack form panels cleanly, and shrink map height.
- `766px`: center profile content, stack cards, allow tables to scroll horizontally, and reduce image/card constraints.
- `450px`: use compact spacing, smaller carousel controls, smaller circular profile images, and tighter form spacing.

## Important UI Conventions Followed
- Do not change page content, text, alt attributes, heading order, menu labels, button labels, routes, URLs, IDs, scripts, or tracking.
- Keep existing font family declarations.
- Keep existing SEAPHEIN colors and use CSS custom properties only as references to those existing values.
- Maintain current JavaScript hooks by preserving existing class and ID names.
- Prefer reusable CSS at the end of the existing stylesheet so future edits are easy to locate and revert.
- Navbar JavaScript should only prevent default behavior for real in-page hash links; normal page URLs must navigate normally.

## Home Page Section Rules
- Treat the hero/banner as the visual benchmark for the rest of the page.
- Profile slider cards should feel editorial and premium: large circular portraits, white card surface, soft blue section background, and clear CTA alignment.
- If the home leadership/profile section has only two visible people, use a static two-card grid instead of a carousel so the content feels intentional and not over-engineered.
- Executive Committee cards must use equal-height slick slides and bottom-aligned buttons so cards do not jump in height when text lengths differ.
- Executive Committee portraits should stay circular, consistent in size, and centered; country flags should remain small supporting identifiers.
- Events cards should use consistent image height, equal card height, and full-width CTA placement.
- Home Events should use a centered section heading above a full-width carousel; avoid detached side title panels that create empty space.
- Events carousel arrows should sit on the carousel area, not inside or below a title card.
- Long section headings must wrap on mobile rather than overflowing or being clipped.
- The country network strip should remain compact but tile-based on desktop and stack cleanly on mobile.
