# RenewalRiskSummary Guidelines

## Purpose

`RenewalRiskSummary` shows renewal context, readiness, risk signals, proof gaps and mitigation context.

It helps Make create renewal review screens that separate timing, proof, recommendation review and action needs.

## Use this component when

- Renewal timing affects customer or business decision-making.
- Value proof, recommendation review or overdue actions create renewal risk.
- The user needs account-level renewal context before inspecting detail.
- Proof readiness or validation status affects customer-facing renewal discussion.

## Do not use this component when

- The screen is not renewal-related.
- The content is only a recommendation; use `RecommendationCard`.
- The content is only value proof; use `ValueProofCard`.
- The content is an action list; use `ActionRow` inside `ListContainer`.

## Prefer this component over

- generic `Card` for renewal context
- metric-only renewal summaries
- local renewal risk widgets

## Never generate

- renewal readiness without proof or validation context when trust matters
- customer-ready renewal claims based only on internal proof
- invented renewal windows, contracts or customer objectives

## Required props

```txt
customerName
renewalWindow or renewalDate when known
renewalReadiness when readiness matters
valueProofStatus when value proof affects risk
recommendationsReviewed when recommendation review affects risk
overdueActions when action backlog affects risk
proofReadiness when proof maturity matters
validationStatus when review state matters
sourceContext when source basis matters
```

## Controlled values

```txt
renewalReadiness: internal | needs-review | customer-ready | needs_review | customer_ready
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

Use hyphenated readiness values in new documentation. Underscore values are deprecated aliases.

## GenAI generation rules

1. Use this pattern before renewal recommendations or actions.
2. Keep proof readiness visible when value proof affects renewal risk.
3. Show overdue actions when they are part of the risk.
4. Do not imply customer readiness unless validation and proof support it.
5. Use `RecommendationReviewPanel` for recommendation comparison after the summary.

## Common generation failures

Failure: Make creates a renewal dashboard with metrics only.
Why it fails: The user cannot see readiness, proof gaps or mitigation context.
Fix: Use `RenewalRiskSummary` and then detail patterns.

Failure: Make claims renewal is ready while proof is internal-only.
Why it fails: Readiness is overstated.
Fix: Use `needs-review` and show proof readiness.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
guidelines/repair-prompts/missing-human-validation.md
guidelines/repair-prompts/too-many-sections.md
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
contracts/business-patterns.contract.json
```
