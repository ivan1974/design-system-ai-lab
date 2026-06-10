# ListContainer Guidelines

Status: preferred

## Purpose

`ListContainer` groups repeated row components in a dense, scannable structure.

Use it to avoid card stacks when the user needs to compare multiple items.

## Use this component when

- Showing repeated customers, assets, risks, recommendations, documents or actions.
- Rows need a shared title, count, empty state or hierarchy.
- The list feeds a detail panel or review workflow.

## Do not use this component when

- There is only one item.
- A business pattern already owns the section.
- A metric strip or summary card is more appropriate.

## Prefer this component over

- Grids of equal cards.
- Local list wrappers.
- Raw `ul` / `li` rows styled as a design system.

## Never generate

- Card-saturated review queues.
- Rows without clear labels.
- Lists with mixed unrelated object types.

## Required props

Use clear list title, row content and empty state when relevant.

## Controlled values

Follow `contracts/props.contract.json#ListContainer`.

The `spacing` values are `compact`, `comfortable` and `spacious`.

Do not invent `spacing` values.

## GenAI generation rules

- Pair with approved row components.
- Keep repeated objects comparable.
- Sort critical or high-priority items first when priority matters.
- Use `MasterDetailLayout` when list selection needs detail.

## Common generation failures

- Replacing rows with cards.
- Mixing unrelated items.
- Missing empty state.
- Too much metadata per row.

## Repair prompt

Use `guidelines/evaluation/repair/missing-list-container.md` when repeated objects are not grouped.

Use `guidelines/evaluation/repair/card-saturation.md` when cards replace rows.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#ListContainer
contracts/props.contract.json#ListContainer
contracts/screen-architecture.contract.json
```
