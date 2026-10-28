---
name: styledeck-terminal
description: Use when building or restyling a website or UI and the user wants a terminal look. Applies this pack's fonts, colors, layout rules and banned patterns.
---
# Terminal style pack

## When to use
Use for developer CLIs, developer tooling docs, systems engineering platforms, security utilities, and retro-futuristic hacker interfaces where raw text buffers and prompt affordances create instant trust. Pick `neo-brutalist` for high-voltage color pop, or `swiss-grid` for clean enterprise documentation.

## Design tokens
Load `packs/terminal/tokens.css` or define these root variables:
- Background: `--sd-bg: #0B0F0C;` (deep CRT cathode black)
- Surface: `--sd-bg-surface: #121914;`
- Ink: `--sd-ink: #C9F2D0;` (high-readability phosphor mint, contrast 13.9:1)
- Dim Ink: `--sd-ink-muted: #6B9C74;`
- Accent: `--sd-accent: #5CFF8A;` (pure terminal phosphor green)
- Border: `--sd-border-color: #243828;`
- Radius scale: strictly `0px`
- Cursor: 1s stepped blink animation on terminal prompt blocks

## Typography
- Monospace everywhere: `'JetBrains Mono', 'Courier New', monospace` for all headings, body text, buttons, and navigation.
- Size scale: Display `clamp(2rem, 4.5vw, 3.5rem)`, Title `1.75rem`, Body `0.95rem`, Code `0.875rem`.
- Prompt styling: Prepend headings with shell prompt prefixes like `> `, `margin:~$ `, or `[01/OK]`.
- Dividers: ASCII line dividers constructed of `=`, `-`, `+`, or `#` characters instead of graphical rules.

## Layout rules
- Dense, monospaced buffer grid with terminal window chrome frames (title bar, status line).
- Alignment: Strict left alignment following monospaced column tab stops.
- Spacing: Compact 16px to 24px rhythm. Content is enclosed in framed console boxes.
- Landing page flow:
  1. Terminal top status bar (`TTY1 115200 BAUD [ONLINE]`).
  2. Hero console window showing animated command prompt and system output.
  3. Feature breakdown formatted as command outputs (`margin --inspect-features`).
  4. Testimonial displayed as a user log transcript (`cat /var/log/reviews/usr_042.log`).
  5. Pricing output rendered as an ASCII tabular ledger (`margin plan --list`).
  6. FAQ formatted as interactive man pages / command flags (`--help faq`).
  7. Terminal footer showing session uptime, buffer stats, and exit code 0.

## Motion
- May animate: Blinking block cursor (`animation: blink 1s step-end infinite;`), text typing simulation, and subtle phosphor bloom.
- Must stay still: No spring physics, no smooth carousel sliding, no scale transforms, no 3D card flips.

## Component notes
- Hero: Styled as an open terminal window with top titlebar (`root@margin:~`), command prompt, and output payload.
- Navigation: Monospace header bar with active path notation (`./home | ./docs | ./pricing`) and live status badge (`[ONLINE]`).
- Containers: Rectangular panels with 1px border (`border: 1px solid var(--sd-border-color); background: var(--sd-bg-surface);`).
- Buttons: Terminal command tags or bracketed keys (`[ RUN ]`, `[ ENTER ]`, `[ $ curl -sSL margin.sh ]`).
- Footer: System telemetry bar with uptime, ping latency, and memory footprint.

## Banned patterns
- Rounded corners (`border-radius > 0px`)
- Proportional fonts (Inter, Geist, Helvetica, Roboto, Georgia)
- The purple-to-blue gradient hero
- Soft blurred drop shadows
- Emoji used as icons (use ASCII symbols like `[x]`, `[>]`, `[*]`)
- Centered headline with one blue button over three icon cards
- Glassmorphism, blurred backdrops, and gradient cards
- Generic copy such as \"Transform your business\" or \"Scale infinitely\"

## Self-check before finishing
1. Is 100% of all typography strictly set in JetBrains Mono with 0 proportional fonts?
2. Are all corner radii strictly 0px across windows, buttons, and panels?
3. Do headings feature command prompt syntax (`>`, `$`) and ASCII line dividers?
4. Is the color palette anchored in deep cathode dark (#0B0F0C) and phosphor green (#C9F2D0, #5CFF8A)?
5. Are all interactive actions formatted with terminal bracket syntax instead of bubbly pills?
