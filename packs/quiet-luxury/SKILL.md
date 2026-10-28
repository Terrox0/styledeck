---
name: styledeck-quiet-luxury
description: Use when building or restyling a website or UI and the user wants a quiet-luxury look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Quiet-Luxury style pack

## When to use
Use for high-end boutique instruments, private wealth interfaces, bespoke architectural portfolios, premium hardware reveals, couture showcases, and understated executive software where restraint and quiet authority speak louder than volume. Pick `terminal` for hacker dark mode, or `editorial` for paper-like daylight warmth.

## Design tokens
Load `packs/quiet-luxury/tokens.css` or define these root variables:
- Background: `--sd-bg: #0E0E10;` (obsidian charcoal dark)
- Surface: `--sd-bg-surface: #141418;` / Card: `--sd-bg-card: #18181E;`
- Ink: `--sd-ink: #EDE6DA;` (spun silk champagne, contrast 14.1:1)
- Subtle Ink: `--sd-ink-muted: #A39D93;`
- Dim Ink: `--sd-ink-dim: #6B665E;`
- Accent: `--sd-accent: #B89B5E;` (brushed antique gold, contrast 7.8:1 on dark)
- Border: `--sd-border-fine: 1px solid rgba(237, 230, 218, 0.1);`
- Radius scale: strictly `0px`
- Tracking: wide `0.18em` to `0.28em` on uppercase labels

## Typography
- Headings: `'Cormorant Garamond', Georgia, serif` (graceful display serif, optical sizes, italic nuances, tight leading 1.05 to 1.2).
- Body: `'Manrope', -apple-system, sans-serif` (weight 300 and 400, crisp geometric neutrality, leading 1.7).
- Micro Labels: Uppercase Manrope, tiny 10px-11px (`0.6875rem`), letter-spacing `0.22em`, muted silk tone.

## Layout rules
- Asymmetrical architectural balance with vast negative space and whisper-thin division lines.
- Alignment: Measured left alignment paired with wide-spaced metadata ribbons.
- Spacing: Monumental vertical breathing room (80px to 120px between sections).
- Landing page flow:
  1. Minimalist header with tracked logotype and delicate hairline bottom border.
  2. Hero with Cormorant Garamond display serif, micro uppercase badge, and gold bordered CTA.
  3. Feature suite separated by hairline horizontal rules with roman numeral indices (`I`, `II`, `III`).
  4. Testimonial typeset as an understated italic quote with quiet author attribution.
  5. Membership tier cards styled as private invitation ledger blocks.
  6. FAQ formatted as a discreet accordion with whisper-thin gold accents.
  7. Nocturnal atelier footer with minimal legal credits and gold hallmark icon.

## Motion
- May animate: Slow graceful opacity dissolves and gentle color shifts (`450ms cubic-bezier(0.16, 1, 0.3, 1)`).
- Must stay still: No rapid flashes, no bouncy spring animations, no cartoonish hover lifts.

## Component notes
- Hero: Regal Cormorant headline, uppercase Manrope sub-label tracked 0.25em, antique gold outline button.
- Navigation: Understated navigation with fine 1px border and wide-spaced links.
- Containers: Dark graphite surface with whisper-thin 1px border (`rgba(237, 230, 218, 0.08)`), 0px radius.
- Buttons: Refined rectangular outline or gold fill (`border: 1px solid var(--sd-accent); background: transparent; color: var(--sd-accent); letter-spacing: 0.15em; text-transform: uppercase;`).
- Footer: Quiet atelier hallmark with subtle coordinates.

## Banned patterns
- Bright primary colors (electric blues, hot pinks, high-saturation purples)
- The purple-to-blue gradient hero
- Inter or Geist as main font
- Emoji used as icons
- Centered headline with one blue button over three icon cards
- Rounded corners (`border-radius > 0px`)
- Heavy dropshadows or frosted glass blur
- Generic copy such as \"Transform your business\" or \"All-in-one powerhouse\"

## Self-check before finishing
1. Is the palette anchored strictly in obsidian dark (#0E0E10), champagne (#EDE6DA), and antique gold (#B89B5E)?
2. Are headings set in elegant Cormorant Garamond and body text in clean Manrope?
3. Are micro-labels formatted in tiny uppercase with wide letter-spacing (0.18em+)?
4. Are all corner radii strictly 0px with razor-thin hairline borders?
5. Are bright neon colors, emoji icons, and generic purple gradients completely absent?
