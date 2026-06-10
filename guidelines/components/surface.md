# Surface Guidelines

## Purpose

`Surface` provides a controlled background or container surface.

It is a low-level primitive and must not compete with `Card`, `Well` or business patterns.

## Use this component when

- A section needs a subtle controlled container.
- The layout needs a surface without card semantics.
- The surface helps structure content without creating a new component type.

## Do not use this component when

- The section is a generic content group; use `Card`.
- The content is informational emphasis; use `Well`.
- A business pattern or decision component exists.
- The surface would become a local design system.

## Prefer this component over

- local background wrappers
- custom bordered divs
- inline styled containers

## Never generate

- custom surface variants
- nested surface systems
- local CSS tokens for surfaces
- surfaces that hide evidence, proof or validation limits

## Required props

```txt
children
variant when visual treatment matters
padding when density matters
```

## Controlled values

```txt
variant: plain | bordered | muted | selected
padding: none | sm | md | lg
```

## GenAI generation rules

1. Use `Surface` as a primitive, not a semantic component.
2. Prefer `Card`, `Well`, `SectionBlock` or business patterns when semantics matter.
3. Keep surface use minimal.
4. Do not create local surface wrappers.

## Common generation failures

Failure: Make creates local bordered containers.
Why it fails: It creates a competing surface system.
Fix: Use `Surface`, `Card`, `Well` or `SectionBlock`.

Failure: Make wraps every section in a surface.
Why it fails: The screen becomes visually heavy.
Fix: Use fewer surfaces and rely on layout hierarchy.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/overdecorated-surface.md
guidelines/repair-prompts/no-local-components.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: surface primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/screen-architecture.contract.json
```
