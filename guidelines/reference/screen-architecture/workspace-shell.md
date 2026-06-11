# WorkspaceShell Guidelines

Status: preferred

## Purpose

`WorkspaceShell` is the top-level container for one generated decision workspace.

Use it to give the screen a stable frame before adding navigation, filters, lists or detail panels.

## Use this component when

- Generating a complete desktop decision screen.
- The screen needs page-level structure, spacing and hierarchy.
- The user must review, prioritize or act on operational information.

## Do not use this component when

- Generating a small embedded widget.
- Creating a modal-only flow.
- Rebuilding the page shell with custom wrappers.

## Prefer this component over

- Local app shell, dashboard shell, page wrapper or layout components.
- Raw `main` / `section` scaffolding used as a local design system.

## Never generate

- Multiple competing page shells.
- Decorative hero sections inside the shell.
- Local branded shell components.

## Required props

Use clear page content and controlled children.

Do not invent shell-specific styling props.

## Controlled values

No controlled values beyond the public component API.

## GenAI generation rules

- Start the screen with `WorkspaceShell`.
- Place `PageHeading` near the top.
- Add scope controls before review content when filtering matters.
- Use package components for all inner structure.

## Common generation failures

- Building a local shell.
- Adding marketing-style decoration.
- Creating multiple scroll containers without need.
- Making every section visually equal.

## Repair prompt

Use `guidelines/evaluation/repair/no-local-components.md` when a local shell is created.

Use `guidelines/evaluation/repair/weak-layout.md` when the workspace hierarchy is unclear.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#WorkspaceShell
contracts/components.contract.json
contracts/visual-rules.contract.json
```
