# Repair router v0.6.0

## Purpose

Use this file when a generated screen fails review.

Do not reread the full documentation.

Pick the matching repair family, read only the listed repair prompt, apply the fix, then rerun the blocking checklist.

## Repair loop

```txt
1. Identify the first blocking failure.
2. Pick one repair family from the table.
3. Read only the linked repair prompt.
4. Fix the generated screen without changing the business intent.
5. Rerun the failing test or checklist.
6. Repeat only if another blocker remains.
```

## Repair families

| Failure family | Route first | Also use when needed | Repair rule |
| --- | --- | --- | --- |
| Import failure | `invalid-props-or-local-visual-components.md` | `raw-form-controls.md`, `no-inline-styled-inputs.md` | Restore public package imports and valid props. |
| Local design system | `no-local-components.md` | `invalid-props-or-local-visual-components.md` | Replace local wrappers with package components. |
| Generic dashboard | `generic-dashboard.md` | `weak-layout.md`, `too-many-metrics.md` | Restore a decision workspace, not a dashboard. |
| Card stack | `card-saturation.md` | `poor-row-density.md`, `missing-list-container.md` | Replace equal cards with rows, sections and selected detail. |
| Missing evidence | `missing-evidence.md` | `partial-visibility-overstated.md`, `missing-human-validation.md` | Show source, scope, freshness, validation and evidence. |
| Invented evidence | `expected-outcomes-as-proven-value.md` | `ai-confidence-as-source-strength.md`, `partial-visibility-overstated.md` | Remove invented proof, telemetry, citations and overclaims. |
| Missing ownership | `actions-without-ownership.md` | `raw-form-controls.md` | Every action needs owner, due date and priority. |
| Visual drift | `overdecorated-surface.md` | `weak-typography-hierarchy.md`, `too-many-metrics.md` | Return to sober, white-first, evidence-aware UI. |
| Information overload | `too-many-metrics.md` | `card-saturation.md`, `poor-row-density.md` | Keep decision first, evidence second, detail on demand. |
| Context drift | `weak-layout.md` | `missing-detail-panel.md`, `missing-list-container.md` | Preserve the original decision, evidence, action ownership and layout after iteration. |

## Existing repair prompts in scope

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

## Do not do this

```txt
Do not rewrite the whole screen unless the layout is unrecoverable.
Do not invent new evidence during repair.
Do not upgrade source strength without a new source.
Do not remove owner, due date or priority from actions.
Do not create local components to fix layout.
Do not add decorative branding to fix visual hierarchy.
```

## Acceptance after repair

```txt
The original blocker is gone.
Public package imports remain.
No local design system is introduced.
Evidence and validation are still visible when trust matters.
Actions still include owner, due date and priority.
The screen still supports the original user decision.
```
