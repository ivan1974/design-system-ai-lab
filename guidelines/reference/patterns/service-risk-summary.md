# ServiceRiskSummary Guidelines

Status: allowed

## Purpose

`ServiceRiskSummary` summarizes service risk before the user reviews alerts, recommendations or actions.

Use it to show what requires attention and why it matters operationally.

## Use this component when

- Service risk is the main decision context.
- The user needs risk level, evidence and recommended follow-through.
- A summary should precede detailed alerts or actions.

## Do not use this component when

- There is no risk signal.
- The content is only generic service status.
- A single alert card is clearer.

## Prefer this component over

- Generic dashboard cards.
- Metric-only service health summaries.
- Local risk panels.

## Never generate

- Risk without evidence.
- Visual treatment that overstates weak evidence.
- Actions without owner, due date or priority.

## Required props

Show risk context, severity or priority, evidence and next action when actionable.

## Controlled values

Follow `contracts/props.contract.json#ServiceRiskSummary`.

Use canonical risk level, priority, validation and source strength values.

## GenAI generation rules

- Put decision-critical risk first.
- Show evidence and source context.
- Add recommendation before action when needed.
- Keep follow-through owned.

## Common generation failures

- Generic service dashboard.
- Risk presented as certainty without source context.
- Too many equal metrics.
- Missing action ownership.

## Repair prompt

Use `guidelines/evaluation/repair/missing-evidence.md` when source support is missing.

Use `guidelines/evaluation/repair/actions-without-ownership.md` when follow-through is unowned.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#ServiceRiskSummary
contracts/props.contract.json#ServiceRiskSummary
contracts/domain-model.contract.json
contracts/evidence-and-trust.contract.json
```
