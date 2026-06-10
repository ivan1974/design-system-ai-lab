# Tokens — Design System AI Lab

## Purpose

This file is a short token usage contract for Figma Make.

It is not visual strategy.

For active visual generation rules, read:

```txt
runtime/visual-rules.md
```

---

## Required rule

Use tokens through package components first.

Do not invent spacing, color, radius, shadow or typography systems.

Do not create a local token system.

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

## Component-first usage

Before using manual token styling, use approved package components and patterns.

Prefer:

```txt
PageHeading
SectionHeading
WorkspaceShell
MasterDetailLayout
WorkspaceDetailPanel
Surface
ListContainer
MetricStrip
ActionRow
EvidenceRow
StatusPill
SourceStrengthPill
Business patterns
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
```
