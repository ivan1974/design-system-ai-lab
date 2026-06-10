# Well Guidelines

## Purpose

`Well` highlights supporting information, caution or contextual notes inside a section.

It is for emphasis, not for main layout or repeated objects.

## Use this component when

- The user needs a short note, caveat or context block.
- The information should be visible but not promoted to a card.
- A tone helps indicate caution, success or neutral context.

## Do not use this component when

- The content is a repeated object.
- The content is a decision alert; use `AlertCard`.
- The content is a proof claim; use `ValueProofCard`.
- The content is a full grouped section; use `Card` or `SectionBlock`.

## Prefer this component over

- custom callout boxes
- local warning notes
- inline styled divs

## Never generate

- a well as the main screen structure
- many wells competing with cards and alerts
- proof or validation claims without proper components

## Required props

```txt
children
tone when semantic emphasis matters
padding when density matters
```

## Controlled values

```txt
tone: neutral | primary | warning | danger | success
padding: sm | md | lg
```

## GenAI generation rules

1. Use `Well` for short contextual notes.
2. Use `AlertCard` for risks and blockers.
3. Use `ValueProofCard` for proof maturity.
4. Do not overuse wells to decorate the page.

## Common generation failures

Failure: Make uses a well for a critical risk.
Why it fails: Risk needs severity, evidence and recommendation.
Fix: Use `AlertCard`.

Failure: Make uses wells as repeated cards.
Why it fails: The screen loses structure and density.
Fix: Use `ListContainer` with row components.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/overdecorated-surface.md
guidelines/evaluation/repair/card-saturation.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: well primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
```
