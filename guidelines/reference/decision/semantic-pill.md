# SemanticPill

## Purpose

`SemanticPill` is the v0.8 rounded semantic display primitive for compact status, priority, readiness, health and confidence labels.

It replaces public business-specific pill variants when the visual structure is the same.

## Use this component when

Use `SemanticPill` for short semantic labels that need a rounded pill shape.

## Do not use this component when

Do not use it for tags with borders, inline metadata, long text, or operational status with an icon/date.

## Prefer this component over

```txt
HealthPill
StatusPill
PriorityPill
SourceStrengthPill
```

## Never generate

Do not create local pill components or business-specific pill variants.

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

Use contract-controlled mappings for business meanings. Do not invent tones.

## Common generation failures

```txt
creating local pills
using color without label
using deprecated business-specific pills
```

## Repair prompt

Replace local or business-specific pills with `SemanticPill` and use an allowed tone.

## Related stories

Story coverage can be grouped with semantic display primitives.

## Related contracts

```txt
contracts/props.contract.json#SemanticPill
contracts/components.contract.json
contracts/component-registry.contract.json
```
