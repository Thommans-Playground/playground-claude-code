---
name: frontend-design
description: Build or restyle UI in sample-app/ with a distinctive, deliberate look instead of generic defaults, while following this repo's vanilla JS and CSS token rules. Use when adding or changing dashboard layout, styling, or components.
---

# Frontend design for Pulse

Aim for a clear point of view, not template output. Decide the direction
first (dense and technical, calm and spacious, and so on), then apply it
consistently.

## Design guidance

- **Hierarchy:** one obvious focal point per region. Size and weight carry
  importance, not decoration.
- **Typography:** a small scale (about four sizes), tabular numerals for
  metrics, tight line length for labels. Avoid default-looking stacks when
  a system font pairing would read better.
- **Spacing:** pick a base unit and stay on its multiples. Generous space
  between groups, tight within them.
- **Color:** restrained. One accent, neutral surfaces, and status colors
  used only for status. Never rely on color alone: pair it with a label,
  sign, or icon.
- **Motion:** short and purposeful, and respect `prefers-reduced-motion`.
- **States:** design empty, zero, loading, and error states, not just the
  happy path.

## Repo constraints (from AGENTS.md)

- Vanilla HTML/CSS/JS. No frameworks, no npm, no build step.
- Colors are CSS custom properties on `:root` in `styles.css`, overridden
  under `prefers-color-scheme: dark` and `[data-theme="dark"]`. Add new
  colors as tokens. Never hardcode hex in `dashboard.js`.
- Set DOM text with `textContent`, never `innerHTML`.
- Do not "fix" the planted bugs in `dashboard.js` outside a live session.
  See `docs/04-live-exercises.md`.
- No em dashes in comments or copy.

## Before you finish

1. Open `sample-app/index.html` and check it in light and dark.
2. Check a narrow viewport for overflow.
3. Confirm no new hardcoded hex in `dashboard.js` and no `innerHTML`.
4. Confirm `node --check sample-app/dashboard.js` passes (the hook runs it
   on edit).
5. Keep the diff scoped to what was asked.
