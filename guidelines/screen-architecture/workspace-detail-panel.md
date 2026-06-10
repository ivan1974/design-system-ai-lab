# WorkspaceDetailPanel Guidelines

## Purpose

`WorkspaceDetailPanel` shows detail for the selected item in a decision workspace.

It is the preferred detail panel for new Make-generated list/detail screens.

## Use this component when

- A selected row needs evidence, recommendation, proof or actions.
- The screen uses `MasterDetailLayout`.
- The user must inspect detail without losing the review queue context.

## Do not use this component when

- The screen has no selected item.
- The detail is a simple static section and does not need panel affordances.
- A full business pattern already provides the needed detail.

## Prefer this component over

- `DetailPanel` for new selected-item detail
- local side panels
- local drawers
- generic `Card` containers used as detail panels

## Never generate

- `WorkspaceDetailPanel` without a clear `title`
- selected-item detail that hides evidence or actions outside the panel
- a local close button or panel header replacement

## Required props

```txt
title
children
mode when choosing inline or overlay
meta when status or trust context matters
footer when follow-through actions belong to the selected item
```

## Controlled values

```txt
mode: inline | overlay
size: md | lg | xl
```

## GenAI generation rules

1. Put `WorkspaceDetailPanel` inside `MasterDetailLayout.detail`.
2. Use `mode="inline"` for persistent side-by-side review.
3. Use `mode="overlay"` only when space or workflow requires a drawer-like detail.
4. Use `meta` for selected status, validation or readiness.
5. Use `footer` for selected-item actions, not unrelated page actions.

## Common generation failures

Failure: Make uses `DetailPanel` for new selected-item review.
Why it fails: `DetailPanel` is lower-level and use-with-care.
Fix: Use `WorkspaceDetailPanel`.

Failure: The detail panel has no selected-item title.
Why it fails: Users cannot tell what the detail belongs to.
Fix: Add a concrete selected-item `title`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-detail-panel.md
guidelines/repair-prompts/weak-layout.md
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
contracts/screen-architecture.contract.json
```
