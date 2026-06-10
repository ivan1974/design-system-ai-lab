# FilterBar Guidelines

## Purpose

`FilterBar` defines the review scope before the user inspects a decision workspace.

It helps Figma Make keep filters, result counts and scope actions in one controlled area.

## Use this component when

- The screen has a list, queue, portfolio or review scope.
- The user must filter by account, asset, status, source, date or readiness.
- The generated screen needs visible scope before interpretation.

## Do not use this component when

- The control is only a primary page action.
- Navigation between sections is the main need; use `Tabs`, `HeaderTabs` or `SecondaryNavigation`.
- The screen has no meaningful scope controls.

## Prefer this component over

- local filter toolbars
- custom chip bars
- ad hoc rows of buttons above a list

## Never generate

- filter controls without a visible scope or result count when the list changes
- local form controls that duplicate package form components
- hidden filtering logic that changes visible decisions without explanation

## Required props

```txt
title when scope needs a label
description when filtering affects trust or interpretation
resultCount when the list or queue is filtered
filters when the user can change scope
actions for filter-level actions only
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Put `FilterBar` in `WorkspaceShell.controls`.
2. Use it before `MasterDetailLayout` when list scope matters.
3. Keep filter labels factual and user-readable.
4. Do not use filters as hidden business logic.

## Common generation failures

Failure: Make creates a custom toolbar with local buttons and pills.
Why it fails: The screen bypasses the package vocabulary.
Fix: Use `FilterBar` and package controls.

Failure: A filtered queue has no result count or scope label.
Why it fails: The user cannot understand what subset is visible.
Fix: Add `resultCount` and a clear title.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/weak-layout.md
guidelines/evaluation/repair/no-local-components.md
```

## Related stories

```txt
src/design-system/stories/v0.5.1-critical-generation.stories.tsx
Story title: Design System / v0.5.1 / Critical Generation Coverage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
