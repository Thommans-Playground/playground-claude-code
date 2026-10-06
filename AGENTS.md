# playground-claude-code

A reference repo for a "Claude Code best practices" session. Two things live
here:

1. **`sample-app/`**, Pulse, a small dependency-free HTML/CSS/JS ops
   dashboard. It's the hands-on playground: see `docs/04-live-exercises.md`
   for what to actually do with it.
2. **`docs/`**, the material for the session itself (agenda, annotated
   best-practice guides).

This file (`AGENTS.md`) is the shared, tool-agnostic source of truth, and
`CLAUDE.md` imports it. It is itself an example of a focused instructions
file: short, and only the things a generic model wouldn't already know or
would get wrong by guessing. See `docs/01-claude-md-best-practices.md` for
why it's shaped this way.

## Running the dashboard

No build step, no install. Either:

```
open sample-app/index.html                       # double-click equivalent
python3 -m http.server 8000 -d sample-app         # or serve it
```

## Writing style

Never use em dashes (—) in anything written for this repo (docs, READMEs,
commit messages, comments). Use a period, comma, or colon instead,
whichever reads most naturally in context.

## Conventions specific to this repo

- `sample-app/` is vanilla JS, no frameworks, no npm. Keep it that way; the
  point is zero-setup for a live audience.
- DOM text content (labels, tooltip values, series names) is set with
  `textContent`, never `innerHTML`. Chart code treats labels as untrusted
  data by habit, even though this app's data is static.
- Theme colors are CSS custom properties on `:root`, overridden under
  `prefers-color-scheme: dark` and `[data-theme="dark"]`. Add new colors as
  tokens in `styles.css`, not as hardcoded hex in `dashboard.js`.

## Known, intentional rough edges

`sample-app/dashboard.js` has a couple of planted bugs used for live
exercises (wrong-direction delta coloring, an unguarded divide-by-zero, an
over-fused render function). Don't "fix" them outside of a session. See
`docs/04-live-exercises.md` before touching that file.
