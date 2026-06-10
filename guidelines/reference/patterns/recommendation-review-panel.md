# RecommendationReviewPanel Guidelines

## Purpose

`RecommendationReviewPanel` frames one or more recommendations with review status, readiness, proof context and human validation.

It prevents Make from presenting sensitive recommendations as automatically approved.

## Use this component when

- Recommendations share a review scope.
- The user must compare readiness, validation or proof state.
- Human validation is required before customer use.
- Recommendations should be grouped before follow-through actions.

## Do not use this component when

- There is only a simple recommendation with no review context.
- The content is an action plan.
- The content is a generic list or dashboard section.

## Prefer this component over

- generic `Card` around recommendation lists
- local review panels
- unstructured recommendation groups

## Never generate

- customer-ready recommendations without validation
- hidden human validation requirements
- recommendations that appear auto-approved by AI
- proof readiness that contradicts the recommendation content

## Required props

```txt
children
reviewScope when the recommendations share a scope
reviewStatus when review state matters
sourceContext when source basis matters
validationStatus when review state matters
customerReadiness when customer use matters
proofReadiness when value proof matters
humanValidation when human review is required
mode when layout matters
```

## Controlled values

```txt
mode: card | section | drawer
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
customerReadiness: internal | needs-review | customer-ready | needs_review | customer_ready
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
humanValidation: not-required | recommended | required
```

Use hyphenated readiness values in new documentation. Underscore values are deprecated aliases.

## GenAI generation rules

1. Use this panel when recommendations need review context before customer use.
2. Put `RecommendationCard` inside `children`.
3. Show validation and proof readiness before actions.
4. Use `humanValidation="required"` when decisions are sensitive or evidence is partial.
5. Do not use the panel to approve recommendations automatically.

## Common generation failures

Failure: Make shows recommendations without review context.
Why it fails: The user cannot judge readiness.
Fix: Wrap them in `RecommendationReviewPanel`.

Failure: Make marks customer-ready recommendations while proof is internal-only.
Why it fails: Readiness and proof conflict.
Fix: Use `customerReadiness="needs-review"` and `proofReadiness="internal-proof"`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/missing-human-validation.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
guidelines/evaluation/repair/invented-evidence.md
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
