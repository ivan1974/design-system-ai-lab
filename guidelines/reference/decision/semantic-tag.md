# SemanticTag Guidelines

## Purpose

`SemanticTag` shows lightweight semantic metadata. In v0.8 it is the public primitive for compact bordered tags.

It is useful for categories, qualifiers, coverage labels, DPP labels and short contextual flags.

## Use this component when

- The label is metadata rather than a formal status.
- The tag helps scan category, scope or qualifier information.
- The label does not need action ownership, source strength or proof readiness.

## Do not use this component when

- The value needs a rounded pill; use `SemanticPill`.
- The value needs icon/date status; use `StatusIndicator`.
- The value is clickable; use `Button`.

## Prefer this component over

```txt
CoverageTag
DppTag
local tags
generic badges when the label has semantic tone
raw text flags that reduce scanability
```

## Never generate

- local tags
- business-specific tag variants for the same visual structure
- `SemanticTag` as a button
- many tags that drown out the decision content

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

1. Use for lightweight semantic metadata.
2. Keep tag text short.
3. Use contract-controlled mappings for business meanings.
4. Do not invent tones.
5. Do not use tags as the only trust or validation signal.

## Common generation failures

Failure: Make creates a local coverage or DPP tag.
Why it fails: coverage and DPP are semantic labels with the same tag structure.
Fix: Use `SemanticTag` with a contract-controlled label and tone.

Failure: Make uses many semantic tags as visual decoration.
Why it fails: Tags should support scanning, not decorate.
Fix: Keep only tags that clarify scope or state.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/ai-confidence-as-source-strength.md
guidelines/evaluation/repair/overdecorated-surface.md
```

## Related stories

```txt
src/design-system/stories/decision/semantic-tag.stories.tsx
Story status: component-level proof expected. If absent locally, covered through pattern and status stories.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json#SemanticTag
contracts/component-registry.contract.json
```
