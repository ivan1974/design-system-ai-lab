# SecondaryNavigation Guidelines

## Purpose

`SecondaryNavigation` gives access to secondary sections or related pages within a workspace.

It is navigation, not filtering or status display.

## Use this component when

- The screen has related secondary sections.
- The user needs to move between stable navigation destinations.
- The choices are not temporary filters.

## Do not use this component when

- The user is changing list scope; use `FilterBar`.
- The content is selected-item detail; use `Tabs` or `DetailPanelTabs`.
- The choices are status labels.

## Prefer this component over

- custom side navs
- local link lists
- button groups used as navigation

## Never generate

- secondary navigation from invented pages
- navigation items that behave like filters
- action buttons inside navigation

## Required props

```txt
items
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use only when destinations are stable and meaningful.
2. Keep navigation distinct from filters and actions.
3. Do not invent information architecture.
4. Pair with `PageHeading` so the user knows the current view.

## Common generation failures

Failure: Make creates navigation items for states or statuses.
Why it fails: Navigation should represent destinations.
Fix: Use `SemanticPill`, `StatusIndicator`, `FilterBar` or `Tabs` as appropriate.

Failure: Make uses custom links.
Why it fails: It bypasses package navigation vocabulary.
Fix: Use `SecondaryNavigation`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/no-local-components.md
guidelines/evaluation/repair/weak-layout.md
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
