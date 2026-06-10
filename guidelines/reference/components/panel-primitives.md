# Panel Primitives Guidelines

## Purpose

Panel primitives support lower-level panel composition.

They are not the preferred selected-item detail pattern for new generated workspaces.

## Use this component when

- Maintaining lower-level panel structures.
- A simple panel header, body or footer is enough.
- The screen does not need the full `WorkspaceDetailPanel` pattern.

## Do not use this component when

- The user is reviewing a selected row; use `WorkspaceDetailPanel`.
- The panel is a short confirmation flow; use `Dialog`.
- The panel becomes a custom layout system.

## Prefer this component over

- local panel headers
- local panel footers
- custom panel structure

Prefer for new selected detail:

```txt
WorkspaceDetailPanel
```

## Never generate

- panel primitives as a replacement for `WorkspaceDetailPanel`
- local side-panel components
- panel layouts that hide selected-item context

## Required props

```txt
children
```

Use title, actions or close controls only when the primitive supports them.

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use `WorkspaceDetailPanel` first for selected-item detail.
2. Use lower-level panel primitives only when a full panel pattern is not needed.
3. Keep header, body and footer roles clear.
4. Do not create local panel systems.

## Common generation failures

Failure: Make builds selected-item detail from low-level panel primitives.
Why it fails: The preferred v0.5.1 component is `WorkspaceDetailPanel`.
Fix: Replace with `WorkspaceDetailPanel`.

Failure: Make creates local panel wrappers.
Why it fails: It creates a competing layout system.
Fix: Use package panel primitives or `WorkspaceDetailPanel`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/missing-detail-panel.md
guidelines/evaluation/repair/no-local-components.md
```

## Related stories

```txt
Story status: lower-level primitives. Use WorkspaceDetailPanel story proof for new generation unless a panel primitive story exists.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/screen-architecture.contract.json
```
