# AlertCard Guidelines

Status: allowed

## Purpose

`AlertCard` turns a risk, blocker, anomaly or important signal into a decision point.

It must connect the alert to what should be considered or done next.

## Use this component when

- A risk or blocker needs attention.
- The alert includes a recommendation or follow-through.
- The user must prioritize response.

## Do not use this component when

- The content is only informational.
- There is no recommendation or next step.
- The screen would become a stack of alerts.

## Prefer this component over

- Generic colored cards.
- Decorative warning panels.
- Status-only badges for complex issues.

## Never generate

- Alerts without recommendation.
- Alerts based on invented evidence.
- Color-only severity.

## Required props

Show alert title, severity or priority, and recommendation context.

Include action context when the alert is actionable.

## Controlled values

Follow `contracts/props.contract.json#AlertCard`.

Use canonical severity, tone, priority and status values only.

## GenAI generation rules

- Every alert must include a recommendation.
- Show why the alert matters.
- Do not overstate weak or partial evidence.
- Add owned action when follow-through is required.

## Common generation failures

- Alert with no recommendation.
- Too many equal alert cards.
- Color used as the only severity signal.
- Missing evidence or source context.

## Repair prompt

Use `guidelines/evaluation/repair/actions-without-ownership.md` when action ownership is missing.

Use `guidelines/evaluation/repair/missing-evidence.md` when support is missing.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#AlertCard
contracts/props.contract.json#AlertCard
contracts/domain-model.contract.json
contracts/evidence-and-trust.contract.json
```
