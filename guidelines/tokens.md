# Tokens

## Status

```txt
ROOT GUIDELINE / TOKENS / FIGMA MAKE
```

## Purpose

This file explains which design tokens Figma Make should use when generating screens for this kit.

Use tokens through existing design-system components and Tailwind utilities whenever possible.

Do not invent a parallel token system.

Do not hard-code visual values when an existing token or component style already expresses the intent.

---

## Core rule

Use existing tokens through the design system.

```txt
component first
token second
custom value last
```

Generated screens should usually not need custom token values.

If a layout needs custom spacing or sizing, use standard Tailwind utility values rather than arbitrary inline styles.

---

## Current token model

The project uses CSS variables exposed to Tailwind theme values.

Core semantic tokens include:

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

Sidebar and chart tokens also exist, but should only be used when the screen genuinely needs sidebar or chart context.

---

## Tailwind token aliases

Tokens are exposed through Tailwind theme aliases such as:

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

Use these semantic utilities instead of arbitrary colors.

---

## Radius tokens

Use the radius system through Tailwind radius utilities.

Available radius aliases include:

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

Do not hard-code border radius values unless the prompt explicitly requires a special visual treatment and no component fits.

---

## Typography tokens

The base typography uses project CSS variables and Tailwind text utilities.

Prefer standard text utilities and component-provided typography.

Use semantic hierarchy before changing sizes manually.

Good:

```txt
clear title
short description
section label
body text
helper text
```

Avoid:

```txt
large arbitrary text for decoration
multiple competing heading sizes
visual hierarchy created only by font size
```

---

## Color usage

Use color for meaning.

Use the neutral surface tokens for most interface structure:

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

Do not create arbitrary palettes.

Do not make weak evidence look stronger through color.

Do not communicate status by color alone.

---

## State and focus tokens

Use existing component focus styles.

Do not remove visible focus states.

Use ring/focus tokens through component APIs or Tailwind utilities only when needed.

Avoid inline focus styling.

---

## Spacing and layout

Prefer Tailwind spacing utilities and component spacing.

Use spacing to clarify:

```txt
page structure
section grouping
relationship between signal, evidence and action
list density
panel hierarchy
```

Avoid spacing used only for decorative emptiness.

Do not use arbitrary pixel values for common layout spacing.

---

## Do not invent these

Do not invent new token names such as:

```txt
--ec-primary
--ec-surface
--ec-card
--brand-green
--ai-color
--risk-orange
--success-glow
```

If a semantic need is not represented by a token, use existing semantic tokens and readable text labels.

---

## Review checklist

Before accepting generated code, verify:

```txt
semantic Tailwind utilities are used instead of arbitrary colors
existing component styling is not recreated manually
radius uses standard rounded utilities
focus styles are preserved
status is not communicated by color alone
custom inline styles are avoided
no fictional tokens are introduced
```

---

## Final principle

Tokens support consistency.

They should make the interface calmer and more predictable.

They should not become a place for GenAI to invent a new visual system.
