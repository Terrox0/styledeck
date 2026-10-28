# styledeck

> **Pick a style, drop in one file, and your agent stops building purple-gradient websites.**

[![Styledeck Interactive Before & After Showcase](https://img.shields.io/badge/Interactive_Showcase-Open_Before_%26_After-7C3AED?style=for-the-badge&logo=html5&logoColor=white)](examples/before-after/index.html)
[![Live 8-Pack Gallery](https://img.shields.io/badge/Styledeck_Gallery-Explore_All_8_Packs-0284C7?style=for-the-badge&logo=safari&logoColor=white)](gallery/index.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/Runtime_Dependencies-0-EC4899?style=for-the-badge)](package.json)

---

### The Problem: The "Purple-Gradient Plague"

Ask any AI coding agent — *Claude Code, Cursor, Copilot, Windsurf, or Antigravity* — to *"Build a modern landing page for my app"*, and you get the exact same website every single time:

```text
┌────────────────────────────────────────────────────────────────────────┐
│  ❌ WHAT THE AGENT SHIPS BY DEFAULT (The 2024 AI Monoculture)          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│             [ ✨ AI-Powered Next-Gen Intelligent Solution ✨ ]         │
│                                                                        │
│                 Transform Your Workflow With AI                        │
│          Seamlessly scale your business with automated cloud tools.     │
│                                                                        │
│                         [ Get Started Free ➔ ]                         │
│                    (Radial purple-to-blue hero glow)                   │
│                                                                        │
│   ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐   │
│   │  (⚡) Fast       │   │  (🔒) Secure     │   │  (🚀) Scalable   │   │
│   │  Frosted glass   │   │  Frosted glass   │   │  Frosted glass   │   │
│   │  card with blur  │   │  card with blur  │   │  card with blur  │   │
│   └──────────────────┘   └──────────────────┘   └──────────────────┘   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

> [!WARNING]
> **Why this happens:** LLMs are trained on the statistical median of the web. Without explicit aesthetic constraints, agents default to the path of least resistance: **Inter font, centered headlines, generic SaaS buzzwords, floating frosted glass cards, and a radial purple-to-blue glow.**

---

### The Solution: One Directive File Injected into Your Agent

**Styledeck** fixes this at the root. By injecting an opinionated, token-backed `SKILL.md` directly into your workspace (`AGENTS.md`, Cursor rule, or Claude skill), your agent receives:

1. **Curated Google Font pairings** (e.g. *Fraunces* + *Newsreader*, *Archivo Black* + *IBM Plex Mono*).
2. **Strict design tokens** for palette, spacing rhythm, corner radii, and motion.
3. **Explicitly BANNED patterns** (no purple gradients, no emoji icons, no centered icon-card trios).
4. **A 5-point self-check audit** the agent executes before concluding its work.

<details open>
<summary><strong>🔍 Click to inspect the side-by-side interactive breakdown</strong></summary>

| Symptom | Default AI Generation | With Styledeck Pack Injected |
|:---|:---|:---|
| **Canvas & Tone** | `#0B0F19` with muddy purple-to-blue radial glow | Grounded paper `#FAF6EF`, raw manila `#FFF8E7`, or stark white `#FFFFFF` |
| **Typography** | Inter or Geist for 100% of text | Expressive pairings: *Fraunces*, *Archivo Black*, *Schibsted Grotesk*, *JetBrains Mono* |
| **Layout Rhythm** | Centered headline + 1 button over 3 icon cards | Asymmetric broadsheet columns, raw exposed grid lines, or 12-col Swiss alignment |
| **Borders & Radii** | `border-radius: 12px` + `backdrop-filter: blur(10px)` | Sharp `0px` print rules, heavy 3px ink borders with 5px hard cut shadows |
| **Copy & Tone** | *"Transform your workflow with AI-powered innovation"* | Pragmatic, hand-crafted architectural copy with zero stock filler |

👉 [**Open the Full Interactive Before & After Page**](examples/before-after/index.html) to view live side-by-side comparisons of the generic AI default vs. Styledeck's Editorial and Neo-Brutalist directions.

</details>

---

## 1. Quick Start

Run three commands to permanently un-purple your agent's designs:

```bash
# 1. Inspect the 8 curated design-direction packs
npx styledeck list

# 2. Add an opinionated style pack to your workspace (default: AGENTS.md)
npx styledeck add editorial

# 3. Prompt your agent: "Build our application landing page following the style pack in AGENTS.md"
```

<details>
<summary><strong>Targeting Cursor IDE, Claude Code, or custom paths? (Click to view flags)</strong></summary>

```bash
# Target Cursor IDE rules (.cursor/rules/styledeck-<pack>.mdc)
npx styledeck add neo-brutalist --target cursor

# Target Claude Code CLI skills (.claude/skills/styledeck-<pack>/SKILL.md)
npx styledeck add swiss-grid --target claude

# Overwrite an existing pack with --force
npx styledeck add terminal --target agents --force
```

</details>

---

## 2. The 8 Design Directions

Every pack is engineered from scratch with zero generic templates, distinct Google Fonts pairings, hand-crafted tokens, and explicit banned patterns. All 8 packs power an identical test application — **"Margin"** (a local-first marginalia notebook for researchers) — so you can evaluate styles apples-to-apples.

| Pack | Visual Signature | Font Pairing | Core Palette | One-Click Test Command | Live Demo |
|:---|:---|:---|:---|:---|:---:|
| **`editorial`** | Literary broadsheet, multi-column articles, drop caps, hairline rules, 0px radius, fades only. | *Fraunces* / *Newsreader* | `bg #FAF6EF`<br>`ink #1C1917`<br>`accent #B4432F` | `npx styledeck add editorial` | [**Launch Demo**](examples/editorial/index.html) |
| **`neo-brutalist`** | High-voltage raw grid, 3px solid black borders, hard 5px offset shadows, mechanical tactile buttons. | *Archivo Black* / *IBM Plex Mono* | `bg #FFF8E7`<br>`ink #111111`<br>`accent #FF5A36` | `npx styledeck add neo-brutalist` | [**Launch Demo**](examples/neo-brutalist/index.html) |
| **`swiss-grid`** | Strict mathematical 12-column grid, colossal section numerals, left-aligned typography, hairline dividers. | *Schibsted Grotesk* / *Hanken Grotesk* | `bg #FFFFFF`<br>`ink #0A0A0A`<br>`accent #E10600` | `npx styledeck add swiss-grid` | [**Launch Demo**](examples/swiss-grid/index.html) |
| **`terminal`** | Phosphor cathode CRT console, prompt headers (`> `, `$ `), ASCII dividers, blinking cursor, pure monospace. | *JetBrains Mono* (Both) | `bg #0B0F0C`<br>`ink #C9F2D0`<br>`accent #5CFF8A` | `npx styledeck add terminal` | [**Launch Demo**](examples/terminal/index.html) |
| **`retro-print`** | Two-ink mid-century letterpress, aged manila cardstock, dashed printer guides, misprint offset shadows. | *DM Serif Display* / *Work Sans* | `bg #F3E9D2`<br>`ink #2B2118`<br>`accent #D9482B` | `npx styledeck add retro-print` | [**Launch Demo**](examples/retro-print/index.html) |
| **`soft-organic`** | Calm earthy rhythm, rounded pebble cards (16px–28px), sun-bleached linen, warm terracotta clay accents. | *Young Serif* / *Figtree* | `bg #F4EFE6`<br>`ink #2F3A2C`<br>`accent #C7774B` | `npx styledeck add soft-organic` | [**Launch Demo**](examples/soft-organic/index.html) |
| **`quiet-luxury`** | Nocturnal obsidian canvas, spun silk champagne text, brushed antique gold rules, tiny uppercase labels. | *Cormorant Garamond* / *Manrope* | `bg #0E0E10`<br>`ink #EDE6DA`<br>`accent #B89B5E` | `npx styledeck add quiet-luxury` | [**Launch Demo**](examples/quiet-luxury/index.html) |
| **`y2k-chrome`** | Playful cyber-chrome metallic gradients, pill capsules, sticker badges, hover wobbles, WCAG AA contrast. | *Unbounded* / *Sora* | `bg #E9EEFF`<br>`ink #12123A`<br>`accent #FF3D9A` | `npx styledeck add y2k-chrome` | [**Launch Demo**](examples/y2k-chrome/index.html) |

👉 Explore the full responsive visual index in the [**Live Styledeck Gallery**](gallery/index.html).

---

## 3. How It Works

1. **Injects explicit aesthetic rules:** Styledeck injects a compact, rule-bound design pack (`SKILL.md`) directly into your project's agent instructions.
2. **Constrains agent creativity before generation:** When you prompt your coding agent to build or restyle UI, it parses the tokens, layout structures, and explicit banned-pattern list before writing code.
3. **Eliminates the AI monoculture on the first pass:** Your agent stops defaulting to generic purple gradients and Inter fonts, producing cohesive, distinctive interfaces on the first pass.

```text
┌────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
│  USER PROMPT   │ ──>  │   AGENT READS PACK      │ ──>  │ DISTINCTIVE PRODUCTION  │
│  "Build a      │      │   - Enforces Fraunces   │      │ UI ON THE FIRST PASS    │
│   landing      │      │   - BANS purple hero    │      │ Zero purple gradients.  │
│   page"        │      │   - Sets 0px borders    │      │ 100% intentional style. │
└────────────────┘      └─────────────────────────┘      └─────────────────────────┘
```

---

## 4. Supported Tools & Path Audit

| Target Tool | Flag | Installed Path | Status & Notes |
|:---|:---|:---|:---|
| **Universal Agents** | `--target agents` *(default)* | `AGENTS.md` | **Confirmed.** Appends or updates the pack between `<!-- STYLEDECK:START -->` and `<!-- STYLEDECK:END -->` markers. Supported by Google Antigravity, Cline, Windsurf, OpenCode, and Codex. |
| **Cursor IDE** | `--target cursor` | `.cursor/rules/styledeck-<pack>.mdc` | **Confirmed.** Writes modern Cursor project rules with frontmatter `description` and `globs: *`. |
| **Claude Code** | `--target claude` | `.claude/skills/styledeck-<pack>/SKILL.md` | **Partially Confirmed.** Supported in Claude Code CLI skill directories. *Note:* Claude Desktop projects currently use web project custom instructions rather than automatic `.claude/skills/` filesystem scanning; if using Claude Desktop, paste the contents of `packs/<pack>/SKILL.md` into your Project Instructions. |

---

## 5. How to Add Your Own Pack

Want to design a new aesthetic pack (e.g. *bauhaus-constructivist*, *cyberpunk-terminal*, or *nordic-minimal*)? 

Read our comprehensive [**Contributing Guide (CONTRIBUTING.md)**](docs/CONTRIBUTING.md) for step-by-step instructions on designing tokens, writing under-150-line `SKILL.md` files, creating the canonical "Margin" demo, and submitting a pull request.

---

## 6. License & Credits

- **License:** Released under the permissive [MIT License](LICENSE). Free for personal, open-source, and commercial use.
- **Typography:** All font pairings are powered by open-source typefaces from [Google Fonts](https://fonts.google.com).
- **Design Heritage & Inspirations:**
  - The International Typographic Style (Josef Müller-Brockmann, Emil Ruder) for the principles behind `swiss-grid`.
  - The historical marginalia scholia tradition for `editorial` and the "Margin" benchmark application.
  - The indie web community and brutalist architecture for `neo-brutalist`.
  - Mid-century letterpress specimen pamphlets for `retro-print`.
