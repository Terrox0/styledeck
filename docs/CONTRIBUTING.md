# Contributing to Styledeck

Thank you for helping stop the AI purple-gradient monoculture! Styledeck welcomes community-authored design-direction packs that give AI agents distinct, opinionated aesthetic languages.

---

## Pack Anatomy

Every Styledeck pack consists of three core components:

```text
styledeck/
  packs/<pack-name>/
    SKILL.md        # Natural-language agent directives (under 150 lines)
    tokens.css      # Standalone CSS custom properties
  examples/<pack-name>/
    index.html      # Self-contained landing page demo for "Margin"
```

---

## The 8 Golden Rules for New Packs

1. **Strictly Ban the Generic AI Tropes:**
   - No Inter or Geist as primary typography.
   - No purple-to-blue radial or diagonal hero gradients.
   - No centered headline with one blue button sitting on top of three icon cards.
   - No emoji used as interface icons (use vector SVG or text symbols).
   - No generic marketing filler copy (e.g. *"Transform your business with AI-powered next-gen workflows"*).

2. **Distinct Aesthetic Signature:**
   Your pack must feel immediately recognizable from 10 feet away. If you swap fonts or change a button color and it looks like another pack, push the extremes further.

3. **Google Fonts Only:**
   Use only freely accessible Google Fonts. Pair a distinctive display/heading typeface with a legible body typeface.

4. **WCAG AA Compliance (4.5:1 Contrast):**
   Ensure all primary and secondary text maintains at least a 4.5:1 contrast ratio against its canvas background.

5. **Pure CSS & SVG Graphics:**
   No external bitmap images requiring third-party licenses or attribution. Draw all shapes, badges, and accents using CSS properties or inline SVGs.

6. **The "Margin" Benchmark:**
   Every new pack must include an `examples/<pack-name>/index.html` demo that renders a landing page for the fictional app **"Margin"** (the local-first marginalia note tool). This guarantees apples-to-apples aesthetic comparisons across all packs.
   The demo must include all 6 canonical sections:
   - Hero
   - Three features
   - Testimonial
   - Pricing ledger/cards
   - FAQ
   - Colophon/footer

7. **Zero Runtime Dependencies:**
   Pack files and demos must run completely offline without npm packages, bundlers, or CDNs (aside from the optional Google Fonts stylesheet link).

8. **SKILL.md Template Conformity:**
   Your `SKILL.md` must stay under ~150 lines and contain the exact 8 required template sections:
   - Frontmatter (`name`, `description`)
   - `## When to use`
   - `## Design tokens`
   - `## Typography`
   - `## Layout rules`
   - `## Motion`
   - `## Component notes`
   - `## Banned patterns`
   - `## Self-check before finishing` (5 yes/no audit questions)

---

## Submission Checklist

- [ ] Created `packs/<pack-name>/tokens.css` with clean CSS custom properties.
- [ ] Created `packs/<pack-name>/SKILL.md` following the canonical 8-section template.
- [ ] Created self-contained demo `examples/<pack-name>/index.html` for "Margin".
- [ ] Verified responsive layout at 390px mobile viewport width.
- [ ] Verified color contrast >= 4.5:1 across all text elements.
- [ ] Registered pack in `bin/styledeck.js` (`PACKS` map).
- [ ] Added pack thumbnail card to `gallery/index.html`.
- [ ] Verified that `styledeck list` and `styledeck add <pack-name>` work locally.
- [ ] Confirmed zero banned patterns appear in the pack or demo.
