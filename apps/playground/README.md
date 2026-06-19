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

## Command

```bash
pnpm playground
```

## Current scope

The first version ships with two static sample proposals.

Future versions should allow CLI-generated runs from `outputs/<run-id>/` to be copied or linked into `apps/playground/generated/<run-id>/`.
