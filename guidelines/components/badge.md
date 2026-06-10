# Badge Guidelines

## Purpose

`Badge` shows concise metadata, category or lightweight state.

It supports scanning but does not trigger an action.

## Use this component when

- The UI needs a short label.
- The label clarifies a category, state or metadata point.
- The label is not interactive.
- The value is not source strength, priority or formal action status.

## Do not use this component when

- The user can click it; use `Button`.
- The value is source strength; use `SourceStrengthPill`.
- The value is action priority; use `PriorityPill`.
- The value is a formal status tone; use `StatusPill` when consistency matters.

## Prefer this component over

- local tags
- decorative pills
- text-only metadata when a small label improves scanning

## Never generate

- clickable badges
- badges that look like buttons
- badges for every word in a row
- badges as the only evidence of source, validation or proof readiness

## Required props

```txt
children
tone when semantic tone matters
```

## Controlled values

Use tones accepted by the source component.

Canonical design-system tone vocabulary for generated UI:

```txt
neutral
info
success
warning
danger
```

## GenAI generation rules

1. Use badges sparingly for scan support.
2. Prefer specialized pills for priority, status and source strength.
3. Do not use badges as actions.
4. Keep labels short.

## Common generation failures

Failure: Make uses a badge as a button.
Why it fails: The user cannot tell whether it is metadata or an action.
Fix: Use `Button` for actions and `Badge` for passive labels.

Failure: Make uses badges for source strength.
Why it fails: Source strength has controlled semantics.
Fix: Use `SourceStrengthPill`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/no-local-components.md
guidelines/repair-prompts/ai-confidence-as-source-strength.md
```

## Related stories

```txt
src/design-system/stories/components/badge.stories.tsx
Story status: component-level proof expected. If absent locally, cover through component overview stories.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
```
