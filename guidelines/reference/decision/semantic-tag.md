# SemanticTag Guidelines

## Purpose

`SemanticTag` shows lightweight semantic metadata.

It is useful for categories, qualifiers and short contextual flags.

## Use this component when

- The label is metadata rather than a formal status.
- The tag helps scan category, scope or qualifier information.
- The label does not need action ownership, source strength or proof readiness.

## Do not use this component when

- The value is a formal status; use `StatusPill`.
- The value is source strength; use `SourceStrengthPill`.
- The value is action priority; use `PriorityPill`.
- The value is clickable; use `Button`.

## Prefer this component over

- local tags
- generic badges when the label has semantic tone
- raw text flags that reduce scanability

## Never generate

- `SemanticTag` for source strength
- `SemanticTag` for action priority
- `SemanticTag` as a button
- many tags that drown out the decision content

## Required props

```txt
children
tone when the tag carries semantic weight
```

## Controlled values

```txt
tone: neutral | primary | success | warning | danger
```

## GenAI generation rules

1. Use for lightweight semantic metadata.
2. Prefer specialized pills when the meaning is controlled.
3. Keep tag text short.
4. Do not use tags as the only trust or validation signal.

## Common generation failures

Failure: Make uses `SemanticTag` for source strength.
Why it fails: Source strength has strict controlled values and dedicated UI.
Fix: Use `SourceStrengthPill`.

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
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
