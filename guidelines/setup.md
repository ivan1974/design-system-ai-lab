# Setup — Design System AI Lab

## Purpose

This file explains only how Figma Make should set up `design-system-ai-lab` in generated React screens.

It is package setup guidance, not generation strategy.

For generation rules, read `Guidelines.md` and `runtime/*`.

---

## Install

Use the published package:

```bash
npm install design-system-ai-lab
```

Do not copy, recreate or vendor the design system locally.

---

## Required imports

Import components from the package root only:

```tsx
import {
  WorkspaceShell,
  PageHeading,
  FilterBar,
  MasterDetailLayout,
  WorkspaceDetailPanel,
  ListContainer,
  ActionRow,
} from "design-system-ai-lab";
```

Import only the components the generated screen uses.

Do not import from internal package paths.

---

## Stylesheet import

Import styles once in `App.tsx`:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import package styles more than once.

Do not create a replacement stylesheet for package components.

---

## Public entry points

Supported public entry points:

```txt
design-system-ai-lab
= public component and pattern API

design-system-ai-lab/styles.css
= public stylesheet entry point
```

The package should expose only:

```txt
.
./styles.css
```

Use the public API only.

---

## Forbidden imports and paths

Do not import from:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
./src/design-system/*
packages/design-system-ai-lab/*
```

Do not create:

```txt
components/ui
src/components/ui
src/design-system
packages/design-system-ai-lab
```

---

## No local design system

Do not create local substitutes such as:

```txt
PremiumCard
BrandPanel
GlassSurface
StatusChip
CustomTabs
CustomButton
CustomSelect
LocalCard
MetricTile
```

Use package components, patterns and forms first.

If the exact component is uncertain, simplify the screen instead of creating a local visual system.

---

## Contracts

Machine-readable contracts live in:

```txt
contracts/package.contract.json
contracts/components.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```

Contracts are the testable form of active rules.

They are not a second source of truth.
