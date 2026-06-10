# PageHeader Guidelines

## Purpose

`PageHeader` is a legacy page introduction component.

For new Make-generated decision workspaces, use `PageHeading` instead.

## Use this component when

- Maintaining an existing legacy screen that already uses `PageHeader`.
- A historical example intentionally demonstrates pre-v0.5.1 layout.
- Migration context requires explaining the old component.

## Do not use this component when

- Generating a new decision workspace.
- The screen uses `WorkspaceShell` and v0.5.1 generation rules.
- The page needs the preferred `PageHeading` intent model.

## Prefer this component over

Only use over local page headers in legacy contexts.

For new screens, prefer:

```txt
PageHeading
```

## Never generate

- `PageHeader` as the default page intent component
- local page headers
- both `PageHeader` and `PageHeading` in the same screen

## Required props

```txt
title
description when context matters
actions when legacy page-level actions exist
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use `PageHeading` for all new v0.5.1 decision workspaces.
2. Keep `PageHeader` only for legacy maintenance or migration examples.
3. Do not mix page-intent components.
4. If converting a screen, replace `PageHeader` with `PageHeading`.

## Common generation failures

Failure: Make uses `PageHeader` in a new workspace.
Why it fails: The v0.5.1 contract prefers `PageHeading`.
Fix: Replace with `PageHeading`.

Failure: Make uses both page components.
Why it fails: The page hierarchy becomes ambiguous.
Fix: Keep one page intent component.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-typography-hierarchy.md
guidelines/repair-prompts/weak-layout.md
```

## Related stories

```txt
Story status: legacy component. New v0.5.1 proof uses PageHeading in src/design-system/stories/v0.5.1-critical-generation.stories.tsx.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
