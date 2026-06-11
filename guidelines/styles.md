# Styles — Design System AI Lab

## Purpose

This file is the v0.8 CSS usage contract for Figma Make.

The shared prototype defines the visual quality bar for all active design system components. Source references are anonymized, but the visual grammar is preserved.

For active visual generation rules, read:

```txt
runtime/visual-rules.md
```

For tokens, read:

```txt
guidelines/tokens.md
contracts/tokens.contract.json
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

## Canonical CSS files

Use:

```txt
src/design-system/styles.css
src/design-system/foundations/tokens.css
```

Do not create:

```txt
src/design-system/tokens.css
```

`styles.css` owns Figma Make and shadcn-compatible aliases.

`foundations/tokens.css` owns the `--ec-*` token values.

---

## v0.8 visual baseline

Generated screens must use:

```txt
white-first surfaces
neutral borders before shadows
compact typography
compact controls
compact tags and pills
dense rows
subtle selected states
table-first alignment for operational inventories
right-side or inline panels with independent scroll
sticky action areas when decisions need follow-through
```

The baseline values are:

```txt
body background: #ffffff
surface: #ffffff
muted surface: #f3f3f5
text: #030213
muted text: #717182
border: rgba(0, 0, 0, 0.1)
input background: #f3f3f5
radius: 0.625rem
accent: --ec-color-primary
```

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
local shadcn themes
local root themes
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
expose source prototype labels
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
local token namespaces
source prototype labels that were not anonymized
```

---

## Review checklist

After generation, verify:

```txt
styles are imported once
no local visual system is created
package components provide hierarchy
repeated objects use rows or lists
screen-contract patterns are used for contractual screens
source scope, source strength, freshness and validation remain readable
status is not communicated by color alone
visual emphasis does not overstate trust
source references are anonymized
```

---

## Final rule

If a visual choice does not improve clarity, hierarchy, trust or actionability, do not add it.
