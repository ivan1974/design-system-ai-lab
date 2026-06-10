# Button Guidelines

## Purpose

`Button` triggers an explicit user action.

It is not a status label, metric, badge or proof claim.

## Use this component when

- The user can intentionally perform an action.
- The action opens a review, creation, confirmation or navigation flow.
- The label starts with a clear verb.
- The button supports the current decision or follow-through.

## Do not use this component when

- The content is a status, priority, source strength or metadata label.
- The user cannot actually trigger an action.
- The label implies AI has already validated a decision.
- The action needs owner, due date and priority; use `ActionRow` or `CreateActionDialog` instead.

## Prefer this component over

- local buttons
- styled `<button>` elements
- clickable badges or pills

Prefer other components when the element is not an action:

```txt
status → StatusPill or Badge
priority → PriorityPill
source strength → SourceStrengthPill
owned action → ActionRow
creation flow → CreateActionDialog
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
variant when emphasis or risk of action matters
size when density matters
```

## Controlled values

```txt
variant: primary | secondary | ghost | danger
size: sm | md | lg
```

## GenAI generation rules

1. Use one primary action per decision area.
2. Use `danger` only for destructive or high-risk user actions, not risk status.
3. Use `ghost` for reset, cancel or low-emphasis actions.
4. Use `ActionRow` when the action needs owner, due date and priority.
5. Write action labels as verbs, not vague labels.

## Common generation failures

Failure: The generated screen uses a button as a status label.
Why it fails: Buttons imply user action.
Fix: Use `Badge`, `StatusPill`, `SemanticTag` or `SourceStrengthPill`.

Failure: Every action is primary.
Why it fails: The user cannot see the main next step.
Fix: Keep one primary action and downgrade the rest to `secondary` or `ghost`.

Failure: The button says the system has validated a recommendation.
Why it fails: Validation must remain visible and human-accountable.
Fix: Use review wording such as `Request expert review` or `Assign owner`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/no-local-components.md
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/missing-human-validation.md
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
