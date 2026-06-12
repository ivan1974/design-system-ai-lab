# SemanticPill Guidelines

## Purpose

`SemanticPill` is the v0.8 rounded semantic display primitive for compact state, priority, readiness, health and source-strength labels.

It replaces public business-specific pill variants when the visual structure is the same.

## Use this component when

- A short semantic value needs a rounded filled shape.
- The value supports scanning but is not the main action.
- The label has a controlled tone from a contract or mapping.
- The structure is the same as other semantic pills and only the label changes.

## Do not use this component when

- The value is a bordered category or scope label; use `SemanticTag`.
- The value needs icon, freshness or date context; use `StatusIndicator`.
- The value is inline metadata; use `MetaLabel`.
- The content is long explanatory text.
- The element must act like a button.

## Prefer this component over

```txt
HealthPill
StatusPill
PriorityPill
SourceStrengthPill
local pills
custom rounded badges
```

## Never generate

- local pill components
- one public pill component per business value
- color-only semantic meaning
- pills that imply proof without evidence
- many pills that compete with the main decision content

## Required props

```txt
children
tone
```

## Controlled values

```txt
neutral
muted
primary
info
success
warning
danger
```

## GenAI generation rules

1. Use contract-controlled mappings for business meanings.
2. Keep label text short.
3. Do not invent tones.
4. Do not use pills as proof or evidence containers.
5. Do not use a pill when status needs freshness, icon or metadata.

## Common generation failures

Failure: Make creates a local priority or health pill.
Why it fails: It duplicates the same rounded semantic structure.
Fix: Use `SemanticPill` with an allowed tone.

Failure: Make uses color without a readable label.
Why it fails: Status and priority must not be color-only.
Fix: Keep visible text inside the pill.

Failure: Make uses many pills as decoration.
Why it fails: It creates visual noise and weakens decision hierarchy.
Fix: Keep only semantic values that support scanning or prioritization.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/overdecorated-surface.md
guidelines/evaluation/repair/ai-confidence-as-source-strength.md
```

## Related stories

```txt
src/design-system/stories/decision/semantic-pill.stories.tsx
Story status: component-level proof expected. If absent locally, covered through semantic display stories.
```

## Related contracts

```txt
contracts/props.contract.json#SemanticPill
contracts/components.contract.json
contracts/component-registry.contract.json
```
