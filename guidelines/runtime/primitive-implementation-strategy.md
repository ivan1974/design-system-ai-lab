# Primitive implementation strategy

## Status

```txt
ACTIVE RUNTIME / PRIMITIVE ARCHITECTURE / FIGMA MAKE
```

## Core rule

Use shadcn-compatible Radix and Tailwind implementation patterns internally.

Generate only public `design-system-ai-lab` components externally.

## What this means

The DS may implement primitives using patterns familiar from shadcn-like generated projects.

Figma Make must still import only from the package root:

```tsx
import { Button, SidePanel, Tabs } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

## Forbidden generated imports

Generated examples must not import from:

```txt
@radix-ui/*
@/components/ui
./components/ui
components/ui
src/design-system/internal
src/design-system/primitives
```

## Selection rule

If a DS public component exists, use it.

If a DS public component does not exist, report a missing DS capability instead of creating a local shadcn component.

## Primitive versus business component

Use primitives only for generic structure.

Use business components and screen-contract components when the contract defines them.

Examples:

```txt
Use SidePanel for generic right-side panels.
Use AssetDetailAnalysisPanel when the Installed Base contract requires the asset detail panel.
Use HealthPill for health state.
Use AssetInventoryRow when the screen contract requires an asset row.
```

## Migration rule

Primitive implementations may change radically.

Public generation APIs must remain contract-controlled.

## Final check

Before final output, verify:

```txt
no components/ui import
no @radix-ui direct import
no internal primitive import
public DS import exists
stylesheet import exists
screen contract still controls screen structure
props contract still controls enum-like values
```
