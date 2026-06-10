# Figma Make scoring model

Score each generated screen on 100 points.

## Dimensions

| Dimension | Points | What to check |
| --- | ---: | --- |
| Package contract | 20 | Root package import, stylesheet import, no internal imports, no local design system. |
| Workspace architecture | 20 | Decision workspace structure: shell, page intent, filters, list/detail, selected detail, follow-through. |
| Component and pattern usage | 15 | Uses rows and business patterns before generic cards. Avoids card-stack drift. |
| Evidence and trust | 20 | Facts before interpretation, source limits visible, no invented evidence, no expected-as-proven value. |
| Actionability | 15 | Actions have owner, due date, priority and clear next step. Alerts include recommendations. |
| Visual sobriety and accessibility | 10 | White-first, restrained hierarchy, readable density, semantic controls, no decorative gradients. |

## Status thresholds

| Score | Status |
| ---: | --- |
| 90-100 | Excellent / accepted |
| 80-89 | Valid first draft / accepted with minor improvements |
| 65-79 | Needs repair |
| <65 | Rejected |

## Blocking failures

Set status to `Rejected` even if score is high when the output:

- imports from `design-system-ai-lab/dist` or `design-system-ai-lab/src`
- creates local `Button`, `Card`, `Badge`, `Tabs`, `Pill` or design-system folders
- invents evidence, sources or telemetry
- shows expected savings as proven value
- uses AI confidence as source strength
- omits owner, due date or priority on action rows/cards

## Reference inputs

Use these as the source of truth while scoring:

- `contracts/package.contract.json`
- `contracts/screen-architecture.contract.json`
- `contracts/business-patterns.contract.json`
- `contracts/evidence-and-trust.contract.json`
- `contracts/generation-blockers.contract.json`
- `tests/generation-rules/`
