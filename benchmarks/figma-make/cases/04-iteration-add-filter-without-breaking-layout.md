# 04 — Iteration add filter without breaking layout

## Type

iteration

## Intent

Test whether Figma Make can add a filter after first generation without breaking the workspace architecture.

This case starts from a valid customer monitoring workspace.

## Iteration request

Add a filter for `validationStatus` so the user can focus on items requiring internal review.

Do not redesign the screen.

Do not replace the existing `WorkspaceShell`, `MasterDetailLayout`, `ListContainer` or `WorkspaceDetailPanel` structure.

## Required change

Add the filter through `FilterBar` or package controls already used by `FilterBar`.

The filter must support these values:

```txt
not-reviewed
internal-review-needed
internally-validated
customer-ready
blocked
```

## Must preserve

- Existing list/detail structure.
- Existing evidence and source scope.
- Existing action ownership.
- No raw form controls.
- No local filter row component.

## Drift to reject

- Replacing the workspace with a generic dashboard.
- Creating local filter components.
- Moving detail content into a card stack.
- Inventing new validation states.
- Removing source strength or validation status from the detail view.

## Rules tested

- context drift
- layout stability
- controlled values
- no raw form controls
- no local design system
