# RenewalRiskSummary Guidelines

Status: allowed

## Purpose

`RenewalRiskSummary` shows renewal context, readiness, risk signals, proof gaps and mitigation context.

Use it to clarify what may block renewal and what must happen next.

## Use this component when

- Renewal context is part of the decision.
- Proof gaps, service signals or customer readiness affect renewal.
- The user needs mitigation context before a customer meeting.

## Do not use this component when

- The screen is not renewal-related.
- There is no evidence or readiness context.
- A simple status pill or metric is enough.

## Prefer this component over

- Generic summary cards.
- Standalone metric cards for renewal readiness.
- Local renewal dashboards.

## Never generate

- Invented renewal context.
- Expected outcome as proven renewal value.
- Customer-ready proof without validation.

## Required props

Show renewal context, readiness, proof status and mitigation context when available.

## Controlled values

Follow `contracts/props.contract.json#RenewalRiskSummary`.

The `renewalReadiness` values are `internal`, `needs-review`, `customer-ready`, `needs_review` and `customer_ready`.

The `proofReadiness` values are `not-available`, `expected-only`, `internal-proof` and `customer-ready-proof`.

The `validationStatus` values are `not-reviewed`, `internal-review-needed`, `internally-validated`, `customer-ready` and `blocked`.

Do not invent controlled values. Do not generate deprecated underscore aliases in new output.

## GenAI generation rules

- Distinguish renewal context from proof readiness.
- Show the main blocker first.
- Keep evidence and validation visible.
- Add owned mitigation action when follow-through is required.

## Common generation failures

- Generic renewal dashboard.
- Context without source support.
- Proof gap hidden in prose.
- Action missing owner, due date or priority.

## Repair prompt

Use `guidelines/evaluation/repair/missing-evidence.md` when support is missing.

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
