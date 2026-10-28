---
name: styledeck-swiss-grid
description: Use when building or restyling a website or UI and the user wants a swiss-grid look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Swiss-Grid style pack

## When to use
Use for analytical products, scientific tools, architecture firms, complex dashboards, precision utilities, and enterprise interfaces where information hierarchy, objective clarity, and mathematical alignment reign supreme. Pick `editorial` if you want warm literary character, or `neo-brutalist` for playful attitude.

## Design tokens
Load `packs/swiss-grid/tokens.css` or define these root variables:
- Background: `--sd-bg: #FFFFFF;` (pure optical white)
- Subtle Field: `--sd-bg-subtle: #F6F6F6;`
- Ink: `--sd-ink: #0A0A0A;` (absolute black, contrast 19.5:1)
- Secondary Ink: `--sd-ink-muted: #4B4B4B;`
- Accent: `--sd-accent: #E10600;` (International Typographic Style signal red)
- Grid Lines: `--sd-grid-line: #E5E5E5;`
- Radius scale: strictly `0px`
- Grid: 12-column CSS grid with 24px column gutters and 1px hairline rules

## Typography
- Headings: `'Schibsted Grotesk', -apple-system, sans-serif` (weight 700 to 900, tracking -0.03em, solid leading 0.95 to 1.1).
- Body: `'Hanken Grotesk', -apple-system, sans-serif` (weight 400 and 500, leading 1.55, tracking -0.01em).
- Huge Numerals: Monolithic numerals (3rem to 7rem) used as section indexes (`01`, `02`, `03`) set in bold Schibsted Grotesk.
- Case & Alignment: Strictly left-aligned text; titles in disciplined sentence case or lowercase; meta labels in uppercase tracked 0.05em.

## Layout rules
- Mathematical 12-column grid layout across desktop viewports.
- Spans: Asymmetrical column spans (e.g., 4 columns for title/index, 8 columns for body narrative).
- Abundant negative space: whitespace acts as an active structural element, not empty vacuum.
- Landing page flow:
  1. Header with coordinates, system status, and minimalist text nav.
  2. Hero with massive flush-left grotesque headline and asymmetric column lead-in.
  3. Feature breakdown indexed with colossal red/black numerals `01`, `02`, `03`.
  4. Testimonial formatted as an aligned quote ledger with speaker affiliation.
  5. Pricing structured as a clean technical specification matrix.
  6. FAQ organized into a 12-column numbered query grid.
  7. Footer with index data, system timestamp, and structured column indices.

## Motion
- May animate: Clean state transitions without decorative springs or physics (`opacity: 120ms linear`).
- Must stay still: No floating elements, no parallax scrolling, no decorative 3D transforms, no bounce effects.

## Component notes
- Hero: Left-aligned massive type block spanning columns 1-9; accent red rule or index number; minimalist black button.
- Navigation: Crisp 1px hairline border-bottom, index number branding (`MARGIN / 01`), horizontal text links.
- Lists & Matrix: Strict table rows separated by 1px hairline rules (`border-bottom: 1px solid var(--sd-grid-line)`).
- Buttons: Flush rectangular solid black boxes with white text or white boxes with black borders (`border-radius: 0; padding: 12px 24px;`).
- Footer: Technical colophon divided across 4 equal 3-column slots.

## Banned patterns
- Icons placed inside colored circular badges
- Rounded corners (`border-radius > 0px`)
- Centered typography or centered layouts
- The purple-to-blue gradient hero
- Inter or Geist as main font
- Emoji used as icons
- Centered headline with one blue button over three icon cards
- Drop shadows, glassmorphism, or blurred surfaces
- Generic copy such as \"Transform your business\" or \"Next-gen platform\"

## Self-check before finishing
1. Is every piece of text strictly left-aligned with zero centered headlines?
2. Are all numbers and section indices typeset in huge, bold grotesque type?
3. Are all borders and dividers hairline 1px rules with 0px corner radius?
4. Is the color palette anchored strictly in white (#FFFFFF), black (#0A0A0A), and signal red (#E10600)?
5. Are there zero circular icon badges and zero soft drop shadows?
