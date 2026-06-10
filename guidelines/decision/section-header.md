# SectionHeader Guidelines

## Purpose

`SectionHeader` introduces a decision section with title, description and optional section-level actions.

It is not a page title and not a place to hide evidence or action ownership.

## Use this component when

- A section needs a clear purpose before the user reads its content.
- The section groups priorities, actions, evidence, metrics or recommendations.
- A section-level action belongs near the heading.
- The component using it does not already provide a header.

## Do not use this component when

- The screen needs page-level intent; use `PageHeading`.
- The content is selected-item detail header; use `WorkspaceDetailPanel`.
- The section has no meaningful title or decision purpose.
- The header is used only as visual decoration.

## Prefer this component over

- local section headers
- raw `h2` plus paragraph wrappers
- generic text blocks for section introduction

## Never generate

- `SectionHeader` as a page title
- hidden recommendations or action ownership inside description text
- local section header wrappers
- section headers with unrelated actions

## Required props

```txt
title when the section needs a label
description when the section needs context
actions when a section-level action exists
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use for section-level intent.
2. Keep the title short and decision-oriented.
3. Put evidence, recommendations and actions in the section body, not only in the header.
4. Use `PageHeading` for the page.
5. Use section-level actions only when they apply to the whole section.

## Common generation failures

Failure: Make uses `SectionHeader` as the page title.
Why it fails: Page intent belongs to `PageHeading`.
Fix: Replace the page title with `PageHeading`.

Failure: Make puts all recommendation rationale in the section description.
Why it fails: Rationale needs structured recommendation components.
Fix: Use `RecommendationCard` or `RecommendationReviewPanel`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-typography-hierarchy.md
guidelines/repair-prompts/weak-layout.md
```

## Related stories

```txt
src/design-system/stories/decision/section-header.stories.tsx
Story status: component-level proof expected. If absent locally, covered through ActionList and PriorityList stories.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
