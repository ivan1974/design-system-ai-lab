# ActionRow Guidelines

Status: preferred

## Purpose

`ActionRow` shows one owned follow-through action in a dense decision workspace.

Use it when the next step must be actionable, assigned and trackable.

## Use this component when

- An item requires owner, due date and priority.
- Multiple actions must be compared or reviewed.
- A recommendation, alert, proof gap or risk needs follow-through.

## Do not use this component when

- The item is only a generic CTA.
- Ownership, due date or priority is missing.
- A single emphasized action needs more context than a row.

## Prefer this component over

- Generic buttons for operational work.
- `ActionCard` in dense lists.
- Local task rows or custom CTA rows.

## Never generate

- Unowned actions.
- Vague next steps.
- Actions without due date or priority.

## Required props

Use action title, owner, due date and priority.

Show status only with controlled values.

## Controlled values

Follow `contracts/props.contract.json#ActionRow`.

The `priority` values are `low`, `medium`, `high` and `critical`.

The `status` values are `todo`, `in-progress`, `blocked`, `done` and `in_progress`.

Use `in-progress` in new GenAI output. Do not generate deprecated `in_progress`.

## GenAI generation rules

- Every action must have owner, due date and priority.
- Do not invent owner, date or priority.
- Link the action to a risk, recommendation, evidence item or proof gap.
- Prefer rows for repeated actions.

## Common generation failures

- Action used as generic CTA.
- Missing owner.
- Missing due date.
- Unsupported priority or status values.

## Repair prompt

Use `guidelines/evaluation/repair/actions-without-ownership.md` when ownership, due date or priority is missing.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#ActionRow
contracts/props.contract.json#ActionRow
contracts/domain-model.contract.json#Action
contracts/evidence-and-trust.contract.json
```
