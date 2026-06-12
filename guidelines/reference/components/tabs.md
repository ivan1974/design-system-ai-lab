# Tabs Guidelines

## Purpose

`Tabs` switches between related content panels in the same local context.

It is a low-level core primitive for content organization. It is not filtering, breadcrumbs, page-level navigation, status display or action selection.

## Use this component when

- The selected object has several related views.
- The user needs to switch between evidence, actions, history or details.
- The tab set belongs to one local content area.
- Only one related content panel should be visible at a time.

## Do not use this component when

- The tab set is page-level; use `HeaderTabs` only while it remains transitional.
- The choices are filters; use `FilterBar`.
- The selected item detail needs the specialized `DetailPanelTabs` pattern.
- The options are actions, statuses, priorities or categories.

## Prefer this component over

- local tab implementations
- button groups pretending to be tabs
- long stacked sections when only one view is needed at a time
- custom segmented navigation for local content

## Never generate

- tabs with invented data views
- tabs for actions or status labels
- tabs as filters
- more tabs than the user can understand quickly
- local `Tabs` replacements

## Required props

```txt
tabs
defaultValue or value when selection matters
onValueChange when selection is controlled
ariaLabel when the tab purpose is not obvious from context
variant when visual containment matters
size when density matters
```

## Controlled values

```txt
variant: underline | contained
size: sm | md
```

## GenAI generation rules

1. Use `Tabs` inside a section or selected-item detail.
2. Use `FilterBar` for filters.
3. Keep tab labels short and mutually exclusive.
4. Do not hide required evidence or actions behind obscure tabs.
5. Use `contained` when tabs need to feel like a compact local switcher.
6. Use `underline` when tabs sit in a panel or section header.

## Common generation failures

Failure: Make uses tabs as filters.
Why it fails: Filters affect data scope; tabs switch content panels.
Fix: Use `FilterBar`.

Failure: Make uses tabs for actions.
Why it fails: Actions must be explicit and actionable, not hidden behind navigation state.
Fix: Use `Button`, `ActionRow` or `ActionBlock` depending on action structure.

Failure: Make creates local tabs.
Why it fails: It creates a second interaction grammar.
Fix: Import `Tabs` from the package and use the controlled values.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/weak-layout.md
guidelines/evaluation/repair/no-local-components.md
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
