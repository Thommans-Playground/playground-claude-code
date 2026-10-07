# One-shot test result, not the rehearsal build

This folder is the output of a genuine test, not hand-authored. A fresh
agent, working outside this repository with no knowledge of
`media-screening-dashboard/`, was given exactly one input: the literal
text of `media-screening-dashboard/one-shot-prompt.md`, nothing else, no
back-and-forth. `index.html` is exactly what it produced, copied in
unmodified (originally named `media-screening-dashboard.html`).

This tests the real question: does pasting the master prompt actually
one-shot a working dashboard, the way Mission 1 is designed to work. See
the conversation summary for the verdict and what it means for the live
session.

The hand-built `media-screening-dashboard/` folder is unrelated and
untouched by this test, that one was built collaboratively, with
clarifying questions, over several turns, specifically because the real
master prompt wasn't available yet. This folder is the opposite case:
what happens with zero collaboration, just the prompt.
