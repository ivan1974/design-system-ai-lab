# ActionList Guidelines

## Purpose

`ActionList` groups a small set of owned actions.

It helps the user understand what should happen next and who is accountable.

## Use this component when

- A section contains several related actions.
- Each action has owner, due date and priority.
- The action set closes a risk, validation, source, proof or customer follow-up gap.
- Actions need an optional section title, description or header action.

## Do not use this component when

- The screen needs a dense queue; use `ListContainer` with `ActionRow`.
- The items are recommendations, signals, evidence or risks.
- Actions do not have ownership and timing.
- The list is used as a generic content section.

## Prefer this component over

- local action sections
- generic lists for action sets
- card stacks with no action semantics

Prefer alternatives:

```txt
dense repeated actions → ListContainer with ActionRow
one emphasized action → ActionCard
action creation → CreateActionDialog
recommendations → RecommendationCard or RecommendationReviewPanel
```

## Never generate

- `ActionList` with non-action children
- `ActionList` without accountable action items
- generic bullet lists of next steps when action components fit
- action lists that hide owner, due date or priority

## Required props

```txt
children
title when the action set needs a section label
description when the action set needs context
actions when the section has a contextual header action
```

## Controlled values

No enum-like controlled values on `ActionList` itself.

Controlled values belong to child `ActionCard` or `ActionRow` components.

## GenAI generation rules

1. Use `ActionList` only for actions.
2. Use `ActionCard` children for emphasized action sets.
3. Use `ActionRow` in `ListContainer` for dense lists.
4. Keep ownership, timing and priority visible in each action.
5. Do not mix recommendations or evidence into an action list.

## Common generation failures

Failure: Make uses `ActionList` as a generic checklist.
Why it fails: Action lists must contain accountable actions.
Fix: Use `ActionCard` or `ActionRow` children with owner, due date and priority.

Failure: Make puts recommendations inside `ActionList`.
Why it fails: Recommendations are not owned actions.
Fix: Use `RecommendationCard` or `RecommendationReviewPanel`.

Failure: Make uses `ActionList` for too many rows.
Why it fails: Dense action review needs row structure.
Fix: Use `ListContainer` with `ActionRow`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/poor-row-density.md
guidelines/repair-prompts/card-saturation.md
```

## Related stories

```txt
src/design-system/stories/decision/action-list.stories.tsx
Story title: component-level ActionList usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```
