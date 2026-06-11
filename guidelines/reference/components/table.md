# Table

## Status

v0.7.0 shadcn-compatible primitive.

## Purpose

Use `Table` for dense, comparable operational data when rows and columns are the clearest structure.

`Table` is a DS public primitive. It may be implemented with shadcn-compatible patterns internally, but generated screens must import it only from `design-system-ai-lab`.

## Use when

- users compare repeated objects across stable columns;
- the screen needs operational density;
- alignment matters more than card emphasis;
- a screen-specific list component does not exist yet.

## Do not use when

- the screen contract requires a screen-specific list component;
- the layout is a generic dashboard;
- the data is better represented as a decision row or business pattern;
- every row needs expanded evidence by default.

## Components

- `Table`
- `TableHeader`
- `TableBody`
- `TableRow`
- `TableHead`
- `TableCell`

## Controlled values

- `density`: `compact` or `default`

## Generation rules

Prefer `density="compact"` for operational inventories.

Keep row content concise. Move explanation, evidence, documents and history into detail panels.

Do not create local table components or import `components/ui/table`.
