# ActionCard Guidelines

## Purpose

`ActionCard` shows one emphasized owned action.

It is for a specific next step with owner, due date and priority.

## Use this component when

- One action needs emphasis.
- The action closes a risk, proof, source, validation or customer follow-up gap.
- The action needs visible ownership and due date.
- The action belongs after a recommendation, alert or business summary.

## Do not use this component when

- The screen has many repeated actions; use `ActionRow` inside `ListContainer`.
- The content is only a recommendation; use `RecommendationCard`.
- The content is only a status or priority label.
- Ownership, due date or priority are unknown.

## Prefer this component over

- generic `Card` for emphasized actions
- local task cards
- plain text action notes

Prefer alternatives:

```txt
repeated actions → ActionRow
standard action creation → CreateActionDialog
recommendation → RecommendationCard
status → StatusPill
priority only → PriorityPill
```

## Never generate

- `ActionCard` without owner
- `ActionCard` without due date
- `ActionCard` without priority
- `ActionCard` as a proof claim
- AI-approved actions without human accountability

## Required props

```txt
title
owner
dueDate
priority
status when action state matters
context when the action depends on evidence or recommendation
validationStatus when review state matters
proofReadiness when value proof affects the action
```

## Controlled values

```txt
priority: low | medium | high | critical
status: todo | in-progress | blocked | done | in_progress
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
```

Use `in-progress` in new documentation. `in_progress` remains a deprecated alias accepted by source types.

## GenAI generation rules

1. Use `ActionCard` for one emphasized action only.
2. Use `ActionRow` for dense action lists.
3. Keep owner, due date and priority visible.
4. Use validation and proof fields when the action depends on review or proof maturity.
5. Do not use action completion as proof of customer value.

## Common generation failures

Failure: Make uses `ActionCard` for a list of many tasks.
Why it fails: Repeated actions need density and comparability.
Fix: Use `ActionRow` inside `ListContainer`.

Failure: Make shows an action without owner or due date.
Why it fails: The action is not accountable.
Fix: Add owner and due date or do not generate an action component.

Failure: Make uses `PriorityPill` instead of an action.
Why it fails: Priority alone does not define follow-through.
Fix: Use `ActionCard` or `ActionRow` with full action props.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
guidelines/repair-prompts/card-saturation.md
```

## Related stories

```txt
src/design-system/stories/decision/action-card.stories.tsx
Story title: component-level ActionCard usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```
