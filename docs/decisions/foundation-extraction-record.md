# Foundation extraction record

## Purpose

This document records the first technical extraction of foundation styles into the design-system layer.

It complements:

```txt
docs/foundation-principles/foundation-style-audit.md
docs/reboot/roadmap.md
docs/source/prototype/zip-analysis.md
```

The goal of this step was to create a stable foundation entry point without changing the prototype UI.

## Phase

```txt
Phase 2 — Minimal design system extraction
Step 2.1 — Foundations / tokens
```

## Decision summary

Create a new foundation layer under:

```txt
src/design-system/foundations/
```

and route the existing application style entry point through it.

This establishes the intended boundary:

```txt
src/styles/index.css = compatibility wrapper
src/design-system/foundations/* = design-system foundation source
```

## Files added

```txt
src/design-system/foundations/index.css
src/design-system/foundations/tailwind.css
src/design-system/foundations/theme.css
```

## Files intentionally kept

```txt
src/styles/index.css
src/styles/fonts.css
```

## Current import flow

```txt
src/main.tsx
→ src/styles/index.css
→ src/design-system/foundations/index.css
→ src/styles/fonts.css
→ src/design-system/foundations/tailwind.css
→ src/design-system/foundations/theme.css
```

## Why `src/styles/index.css` still exists

`src/styles/index.css` remains as a compatibility wrapper.

This avoids changing the app entry point while the project is still in the prototype stabilization phase.

Current role:

```txt
stable app-facing style import
compatibility wrapper
transition point between prototype app and design-system foundations
```

Future role:

```txt
remove or keep only if needed for app-specific overrides
```

## Why `fonts.css` was not fully moved yet

`src/styles/fonts.css` still contains the imported Inter font rule and global font-family assignment.

It remains in its original location for now because the first extraction is conservative and focused on re-routing the foundation entry point.

Current risk:

```txt
fonts.css uses a universal selector for font-family.
This preserves prototype parity but is not a final typography foundation architecture.
```

Future action:

```txt
Move or recreate typography foundation under src/design-system/foundations/fonts.css.
Replace the universal selector with an intentional base typography rule after visual parity is protected.
```

## Why `theme.css` was not split yet

`src/design-system/foundations/theme.css` currently keeps the generated theme structure intact.

It still contains:

```txt
:root semantic variables
.dark variables
Tailwind v4 @theme inline mapping
base layer defaults
basic typography defaults
```

This is intentional.

Splitting the file too early would increase the risk of changing the UI before the foundation layer is stable.

Future split candidates:

```txt
tokens.css = semantic variables and radii
theme.css = Tailwind v4 @theme inline mapping
base.css = body, border, outline and element defaults
fonts.css = font loading and font-family baseline
```

## Tailwind source path adjustment

Because `tailwind.css` moved from `src/styles` to `src/design-system/foundations`, its source path was adjusted.

Current path:

```css
@source '../../**/*.{js,ts,jsx,tsx}';
```

This keeps Tailwind scanning the source tree after the file move.

## Validation

The extraction is accepted only if the following commands pass locally:

```bash
npm run build
npm run dev
```

Current validation status:

```txt
validated locally after re-routing
```

## What did not change

This extraction did not change:

```txt
colors
spacing
radius
typography scale
component styles
layout
screen structure
component APIs
prototype behavior
```

## What this enables

This creates the first stable foundation boundary for future extraction work.

The project can now start moving from generated prototype styling toward design-system-owned foundations while preserving UI parity.

## Next recommended step

Proceed to primitive extraction only after this foundation boundary is stable.

Recommended next phase:

```txt
Phase 2.2 — Primitive extraction
```

Initial targets:

```txt
Button
Badge
Pill
Tag
```

The next step should not redesign these primitives.

It should identify the smallest reliable interface material already present in the prototype and extract it without changing the UI.
