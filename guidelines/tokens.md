# Tokens — Design System AI Lab

## Purpose

This file is the v0.8 token usage contract for Figma Make.

The v0.8 token system converts the shared prototype visual grammar into package tokens. Brand and product references from the prototype are anonymized, but the visual rules are preserved.

For active visual generation rules, read:

```txt
runtime/visual-rules.md
```

For the machine-readable token contract, read:

```txt
contracts/tokens.contract.json
```

---

## Required rule

Use tokens through package components first.

Do not invent spacing, color, radius, shadow or typography systems.

Do not create a local token system.

---

## Canonical token file

The canonical token file is:

```txt
src/design-system/foundations/tokens.css
```

Do not create:

```txt
src/design-system/tokens.css
```

The public stylesheet entry is:

```txt
src/design-system/styles.css
```

It imports the canonical foundation tokens and exposes Figma Make / shadcn-compatible aliases.

---

## Stylesheet requirement

Import package styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not redefine package tokens locally.

Do not create a local `:root` theme.

Do not create a competing visual identity.

---

## Token namespace

The package token namespace is:

```txt
--ec-*
```

Do not create a parallel namespace such as:

```txt
--brand-*
--app-*
--custom-*
--theme-*
```

---

## Prototype-derived token groups

v0.8 requires these token groups across the active design system surface:

```txt
colors
typography
spacing
radius
borders
density
table alignment
panel behavior
card density
button style
tag and pill style
white-first surfaces
```

The prototype-derived baseline is:

```txt
surface: white-first
body background: #ffffff
body text: #030213
muted text: #717182
border: rgba(0, 0, 0, 0.1)
input background: #f3f3f5
radius: 0.625rem
accent: --ec-color-primary
accent hover: --ec-color-primary-hover
```

The accent color is used as an anonymized brand accent. Do not expose proprietary brand or product references.

---

## shadcn-compatible aliases

`styles.css` exposes compatibility aliases for Figma Make and shadcn-like generation:

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
--ring
--radius
```

These aliases must map back to `--ec-*` tokens. They are compatibility aliases, not a second token namespace.

---

## Component-first usage

Before using manual token styling, use approved package components and patterns.

Prefer:

```txt
WorkspaceShell
PageHeading
SectionHeading
MasterDetailLayout
WorkspaceDetailPanel
SidePanel
ListContainer
Table
Tabs
MetricStrip
ActionRow
EvidenceRow
StatusPill
SemanticTag
Screen-contract patterns
```

Manual token usage may support small layout needs.

Manual token usage must not recreate an existing component or pattern.

---

## Do not generate

Do not generate:

```txt
new color palettes
local spacing scales
local radius scales
local shadow systems
arbitrary token values
decorative gradients
custom chips, badges, pills or buttons
visual emphasis that makes weak evidence look stronger
proprietary brand or product references from the source prototype
```

---

## Review checklist

After generation, verify:

```txt
styles are imported once
--ec-* tokens are not redefined
no local token namespace exists
no new visual scale exists
package components are used before manual styling
trust-sensitive information remains readable
prototype brand references are anonymized
visual grammar is preserved across all active examples
```
