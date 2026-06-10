# RenewalRiskSummary Guidelines

Status: allowed

## Purpose

`RenewalRiskSummary` shows renewal context, readiness, risk signals, proof gaps and mitigation context.

Use it to clarify what may block renewal and what must happen next.

## Use this component when

- Renewal risk is part of the decision.
- Proof gaps, service risks or customer readiness affect renewal.
- The user needs mitigation context before a customer meeting.

## Do not use this component when

- The screen is not renewal-related.
- There is no evidence or readiness context.
- A simple status pill or metric is enough.

## Prefer this component over

- Generic risk cards.
- Standalone metric cards for renewal readiness.
- Local renewal dashboards.

## Never generate

- Invented renewal risk.
- Expected outcome as proven renewal value.
- Customer-ready proof without validation.

## Required props

Show renewal context, risk level, readiness, proof status and mitigation context when available.

## Controlled values

Follow `contracts/props.contract.json#RenewalRiskSummary`.

Use canonical risk, proof readiness, validation and customer readiness values.

## GenAI generation rules

- Distinguish renewal risk from proof readiness.
- Show the main blocker first.
- Keep evidence and validation visible.
- Add owned mitigation action when follow-through is required.

## Common generation failures

- Generic renewal dashboard.
- Risk without source context.
- Proof gap hidden in prose.
- Action missing owner, due date or priority.

## Repair prompt

Use `guidelines/evaluation/repair/missing-evidence.md` when risk evidence is missing.

Use `guidelines/evaluation/repair/actions-without-ownership.md` when mitigation action is unowned.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#RenewalRiskSummary
contracts/props.contract.json#RenewalRiskSummary
contracts/domain-model.contract.json
contracts/evidence-and-trust.contract.json
```
