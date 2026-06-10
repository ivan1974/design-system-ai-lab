# Package build contract

## Purpose

This file documents the package import, stylesheet and build decisions that must remain stable for Figma Make and consuming React apps.

It is part of the v0.5.0 foundation hardening work.

The goal is to make the package contract explicit before adding machine-readable generation contracts.

---

## Public package contract

The public package contract is intentionally small.

Consumers and Figma Make should import components from the package root only:

```tsx
import {
  WorkspaceShell,
  PageHeading,
  FilterBar,
  MasterDetailLayout,
  WorkspaceDetailPanel,
  Button,
} from "design-system-ai-lab";
```

Consumers and Figma Make should import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

The package exposes these entry points through `package.json`:

```txt
.
./styles.css
```

This means the supported import contract is:

```txt
design-system-ai-lab
= public component and pattern API

design-system-ai-lab/styles.css
= public stylesheet entry point
```

---

## Forbidden imports

Generated screens and consuming apps should not import from internal paths.

Forbidden examples:

```txt
design-system-ai-lab/dist/*
design-system-ai-lab/src/*
./components/ui/*
packages/design-system-ai-lab/*
```

These paths bypass the public contract and make Figma Make more likely to recreate or depend on unstable implementation details.

---

## Stylesheet decision

The package exports one stylesheet entry point:

```txt
design-system-ai-lab/styles.css
```

The library build uses a dedicated style entry:

```txt
src/design-system/style-entry.ts
```

The Vite library build emits:

```txt
dist/styles.css
```

The package build intentionally removes the generated `dist/styles.js` file after the library build because the public stylesheet contract should be CSS-only.

---

## Radix externalization strategy

Decision for v0.5.0 foundation hardening:

```txt
Externalize all Radix primitives used by the package.
```

Externalized packages:

```txt
@radix-ui/react-dialog
@radix-ui/react-dropdown-menu
@radix-ui/react-select
@radix-ui/react-tabs
@radix-ui/react-tooltip
```

Reason:

```txt
Figma Make and consuming React apps already provide a React runtime.
The design system package should avoid bundling a partial and inconsistent subset of Radix primitives.
Externalizing all used Radix packages keeps the library build consistent and avoids duplicate primitive behavior across app and package boundaries.
```

The Radix packages remain regular dependencies of `design-system-ai-lab`, so consumers installing the package should also receive the required primitives.

React and React DOM remain peer dependencies and are also externalized.

---

## Script contract

The foundation check script is:

```bash
npm run check
```

It runs:

```txt
npm run lint
npm run lint:md
npm run test
npm run build:ds
```

The Markdown lint script targets active documentation only:

```txt
README.md
guidelines/**/*.md
docs/**/*.md
```

It must not target obsolete folders.

---

## Sprint 1 script audit

The following scripts are considered critical during Sprint 1:

```txt
npm run dev
npm run build
npm run build:ds
npm run lint
npm run lint:md
npm run test
npm run storybook
npm run build-storybook
```

The connector-based repository update cannot execute these commands directly.

They should be run locally after pulling the Sprint 1 commits.

`npm run check` is the minimum pre-release foundation command.

`npm run build-storybook` should also be run before release readiness because Storybook is part of the documentation and visual review surface.

---

## Acceptance criteria

Sprint 1 foundation work is acceptable when:

```txt
npm run lint:md targets active documentation folders
npm run check exists
package root import remains the only public component import path
package stylesheet import remains design-system-ai-lab/styles.css
all used Radix primitives are consistently externalized
script audit status is documented
```

---

## Maintenance rule

Any future dependency added to the package that is used as an application-level primitive should trigger a build contract decision:

```txt
bundle it intentionally
or externalize it intentionally
```

Do not leave partial externalization decisions implicit.
