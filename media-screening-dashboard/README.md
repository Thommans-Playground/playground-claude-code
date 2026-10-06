# Media Screening Dashboard, Mission 1 rehearsal

A rehearsal build of Mission 1 ("Build the dashboard") from Operation
Media Screening, the real team exercise described in
`../project-material.pdf`. This exists so there is something to dry-run
before the real master prompt and real data arrive from the event
organizers.

## What this is not

- **Not the real master prompt.** `master-prompt-template.md` and
  `master-prompt-filled.md` are a plausible stand-in, written to match
  Mission 1's own description ("fill in the blanks, do not change any
  other line"). Swap them out the moment the real one shows up.
- **Not real data.** Every headline in `dashboard.js`'s `ARTICLES` array
  is fabricated and clearly fictional, generic, non-specific coverage,
  never alleging a real event. The dashboard says so visibly in a banner
  at the top. Replace it with real data when available.
- **Not branded.** Mission 1's own checklist doesn't ask for Julius Baer
  branding, that's Mission 5's job. This stays plain on purpose.

## What this is

A working, single-page dashboard (no build step, no dependencies) with
the four standard charts Mission 1 asks for (articles per day, sentiment
split, coverage by country, coverage by media type) plus the article
table, and click-to-filter behavior on the three categorical charts, the
same "existing filter" behavior Mission 2 assumes is already there for
the fifth chart it adds.

## Run it

```
open index.html
```

or serve it:

```
python3 -m http.server 8000 -d media-screening-dashboard
```

## Matching Mission 1's own "done when" checklist

- All blanks in the master prompt are filled, the rest is unchanged: see
  `master-prompt-filled.md`.
- The dashboard opens with all four standard charts and the article
  table: confirmed.
