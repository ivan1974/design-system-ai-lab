# ActionBlock Guidelines

## Purpose

`ActionBlock` highlights one important action with ownership, due date, priority, status and optional context.

It is the v0.8 target replacement for generated action cards when a single action needs emphasis.

## Use this component when

- One action must be visible and accountable.
- The action needs owner, due date or priority context.
- The action belongs to a decision or evidence block.
- The user needs to understand who should do what next.

## Do not use this component when

- The action is one item in a dense list; use `ActionRow`.
- The content is only a button; use `Button`.
- The content is a recommendation without ownership; use `DecisionBlock`.
- The content is evidence or proof; use `EvidenceBlock`.

## Prefer this component over

```txt
ActionCard
local action panels
button-only next steps without ownership
```

## Never generate

- actions without an owner when ownership is known
- actions without a clear next step
- local action cards
- action blocks that hide due date or priority when critical
- vague CTAs disconnected from the decision context

## Required props

```txt
title
owner
```

## Optional props

```txt
description
dueDate
priority
status
context
action
```

## GenAI generation rules

1. Use `ActionBlock` for one emphasized accountable action.
2. Use `ActionRow` for repeated or dense actions.
3. Include owner when the action is assigned.
4. Include due date, priority and status when they affect execution.
5. Do not create local action cards.

## Common generation failures

Failure: Make creates `ActionCard`.
Why it fails: It keeps the legacy card grammar.
Fix: Use `ActionBlock` for emphasized action or `ActionRow` for lists.

Failure: Make creates a button without ownership.
Why it fails: The user sees an action but not who is responsible.
Fix: Add owner, due date or status context.

Failure: Make mixes recommendation and action in one vague block.
Why it fails: Decision and execution are different cognitive steps.
Fix: Use `DecisionBlock` for rationale and `ActionBlock` for execution.

## Related contracts

```txt
contracts/components.contract.json
contracts/v0.8-target-surface.contract.json
contracts/v0.8-regeneration-plan.contract.json
```
