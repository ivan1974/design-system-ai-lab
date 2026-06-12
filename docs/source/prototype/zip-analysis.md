# Figma Make prototype import analysis

## Purpose

This document records the initial analysis of the imported Figma Make prototype.

The goal of this phase is not to refactor the prototype yet. The goal is to preserve the product reference, make it runnable, and document what should later become design-system material.

## Import status

```txt
Status: imported and runnable
Branch: reboot/from-figma-make
Prototype: Installed Base Intelligence
Source type: Figma Make generated React/Vite prototype
```

The prototype has been imported as an application-level reference. It is not yet a reusable design system.

At this stage, the prototype should remain close to its generated form so that the team can inspect the real screen structure before extracting components, patterns, domain models, principles and contracts.

## Runtime validation

The imported prototype has been validated locally with:

```bash
npm install
npm run dev
npm run build
```

The app runs as a Vite prototype and builds successfully.

## Main application structure

The current prototype is organized around a product screen under `src/app`.

```txt
src/app/
  App.tsx
  components/
    MainNav.tsx
    PageHeader.tsx
    ViewFilterBar.tsx
    AllFiltersPanel.tsx
    AssetList.tsx
    AssetDetailPanel.tsx
    figma/ImageWithFallback.tsx
    ui/*
  data/
    assets.ts

src/styles/
  fonts.css
  globals.css
  index.css
  tailwind.css
  theme.css
```

The important product-specific files are:

```txt
src/app/App.tsx
src/app/components/MainNav.tsx
src/app/components/PageHeader.tsx
src/app/components/ViewFilterBar.tsx
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetList.tsx
src/app/components/AssetDetailPanel.tsx
src/app/data/assets.ts
```

The `src/app/components/ui` directory comes from the generated prototype support layer. It should not yet be treated as the final design-system primitive layer.

## Product screen layers

The prototype expresses a five-layer Installed Base Intelligence experience:

```txt
1. Main Navigation
2. Page Header
3. View & Filter Bar
4. Installed Base List
5. Asset Detail Panel
```

These layers are the first product reference for the reboot. They should be used to understand the target screen, not as a rigid rule for every future screen.

## Observed responsibilities

### Main Navigation

Global navigation shell for the product experience.

Likely future role:

```txt
pattern candidate: product navigation
component candidate: main navigation item / navigation rail
```

### Page Header

Context-setting area for the Installed Base Intelligence screen.

Likely future role:

```txt
pattern candidate: installed base header
component candidate: page header / context header
```

### View & Filter Bar

Controls the active view, search and filter state.

Likely future role:

```txt
pattern candidate: operational view and filter bar
component candidate: segmented view control / filter trigger / search input
```

### All Filters Panel

Advanced filter surface for Installed Base data.

Likely future role:

```txt
pattern candidate: advanced filter panel
component candidate: filter group / filter checkbox / filter section
```

### Installed Base List

Dense list of assets and operational status.

Likely future role:

```txt
pattern candidate: installed base list
component candidate: asset row / status cell / health indicator / coverage tag
```

### Asset Detail Panel

Detail and analysis surface for the selected asset.

Likely future role:

```txt
pattern candidate: asset detail panel
component candidate: tab header / evidence block / status summary / action block
```

## Domain material

The prototype includes an initial domain model in:

```txt
src/app/data/assets.ts
```

This file should be studied before extraction because it contains the first set of controlled values and domain assumptions for Installed Base Intelligence.

Future work should identify:

```txt
asset identity
asset type
location hierarchy
coverage status
health status
connectivity status
action state
recommendation or insight state
```

These values should later move toward a dedicated domain layer instead of remaining embedded in demo data.

## Styling material

The imported prototype uses Tailwind v4 style files:

```txt
src/styles/fonts.css
src/styles/index.css
src/styles/tailwind.css
src/styles/theme.css
```

Current status:

```txt
accepted for prototype import
not yet normalized as design-system tokens
```

The future extraction should distinguish:

```txt
raw generated theme values
usable foundation tokens
product-specific styling decisions
temporary prototype styling
```

## Dependency material

The generated prototype includes many dependencies because it was exported as an app-like Make artifact.

Current principle:

```txt
Do not clean dependencies aggressively during import.
First make the prototype run.
Then remove or rationalize unused dependencies during design-system extraction.
```

React and React DOM are treated as application dependencies for this reboot branch because the current artifact is a runnable Vite app, not yet a published library package.

## What this prototype is

```txt
A product-grounded reference implementation.
A runnable screen used to extract design-system material.
A source for components, patterns, principles, knowledge and contracts.
```

## What this prototype is not

```txt
Not the final design system.
Not the final package surface.
Not the final component architecture.
Not the final Make kit.
Not a stable production package.
```

## Extraction principles

During the next phase, extraction should follow this order:

```txt
1. Preserve visual and behavioral parity
2. Identify repeated UI decisions
3. Separate domain data from UI rendering
4. Extract minimal primitives only when needed
5. Extract product-specific components
6. Extract reusable patterns
7. Convert screen assumptions into guidance and guardrails
8. Add contracts only after the design intent is understood
```

The first design-system extraction should not attempt to create a universal component library. It should extract only what is needed to stabilize the Installed Base Intelligence reference.

## Known risks

### Generated app structure

The prototype is still organized as a generated app. Some files may be too large or mix concerns.

Risk:

```txt
Refactoring too early could erase useful product decisions before they are documented.
```

Response:

```txt
Document first. Extract second. Rationalize third.
```

### Dependency over-inclusion

The generated package includes many libraries that may not be used by the final design system.

Risk:

```txt
The reboot could inherit unnecessary package weight.
```

Response:

```txt
Keep dependencies during initial import. Remove unused dependencies after component extraction and build validation.
```

### Local generated UI layer

The `src/app/components/ui` layer may look like a design-system primitive layer, but it is still prototype support code.

Risk:

```txt
Treating generated UI helpers as final primitives could freeze accidental architecture.
```

Response:

```txt
Use it as raw material only. Rebuild or rename primitives intentionally later.
```

### Screen overfitting

Installed Base Intelligence is the first reference, but not every future screen should copy its structure.

Risk:

```txt
The system becomes a rigid screen generator instead of a GenAI-ready design system.
```

Response:

```txt
Extract the screen-specific contract separately from broader reusable principles and patterns.
```

## Next step

The next phase is minimal design-system extraction.

Recommended first extraction target:

```txt
foundation styles and tokens
```

Recommended first product component extraction target:

```txt
Main Navigation
```

Recommended first pattern extraction target:

```txt
Installed Base workspace structure
```
