# Package usage guidance

## Status

```txt
REFERENCE / PACKAGE USAGE / FIGMA MAKE
```

## Purpose

This file explains how Figma Make should consume the published design-system package.

Use this when the Make kit uses the package rather than copied source files.

---

## Required package import

When using the published package, generated code should import the design-system CSS once at application entry level.

```ts
import "@make-kits/ds-kit/styles.css";
```

This import is required for:

```txt
Tailwind theme utilities
CSS variables
base typography
component visual styles
focus states
surface and border tokens
```

Without this CSS import, components may render structurally but look visually unfinished.

---

## Preferred component imports

Prefer public package imports.

```ts
import { Button, Alert, Badge } from "@make-kits/ds-kit";
```

or package subpath imports when needed:

```ts
import { Button } from "@make-kits/ds-kit/design-system/primitives";
import { SearchField } from "@make-kits/ds-kit/design-system/components";
```

Avoid direct implementation paths unless Figma Make only exposes them during package inspection.

Do not import from app-local UI folders.

---

## Current public paths

The package exposes:

```txt
@make-kits/ds-kit
@make-kits/ds-kit/styles.css
@make-kits/ds-kit/design-system/primitives
@make-kits/ds-kit/design-system/components
```

---

## Do not import

Generated code should not import from:

```txt
src/app/components/ui/*
@radix-ui/*
third-party implementation packages
local design-system clones
fictional component paths
```

Primitives can depend on implementation packages internally.

Generated screens should use the public package API.

---

## Visual failure diagnosis

If the generated screen uses the correct components but the visual design looks raw, check first:

```txt
Is @make-kits/ds-kit/styles.css imported?
Is the package version current?
Is the Make kit consuming the published package rather than stale copied files?
Are custom styles overriding the package styles?
```

Do not solve missing package styles by recreating component styles locally.

---

## Final principle

Use package components through the public API.

Import package CSS once.

Do not recreate the design system inside the generated screen.
