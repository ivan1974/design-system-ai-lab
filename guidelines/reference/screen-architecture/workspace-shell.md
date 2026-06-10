# WorkspaceShell Guidelines

## Purpose

`WorkspaceShell` is the top-level container for a generated decision workspace.

It gives Figma Make a stable structure for header, controls, main content and optional footer.

## Use this component when

- The generated screen is a complete decision workspace.
- The screen needs a page heading, controls and workspace content.
- The user must review facts, compare items, inspect detail or act.

## Do not use this component when

- The output is a small embedded widget, modal-only flow or isolated component demo.
- The screen is not meant to be a complete visible `App.tsx`.

## Prefer this component over

- local `<main>` wrappers with custom spacing
- generic page layout components recreated inside the generated file
- card stacks pretending to be a workspace

## Never generate

- a decision screen without `WorkspaceShell`
- a local `WorkspaceShell` replacement
- custom workspace padding, max-width or background tokens that duplicate this component

## Required props

```txt
children
header when the screen has a page-level intent
controls when the user needs filtering, scope or review controls
footer only when the workspace has global follow-through
```

## Controlled values

```txt
maxWidth: full | wide | standard
```

## GenAI generation rules

1. Use `WorkspaceShell` once per generated screen.
2. Put `PageHeading` in `header`.
3. Put `FilterBar` or `SecondaryNavigation` in `controls` when scope matters.
4. Put `MasterDetailLayout`, business patterns or section composition in `children`.
5. Do not create custom layout containers that fight the shell.

## Common generation failures

Failure: The screen starts with a custom `<main>` and local padding.
Why it fails: Make bypasses the package layout contract.
Fix: Wrap the screen in `WorkspaceShell`.

Failure: The shell contains only unrelated cards.
Why it fails: The result is a dashboard, not a decision workspace.
Fix: Add decision structure: heading, filters, list/detail, evidence and actions.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/weak-layout.md
guidelines/evaluation/repair/generic-dashboard.md
```

## Related stories

```txt
src/design-system/stories/v0.5.1-critical-generation.stories.tsx
Story title: Design System / v0.5.1 / Critical Generation Coverage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
contracts/generation-blockers.contract.json
```
