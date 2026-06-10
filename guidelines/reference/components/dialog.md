# Dialog Guidelines

## Purpose

`Dialog` supports a short, focused creation, review or confirmation flow without leaving the current screen.

It is not a replacement for a full workflow or page.

## Use this component when

- The user needs to confirm, create or review one focused item.
- The flow should keep the current workspace context visible.
- A short form or confirmation is enough.

## Do not use this component when

- The task is complex or multi-step.
- The flow creates an owned action; prefer `CreateActionDialog`.
- The content is selected-item detail; use `WorkspaceDetailPanel`.
- The dialog hides required evidence, validation or ownership context.

## Prefer this component over

- local modal components
- custom overlays
- raw Radix imports

Prefer alternatives:

```txt
owned action creation → CreateActionDialog
selected item detail → WorkspaceDetailPanel
full review workflow → MasterDetailLayout
```

## Never generate

- critical confirmation without visible context
- raw form controls inside the dialog
- local modal or drawer implementations
- confirmation text that implies automatic validation

## Required props

```txt
trigger
title
description when the task needs context
children
footer when custom confirmation or cancellation is needed
```

## Controlled values

No enum-like controlled values documented for generation.

## GenAI generation rules

1. Use package form components inside dialogs.
2. Use `DialogFooter` and `DialogClose` for custom footers.
3. Prefer `CreateActionDialog` for owner, due date and priority capture.
4. Keep dialog content short.
5. Do not hide evidence or validation requirements in confirmation copy.

## Common generation failures

Failure: Make creates a raw modal with local styles.
Why it fails: It bypasses the package interaction pattern.
Fix: Use `Dialog`.

Failure: Make uses a dialog for a full workflow.
Why it fails: Dialogs should be short and focused.
Fix: Use a workspace or detail panel.

Failure: Make creates action forms without owner, due date and priority.
Why it fails: Actionability is incomplete.
Fix: Use `CreateActionDialog`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/raw-form-controls.md
guidelines/evaluation/repair/actions-without-ownership.md
guidelines/evaluation/repair/missing-human-validation.md
```

## Related stories

```txt
src/design-system/stories/components/dialog.stories.tsx
Story title: component-level Dialog usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/generation-blockers.contract.json
```
