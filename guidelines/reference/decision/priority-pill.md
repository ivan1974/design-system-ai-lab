# PriorityPill Guidelines

## Purpose

`PriorityPill` shows action priority as a compact label.

It does not define an action by itself.

## Use this component when

- Priority must be visible inside an action, queue row or summary.
- The priority value is already known and controlled.
- The pill supports scanning but does not replace action context.

## Do not use this component when

- The user needs a full accountable action; use `ActionRow` or `ActionCard`.
- The value is source strength; use `SourceStrengthPill`.
- The value is generic status; use `StatusPill`.
- The value is lightweight metadata; use `SemanticTag` or `Badge`.

## Prefer this component over

- generic `Badge` for action priority
- local priority pills
- raw text priority labels

## Never generate

- `PriorityPill` as a substitute for owner, due date or action context
- priority values outside the action priority contract
- priority pills for source strength, proof readiness or validation status

## Required props

```txt
priority
```

## Controlled values

```txt
priority: low | medium | high | critical
```

## GenAI generation rules

1. Use `PriorityPill` only for action priority.
2. Use inside `ActionCard`, `ActionRow`, `ReviewQueueRow` or decision summaries.
3. Do not use priority alone as follow-through.
4. Use `ActionRow` or `ActionCard` when the user must act.

## Common generation failures

Failure: Make uses only `PriorityPill` to show a next step.
Why it fails: Priority does not provide owner, timing or action title.
Fix: Use `ActionRow` or `ActionCard`.

Failure: Make uses priority for risk severity.
Why it fails: Risk level and action priority are different concepts.
Fix: Use `AlertCard.severity` or a risk pattern for risk level.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/actions-without-ownership.md
guidelines/evaluation/repair/missing-evidence.md
```

## Related stories

```txt
src/design-system/stories/decision/priority-pill.stories.tsx
Story status: component-level proof expected. If absent locally, covered through ActionCard and ActionRow stories.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
