# Table Guidelines

## Purpose

`Table` displays dense, comparable operational data when rows and columns are the clearest structure.

It is a low-level core primitive for structured comparison. It is not a dashboard card grid, a decision row, or a screen-specific inventory pattern.

## Use this component when

- Users compare repeated objects across stable columns.
- The screen needs operational density.
- Alignment matters more than card emphasis.
- A screen-specific list component does not exist yet.
- The content can remain concise at row level.

## Do not use this component when

- The screen contract requires a screen-specific list component.
- The layout is a generic dashboard.
- The data is better represented as a decision row or business pattern.
- Every row needs expanded evidence by default.
- The user needs card-based storytelling rather than comparison.

## Prefer this component over

- local table components
- raw `table` markup in generated examples
- card grids for operational inventories
- repeated generic `Card` rows

Prefer other structures when they fit:

```txt
installed base inventory -> InstalledBaseList or AssetInventoryRow
review queues -> ReviewQueueRow
repeated action rows -> ActionRow
supporting evidence -> EvidenceRow or EvidenceBlock
selected object detail -> WorkspaceDetailPanel
```

## Never generate

- local table primitives
- imports from `components/ui/table`
- table-as-dashboard layouts
- dense tables without labels or accessible headers
- expanded evidence in every row by default

## Required props

```txt
children
density when operational density matters
```

## Controlled values

```txt
density: compact | default
```

## GenAI generation rules

1. Prefer `density="compact"` for operational inventories.
2. Keep row content concise.
3. Move explanation, evidence, documents and history into panels or secondary structures.
4. Use stable columns; do not invent columns to fill space.
5. Preserve visible object identity in the first meaningful column.
6. Do not replace contractual screen lists with generic tables.

## Common generation failures

Failure: Make replaces an operational list with a card grid.
Why it fails: Card grids reduce comparison and make operational scanning harder.
Fix: Use `Table`, `ListContainer`, or the contracted screen list pattern.

Failure: Make puts detailed evidence into every table row.
Why it fails: It creates information overload and weakens scanability.
Fix: Keep rows concise and move evidence to `WorkspaceDetailPanel`, `EvidenceRow` or `EvidenceBlock`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/card-saturation.md
guidelines/evaluation/repair/weak-layout.md
guidelines/evaluation/repair/no-local-components.md
```

## Related stories

```txt
src/design-system/stories/components/table.stories.tsx
Story status: component-level proof expected. If absent locally, cover through generated screen stories using Table.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/visual-rules.contract.json
contracts/screen-architecture.contract.json
```
