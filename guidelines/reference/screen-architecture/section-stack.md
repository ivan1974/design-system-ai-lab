# SectionStack and SectionBlock Guidelines

## Purpose

`SectionStack` and `SectionBlock` organize dense workspace content into readable groups.

They are layout primitives for grouping decision content, not business patterns by themselves.

## Use this component when

- A workspace needs several related sections.
- A detail panel needs repeated grouped content.
- A business pattern or list needs spacing around it.
- A group needs a title and optional supporting description.

## Do not use this component when

- The content is a repeated object list; use `ListContainer` with queue rows.
- The content is a known business block; use the matching business pattern first.
- The content is a selected-item detail shell; use `WorkspaceDetailPanel`.
- The content is only decorative spacing.

## Prefer this component over

- local section wrappers
- repeated custom div spacing
- generic card stacks used only for grouping
- arbitrary margin utilities around every block

## Never generate

- `SectionStack` as a replacement for `ListContainer`
- `SectionBlock` as a repeated-object card
- section grouping that hides evidence, validation or action ownership
- local section components when these primitives fit

## Required props

```txt
SectionStack.children
SectionStack.gap when spacing needs to be explicit
SectionBlock.title when a section needs a title
SectionBlock.description when the title needs context
SectionBlock.children
```

## Controlled values

```txt
SectionStack.gap: sm | md | lg
```

`SectionBlock` has no generation-critical controlled value.

## GenAI generation rules

1. Use `SectionStack` to group multiple content sections vertically.
2. Use `SectionBlock` when a group needs a title or description.
3. Use business patterns inside sections when a pattern fits the content.
4. Use `ListContainer` instead of `SectionStack` for repeated queue rows.
5. Keep source, validation and actionability visible inside sections.

## Common generation failures

Failure: Make uses repeated cards only to create spacing.
Why it fails: Cards become decorative and reduce density.
Fix: Use `SectionStack` and `SectionBlock`.

Failure: Make wraps queue rows in custom section divs.
Why it fails: Row density and package list behavior are lost.
Fix: Use `ListContainer` inside a section.

Failure: Make uses sections without decision hierarchy.
Why it fails: The screen becomes a generic dashboard.
Fix: Order sections by decision flow.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/weak-layout.md
guidelines/evaluation/repair/card-saturation.md
guidelines/evaluation/repair/missing-list-container.md
```

## Related stories

```txt
src/design-system/stories/composition/section-stack.stories.tsx
Story status: component-level proof expected. If absent locally, covered through workspace and golden examples.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/screen-architecture.contract.json
```
