---
name: styledeck-y2k-chrome
description: Use when building or restyling a website or UI and the user wants a y2k-chrome look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Y2K-Chrome style pack

## When to use
Use for web3 creative tools, audio/DJ plugins, experimental digital toys, streaming utilities, streetwear drops, and neo-arcade software that thrives on turn-of-the-millennium optimistic cyber aesthetics. Pick `neo-brutalist` for raw utilitarian grit, or `terminal` for monochrome phosphor CLI.

## Design tokens
Load `packs/y2k-chrome/tokens.css` or define these root variables:
- Background: `--sd-bg: #E9EEFF;` (metallic frosted lavender)
- Surface: `--sd-bg-surface: #F5F7FF;`
- Ink: `--sd-ink: #12123A;` (deep cyber indigo, contrast 13.8:1)
- Accent: `--sd-accent: #FF3D9A;` (hot magenta chrome)
- High-Contrast Text Accent: `--sd-accent-text: #B8005A;` (contrast > 5.4:1 on light canvas)
- Cyber Highlights: `--sd-accent-cyan: #00D2FF;` / `--sd-accent-lime: #72FF13;`
- Radius scale: Pill buttons (`9999px`) and sticker squircle cards (`20px-24px`)
- Chrome Gradient: `linear-gradient(135deg, #FFFFFF 0%, #D8E0FF 50%, #C4D2FF 100%)`
- Shadows: Metallic hard drop shadow `0 4px 0px var(--sd-ink)` or sticker offset `4px 4px 0px #FF3D9A`

## Typography
- Headings: `'Unbounded', 'Arial Black', sans-serif` (wide tracked cyber display sans, tight line height 1.05 to 1.2).
- Body: `'Sora', -apple-system, sans-serif` (weight 400 and 600, futuristic rounded geometric sans, line height 1.6).
- Badges & Stickers: Unbounded uppercase, bold, wrapped in pill boundaries with rotation (`transform: rotate(-2deg)`).

## Layout rules
- Asymmetrical cyber-deck layout featuring floating sticker capsules and metallic silver cards.
- Alignment: Dynamic offset alignment with slanted decorative badges.
- Spacing: 24px to 48px modular gaps with pill-shaped visual anchors.
- Landing page flow:
  1. Metallic pill navigation bar with cyber status pill (`SYS_ONLINE v2.0`).
  2. Hero with wide Unbounded headline, chrome metallic gradient card, and hot magenta button.
  3. Feature capsules styled as futuristic chrome modules with silver borders.
  4. Testimonial housed inside an inflated audio-player lyric bubble.
  5. Pricing presented in futuristic metallic credit pods.
  6. FAQ formatted as futuristic expandable pill capsules.
  7. Footer with cyber credits, silver grid lines, and interactive sticker badges.

## Motion
- May animate: Playful spring wobble on hover (`transform: translateY(-2px) rotate(1deg) scale(1.02);`), glossy metallic shimmer.
- Must stay still: Do not introduce nauseating continuous spin loops or sluggish page-blocking transitions.

## Component notes
- Hero: Chrome metallic plate background with silver border; Unbounded headline; hot magenta pill CTA.
- Navigation: Floating pill navigation with 2px border and glossy metallic sheen.
- Containers: 20px-24px bubble radius, 2px metallic border, and crisp 0px blur drop shadow.
- Buttons: High-energy pill shapes (`border-radius: 9999px; background: #FF3D9A; color: #12123A; border: 2px solid #12123A; box-shadow: 0 4px 0 #12123A; font-weight: 700;`).
- Footer: Rounded cyber dashboard footer with chrome bevels and sticker tags.

## Banned patterns
- Low-contrast text failing WCAG AA (all text must maintain >= 4.5:1 ratio)
- Generic corporate blue and purple gradient hero
- Inter or Geist as main font
- Emoji used as icons (draw vector starbursts, chrome spheres, or badges)
- Centered headline with one blue button over three icon cards
- Standard corporate flat rectangle cards with 4px radius
- Generic copy such as \"Transform your business\" or \"AI-powered innovation\"

## Self-check before finishing
1. Are typography and headings set in wide Unbounded and body text in Sora?
2. Does every text element maintain a contrast ratio >= 4.5:1 against its background?
3. Are containers and buttons shaped with metallic chrome gradients and pill/bubble radii?
4. Are sticker badges playfully rotated with spring hover states?
5. Is the design distinct from generic corporate blue/purple gradient templates?
