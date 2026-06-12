# DecisionBlock Guidelines

## Purpose

`DecisionBlock` structures a signal, recommendation, rationale, evidence and optional action into one readable decision unit.

It is the v0.8 target replacement for generated alert, recommendation, risk and insight cards when the content supports a decision.

## Use this component when

- A signal needs interpretation.
- A recommendation needs rationale.
- A risk or alert needs a next-step structure.
- Evidence or action should be attached to the decision.
- The user needs to understand why a decision is proposed.

## Do not use this component when

- The content is only a metric; use `MetricBlock`.
- The content is only evidence; use `EvidenceBlock`.
- The content is only an action; use `ActionBlock` or `ActionRow`.
- The content is a list row; use `ReviewQueueRow`, `ActionRow` or `EvidenceRow`.

## Prefer this component over

```txt
AlertCard
RecommendationCard
RiskCard
InsightCard
local recommendation cards
```

## Never generate

- one card component per recommendation type
- recommendation content without rationale
- risk content without a readable signal
- decisions that hide evidence or ownership
- AI confidence as if it were source strength

## Required props

```txt
title
```

## Optional props

```txt
summary
signal
recommendation
rationale
evidence
action
tone
```

## Controlled values

```txt
tone: neutral | primary | info | success | warning | danger
```

## GenAI generation rules

1. Use `DecisionBlock` for decision-support content.
2. Separate signal, recommendation and rationale when possible.
3. Attach `EvidenceBlock` or `EvidenceRow` when the recommendation depends on proof.
4. Attach `ActionBlock`, `ActionRow` or package `Button` when action is expected.
5. Do not create local recommendation or alert cards.

## Common generation failures

Failure: Make uses `RecommendationCard` for every recommendation.
Why it fails: It keeps business-specific card proliferation.
Fix: Use `DecisionBlock`.

Failure: Make shows a recommendation without rationale.
Why it fails: The user cannot judge why the next step is proposed.
Fix: Add `rationale` and visible evidence.

Failure: Make uses color as the only risk explanation.
Why it fails: Risk needs a readable signal and rationale.
Fix: Use `signal`, `summary` and `rationale`.

## Related contracts

```txt
contracts/components.contract.json
contracts/v0.8-target-surface.contract.json
contracts/v0.8-regeneration-plan.contract.json
```
