# Button Guidelines

## Purpose

`Button` triggers an explicit user action.

It is not a passive label, metric, badge, pill, tag or proof claim.

## Use this component when

- The user can intentionally perform an action.
- The action opens a review, creation, confirmation or navigation flow.
- The label starts with a clear verb.
- The button supports the current decision or follow-through.

## Do not use this component when

- The content is a status, priority, source strength or metadata label.
- The element is only passive information.
- The action needs owner, due date and priority; use `ActionRow` or `CreateActionDialog` instead.

## Prefer this component over

- local buttons
- local action elements
- clickable badges, tags or pills

Prefer other components when the element is not an action:

```txt
status -> StatusIndicator or SemanticPill
priority -> SemanticPill
source strength -> SemanticPill
metadata -> MetaLabel
category or scope -> SemanticTag
owned action -> ActionRow
creation flow -> CreateActionDialog
```

## Never generate

- `Button` as a status label
- `Button` as a risk badge
- `Button` for proof or validation claims
- multiple primary buttons competing in the same section
- local button wrappers or internal button imports

## Required props

```txt
children
variant when emphasis matters
size when density matters
```

## Controlled values

```txt
variant: primary | secondary | ghost | danger | outline
size: sm | md | lg | icon
```

## GenAI generation rules

1. Use one primary action per decision area.
2. Use `danger` only for high-risk user actions, not risk status.
3. Use `ghost` for reset, cancel or low-emphasis actions.
4. Use `outline` for secondary visible actions when `ghost` would be too subtle.
5. Use `icon` only when accessible text or surrounding label makes the action clear.
6. Use `ActionRow` when the action needs owner, due date and priority.
7. Write action labels as verbs, not vague labels.

## Common generation failures

Failure: The generated screen uses a button as a status label.
Why it fails: Buttons imply user action.
Fix: Use `Badge`, `SemanticPill`, `SemanticTag`, `StatusIndicator` or `MetaLabel`.

Failure: Every action is primary.
Why it fails: The user cannot see the main next step.
Fix: Keep one primary action and downgrade the rest to `secondary`, `outline` or `ghost`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/no-local-components.md
guidelines/evaluation/repair/actions-without-ownership.md
guidelines/evaluation/repair/missing-human-validation.md
```

## Related stories

```txt
src/design-system/stories/components/button.stories.tsx
Story status: component-level proof expected. If absent locally, cover through generated screen stories using Button actions.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```
