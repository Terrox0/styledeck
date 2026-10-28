---
name: styledeck-retro-print
description: Use when building or restyling a website or UI and the user wants a retro-print look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Retro-Print style pack

## When to use
Use for physical goods catalogues, heritage tools, craft stationery apps, archival software, screen-printing studios, and tangible analog productivity products that honor the physical press. Pick `editorial` if you want pristine modern literary publishing, or `neo-brutalist` for raw digital internet attitude.

## Design tokens
Load `packs/retro-print/tokens.css` or define these root variables:
- Background: `--sd-bg: #F3E9D2;` (heavy manila newsprint)
- Surface: `--sd-bg-surface: #E8DDBC;`
- Ink: `--sd-ink: #2B2118;` (deep burnt umber ink, contrast 10.6:1)
- Accent: `--sd-accent: #D9482B;` (letterpress cadmium red)
- Secondary Ink: `--sd-ink-secondary: #2C4A52;` (vintage cyan/teal)
- Misprint Shadow: `--sd-shadow-misprint: 3px 3px 0px var(--sd-accent);`
- Radius scale: subtle 0px to 2px max
- Borders: 2px solid ink or 2px dashed letterpress rules

## Typography
- Headings: `'DM Serif Display', Georgia, serif` (stately high-contrast display serif, line height 1.05 to 1.2).
- Body: `'Work Sans', -apple-system, sans-serif` (weight 400 and 500, clean mid-century grotesque, line height 1.6).
- Stamped Badges: Uppercase Work Sans (weight 700, letter-spacing 0.08em, wrapped in solid borders or dashed stamps).
- Overprint effects: Text headers with simulated offset color underlays or dual-ink highlights.

## Layout rules
- Tactile broadsheet layout inspired by mid-century almanacs, packaging, and catalog pamphlets.
- Alignment: Grounded left alignment with centered heraldic badge stamps.
- Texture & Separators: Halftone dot patterns (SVG dot matrices) and dashed cutting-guide borders.
- Landing page flow:
  1. Heritage letterpress header with edition number and circular stamped trademark.
  2. Hero with bold display serif, stamped subtitle badge, and ink-bleed button.
  3. Feature catalogue presented as numbered specimen plates with dashed perimeter rules.
  4. Testimonial enclosed in a certificate or warranty-style endorsement seal.
  5. Pricing ledger formatted as an invoice order form with itemized ticket stubs.
  6. FAQ catalog section with stamped question markers `[NO. 01]`, `[NO. 02]`.
  7. Printer's imprint footer with copyright seal and press registration mark.

## Motion
- May animate: Slight stamp press on click (`transform: scale(0.98)`), ink bleed opacity transitions (150ms).
- Must stay still: No glossy 3D card tilts, no glowing neon effects, no sliding app carousels.

## Component notes
- Hero: DM Serif Display headline, two-ink contrast badge, heavy solid button with 3px red misprint shadow.
- Navigation: Stamped registry banner with decorative dashed border bottom and two-ink brand seal.
- Specimen Cards: Solid 2px ink borders, subtle paper surface tint, dashed rules, stamped specimen tags.
- Buttons: Solid burnt umber or vermilion blocks with misprint offset shadows (`box-shadow: 3px 3px 0px #D9482B;`).
- Footer: Archival colophon with press coordinates, registration crosshairs (`+`), and edition stamp.

## Banned patterns
- Glassmorphism, backdrop filters, or frosty glass
- Neon colors or glowing drop shadows
- The purple-to-blue gradient hero
- Inter or Geist as main font
- Emoji used as icons
- Centered headline with one blue button over three icon cards
- Large rounded pill shapes or floating bubble cards
- Generic copy such as \"Transform your business\" or \"Seamless digital solutions\"

## Self-check before finishing
1. Are typography and elements rendered in a two-ink letterpress aesthetic (burnt umber #2B2118 and cadmium #D9482B)?
2. Are headers set in DM Serif Display and body copy in Work Sans?
3. Do elements use misprint offset shadows and dashed printer rules instead of modern blurred shadows?
4. Are glassmorphism, glowing neons, and rounded pill containers completely absent?
5. Does the copy reflect genuine craft and tangible permanence rather than SaaS cliches?
