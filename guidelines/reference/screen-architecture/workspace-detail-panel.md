# WorkspaceDetailPanel Guidelines

Status: preferred

## Purpose

`WorkspaceDetailPanel` shows decision detail for the selected item in a workspace.

Use it to reveal evidence, validation, explanation and owned follow-through without overloading the first level.

## Use this component when

- A selected customer, asset, recommendation, risk or proof item needs detail.
- Evidence or action context should be secondary but available.
- `DetailPanel` would otherwise be used in a new generated workspace.

## Do not use this component when

- There is no selected object.
- The screen is a single-form workflow.
- The detail duplicates the row without adding decision value.

## Prefer this component over

- `DetailPanel` for new GenAI workspace output.
- Local slide-over or side-panel wrappers.
- Card stacks used as a pseudo-detail area.

## Never generate

- Empty detail panels.
- Detail panels without clear selected context.
- Evidence hidden when trust affects the decision.

## Required props

Show selected item title or context.

Include evidence, validation and action sections when they affect the decision.

## Controlled values

Follow `contracts/props.contract.json#WorkspaceDetailPanel`.

```txt
mode: inline, overlay, section
```

Do not invent `mode` values.

## GenAI generation rules

- Keep summary first.
- Move supporting evidence into the panel when possible.
- Keep owner, due date and priority visible for actions.
- Do not use this panel to hide the only primary action.

## Common generation failures

- Missing selected context.
- Using local panel components.
- Showing all evidence at first level.
- Hiding validation status for customer-sensitive content.

## Repair prompt

Use `guidelines/evaluation/repair/missing-detail-panel.md` when selected detail is missing or weak.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#WorkspaceDetailPanel
contracts/props.contract.json#WorkspaceDetailPanel
contracts/domain-model.contract.json
contracts/evidence-and-trust.contract.json
```
