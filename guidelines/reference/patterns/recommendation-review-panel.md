# RecommendationReviewPanel Guidelines

Status: preferred

## Purpose

`RecommendationReviewPanel` frames sensitive recommendations with evidence, validation, readiness and follow-through.

Use it when a recommendation needs human review before customer use.

## Use this component when

- Recommendations are sensitive, customer-facing or high impact.
- Human validation, proof readiness or source strength matters.
- The user must decide whether a recommendation is ready to use.

## Do not use this component when

- A simple recommendation card is enough.
- The screen only needs a queue row.
- There is no evidence or validation context.

## Prefer this component over

- Multiple disconnected `RecommendationCard` items for one review decision.
- Local review panels.
- Hiding validation in prose.

## Never generate

- Customer-ready recommendations without validation context.
- AI confidence as source strength.
- Recommendations with hidden evidence.

## Required props

Show recommendation summary, evidence context, validation status, proof readiness and follow-through when applicable.

## Controlled values

Follow `contracts/props.contract.json#RecommendationReviewPanel`.

```txt
mode: card, section, drawer
validationStatus: not-reviewed, internal-review-needed, internally-validated, customer-ready, blocked
customerReadiness: internal, needs-review, customer-ready, needs_review, customer_ready
proofReadiness: not-available, expected-only, internal-proof, customer-ready-proof
humanValidation: not-required, recommended, required
```

Do not invent controlled values.

## GenAI generation rules

- Facts and evidence before recommendation readiness.
- Keep human validation visible for sensitive decisions.
- Keep expected outcome separate from proven value.
- Add owned actions when review work remains.

## Common generation failures

- Hiding human validation.
- Presenting expected outcomes as proof.
- Review panel without evidence.
- Too much detail at the first hierarchy level.

## Repair prompt

Use `guidelines/evaluation/repair/missing-human-validation.md` when validation is hidden.

Use `guidelines/evaluation/repair/missing-evidence.md` when support is missing.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#RecommendationReviewPanel
contracts/props.contract.json#RecommendationReviewPanel
contracts/domain-model.contract.json
contracts/evidence-and-trust.contract.json
```
