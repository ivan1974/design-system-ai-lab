# Figma Make shadcn-like baseline

## Status

Source observation for v0.7.0 primitive strategy.

## Source

A generated Figma Make project can include a shadcn-like baseline.

Observed file and folder signals:

```txt
default_shadcn_theme.css
src/app/components/ui/button.tsx
src/app/components/ui/sheet.tsx
src/app/components/ui/dialog.tsx
src/app/components/ui/tabs.tsx
src/app/components/ui/table.tsx
src/app/components/ui/select.tsx
src/app/components/ui/scroll-area.tsx
```

Observed dependency signals include Radix primitives such as:

```txt
@radix-ui/react-dialog
@radix-ui/react-tabs
@radix-ui/react-select
@radix-ui/react-tooltip
@radix-ui/react-popover
@radix-ui/react-dropdown-menu
```

## Interpretation

Figma Make appears comfortable generating React, Tailwind and Radix UI through a shadcn-like local primitive structure.

This is useful for DS implementation alignment.

It is not permission for generated screens to use local `components/ui` imports.

## DS implication

The DS should make its internal primitive implementation familiar to this generation model while preserving a strict public package surface.

```txt
Figma Make may think in shadcn-like primitives.
Figma Make must output design-system-ai-lab public imports.
```

## Generation boundary

Generated examples must not contain:

```txt
components/ui
@radix-ui/*
default_shadcn_theme.css
local primitive wrappers
```

Generated examples must contain:

```txt
import { ... } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```
