# ComponentHierarchy Guidelines

Status: preferred

## Purpose

`ComponentHierarchy` shows structural relationships between assets and subcomponents.

Use it when hierarchy affects asset intelligence, evidence or recommendation context.

## Use this component when

- The user must understand parent asset and component relationships.
- Component status affects asset interpretation.
- A recommendation depends on subcomponent context.

## Do not use this component when

- There is no hierarchy to show.
- A flat list is clearer.
- The component tree would be invented.

## Prefer this component over

- Local tree markup.
- Nested cards.
- Decorative diagrams.

## Never generate

- Invented component hierarchy.
- Local tree components.
- `ComponentHierarchyItem` outside `ComponentHierarchy`.

## Required props

Show asset or component identity, relationship and status when available.

## Controlled values

Use canonical source strength, validation and risk values when hierarchy informs trust or risk.

## GenAI generation rules

- Use only hierarchy provided by source context.
- Keep component status distinct from asset health.
- Show source scope when hierarchy is partial.
- Do not imply live monitoring for inspected-only components.

## Common generation failures

- Inventing subcomponents.
- Creating local tree markup.
- Treating component status as asset-level proof.
- Hiding source scope.

## Repair prompt

Use `guidelines/evaluation/repair/no-local-components.md` when local tree components are generated.

Use `guidelines/evaluation/repair/invented-evidence.md` when hierarchy is fabricated.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#ComponentHierarchy
contracts/domain-model.contract.json#AssetIntelligence
contracts/evidence-and-trust.contract.json
```
