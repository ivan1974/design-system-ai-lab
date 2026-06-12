# Tooltip Guidelines

## Purpose

`Tooltip` gives short contextual help attached to a visible control, label or status.

It is a low-level core primitive for clarification. It is not an evidence container, recommendation surface, action pattern or substitute for visible copy.

## Use this component when

- A label needs a short clarification.
- An icon-only action needs accessible context.
- A status needs a short explanation.
- The information is helpful but not required to make the decision.

## Do not use this component when

- The content is required evidence.
- The content is a recommendation.
- The content contains long history or documents.
- A screen contract requires visible text instead.
- The user must act on the information.

## Prefer this component over

- local tooltip implementations
- title attributes for important UI explanation
- hidden explanatory copy attached to controls

Prefer visible structures when content is important:

```txt
required evidence -> EvidenceRow or EvidenceBlock
status explanation -> StatusIndicator with meta when short
selected item detail -> WorkspaceDetailPanel
recommendation rationale -> DecisionBlock
```

## Never generate

- critical evidence only in a tooltip
- actions inside tooltips
- long-form history inside tooltips
- local `Tooltip` replacements
- tooltips that compensate for unclear visible labels

## Required props

```txt
children
content
side when placement matters
align when alignment matters
delayDuration when timing matters
```

## Controlled values

```txt
side: top | right | bottom | left
align: start | center | end
```

## GenAI generation rules

1. Keep tooltip content short.
2. Do not hide critical evidence or actions in a tooltip.
3. Do not use tooltip content to repair unclear labels.
4. Use visible text when the information affects trust or decisions.
5. Use `Tooltip` from the package only.

## Common generation failures

Failure: Make hides proof context in a tooltip.
Why it fails: Proof context must remain visible when it affects trust.
Fix: Use `EvidenceRow`, `EvidenceBlock` or visible supporting text.

Failure: Make puts actions in tooltips.
Why it fails: Actions must be visible and keyboard reachable.
Fix: Use `Button`, `ActionRow` or `ActionBlock`.

Failure: Make creates local tooltip behavior.
Why it fails: It creates a second interaction grammar.
Fix: Use `Tooltip` from the package.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/no-local-components.md
guidelines/evaluation/repair/missing-human-validation.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
```

## Related stories

```txt
src/design-system/stories/components/tooltip.stories.tsx
Story status: component-level Tooltip usage or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/visual-rules.contract.json
contracts/screen-architecture.contract.json
```
