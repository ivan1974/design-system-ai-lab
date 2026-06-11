# ScrollArea

## Status

v0.7.0 shadcn-compatible primitive.

## Purpose

Use `ScrollArea` when a bounded section must scroll independently without losing screen context.

It is especially useful for right-side panels, dense operational lists and filter panels.

## Use when

- panel content scrolls independently;
- a list has a bounded height;
- the user must keep surrounding context visible;
- evidence, history or documents live inside a detail panel.

## Do not use when

- the whole page should scroll naturally;
- a screen contract defines a different scroll container;
- it hides the primary action;
- it creates nested scrolling without a clear reason.

## Controlled values

- `maxHeight`: `panel`, `list` or `none`

## Generation rules

Use `maxHeight="panel"` inside analysis panels.

Use `maxHeight="list"` for bounded operational lists.

Keep sticky action areas outside the scrolling content when the action must remain visible.

Do not import `components/ui/scroll-area` or local scroll wrappers.
