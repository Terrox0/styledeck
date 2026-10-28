---
name: styledeck-editorial
description: Use when building or restyling a website or UI and the user wants an editorial look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Editorial style pack

## When to use
Use for long-form essays, literary publishing, thoughtful software documentation, journals, and refined intellectual tools where typography carries the experience. Pick `swiss-grid` if your project demands cold asymmetric data density, or `quiet-luxury` if you need a dark cinematic backdrop.

## Design tokens
Load `packs/editorial/tokens.css` or define these root variables:
- Background: `--sd-bg: #FAF6EF;` (warm rag paper)
- Surface: `--sd-bg-surface: #F3EBDD;`
- Ink: `--sd-ink: #1C1917;` (dense carbon, contrast 13.5:1)
- Subtle Ink: `--sd-ink-muted: #57534E;`
- Accent: `--sd-accent: #B4432F;` (terracotta vermilion)
- Rules: `--sd-rule: #D6CEBE;` / `--sd-rule-strong: #1C1917;`
- Radius scale: strictly `0px` everywhere
- Spacing: 4px base (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px)

## Typography
- Headings: `'Fraunces', Georgia, serif` (optical sizes auto, weight 400 to 700, tight line height 1.05-1.15).
- Body: `'Newsreader', Garamond, Georgia, serif` (weight 400, italic 400, line height 1.65, letter-spacing -0.01em).
- Drop caps: First letter of opening paragraph styled at 3.5rem, float left, line-height 0.85, margin 0 0.5rem 0 0, font-family Fraunces.
- Section titles: Small uppercase or italic serif with decorative hairline rules (`border-bottom: 1px solid var(--sd-rule)`).

## Layout rules
- Multi-column broadsheet flow: 2 to 3 editorial columns on desktop with vertical hairline borders (`border-left: 1px solid var(--sd-rule)`).
- Alignment: Asymmetrical left alignment with generous gutter margins (min 2rem to 4rem). Text columns capped at 68ch max-width for readability.
- Rhythm: Heavy top margins on major heads (48px-64px), tight distance to sub-copy (12px).
- Landing page flow:
  1. Broadsheet masthead (date, issue/edition, title rule).
  2. Asymmetric headline hero with lead paragraph and drop cap.
  3. Feature columns separated by thin vertical dividers.
  4. Full-bleed editorial pull-quote testimonial.
  5. Clean comparison ledger table for pricing.
  6. Two-column Q&A gazette.
  7. Colophon footer.

## Motion
- May animate: Subtle opacity dissolves (`opacity: 0` to `1` over 200ms-300ms ease) on page load or tab switches.
- Must stay still: No bouncing buttons, no slide-ins, no parallax scale, no sticky scroll hijacking. Everything must feel printed on paper.

## Component notes
- Hero: Left-aligned oversized serif statement; deck/subhead in italics; understated text link or border button. Never center-align.
- Navigation: Text-only masthead with date stamp, folio number, and serif section links separated by middots (`·`).
- Lists & Items: Border-bottom ruled rows with publication dates and small caps tags. Never wrap items in rounded cards or floating box-shadows.
- Buttons: Underlined text links or crisp rectangular outlined boxes (`border: 1px solid var(--sd-ink); border-radius: 0; padding: 10px 20px; background: transparent;`).
- Footer: Typeset as a traditional book colophon with editorial credits, set in italic Newsreader.

## Banned patterns
- Rounded corners (`border-radius > 0px`)
- Cards with box shadows or elevated cards
- Floating pill navigation bars
- The purple-to-blue gradient hero
- Inter, Roboto, or Geist as primary typography
- Centered headline with one blue button over three icon cards
- Emoji used as icons
- Glassmorphism, backdrop filters, and neon glow
- Generic copy such as "Transform your business" or "Supercharge your workflow"

## Self-check before finishing
1. Are all corner radii strictly 0px across every button, container, and input?
2. Are headers set in Fraunces and body paragraphs in Newsreader with appropriate line height?
3. Did you use thin hairline dividers instead of elevated drop-shadow cards?
4. Is the color palette anchored by warm paper (#FAF6EF), charcoal ink (#1C1917), and terracotta (#B4432F)?
5. Is the layout free from generic purple gradients and floating icon bubbles?
