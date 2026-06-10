# Tabs Guidelines

## Purpose

`Tabs` switches between related content panels in the same context.

It is for local content organization, not filtering, breadcrumbs or page-level navigation.

## Use this component when

- The selected object has several related views.
- The user needs to switch between evidence, actions, history or details.
- The tab set belongs to one local content area.

## Do not use this component when

- The tab set is page-level; use `HeaderTabs`.
- The choices are filters; use `FilterBar`.
- The selected item detail needs the specialized `DetailPanelTabs` pattern.

## Prefer this component over

- local tab implementations
- button groups pretending to be tabs
- long stacked sections when only one view is needed at a time

## Never generate

- tabs with invented data views
- tabs for actions or status labels
- more tabs than the user can understand quickly

## Required props

```txt
tabs
defaultValue or value when selection matters
```

## Controlled values

```txt
variant: underline | contained
size: sm | md
```

## GenAI generation rules

1. Use `Tabs` inside a section or selected-item detail.
2. Use `HeaderTabs` for page-level navigation.
3. Use `FilterBar` for filters.
4. Keep tab labels short and mutually exclusive.
5. Do not hide required evidence or actions behind obscure tabs.

## Common generation failures

Failure: Make uses tabs as filters.
Why it fails: Filters affect data scope; tabs switch content panels.
Fix: Use `FilterBar`.

Failure: Make uses page-level tabs inside selected detail.
Why it fails: The navigation hierarchy becomes ambiguous.
Fix: Use local `Tabs` or `DetailPanelTabs` depending on context.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-layout.md
guidelines/repair-prompts/no-local-components.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: tab usage proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/screen-architecture.contract.json
```
