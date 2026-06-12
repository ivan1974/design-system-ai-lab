# Foundation style audit

## Purpose

This document audits the current styling files imported from the Figma Make prototype before moving styles into the design-system foundation layer.

The goal is not to redesign the UI.

The goal is to identify what can become stable, reusable foundation material while preserving visual and behavioral parity.

This audit supports:

```txt
Phase 2 — Minimal design system extraction
Step 2.1 — Foundations / tokens
```

## Current status

The app currently builds and runs using the imported prototype styles.

Current style entry point:

```txt
src/styles/index.css
```

Current style files:

```txt
src/styles/fonts.css
src/styles/index.css
src/styles/tailwind.css
src/styles/theme.css
default_shadcn_theme.css
```

## Guiding principle

The first foundation extraction should transform generated styles into named, stable and reusable foundations.

It should not change the UI.

```txt
generated styles
→ named foundation files
→ stable design-system foundation layer
```

No visual redesign should happen during this step.

## File audit

### `src/styles/index.css`

Current role:

```txt
Application style entry point.
Imports fonts, Tailwind and theme files.
```

Current content:

```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
```

Classification:

```txt
foundation entry point candidate
```

Keep / move / rename:

```txt
Move into src/design-system/foundations/index.css later.
Keep as the app import path only until the foundation layer is created and validated.
```

Do not normalize yet:

```txt
Do not split imports further until the foundation directory exists.
Do not change import order unless build output is validated.
```

### `src/styles/fonts.css`

Current role:

```txt
Imports Inter from Google Fonts.
Applies Inter globally to all elements.
```

Current content:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
```

Classification:

```txt
foundation typography candidate
```

Keep / move / rename:

```txt
Move into src/design-system/foundations/fonts.css later.
Keep Inter as the current prototype typography baseline.
```

Risks:

```txt
The universal selector applies font-family to every element.
This is acceptable for prototype parity but should later be replaced by a more intentional base typography rule.
```

Do not normalize yet:

```txt
Do not change font loading strategy yet.
Do not replace Google Fonts with local assets in this phase.
Do not introduce a typography scale yet.
```

### `src/styles/tailwind.css`

Current role:

```txt
Tailwind v4 import and source scanning configuration.
Imports tw-animate-css.
```

Current content:

```css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';

@import 'tw-animate-css';
```

Classification:

```txt
foundation build configuration candidate
```

Keep / move / rename:

```txt
Move into src/design-system/foundations/tailwind.css later.
Keep current Tailwind v4 setup until build parity is confirmed after move.
```

Risks:

```txt
The @source path is relative to the current file location.
Moving this file will require updating the source path.
```

Likely required change after move:

```css
@source '../../**/*.{js,ts,jsx,tsx}';
```

Do not normalize yet:

```txt
Do not reduce Tailwind source scanning yet.
Do not remove tw-animate-css until component usage is audited.
```

### `src/styles/theme.css`

Current role:

```txt
Defines generated shadcn-compatible CSS variables.
Defines dark-mode variables.
Maps variables to Tailwind v4 @theme inline tokens.
Adds base layer defaults for border, body and basic typography elements.
```

Classification:

```txt
foundation token candidate
base style candidate
generated shadcn theme source
```

Important sections:

```txt
:root variables
.dark variables
@theme inline token mapping
@layer base reset and typography defaults
```

Keep / move / rename:

```txt
Move into src/design-system/foundations/theme.css or split later into tokens.css + base.css.
For the first technical move, keep the file intact to preserve UI parity.
```

Risks:

```txt
The file mixes tokens, dark-mode values, Tailwind theme mapping and base element styles.
This is acceptable for prototype import but not ideal as a long-term foundation architecture.
```

Do not normalize yet:

```txt
Do not split tokens and base styles in the first move.
Do not rename variables yet.
Do not remove dark-mode variables yet, even if dark mode is not currently a product priority.
Do not redesign typography defaults yet.
```

Future normalization candidates:

```txt
tokens.css = raw semantic variables and radii
color.css = color aliases if needed
typography.css = font family, weights, html/body and text element defaults
base.css = body, border and outline defaults
theme.css = Tailwind v4 @theme inline mapping
```

### `default_shadcn_theme.css`

Current role:

```txt
Reference copy of the default generated shadcn theme.
Contains root variables, dark variables and @theme inline mapping.
Does not include the base typography layer present in src/styles/theme.css.
```

Classification:

```txt
generated reference file
comparison baseline
not a runtime foundation file
```

Keep / move / rename:

```txt
Keep as a source reference for now.
Do not import it into the app.
Do not move it into src/design-system/foundations yet.
```

Risks:

```txt
It duplicates a large part of src/styles/theme.css.
It may confuse future contributors if its role is not documented.
```

Recommended later action:

```txt
Move to docs/source/prototype/default-shadcn-theme.css or docs/source/prototype/shadcn-theme-reference.css.
```

Do not normalize yet:

```txt
Do not delete it until the foundation extraction is stable.
Do not use it as the live theme source.
```

## Current foundation candidates

The following material is safe to treat as early foundation material:

```txt
Inter font family baseline
font weights 400 / 500 / 600 / 700
base font size 16px
semantic color variables
radius variable and radius scale
border / ring / input variables
Tailwind v4 @theme inline mapping
basic body foreground/background mapping
```

These are candidates, not yet final tokens.

## Prototype-specific or temporary material

The following should not be treated as final design-system decisions yet:

```txt
universal font-family selector
full shadcn default color set
chart color variables
sidebar variables
dark-mode values
base typography defaults for h1-h4, label, button and input
all dependency-related style imports
```

They may stay during parity-preserving extraction, but they need later review.

## Recommended target structure

Initial target structure:

```txt
src/design-system/
  foundations/
    index.css
    fonts.css
    tailwind.css
    theme.css
```

Do not create a large token architecture yet.

Recommended later structure, only after parity is stable:

```txt
src/design-system/
  foundations/
    index.css
    fonts.css
    tokens.css
    theme.css
    base.css
```

## First technical move

Recommended first move:

```txt
1. Create src/design-system/foundations/
2. Copy or move current style files into foundations
3. Update import path from src/styles/index.css to src/design-system/foundations/index.css
4. Update Tailwind @source path after the move
5. Run npm run build
6. Compare visual output manually
```

Recommended import target:

```txt
src/design-system/foundations/index.css
```

Recommended temporary compatibility option:

```txt
Keep src/styles/index.css as a short compatibility wrapper that imports ../design-system/foundations/index.css.
```

This reduces risk while the app is still in transition.

## What not to do yet

Do not:

```txt
rename every CSS variable
split every token into categories
remove dark mode
remove chart variables
remove sidebar variables
remove tw-animate-css
replace Google Fonts
redesign typography scale
change colors
change spacing
change radius
change component styles
```

## Acceptance criteria for the next step

The foundation move is acceptable only if:

```txt
npm run dev starts
npm run build passes
the prototype remains visually equivalent
style entry point is clearly owned by src/design-system/foundations
src/styles is either removed or reduced to a compatibility wrapper
```

## Decision

Proceed with a conservative foundation extraction.

The first technical extraction should move the existing style system into `src/design-system/foundations` without changing the visual language.

The deeper token normalization should happen only after the foundation entry point is stable.
