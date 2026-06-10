# MasterDetailLayout Guidelines

## Purpose

`MasterDetailLayout` organizes a review queue and the selected item detail.

It is the default structure when a generated screen must help the user compare items, inspect evidence and decide what to do next.

## Use this component when

- The screen has a list of customers, assets, recommendations, risks or actions.
- Selecting an item should reveal richer detail.
- The user needs side-by-side context and decision detail.

## Do not use this component when

- There is no repeated object or selected item.
- The screen is a simple summary page with no list/detail relationship.
- A single business pattern fully answers the user need.

## Prefer this component over

- two-column custom layouts
- repeated cards with hidden detail
- local drawers or side panels

## Never generate

- a list/detail screen without a visible list label and detail label when context is ambiguous
- an inline detail that duplicates every row as a card
- a custom master-detail layout outside the package

## Required props

```txt
list
detail
detailOpen when the detail should be visible
detailMode when choosing inline or overlay
detailWidth when the detail width matters
listLabel when the list needs accessible context
detailLabel when the detail needs accessible context
```

## Controlled values

```txt
detailMode: inline | overlay
detailWidth: sm | md | lg
```

## GenAI generation rules

1. Use `MasterDetailLayout` after `FilterBar` for queue review screens.
2. Put `ListContainer` and approved row components in `list`.
3. Put `WorkspaceDetailPanel` in `detail` for selected item detail.
4. Use `inline` for desktop review workflows unless overlay is clearly needed.
5. Keep the detail focused on the selected item; do not repeat the full list inside it.

## Common generation failures

Failure: Make generates a grid of independent cards instead of a list/detail workflow.
Why it fails: The user cannot review a queue and inspect selected evidence efficiently.
Fix: Use `MasterDetailLayout` with `ListContainer` and `WorkspaceDetailPanel`.

Failure: The detail panel contains unrelated dashboard sections.
Why it fails: The detail loses selected-item focus.
Fix: Keep the detail scoped to the selected row.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-detail-panel.md
guidelines/repair-prompts/card-saturation.md
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
