# SegmentedControl Guidelines

## Purpose

`SegmentedControl` switches between compact display modes or mutually exclusive local options.

It is not a navigation system and not a filter bar replacement.

## Use this component when

- The user can switch a local view mode.
- The choices are few and mutually exclusive.
- The control affects a small part of the screen.

## Do not use this component when

- The choices are page-level destinations; use `HeaderTabs` or `SecondaryNavigation`.
- The choices filter a large dataset; use `FilterBar`.
- The choices are actions.

## Prefer this component over

- local toggle groups
- button groups for view modes
- custom segmented controls

## Never generate

- segmented controls with more than a few options
- segmented controls as status labels
- segmented controls for destructive actions

## Required props

```txt
options
value or defaultValue when selection matters
```

## Controlled values

No global enum-like controlled values.

## GenAI generation rules

1. Use for local display mode selection.
2. Keep labels short.
3. Do not use for filtering, navigation or actions.
4. Make the affected content visually clear.

## Common generation failures

Failure: Make uses segmented controls as filter chips.
Why it fails: The user cannot tell whether they are changing view mode or filtering data.
Fix: Use `FilterBar` for filters.

Failure: Make uses segmented controls as actions.
Why it fails: Segmented controls represent selection state, not action execution.
Fix: Use `Button`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/no-local-components.md
guidelines/evaluation/repair/weak-layout.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: component-level proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
