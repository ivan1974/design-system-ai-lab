# Styles — Design System AI Lab

## Purpose

This file is a short CSS usage contract for Figma Make.

It is not the full visual strategy.

For active visual generation rules, read:

```txt
runtime/visual-rules.md
```

---

## Required stylesheet import

Import package styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import package styles more than once.

Do not replace package styles with local CSS.

---

## Use package styling first

Use package components, patterns and forms before custom CSS.

Prefer:

```txt
WorkspaceShell
PageHeading
SectionHeading
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

Do not recreate these with styled `div`s.

---

## Do not create local visual systems

Do not create:

```txt
custom cards
custom buttons
custom badges
custom tabs
custom rows
custom drawers
custom forms
custom shadows
custom gradients
custom color palettes
custom typography systems
```

Do not create local wrappers that compete with the package design system.

---

## CSS limits

Use custom CSS only for small layout support when no package component fits.

Custom CSS must not:

```txt
override package component identity
create a new visual language
hide uncertainty
make weak evidence look stronger
style expected outcomes as proven value
style internal proof as customer-ready proof
```

---

## Visual blockers

Repair the screen if it contains:

```txt
glassmorphism
decorative gradients
heavy shadows
glow effects
card-saturated layouts
colored cards for every status
local component styling systems
visual treatments that hide uncertainty
```

---

## Review checklist

After generation, verify:

```txt
styles are imported once
no local visual system is created
package components provide hierarchy
repeated objects use rows or lists
business patterns are used before generic cards
source scope, source strength, freshness and validation remain readable
status is not communicated by color alone
visual emphasis does not overstate trust
```

---

## Final rule

If a visual choice does not improve clarity, hierarchy, trust or actionability, do not add it.
