# ComponentHierarchy Guidelines

## Purpose

`ComponentHierarchy` shows structural relationships between assets and subcomponents.

It represents hierarchy only. It does not represent proof, recommendation or action ownership.

## Business intent

Help the user understand how components belong to an asset or system before reviewing signals, evidence or actions.

## User decision supported

```txt
Where does this component sit in the asset or system structure?
```

## Input facts required

Use only supplied hierarchy facts:

```txt
component name
parent asset or component
description when available
status when supplied
level between 0 and 3
children when supplied
```

## Evidence and trust requirements

- Show hierarchy only when source context supports it.
- Do not imply component monitoring if only structural hierarchy is known.
- Use `EvidenceRow` when source, freshness or validation is the main concern.

## Actionability requirements

`ComponentHierarchy` is not an action pattern.

Use `ActionRow` or `ActionCard` for follow-through on a component.

## Use this component when

- The user must understand component nesting.
- Asset or component structure affects interpretation.
- A hierarchy is clearer than a flat list.
- A business hierarchy pattern is better than local tree markup.

## Do not use this component when

- The content is proof; use `ValueProofCard`.
- The content is a recommendation; use `RecommendationCard`.
- The content is source evidence; use `EvidenceRow`.
- The content is an action plan; use action components.

## Prefer this component over

- local tree markup
- nested cards for components
- plain bullet lists for asset hierarchy

## Never generate

- hierarchy that was not supplied
- component status as proof
- recommendation rationale inside hierarchy items
- `ComponentHierarchyItem` outside `ComponentHierarchy`

## Required props

```txt
ComponentHierarchy.children
ComponentHierarchyItem.name
ComponentHierarchyItem.description when context is needed
ComponentHierarchyItem.status when supplied
ComponentHierarchyItem.level when nesting matters
```

## Controlled values

```txt
level: 0 | 1 | 2 | 3
```

## Mode guidance

No display modes.

Use this pattern as a hierarchy list.

## GenAI generation rules

1. Use `ComponentHierarchy` for structure only.
2. Use `ComponentHierarchyItem` only inside `ComponentHierarchy`.
3. Keep proof, recommendation and action semantics outside the hierarchy.
4. Use status content only when provided and relevant.
5. Do not rebuild hierarchy with local lists or cards.

## Common generation failures

Failure: Make uses nested cards for asset hierarchy.
Why it fails: The hierarchy becomes visually heavy and loses structural semantics.
Fix: Use `ComponentHierarchy`.

Failure: Make puts recommendations inside hierarchy items.
Why it fails: Hierarchy and recommendations are different business concepts.
Fix: Keep hierarchy structural and use `RecommendationCard` separately.

Failure: Make presents hierarchy as proof.
Why it fails: Structure alone is not value proof.
Fix: Use `ValueProofCard` for proof.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/no-local-components.md
guidelines/repair-prompts/weak-layout.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
```

## Related lower-level components

```txt
ComponentHierarchyItem
StatusPill
SemanticTag
EvidenceRow
ActionRow
```

## Related stories

```txt
src/design-system/stories/patterns/component-hierarchy.stories.tsx
Story status: component-level proof expected. If absent locally, cover through installed-base or asset detail stories.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/business-patterns.contract.json
contracts/evidence-and-trust.contract.json
```
