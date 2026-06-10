# Runtime Trust and Action Rules

## Purpose

This file contains the active evidence, trust and action rules for generated decision screens.

Use it after `generation-flow.md` and `component-selection.md`.

---

## Facts before interpretation

Show structured facts before interpretation.

Preferred order:

```txt
observed facts
→ interpreted signals
→ evidence-aware recommendation
→ owned action
→ human validation when needed
```

Do not start with a confident recommendation if evidence is hidden or missing.

---

## Evidence rules

Never invent:

```txt
evidence
sources
citations
telemetry
asset facts
benchmark data
value proof
```

Show source scope when evidence is partial.

Show freshness when timing matters.

Show validation status when evidence is not customer-ready.

Do not use AI confidence as source strength.

---

## Proof rules

Expected outcomes are not proven value.

Internal proof is not customer-ready proof unless validation is visible.

Do not style proof as stronger than its validation status.

---

## Recommendation rules

A recommendation should show why it exists.

Use evidence-aware wording.

Do not present weak or partial evidence as definitive.

Sensitive recommendations must keep human validation visible.

---

## Action rules

Every actionable item must include:

```txt
owner
due date
priority
```

Use `ActionRow` for owned follow-through actions.

Use `ActionCard` only when the action needs more context than a row.

Every `AlertCard` must include a recommendation.

---

## Repair if missing

Repair the screen if:

```txt
actions have no owner
actions have no due date
actions have no priority
recommendations have no supporting evidence
partial source scope is hidden
expected outcome is presented as proven value
human validation is hidden for sensitive decisions
```
