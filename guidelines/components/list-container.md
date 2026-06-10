# ListContainer Guidelines

## Purpose

`ListContainer` groups repeated row components in a controlled, dense and scannable structure.

It prevents Figma Make from turning every repeated object into a separate card.

## Use this component when

- The screen has repeated review objects.
- The user needs to scan customers, assets, risks, recommendations, evidence or actions.
- Rows should share one visual container and consistent separators.

## Do not use this component when

- The content is a single summary or one-off emphasis block.
- The section needs a business pattern instead of row composition.
- The content is a form layout.

## Prefer this component over

- card stacks for repeated objects
- local list wrappers
- custom row containers

## Never generate

- repeated queue rows outside a `ListContainer`
- local separators, custom list borders or custom row shells
- a `ListContainer` filled with unrelated card components

## Required props

```txt
children
spacing when divided is false and spacing must be explicit
divided when row separators are required or not required
```

## Controlled values

```txt
spacing: compact | comfortable | spacious
```

## GenAI generation rules

1. Use `ListContainer` around approved row components.
2. Use it for `ReviewQueueRow`, `EvidenceRow`, `ActionRow` and queue rows.
3. Keep row content dense and comparable.
4. Use sections or business patterns around the list when context is needed.

## Common generation failures

Failure: Make generates a stack of cards for every customer, asset or action.
Why it fails: The screen becomes visually saturated and hard to scan.
Fix: Use `ListContainer` with approved row components.

Failure: Make creates custom list styling with local borders.
Why it fails: It recreates package layout primitives.
Fix: Use `ListContainer`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-list-container.md
guidelines/repair-prompts/poor-row-density.md
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
