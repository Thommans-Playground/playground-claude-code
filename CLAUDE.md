@AGENTS.md

## Claude Code specifics

- `.claude/settings.json` allowlists `node`, `python3`, `ls`, and read-only
  `git` commands, and runs `node --check` on any `.js` file under
  `sample-app/` after an edit. If you add a second JS file, the hook already
  covers it, so no change is needed.
- Project skills live in `.claude/skills/` (`grill-me`, `frontend-design`).
  The `add-metric` shortcut is a slash command in `.claude/commands/`.
