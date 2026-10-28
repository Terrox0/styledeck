---
name: styledeck-soft-organic
description: Use when building or restyling a website or UI and the user wants a soft-organic look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Soft-Organic style pack

## When to use
Use for mindful productivity, wellness tools, botanical apps, calm habit trackers, reflective journals, and sustainable design studios that prioritize warmth, human comfort, and natural rhythm. Pick `quiet-luxury` for nocturnal elegance, or `retro-print` for crisp analog press heritage.

## Design tokens
Load `packs/soft-organic/tokens.css` or define these root variables:
- Background: `--sd-bg: #F4EFE6;` (sun-bleached warm linen)
- Surface: `--sd-bg-surface: #EAE3D5;` / Card: `--sd-bg-card: #FAF7F2;`
- Ink: `--sd-ink: #2F3A2C;` (deep forest loam moss, contrast 9.2:1)
- Subtle Ink: `--sd-ink-muted: #576553;`
- Accent: `--sd-accent: #C7774B;` (natural terracotta clay)
- Secondary Moss: `--sd-moss: #73866C;`
- Border: `--sd-border-soft: #DDD4C4;`
- Radius scale: Soft organic blobs (16px, 24px, or pebble `32px 16px 28px 20px`)
- Shadows: Warm diffuse sunlit shadows (`0 6px 24px rgba(47, 58, 44, 0.06)`)

## Typography
- Headings: `'Young Serif', Georgia, serif` (warm curved serif terminals, tight line height 1.15 to 1.25).
- Body: `'Figtree', -apple-system, sans-serif` (weight 400 and 500, friendly rounded humanist grotesque, line height 1.7).
- Hierarchy: Soft title treatments, friendly subheadings with pillowy punctuation and gentle emphasis.

## Layout rules
- Generous breathable rhythm with flowing, asymmetric pebble containers.
- Alignment: Gentle left-alignment grounded with soft rounded pill badges and organic contour cards.
- Spacing: Deep, calm padding (48px to 96px vertical spacing between sections).
- Landing page flow:
  1. Soft curved navigation bar with rounded pill links.
  2. Hero with Young Serif heading, soft pebble badge, and terracotta clay button.
  3. Feature trio wrapped in subtle warm linen containers with varying pebble radii.
  4. Testimonial in a soothing curved card with organic leaf/seed SVG motif.
  5. Pricing presented in rounded bamboo-toned cards with calm feature lists.
  6. FAQ formatted in gentle rounded toggle cards with smooth expansion.
  7. Footer resting on an organic warm meadow baseline.

## Motion
- May animate: Soft smooth transitions (`cubic-bezier(0.25, 0.8, 0.25, 1)` over 300ms), gentle floating parallax.
- Must stay still: No aggressive snaps, no harsh blinking, no mechanical jarring.

## Component notes
- Hero: Gentle Young Serif statement; Figtree subhead; terracotta clay button with soft 16px radius.
- Navigation: Curved navbar with generous 24px padding and pill-shaped link pills.
- Containers: Rounded corners (16px to 28px), subtle diffuse shadow, light cream background.
- Buttons: Warm clay button (`background: #C7774B; color: #FAF7F2; border-radius: 9999px; padding: 14px 28px;`).
- Footer: Quiet earthy footer with soft moss accents and warm text.

## Banned patterns
- Pure black ink (`#000000` or `#111111`) — always use earthy loam moss (`#2F3A2C`)
- Neon, hyper-saturated cyan or purple colors
- The purple-to-blue gradient hero
- Inter or Geist as main font
- Emoji used as icons (use organic botanical SVGs or simple geometric glyphs)
- Centered headline with one blue button over three icon cards
- Hard 0px sharp corners or heavy 3px black brutalist borders
- Generic copy such as \"Transform your business\" or \"Hyper-scale your growth\"

## Self-check before finishing
1. Is pure black completely avoided in favor of deep loam green (#2F3A2C)?
2. Are headings set in Young Serif and body copy in Figtree with generous line height?
3. Do cards and buttons feature soft organic rounded corners (16px to 28px or pills)?
4. Is the color palette anchored by warm linen (#F4EFE6) and terracotta (#C7774B)?
5. Is the layout free of artificial neon glows and generic SaaS icon grids?
