# Popover

## Status

v0.7.0 shadcn-compatible primitive.

## Purpose

Use `Popover` for lightweight contextual content that appears from a trigger without changing the screen structure.

`Popover` is a public DS primitive. It may use Radix internally, but generated screens must import only from `design-system-ai-lab`.

## Use when

- a small filter group needs temporary display;
- a compact control needs additional options;
- contextual metadata is useful but secondary;
- the user should remain in the current workspace.

## Do not use when

- the content requires a full right-side analysis panel;
- the screen contract requires `SidePanel` or a specific panel component;
- the content contains large evidence, history or documents;
- the action requires confirmation or modal focus.

## Controlled values

- `side`: `top`, `right`, `bottom` or `left`
- `align`: `start`, `center` or `end`

## Generation rules

Use `Popover` for lightweight content only.

Use `SidePanel` for structured filter panels or analysis panels when the screen contract requires it.

Do not import `@radix-ui/react-popover` or local `components/ui/popover` in generated examples.
