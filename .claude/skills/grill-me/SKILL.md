---
name: grill-me
description: Interview the user one question at a time to stress-test a plan, design, or vague request before any code is written. Use when the user says "grill me" or "poke holes", or when a feature request is underspecified.
---

# Grill me

Close the gaps in a plan before building anything. Write no code and make
no edits while grilling.

## How to run it

1. Restate the request in one sentence and name the biggest unknown.
2. Ask **one question at a time**. Never a list. Wait for the answer.
3. Give your recommended answer with each question, so the user can reply
   "yes" when it's right.
4. If the answer can be found in the repo (existing patterns, `AGENTS.md`,
   the code), look it up instead of asking.
5. Follow the answer's consequences. Prefer questions about decisions that
   unlock other decisions first: scope, data shape, edge cases, failure
   behavior, what "done" looks like.
6. Stop when the remaining questions would not change what gets built.

## Finish with a short spec

End with a brief summary the user can approve or correct:

- What will be built, in two or three sentences
- Decisions made (one line each)
- Out of scope
- How we will know it works

Then ask whether to proceed. Do not start building until they say so.

## In this repo

Good grilling targets in `sample-app/`: what a new chart should show and
for what time range, which `unit` a new KPI needs, whether `lowerIsBetter`
applies, and what should happen with empty or zero data. Respect the repo
conventions in `AGENTS.md` when recommending answers.
