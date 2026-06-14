# Tokens

## Status

```txt
ROOT GUIDELINE / TOKENS / FIGMA MAKE
```

## Purpose

This file explains which design tokens to use when generating screens for this kit.

Use tokens through the package stylesheet, existing design-system components and Tailwind utilities.

Do not create a parallel token system.

---

## Must

You must import the package stylesheet when generating React application code:

```tsx
import "design-system-ai-lab/styles.css";
```

You must use the design-system visual language when composing screens.

You must not invent new token names, palettes or semantic color systems.

You must not recreate component styling locally when an exported component fits.

You must not communicate status by color alone.

---

## Should

You should use existing components first when they support the brief and layout.

You should use semantic Tailwind utilities when composing locally.

You should prefer standard Tailwind spacing, radius and typography utilities over arbitrary inline styles.

You should keep custom values rare and justified by layout needs.

---

## May

You may compose local screen-specific components when exported components do not fit.

You may use Tailwind utilities for layout, spacing and alignment.

You may use a custom size or layout value when the screen cannot be expressed clearly with existing utilities, but you must preserve the design-system visual language.

---

## Selection order

Use this order:

```txt
1. Existing component style
2. Semantic token utility
3. Standard Tailwind utility
4. Custom value only when necessary
```

Generated screens should rarely need custom visual values.

---

## Current semantic tokens

The project exposes semantic CSS variables through Tailwind theme values.

Core tokens include:

```txt
--background
--foreground
--card
--card-foreground
--popover
--popover-foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--input-background
--switch-background
--ring
--radius
```

Sidebar and chart tokens also exist, but use them only when the screen genuinely needs sidebar or chart context.

---

## Tailwind token aliases

Use semantic utilities such as:

```txt
bg-background
text-foreground
bg-card
text-card-foreground
bg-popover
text-popover-foreground
bg-primary
text-primary-foreground
bg-secondary
text-secondary-foreground
bg-muted
text-muted-foreground
bg-accent
text-accent-foreground
bg-destructive
text-destructive-foreground
border-border
ring-ring
```

Use these instead of arbitrary colors.

---

## Radius

Use standard radius utilities:

```txt
rounded-sm
rounded-md
rounded-lg
rounded-xl
```

The base radius comes from:

```txt
--radius
```

Do not hard-code border radius values unless no component or standard utility fits the required layout.

---

## Typography

Use component-provided typography and standard Tailwind text utilities.

Create hierarchy through meaning first:

```txt
clear title
short description
section label
body text
helper text
explicit action label
```

Avoid:

```txt
large arbitrary text for decoration
multiple competing heading sizes
visual hierarchy created only by font size
marketing-style emphasis
```

---

## Color

Use neutral surface tokens for most structure:

```txt
background
card
popover
muted
border
foreground
muted-foreground
```

Use primary color for primary actions or strong emphasis.

Use destructive color only for destructive, high-risk or error states.

Do not make weak evidence look stronger through color.

Always pair color with explicit text when communicating status.

---

## Focus and interaction states

Use existing component focus styles.

Do not remove visible focus states.

Use ring/focus tokens only when needed.

Avoid inline focus styling.

---

## Do not invent

Do not invent token names such as:

```txt
--ec-primary
--ec-surface
--ec-card
--brand-green
--ai-color
--risk-orange
--success-glow
```

If a semantic need is not represented by a token, use existing semantic tokens and clear text labels.

---

## Review checklist

Before accepting generated code, verify:

```txt
package stylesheet is imported
semantic Tailwind utilities are used instead of arbitrary colors
existing component styling is not recreated manually
radius uses standard rounded utilities
focus styles are preserved
status is not color-only
custom inline styles are avoided or justified by layout
no fictional tokens are introduced
```

---

## Final principle

Tokens support consistency.

Use them to make the interface calmer and more predictable.

Do not use tokens as a place to invent a new visual system.
