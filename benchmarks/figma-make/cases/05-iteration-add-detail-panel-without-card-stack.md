# 05 — Iteration add detail panel without card stack

## Type

iteration

## Intent

Test whether Figma Make can add selected-item detail without turning the screen into a stack of cards.

This case starts from a valid queue-based workspace.

## Iteration request

Add a selected detail area for the highest priority item.

Use `WorkspaceDetailPanel` inside `MasterDetailLayout`.

Use package components only from `design-system-ai-lab`.

Do not create a grid of detail cards.

## Required change

The detail area must show:

- selected item title
- reason it needs attention
- evidence summary
- source strength
- validation status
- one owned action with owner, due date and priority

## Must preserve

- `ListContainer` for repeated items.
- Row-based queue structure.
- Source scope and validation context.
- Existing page heading and filter bar.

## Drift to reject

- Card stack instead of detail panel.
- Local `DetailCard`, `InfoPanel` or similar wrapper.
- Detail that does not match the selected row.
- Evidence removed from the selected item.
- Action without owner, due date or priority.

## Rules tested

- master/detail stability
- rows and density
- selected detail context
- evidence and trust
- actionability
