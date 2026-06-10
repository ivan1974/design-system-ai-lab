# FilterBar Guidelines

Status: preferred

## Purpose

`FilterBar` defines review scope before the user inspects a workspace, queue or decision list.

Use it to make scope visible, not to create a generic search dashboard.

## Use this component when

- The user must filter by customer, site, asset, status, priority or timeframe.
- The selected scope changes the list or detail content.
- Partial visibility must remain explicit.

## Do not use this component when

- There is no meaningful scope choice.
- A simple heading metadata line is enough.
- Raw form controls would be used only for decoration.

## Prefer this component over

- Local filter rows.
- Raw `select`, `input` or `button` controls.
- Search bars that hide operational scope.

## Never generate

- Filter controls without labels.
- Filters that imply unavailable data.
- Decorative filters that do not affect the screen.

## Required props

Use labeled filters with clear selected values.

Use public package controls only.

## Controlled values

Use controlled values from the relevant domain and props contracts when filtering by status, priority, readiness or validation state.

## GenAI generation rules

- Place scope controls before review content.
- Keep selected scope visible.
- Do not invent filter options.
- Show partial scope when data coverage is incomplete.

## Common generation failures

- Raw HTML filters.
- Unlabeled controls.
- Filters with invented statuses.
- Scope hidden after selection.

## Repair prompt

Use `guidelines/evaluation/repair/raw-form-controls.md` when raw controls are generated.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#FilterBar
contracts/props.contract.json
contracts/domain-model.contract.json
```
