# Repair Prompt Router v0.5.1

## Purpose

Use this file after a Figma Make generation fails review.

It maps each failure category to the repair prompt that should be used first.

This file is written for a generative AI reviewer. Its job is routing, not explanation.

---

## Review loop

Use this operational loop:

```txt
1. Run review/blocking-checklist.md.
2. If a blocker fails, stop and route to the matching repair prompt below.
3. Re-run the blocking checklist.
4. If blockers pass, run review/workspace-v2-checklist.md.
5. Then run review/quality-checklist.md.
6. Compare with the closest golden example.
```

---

## Severity levels

```txt
blocker = must repair before accepting first draft
quality = valid draft, repair if time or score requires
acceptance = final verification before handoff
```

Do not treat quality polish as a blocker unless it breaks package contract, trust, accessibility or actionability.

---

## Repair routing table

| Failure category | Severity | Use first | Use also when needed |
| --- | ---: | --- | --- |
| Package import contract broken | blocker | `invalid-props-or-local-visual-components.md` | `no-local-components.md` |
| Local design system or local visual wrappers | blocker | `invalid-props-or-local-visual-components.md` | `no-local-components.md` |
| Raw or unsafe form controls | blocker | `raw-form-controls.md` | `no-inline-styled-inputs.md` |
| Unsupported prop or controlled value | blocker | `invalid-props-or-local-visual-components.md` | `missing-human-validation.md` when readiness or validation is involved |
| Empty or non-visible screen | blocker | `weak-layout.md` | `missing-detail-panel.md` when selected detail is absent |
| Generic dashboard drift | quality or blocker | `generic-dashboard.md` | `weak-layout.md`, `too-many-metrics.md` |
| Long equal card stack | quality or blocker | `card-saturation.md` | `poor-row-density.md` |
| Repeated objects not using rows | blocker when review list is central | `poor-row-density.md` | `missing-list-container.md` |
| Rows not grouped in package list container | blocker | `missing-list-container.md` | `poor-row-density.md` |
| Missing selected-item detail | blocker when user reviews list item | `missing-detail-panel.md` | `weak-layout.md` |
| Weak screen structure or unclear decision path | quality | `weak-layout.md` | `weak-typography-hierarchy.md` |
| Flat or confusing typography hierarchy | quality | `weak-typography-hierarchy.md` | `weak-layout.md` |
| Decorative or over-styled UI | quality | `overdecorated-surface.md` | `card-saturation.md` |
| Too many metrics or generic KPI dashboard | quality | `too-many-metrics.md` | `generic-dashboard.md` |
| Missing evidence, source, freshness or validation | blocker when trust-sensitive | `missing-evidence.md` | `partial-visibility-overstated.md`, `missing-human-validation.md` |
| AI confidence used as source strength | blocker | `ai-confidence-as-source-strength.md` | `missing-human-validation.md` |
| Partial visibility overstated | blocker | `partial-visibility-overstated.md` | `missing-evidence.md` |
| Expected outcome shown as proven value | blocker | `expected-outcomes-as-proven-value.md` | `missing-evidence.md` |
| Missing human validation for critical decisions | blocker | `missing-human-validation.md` | `missing-evidence.md` |
| Actions without owner, due date or priority | blocker | `actions-without-ownership.md` | `raw-form-controls.md` when action creation form is broken |
| Button or form used for unclear data capture | blocker | `raw-form-controls.md` | `actions-without-ownership.md` |
| Golden example drift | quality | `weak-layout.md` | route to the closest category above |
| Accessibility failure in forms or labels | blocker | `raw-form-controls.md` | `no-inline-styled-inputs.md` |

---

## Actual repair prompts in scope

The router points to these repair prompts:

```txt
ai-confidence-as-source-strength.md
actions-without-ownership.md
card-saturation.md
expected-outcomes-as-proven-value.md
generic-dashboard.md
invalid-props-or-local-visual-components.md
missing-detail-panel.md
missing-evidence.md
missing-human-validation.md
missing-list-container.md
no-inline-styled-inputs.md
no-local-components.md
overdecorated-surface.md
partial-visibility-overstated.md
poor-row-density.md
raw-form-controls.md
too-many-metrics.md
weak-layout.md
weak-typography-hierarchy.md
```

If a repair prompt is missing, do not invent a new repair instruction inside the review checklist. Create the missing repair prompt or route to the closest existing category.

---

## Acceptance after repair

A repair is complete only when:

```txt
- the original failure is gone
- package imports remain public
- no local visual system is introduced
- controlled values match contracts
- source, validation, proof and actionability are still visible
- the screen still supports the original user decision
```

---

## Final principle

A repair prompt should preserve the original business intent while restoring package contract, trust integrity and actionability.
