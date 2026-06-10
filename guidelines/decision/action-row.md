# ActionRow Guidelines

## Purpose

`ActionRow` shows an owned follow-through action in a dense decision workspace.

It is the preferred component for repeated actions because it keeps ownership, due date and priority visible.

## Use this component when

- The screen shows a list of actions.
- The action is attached to a risk, alert, evidence gap, recommendation or proof gap.
- The user must know who owns the next step and when it is due.

## Do not use this component when

- The content is only a recommendation with no owner.
- The item is an alert, signal or proof point.
- The action cannot yet be owned, dated or prioritized.

## Prefer this component over

- `ActionCard` for dense repeated actions
- local task rows
- plain text lists of next steps

## Never generate

- an `ActionRow` without `owner`
- an `ActionRow` without `dueDate`
- an `ActionRow` without `priority`
- AI-approved actions without human accountability

## Required props

```txt
title
owner
dueDate
priority
status when action state matters
context when the action depends on evidence, proof or validation
```

## Controlled values

```txt
priority: low | medium | high | critical
status: todo | in-progress | blocked | done | in_progress
```

Use `in-progress` for new documentation. `in_progress` remains a deprecated alias accepted by source types.

## GenAI generation rules

1. Use `ActionRow` inside `ListContainer` for repeated action lists.
2. Every generated action must expose owner, due date and priority.
3. Use `context` to explain why the action exists.
4. Do not present expected outcomes as completed value proof.
5. Keep action ownership human-visible.

## Common generation failures

Failure: Make writes `Follow up with customer` as plain text.
Why it fails: The action has no ownership, date or priority.
Fix: Use `ActionRow` with required props.

Failure: Make uses `done` to imply value was proven.
Why it fails: Action completion is not customer-ready proof.
Fix: Show proof readiness separately with `ValueProofCard`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
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
contracts/generation-blockers.contract.json
```
