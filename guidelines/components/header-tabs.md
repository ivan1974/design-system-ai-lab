# HeaderTabs Guidelines

## Purpose

`HeaderTabs` switches high-level views near the page header.

It is for top-level workspace views, not detail-panel sections.

## Use this component when

- The screen has a small number of top-level views.
- The tabs change the page-level scope.
- The tabs belong visually near the header.

## Do not use this component when

- The tabs are inside selected item detail; use `DetailPanelTabs` or `Tabs`.
- The user is filtering a list; use `FilterBar`.
- The screen only has one view.

## Prefer this component over

- local tab bars in the header
- using `Button` groups as navigation
- using breadcrumbs for view switching

## Never generate

- header tabs with invented views
- many header tabs that behave like filters
- `HeaderTabs` inside `WorkspaceDetailPanel`

## Required props

```txt
tabs
value or defaultValue when controlled selection matters
```

## Controlled values

No global enum-like controlled values.

## GenAI generation rules

1. Use for page-level view switching only.
2. Keep tab labels short and mutually exclusive.
3. Use `FilterBar` for filtering, not `HeaderTabs`.
4. Use `Tabs` or `DetailPanelTabs` inside detail content.

## Common generation failures

Failure: Make uses header tabs as filters.
Why it fails: The user cannot distinguish view navigation from filtering.
Fix: Move filters to `FilterBar`.

Failure: Make places header tabs inside the detail panel.
Why it fails: HeaderTabs are page-level navigation.
Fix: Use `Tabs` or `DetailPanelTabs`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-layout.md
guidelines/repair-prompts/no-local-components.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: navigation primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
