# Repair Routing

## Purpose

Use this file after `review/blocking-checklist.md` identifies a failure.

Route each failure to the most specific repair prompt.

Do not treat this file as a new guideline source. It maps existing review failures to repair prompts.

---

## Routing matrix

| Failure | Category | Repair prompt |
| --- | --- | --- |
| Local package created | `package-contract` | `repair-prompts/invalid-props-or-local-visual-components.md` |
| Internal package import | `package-contract` | `repair-prompts/invalid-props-or-local-visual-components.md` |
| Local components created | `local-components` | `repair-prompts/invalid-props-or-local-visual-components.md` |
| Unsupported prop value | `invalid-props` | `repair-prompts/invalid-props-or-local-visual-components.md` |
| Long equal card stack | `card-saturation` | `repair-prompts/card-saturation.md` |
| Generic dashboard or weak hierarchy | `weak-layout` | `repair-prompts/weak-layout.md` |
| Missing selected detail panel | `missing-detail-panel` | `repair-prompts/missing-detail-panel.md` |
| Queue rows are not grouped | `missing-list-container` | `repair-prompts/missing-list-container.md` |
| Repeated objects use generic cards | `poor-row-density` | `repair-prompts/poor-row-density.md` |
| Invented evidence or source facts | `invented-evidence` | `repair-prompts/invented-evidence.md` |
| Expected outcome shown as proven value | `expected-as-proven` | `repair-prompts/expected-outcomes-as-proven-value.md` |
| AI confidence shown as source strength | `ai-confidence-as-source-strength` | `repair-prompts/ai-confidence-as-source-strength.md` |
| Partial visibility shown as complete knowledge | `partial-visibility-overstated` | `repair-prompts/partial-visibility-overstated.md` |
| Human validation hidden for sensitive decision | `missing-human-validation` | `repair-prompts/missing-human-validation.md` |
| Action missing owner, due date or priority | `actions-without-ownership` | `repair-prompts/actions-without-ownership.md` |
| Decorative gradients or heavy visual effects | `visual-overdecoration` | `repair-prompts/overdecorated-surface.md` |
| Typography hierarchy is flat | `weak-typography` | `repair-prompts/weak-typography-hierarchy.md` |

---

## Routing rule

Use one repair prompt when the failure is specific.

Use up to three repair prompts when failures are related.

Priority order:

```txt
package contract
→ evidence and trust
→ workspace structure
→ actionability
→ visual quality
```

If package contract fails, repair package contract first.

If evidence is invented, repair evidence before visual structure.
