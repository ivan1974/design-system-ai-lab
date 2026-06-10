# Divider Guidelines

## Purpose

`Divider` separates nearby content when spacing alone is not enough.

It is a structural aid, not decoration.

## Use this component when

- Two adjacent groups need clear separation.
- A dense panel needs a subtle boundary.
- The separation improves scanning or hierarchy.

## Do not use this component when

- Normal spacing is enough.
- The screen is already visually heavy.
- The divider is used as decoration.

## Prefer this component over

- local border divs
- custom separators
- repeated horizontal rules

## Never generate

- dividers between every row in a list; use `ListContainer`
- decorative dividers with custom styling
- dividers to compensate for weak section hierarchy

## Required props

No required semantic props beyond standard rendering.

## Controlled values

No enum-like controlled values documented for generation.

## GenAI generation rules

1. Use sparingly.
2. Prefer section hierarchy and spacing first.
3. Use `ListContainer` for row separation.
4. Do not create local divider styles.

## Common generation failures

Failure: Make inserts many decorative separators.
Why it fails: The interface becomes noisy.
Fix: Remove unnecessary dividers and improve section hierarchy.

Failure: Make creates custom border elements.
Why it fails: It bypasses package primitives.
Fix: Use `Divider` or package layout components.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/overdecorated-surface.md
guidelines/evaluation/repair/weak-layout.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: structural primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
