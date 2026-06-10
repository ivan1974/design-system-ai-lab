# Typography Guidelines

## Purpose

Typography components create readable hierarchy and text structure.

They help the user understand screen intent, sections and supporting copy.

## Use this component when

- Text needs semantic hierarchy.
- A section needs a heading or supporting copy.
- The screen needs consistent type scale and spacing.

## Do not use this component when

- A specific component already provides the label or title.
- The text is a status, priority or source-strength value.
- Custom classes create a competing typography system.

## Prefer this component over

- local heading styles
- arbitrary text utilities for semantic hierarchy
- custom typography wrappers

## Never generate

- multiple page-level headings
- headings used only for visual size
- local text components
- status or priority as plain decorative text

## Required props

```txt
children
variant or level when the component supports semantic choice
```

## Controlled values

Use values accepted by the source component.

Do not invent typography variants.

## GenAI generation rules

1. Use `PageHeading` for page intent.
2. Use section-level heading components for sections.
3. Use text components for supporting copy.
4. Keep hierarchy consistent with screen architecture.
5. Do not use type size to replace component semantics.

## Common generation failures

Failure: Make uses styled text as a page heading.
Why it fails: It bypasses the page intent component.
Fix: Use `PageHeading`.

Failure: Make uses plain text for status.
Why it fails: Status and trust values need controlled components.
Fix: Use `StatusPill`, `Badge` or `SourceStrengthPill`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-typography-hierarchy.md
guidelines/repair-prompts/no-local-components.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: typography primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
