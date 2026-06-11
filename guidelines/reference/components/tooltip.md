# Tooltip

## Status

v0.7.0 shadcn-compatible primitive.

## Purpose

Use `Tooltip` for short contextual help attached to a visible control, label or status.

`Tooltip` is a public DS primitive. It may use Radix internally, but generated screens must import only from `design-system-ai-lab`.

## Use when

- a label needs a short clarification;
- an icon-only action needs accessible context;
- a status needs a short explanation;
- the information is helpful but not required to make the decision.

## Do not use when

- the content is required evidence;
- the content is a recommendation;
- the content contains long history or documents;
- a screen contract requires visible text instead.

## Controlled values

- `side`: `top`, `right`, `bottom` or `left`
- `align`: `start`, `center` or `end`

## Generation rules

Keep tooltip content short.

Do not hide critical evidence or actions in a tooltip.

Do not import `@radix-ui/react-tooltip` or local `components/ui/tooltip` in generated examples.
