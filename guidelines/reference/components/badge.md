# Badge Guidelines

## Purpose

`Badge` shows concise metadata, category or lightweight state.

It supports scanning but does not trigger an action.

In v0.8, generated semantic display should prefer `SemanticTag`, `SemanticPill` or `StatusIndicator` when the label carries controlled meaning.

## Use this component when

- The UI needs a short passive label.
- The label clarifies a category, state or metadata point.
- The label is not interactive.
- The value is not source strength, priority or formal action status.

## Do not use this component when

- The user can click it; use `Button`.
- The value needs a rounded semantic pill; use `SemanticPill`.
- The value needs an icon, dot or status metadata; use `StatusIndicator`.
- The value needs a bordered semantic tag; use `SemanticTag`.

## Prefer this component over

- local badges
- decorative labels
- text-only metadata when a small passive label improves scanning

## Never generate

- clickable badges
- badges that look like buttons
- badges for every word in a row
- badges as the only evidence of source, validation or proof readiness
- business-specific badge variants for the same visual structure

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

1. Use badges sparingly for passive scan support.
2. Prefer `SemanticTag`, `SemanticPill` or `StatusIndicator` for controlled semantic display.
3. Do not use badges as actions.
4. Keep labels short.
5. Do not invent business-specific badge components.

## Common generation failures

Failure: Make uses a badge as a button.
Why it fails: The user cannot tell whether it is metadata or an action.
Fix: Use `Button` for actions and `Badge` for passive labels.

Failure: Make uses badges for controlled status, source strength or priority.
Why it fails: Controlled semantic values need contract-controlled primitives.
Fix: Use `SemanticPill`, `SemanticTag` or `StatusIndicator` according to the visual structure.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/no-local-components.md
guidelines/evaluation/repair/ai-confidence-as-source-strength.md
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
