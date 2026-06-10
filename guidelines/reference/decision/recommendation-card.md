# RecommendationCard Guidelines

Status: allowed

## Purpose

`RecommendationCard` explains one evidence-aware recommendation, its rationale, priority and readiness.

Use it when the user needs to understand why a recommendation exists before acting.

## Use this component when

- One recommendation needs rationale and evidence context.
- Readiness, proof or validation affects customer use.
- A recommendation may create an owned action.

## Do not use this component when

- The item is already an owned action.
- There is no visible or auditable evidence.
- A dense queue row would be more scannable.

## Prefer this component over

- Generic recommendation panels.
- Alert cards when the content is not an alert.
- Action rows when the recommendation is not yet owned.

## Never generate

- Recommendation before evidence.
- Expected outcome styled as proven value.
- AI confidence as proof or source strength.

## Required props

Show recommendation, rationale, priority, readiness and evidence context when relevant.

## Controlled values

Follow `contracts/props.contract.json#RecommendationCard`.

Use canonical source strength and proof readiness values.

## GenAI generation rules

- A recommendation is not an owned action by itself.
- Support the recommendation with evidence or source context.
- Use `proofReadiness="expected-only"` for projected value.
- Keep validation visible when customer use is sensitive.

## Common generation failures

- Invented recommendation rationale.
- Missing evidence.
- Recommendation treated as proof.
- Recommendation treated as action without owner.

## Repair prompt

Use `guidelines/evaluation/repair/missing-evidence.md` when evidence is absent.

Use `guidelines/evaluation/repair/expected-outcomes-as-proven-value.md` when value is overstated.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#RecommendationCard
contracts/props.contract.json#RecommendationCard
contracts/domain-model.contract.json#Recommendation
contracts/evidence-and-trust.contract.json
```
