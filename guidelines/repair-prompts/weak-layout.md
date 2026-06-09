# Repair Prompt — Weak Layout

## Use when

Use this repair prompt when Make generates a screen with weak hierarchy.

Typical symptoms:

- the screen looks like a generic dashboard
- the main decision is unclear
- sections are unrelated
- metrics appear before context
- actions appear before the user understands why they matter
- layout is visually plausible but not decision-oriented

---

## Repair instruction

```txt
Revise the layout so it supports one clear user decision.

Start with the user decision.
Structure the screen as:
Scope and context
→ decision signals
→ list/detail review when needed
→ risks, blockers or readiness gaps
→ recommendations when relevant
→ owned actions.

Use WorkspaceShell for the main shell.
Use FilterBar to show active scope and filters.
Use MasterDetailLayout if the user must inspect a selected item.
Use SectionStack and SectionBlock to group content.
Use business patterns when they match section intent.
Use compact primitives for repeated facts and signals.
Do not add sections only to make the screen feel complete.
Do not generate a generic dashboard.
```

---

## Acceptance checks

- The title and structure support one decision.
- Context appears before signals, risks, recommendations and actions.
- The screen does not include unrelated sections.
- The layout would not fit any generic SaaS product without changes.
