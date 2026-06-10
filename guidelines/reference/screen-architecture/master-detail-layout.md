# MasterDetailLayout Guidelines

Status: preferred

## Purpose

`MasterDetailLayout` organizes a review queue and the selected item detail.

Use it when the user must compare repeated objects and inspect one item without losing context.

## Use this component when

- A screen has a list of customers, assets, recommendations, risks or actions.
- Selecting an item should reveal supporting detail.
- The decision depends on both queue context and selected detail.

## Do not use this component when

- There is only one object to review.
- A simple stack of sections is clearer.
- The detail panel would repeat the same information as the list.

## Prefer this component over

- Card grids for operational review queues.
- Custom split-pane layouts.
- Multiple disconnected lists and panels.

## Never generate

- A detail panel with no selected item.
- Multiple competing detail panels.
- Card-saturated layouts instead of rows.

## Required props

Provide list content and detail content that clearly correspond to the selected item.

## Controlled values

Follow `contracts/props.contract.json#MasterDetailLayout`.

```txt
detailMode: inline, overlay
detailWidth: sm, md, lg
```

Do not invent `detailMode` or `detailWidth` values.

## GenAI generation rules

- Put repeated objects in the master/list area.
- Put evidence, explanation and follow-through in the detail area.
- Keep the selected item visually clear.
- Do not hide primary actions under unrelated detail.

## Common generation failures

- Generic dashboard grids.
- Detail content that does not match the selected row.
- Too many equal cards.
- No visible selected state.

## Repair prompt

Use `guidelines/evaluation/repair/weak-layout.md` for unclear master/detail structure.

Use `guidelines/evaluation/repair/missing-detail-panel.md` when detail is absent.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#MasterDetailLayout
contracts/props.contract.json#MasterDetailLayout
contracts/screen-architecture.contract.json
```
