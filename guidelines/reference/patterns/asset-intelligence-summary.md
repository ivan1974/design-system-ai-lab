# AssetIntelligenceSummary Guidelines

Status: preferred

## Purpose

`AssetIntelligenceSummary` shows asset facts, health signals, interpretation, source scope and readiness before recommendations.

Use it to separate asset health from asset intelligence.

## Use this component when

- Asset facts or signals drive a decision.
- The user needs source scope, health signal and interpretation together.
- Asset recommendations need context before review.

## Do not use this component when

- The screen only needs a single asset fact.
- The asset is not part of the decision.
- There is no source or scope context.

## Prefer this component over

- Generic asset cards.
- Metric-only health summaries.
- Local asset intelligence panels.

## Never generate

- Non-connected assets as live-monitored.
- Asset health as full asset intelligence.
- Asset intelligence without evidence or follow-through.

## Required props

Show asset identity, signal or health context, source scope and readiness when available.

## Controlled values

Follow `contracts/props.contract.json#AssetIntelligenceSummary`.

The `mode` values are `card`, `section` and `compact`.

The `readiness` values are `internal`, `needs-review`, `customer-ready`, `needs_review` and `customer_ready`.

The `sourceStrength` values are `unknown`, `partial`, `single-source`, `multi-source` and `validated`.

The `validationStatus` values are `not-reviewed`, `internal-review-needed`, `internally-validated`, `customer-ready` and `blocked`.

Do not invent controlled values. Do not generate deprecated underscore aliases in new output.

## GenAI generation rules

- Keep facts, signals and interpretation distinct.
- Show partial source scope.
- Do not invent telemetry, hierarchy or benchmark data.
- Add recommendation or action only when grounded.

## Common generation failures

- Invented asset facts.
- Live-monitoring implied for non-connected assets.
- Health signal presented as complete intelligence.
- Missing validation state.

## Repair prompt

Use `guidelines/evaluation/repair/invented-evidence.md` when asset facts are fabricated.

Use `guidelines/evaluation/repair/missing-evidence.md` when source context is missing.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#AssetIntelligenceSummary
contracts/props.contract.json#AssetIntelligenceSummary
contracts/domain-model.contract.json#AssetIntelligence
contracts/evidence-and-trust.contract.json
```
