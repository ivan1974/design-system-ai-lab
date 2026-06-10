# PageHeading Guidelines

## Purpose

`PageHeading` states the primary intent of a generated decision workspace.

It replaces vague page headers with a clear decision title, optional eyebrow, description and actions.

## Use this component when

- The screen needs one clear page-level objective.
- The generated output starts a complete workspace.
- The user must understand what decision, review or action the page supports.

## Do not use this component when

- The heading is for an internal section only.
- The content is a repeated row, card or panel title.
- The screen is a legacy layout that already requires `PageHeader`.

## Prefer this component over

- `PageHeader` for new Make-generated decision workspaces
- local `h1` plus custom layout
- generic text blocks used as page title substitutes

## Never generate

- multiple `PageHeading` components in one screen
- a page without a clear title
- a title that describes the UI instead of the user decision

## Required props

```txt
title
description when the decision context is not obvious
eyebrow when scope or workflow needs quick orientation
actions only for page-level actions
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use `PageHeading` inside `WorkspaceShell.header`.
2. Write titles as user decision intents, not generic nouns.
3. Keep page actions high-level; move item-level actions to `ActionRow` or `StickyActionBar`.

## Common generation failures

Failure: The generated title is Dashboard or Overview.
Why it fails: It does not express the user decision.
Fix: Rename the title around the decision, such as "Review renewal risk with evidence and owned actions".

Failure: Make uses `PageHeader` by default.
Why it fails: `PageHeader` is legacy/use-with-care for new generation.
Fix: Use `PageHeading`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/generic-dashboard.md
guidelines/repair-prompts/weak-typography-hierarchy.md
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
```
