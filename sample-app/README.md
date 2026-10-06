# Pulse: ops dashboard

A deliberately small, dependency-free HTML/CSS/JS dashboard, used as the
hands-on playground for the Claude Code best-practices session. No build
step, no npm install, open `index.html` directly in a browser, or serve it:

```
python3 -m http.server 8000 --directory sample-app
```

It shows a KPI row (active users, MRR, error rate, response time), a daily
active users trend line, a signups-by-channel bar chart, and a breakdown
table, plus a light/dark toggle.

See `../docs/04-live-exercises.md` for what to actually *do* with this code
during the session, it has a couple of intentional rough edges.
