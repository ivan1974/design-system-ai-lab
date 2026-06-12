# Popover Guidelines

## Purpose

`Popover` shows lightweight contextual content from a visible trigger without changing the screen structure.

It is a low-level core primitive for small contextual UI. It is not a drawer, modal, analysis panel, filter panel or decision workflow.

## Use this component when

- A compact control needs additional options.
- Contextual metadata is useful but secondary.
- The user should remain in the current workspace.
- The content is short enough to read without a full panel.

## Do not use this component when

- The content requires a right-side analysis panel.
- The screen contract requires `SidePanel` or a specific panel component.
- The content contains large evidence, history or documents.
- The action requires confirmation or modal focus.
- The content is necessary for trust, proof or validation.

## Prefer this component over

- local popover implementations
- custom floating panels
- temporary local overlays for compact contextual content

Prefer alternatives when the structure is larger:

```txt
structured filters -> SidePanel or screen-contract filter panel
selected item analysis -> WorkspaceDetailPanel
confirmation or creation -> Dialog
required evidence -> EvidenceRow or EvidenceBlock
```

## Never generate

- local `Popover` replacements
- popovers containing full workflows
- hidden critical evidence inside a popover
- popovers that replace contracted panels

## Required props

```txt
trigger
children
side when placement matters
align when alignment matters
open and onOpenChange when controlled
```

## Controlled values

```txt
side: top | right | bottom | left
align: start | center | end
```

## GenAI generation rules

1. Use `Popover` for lightweight content only.
2. Keep content short and contextual.
3. Do not use popovers for decision-critical evidence.
4. Do not use popovers as replacement side panels.
5. Use package components inside popovers when content includes controls.

## Common generation failures

Failure: Make uses a popover as an analysis panel.
Why it fails: Analysis needs persistent space, scanability and explicit structure.
Fix: Use `WorkspaceDetailPanel` or `SidePanel`.

Failure: Make hides evidence in a popover.
Why it fails: Trust-critical information must remain visible or structured.
Fix: Use `EvidenceRow`, `EvidenceBlock` or visible supporting text.

Failure: Make creates local floating UI.
Why it fails: It creates a second overlay grammar.
Fix: Use `Popover` from the package.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/no-local-components.md
guidelines/evaluation/repair/weak-layout.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
```

## Related stories

```txt
src/design-system/stories/components/popover.stories.tsx
Story status: component-level Popover usage or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/visual-rules.contract.json
contracts/screen-architecture.contract.json
```
