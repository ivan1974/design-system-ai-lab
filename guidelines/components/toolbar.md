# Toolbar Guidelines

## Purpose

`Toolbar` groups contextual controls for a section or workspace area.

It is not a replacement for `FilterBar`, page actions or navigation.

## Use this component when

- A section needs a small set of contextual controls.
- The controls operate on the visible section.
- The toolbar helps avoid scattered actions.

## Do not use this component when

- The controls define screen scope; use `FilterBar`.
- The controls are page-level actions; use `PageHeading.actions`.
- The controls are navigation; use navigation components.

## Prefer this component over

- local action bars
- custom control rows
- scattered buttons inside content

## Never generate

- toolbars with unrelated actions
- toolbars as filters when `FilterBar` is needed
- local toolbar wrappers

## Required props

```txt
children
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use for contextual controls only.
2. Keep controls relevant to the section.
3. Use `FilterBar` for filtering and scope.
4. Use `StickyActionBar` or `ActionRow` for follow-through workflows.

## Common generation failures

Failure: Make creates a toolbar full of filters.
Why it fails: Filtering belongs in `FilterBar`.
Fix: Move scope controls to `FilterBar`.

Failure: Make scatters section actions in the content.
Why it fails: The user cannot find the control area.
Fix: Group contextual controls in `Toolbar`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-layout.md
guidelines/repair-prompts/no-local-components.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: toolbar primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
