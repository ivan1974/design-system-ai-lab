# Design-system exploration playground

## Status

```txt
LOCAL PLAYGROUND / DESIGN-SYSTEM EXPLORATION CONSOLE
```

## Purpose

The playground previews generated screens in a controlled environment.

It is not only a UI preview.

It is a design-system exploration console for comparing:

```txt
proposal A
proposal B
package DS material used
local components
validation and compliance report
```

## Structure

```txt
apps/playground/
  generated/
    proposal-a/
      screen.tsx
      mock-data.ts
      metadata.ts
    proposal-b/
      screen.tsx
      mock-data.ts
      metadata.ts
  src/
    App.tsx
    main.tsx
```

## Commands

Preview the playground:

```bash
pnpm playground
```

Copy a generated run into a comparison slot:

```bash
pnpm ai:playground:add outputs/<run-id> --slot proposal-a
pnpm ai:playground:add outputs/<run-id> --slot proposal-b
```

## Current scope

The playground compares two slots: `proposal-a` and `proposal-b`.

The import command copies the generated screen, creates or copies mock data, and regenerates slot metadata from the run artifacts.
