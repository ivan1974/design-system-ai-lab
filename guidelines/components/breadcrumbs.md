# Breadcrumbs Guidelines

## Purpose

`Breadcrumbs` shows the user's location inside a hierarchy.

It provides orientation, not workflow status.

## Use this component when

- The screen belongs to a clear hierarchy.
- The user needs to understand account, site, asset or section context.
- The current page is nested under broader navigation.

## Do not use this component when

- There is no hierarchy.
- The content is a workflow stepper.
- The user needs filtering or section switching.

## Prefer this component over

- local breadcrumb markup
- decorative path text
- using tabs as hierarchy

## Never generate

- breadcrumbs as status labels
- breadcrumbs with invented hierarchy
- breadcrumbs as the only page orientation

## Required props

```txt
items
```

Each item should have a label and current state when relevant.

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use `Breadcrumbs` inside `WorkspaceShell.header` when hierarchy matters.
2. Keep labels short.
3. Do not invent sites, accounts or objects just to populate breadcrumbs.
4. Use `PageHeading` for the page intent, not breadcrumbs.

## Common generation failures

Failure: Make invents a deep navigation path.
Why it fails: It creates false information architecture.
Fix: Use only hierarchy provided by the prompt or omit breadcrumbs.

Failure: Make uses breadcrumbs as workflow steps.
Why it fails: Breadcrumbs are location, not process.
Fix: Use tabs, sections or status components instead.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-layout.md
guidelines/repair-prompts/invented-evidence.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: covered as workspace orientation primitive or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
