# CreateActionDialog Guidelines

## Purpose

`CreateActionDialog` lets the user create a structured follow-up action.

It is the standard business pattern for action creation.

## Business intent

Move from insight, alert, recommendation or proof gap to owned follow-through.

## User decision supported

```txt
What action should be created, who owns it, when is it due and how urgent is it?
```

## Input facts required

Required for a valid action:

```txt
title
owner
dueDate
priority
```

Optional context fields:

```txt
context
assetContext
sourceContext
validationStatus
proofContext
note
```

## Evidence and trust requirements

- Keep source context visible when the action depends on source quality.
- Keep validation context visible when the action depends on review state.
- Keep proof context visible when the action closes a proof gap.
- Do not imply that the dialog validates the action automatically.

## Actionability requirements

Every created action must have:

```txt
owner
dueDate
priority
```

Use context fields when the action depends on asset, source, validation or proof scope.

## Use this component when

- The user needs to create a follow-up, mitigation or service action.
- The action should become an `ActionCard` or `ActionRow` after creation.
- The standard action creation fields fit the task.
- The user should not have to rebuild the form manually.

## Do not use this component when

- The user only needs to view an existing action; use `ActionCard` or `ActionRow`.
- The user is reviewing a recommendation; use `RecommendationReviewPanel`.
- The task requires a complex workflow page.
- The form does not produce an owned action.

## Prefer this component over

- manually rebuilding action creation with `Dialog`, `Field`, `Input`, `Select` and `Textarea`
- local action forms
- generic `Dialog` for standard action creation

## Never generate

- action creation without owner, due date or priority
- custom action forms when `CreateActionDialog` fits
- dialog copy that implies automatic approval or validation
- action fields unrelated to the current decision context

## Required props

```txt
trigger when the default Create action button is not enough
title when the dialog needs a specific action context
description when the user needs scope or trust context
showContextFields when asset, source, validation or proof context matters
defaultValues when creating from an existing signal, alert or recommendation
onSubmit when the generated example needs behavior
```

## Controlled values

```txt
priority: low | medium | high | critical
```

`CreateActionDialog` uses package form components internally.

## Mode guidance

No display modes.

Use this pattern as a dialog-based action creation flow.

## GenAI generation rules

1. Prefer `CreateActionDialog` for standard action creation.
2. Preserve owner, due date and priority.
3. Use `showContextFields` when follow-through depends on source, validation, proof or asset context.
4. Use `ActionRow` or `ActionCard` after the action exists.
5. Do not rebuild this pattern manually unless the standard flow does not fit.

## Common generation failures

Failure: Make rebuilds the action form manually.
Why it fails: Standard action creation already has a package pattern.
Fix: Use `CreateActionDialog`.

Failure: Make creates an action without owner or due date.
Why it fails: Follow-through is not accountable.
Fix: Require owner and due date.

Failure: Make hides validation context.
Why it fails: Users need to know whether review is required.
Fix: Enable context fields or keep validation visible nearby.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/raw-form-controls.md
guidelines/repair-prompts/missing-human-validation.md
```

## Related lower-level components

```txt
Dialog
DialogFooter
DialogClose
Button
Field
Input
Select
Textarea
```

## Related stories

```txt
src/design-system/stories/patterns/create-action-dialog.stories.tsx
Story title: component-level CreateActionDialog usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
contracts/business-patterns.contract.json
```
