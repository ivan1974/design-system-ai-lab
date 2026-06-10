# CustomerReviewReadinessCard Guidelines

## Purpose

`CustomerReviewReadinessCard` summarizes whether a customer-facing review is ready.

It is a business pattern for review preparation, not a proof card, action plan or risk list.

## Business intent

Help the user decide whether a customer discussion can safely move forward or still needs internal preparation.

## User decision supported

```txt
Is this customer-facing review ready, or does it need more proof, validation, actions or context?
```

## Input facts required

Use only supplied review facts:

```txt
reviewName
customerName
reviewDate
customerReadiness
proofReadiness
recommendationReadiness
riskVisibility
actionReadiness
validationStatus
sourceContext
badges
items
```

## Evidence and trust requirements

- Show `customerReadiness` when output may be used externally.
- Show `proofReadiness` when value proof affects the review.
- Show `validationStatus` when internal review is required.
- Do not claim readiness without source and validation context.

## Actionability requirements

This pattern should reveal readiness gaps.

Use `ActionRow`, `ActionCard` or `CreateActionDialog` for the actions that close those gaps.

## Use this component when

- The user is preparing a customer-facing discussion.
- Proof, recommendations, risks or actions need review before sharing.
- The screen must distinguish internal preparation from customer-ready material.
- A business pattern is better than a generic status summary.

## Do not use this component when

- The user only needs customer context; use `CustomerStatusCard`.
- The user needs value proof detail; use `ValueProofCard`.
- The user needs recommendation rationale; use `RecommendationReviewPanel`.
- The user needs an action plan; use action components.

## Prefer this component over

- `StatusSummary` for customer-review readiness
- generic cards for readiness checks
- local review readiness widgets

## Never generate

- customer-ready wording without readiness values
- readiness claims without validation context
- actions hidden inside readiness labels
- local readiness dashboards when this pattern fits

## Required props

```txt
customerReadiness
proofReadiness when proof matters
validationStatus when review state matters
items when multiple readiness areas are shown
badges when high-level readiness labels matter
```

## Controlled values

```txt
customerReadiness: internal | needs-review | customer-ready | needs_review | customer_ready
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

Prefer hyphenated values in new generated output.

## Mode guidance

No display modes.

Use as a readiness summary pattern.

## GenAI generation rules

1. Use this pattern when customer-facing readiness is the decision.
2. Keep readiness, proof, recommendations, risks and actions distinct.
3. Use action components for follow-through.
4. Do not replace this pattern with generic status summaries when review readiness is central.
5. Do not infer readiness from positive tone alone.

## Common generation failures

Failure: Make uses generic status badges for review readiness.
Why it fails: Readiness requires proof and validation context.
Fix: Use `CustomerReviewReadinessCard`.

Failure: Make presents internal content as ready for customer use.
Why it fails: Readiness must be explicit.
Fix: Use controlled readiness and validation values.

Failure: Make hides required actions inside readiness text.
Why it fails: Follow-through needs ownership.
Fix: Use `ActionRow` or `CreateActionDialog`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-human-validation.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
guidelines/repair-prompts/actions-without-ownership.md
```

## Related lower-level components

```txt
StatusSummary
SemanticTag
KeyValueList
ActionRow
ValueProofCard
RecommendationReviewPanel
```

## Related stories

```txt
src/design-system/stories/patterns/customer-review-readiness-card.stories.tsx
Story title: component-level CustomerReviewReadinessCard usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/business-patterns.contract.json
```
