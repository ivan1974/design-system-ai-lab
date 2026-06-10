# RecommendationCard Guidelines

## Purpose

`RecommendationCard` explains a recommendation, its rationale, evidence basis, priority and readiness.

It helps the user decide whether the recommendation is credible, actionable and safe to use with a customer.

## Use this component when

- The screen needs a structured recommendation.
- The recommendation depends on evidence, source strength or validation.
- The user must distinguish internal, needs-review and customer-ready recommendations.
- The recommendation may lead to follow-through action.

## Do not use this component when

- The content is only an alert; use `AlertCard`.
- The content is an owned task; use `ActionRow` or `ActionCard`.
- The recommendation has no evidence or rationale.
- A richer review wrapper is needed; use `RecommendationReviewPanel` around it.

## Prefer this component over

- generic `Card` for recommendations
- local recommendation boxes
- plain text recommendations without evidence, readiness or priority

## Never generate

- a customer-ready recommendation without validation
- invented source evidence
- expected outcome as proven value
- a recommendation with no scope, rationale or evidence summary

## Required props

```txt
title
recommendation
rationale
scope
priority
evidenceSummary
readiness
sourceStrength when trust matters
validationStatus when review state matters
proofReadiness when value proof matters
expectedOutcome only as expected outcome, not proof
```

## Controlled values

```txt
priority: low | medium | high | critical
readiness: internal | needs-review | customer-ready | needs_review | customer_ready
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
sourceStrength: unknown | partial | single-source | multi-source | validated
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

Use hyphenated readiness values in new documentation. Underscore values are deprecated aliases.

## GenAI generation rules

1. Show facts and evidence before or inside the recommendation.
2. Use `readiness="needs-review"` when human validation is required.
3. Use `proofReadiness="internal-proof"` when proof is not customer-ready.
4. Keep expected outcomes separate from proven value.
5. Use `ActionRow` for owned follow-through actions.

## Common generation failures

Failure: Make writes a confident recommendation with no evidence.
Why it fails: The recommendation cannot be trusted.
Fix: Add evidence summary, source scope and source strength.

Failure: Make marks a recommendation customer-ready too early.
Why it fails: Human validation and proof readiness are not visible.
Fix: Use `needs-review` and show validation status.

Failure: Make uses a generic card.
Why it fails: The recommendation loses required structure.
Fix: Use `RecommendationCard`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/invented-evidence.md
guidelines/repair-prompts/missing-human-validation.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
```

## Related stories

```txt
src/design-system/stories/v0.5.1-critical-generation.stories.tsx
Story title: Design System / v0.5.1 / Critical Generation Coverage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```
