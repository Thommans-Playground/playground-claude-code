---
description: Add a new KPI stat tile to the Pulse dashboard
---

Add a new KPI stat tile to the Pulse dashboard (`sample-app/`).

Metric name / details: $ARGUMENTS

Follow the existing pattern in `sample-app/dashboard.js`:

1. Add an entry to the `KPIS` array with `id`, `label`, `unit`
   (`count` | `currency` | `percent` | `ms`), `lowerIsBetter`, `previous`,
   `current`, and a 12-point `spark` array of plausible sample values.
2. Do not touch `renderKpis()`, `formatValue()`, or `deltaIsGood()` unless
   the new metric needs a genuinely new `unit` type — the existing render
   path should pick up a new `KPIS` entry automatically.
3. After editing, reload `sample-app/index.html` and confirm the new tile
   renders with a sensible value, a correctly colored delta (respecting
   `lowerIsBetter`), and a sparkline.

Keep the diff scoped to the data array unless something above forces more.
