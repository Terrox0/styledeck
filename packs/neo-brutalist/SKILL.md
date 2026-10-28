---
name: styledeck-neo-brutalist
description: Use when building or restyling a website or UI and the user wants a neo-brutalist look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Neo-Brutalist style pack

## When to use
Use for developer tools, disruptive SaaS, indie hacker products, counter-culture utilities, and provocative portfolios that demand raw confidence and tactile energy. Pick `terminal` if you need a pure retro CLI interface, or `swiss-grid` if you need restrained institutional clarity.

## Design tokens
Load `packs/neo-brutalist/tokens.css` or define these root variables:
- Background: `--sd-bg: #FFF8E7;` (manila folder warm cream)
- Surface: `--sd-bg-surface: #FFFFFF;`
- Ink: `--sd-ink: #111111;` (high contrast contrast 15.8:1)
- Accent: `--sd-accent: #FF5A36;` (electric vermilion)
- Secondary pops: `--sd-accent-secondary: #FFDE59;` / `--sd-accent-tertiary: #5CE1E6;`
- Borders: strictly `3px solid var(--sd-ink);` (or 4px for hero frames)
- Shadows: hard unblurred offsets `5px 5px 0px var(--sd-ink);`
- Radius scale: strictly `0px`

## Typography
- Headings: `'Archivo Black', 'Arial Black', sans-serif` (uppercase or sentence case, massive weight, tracking -0.02em, tight line height 1.0 to 1.1).
- Body & Labels: `'IBM Plex Mono', 'Courier New', monospace` (weight 400 and 600, line height 1.5).
- Badges & Tags: Monospace uppercase inside 3px black bordered boxes with solid accent fills.

## Layout rules
- Exposed structural grid: visible black borders dividing columns and sections.
- Alignment: Stark left alignment, bold asymmetric boxes, oversized headline lockups.
- Spacing: Chunky, uniform gaps (24px to 48px). Boxes stand proudly apart with hard shadows.
- Landing page flow:
  1. High-impact ticker tape banner with scrolling monochrome status.
  2. Hero with bold boxed headline, chunky callout badge, and hard-shadow primary button.
  3. Feature matrix in a raw 3-column table with 3px black border grid.
  4. Testimonial stamped inside an offset-shadow quote placard.
  5. Pricing tier cards with thick borders, contrast headers, and solid button bars.
  6. FAQ accordion constructed with thick bordered toggle blocks.
  7. Footer with heavy border-top, raw sitemap columns, and copyright stamp.

## Motion
- May animate: Snappy tactile press states (`transform: translate(2px, 2px); box-shadow: 3px 3px 0px var(--sd-ink);` on hover/active).
- Must stay still: No smooth gradients, no ambient floating, no soft blurs, no fluid spring physics. Every interaction must feel mechanical.

## Component notes
- Hero: Giant high-impact Archivo Black headline, thick-bordered badge, oversized primary action button with 5px drop shadow.
- Navigation: Sturdy bar with 3px solid black bottom border, bold boxed brandmark, monospace nav links separated by vertical black rules.
- Cards / Containers: Heavy 3px black border, solid white or accent background, hard black shadow (`box-shadow: 5px 5px 0px #111`).
- Buttons: Chunky rectangular buttons with 3px border, hard drop-shadow, and instant mechanical translation when clicked.
- Footer: Heavy black top rule, monospace layout, bold category headers.

## Banned patterns
- Soft blurred drop shadows (`box-shadow: 0 10px 25px rgba(...)`)
- Rounded corners (`border-radius > 0px`)
- Color gradients of any kind
- The purple-to-blue gradient hero
- Inter or Geist as main font
- Emoji used as icons
- Centered headline with one blue button over three icon cards
- Glassmorphism, backdrop filters, or frosted glass
- Generic copy such as \"Transform your business\" or \"Scale effortlessly\"

## Self-check before finishing
1. Do all borders use thick, solid black strokes (minimum 3px)?
2. Are all shadows hard offset cutouts with 0px blur radius?
3. Are headings set in heavy Archivo Black and body text in IBM Plex Mono?
4. Are corner radii strictly 0px without any rounded pill shapes?
5. Is the layout devoid of purple gradients and soft floating blurs?
