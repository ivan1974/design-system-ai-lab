# Runtime Visual Rules

## Status

```txt
ACTIVE RUNTIME / VISUAL RULES / FIGMA MAKE / v0.8
```

This file contains the active visual rules Figma Make must apply when generating screens with `design-system-ai-lab`.

The v0.8 visual system is extracted from the shared prototype. Source references are anonymized, but the visual grammar is preserved.

For tokens, read:

```txt
guidelines/tokens.md
contracts/tokens.contract.json
```

---

## Core visual direction

Generated screens must feel:

```txt
white-first
sober
structured
B2B
operational
trust-aware
action-oriented
```

Generated screens must not feel:

```txt
decorative
glassmorphic
marketing-like
consumer-app-like
gradient-heavy
card-saturated
shadow-heavy
```

---

## v0.8 prototype-derived baseline

Use the package token grammar for the whole active design system surface, not only for Installed Base.

Required baseline:

```txt
white surfaces
neutral borders
compact typography
compact controls
compact tags and pills
dense rows
table-first operational layouts
right-side or inline panels
sticky action areas when decisions need follow-through
```

Required tokenized values:

```txt
background: --ec-color-background
surface: --ec-color-surface
muted surface: --ec-color-surface-muted
text: --ec-color-text-primary
muted text: --ec-color-text-muted
border: --ec-color-border
input background: --ec-color-input-background
radius: --ec-radius-md
accent: --ec-color-primary
```

Do not copy source prototype labels, product names or company names into generated screens or docs.

---

## Surface rules

Use:

```txt
white page background
white workspace surfaces
subtle muted surfaces only for grouping
borders before shadows
spacing before decoration
```

Do not use:

```txt
glass cards
blurred panels
colored page backgrounds
large decorative gradients
heavy shadows
colored cards for every status
```

---

## Component-first visual expression

Express visual hierarchy through package components.

Prefer:

```txt
PageHeading
SectionHeading
WorkspaceShell
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

Do not create local wrappers such as:

```txt
PremiumCard
BrandPanel
GlassSurface
StatusChip
CustomTabs
MetricTile
LocalCard
```

---

## Color rules

Use the anonymized green accent only for meaningful emphasis:

```txt
primary actions
selected states
active navigation
positive status when appropriate
validated information when evidence supports it
```

Do not use green as decoration.

Do not use color to make weak, partial or unvalidated evidence look stronger.

Do not communicate status by color alone.

---

## Evidence and trust visibility

Keep the following readable when they affect trust:

```txt
source scope
source strength
freshness
validation status
proof readiness
human validation requirement
```

Do not hide uncertainty through low contrast, muted styling or visual hierarchy.

Do not style expected outcomes as proven value.

Do not style internal proof as customer-ready proof without validation.

---

## Information density

Do not make every fact, signal, proof point and action visually equal.

Show the decision-critical summary first.

Move supporting evidence and detailed explanation to a secondary level when possible.

Use:

```txt
WorkspaceDetailPanel
SidePanel
Tabs
EvidenceRow
KeyValueList
StatusSummary
```

for supporting detail.

---

## Table and row alignment

Operational inventories and review queues should prefer rows, lists and tables over card grids.

Use:

```txt
aligned columns
compact cell padding
visible object identity
status with label
source or validation context when trust matters
action affordance at row or panel level
```

Do not replace operational inventories with dashboard cards.

---

## Panel behavior

Panels should use:

```txt
white surface
subtle border
independent scroll
sticky actions when follow-through is required
360px minimum width
500px preferred max-width for dense side panels
```

Do not use blurred or glass panels.

---

## Visual blockers

Reject or repair if the screen contains:

```txt
glassmorphism
decorative gradients
heavy shadows
glow effects
card-saturated layout
custom visual system
custom button system
custom badge system
custom tab system
custom row system
colored cards for every status
visual treatment that overstates evidence strength
visual treatment that hides uncertainty
local token system
source prototype labels that were not anonymized
```

---

## Final check

Before final answer, verify:

```txt
white-first surfaces
borders before shadows
package components create hierarchy
green is used only with meaning
status is not color-only
evidence strength is not visually overstated
uncertainty remains readable
no local visual system exists
no local token system exists
source references are anonymized
```

---

## Final rule

If a visual choice does not improve clarity, hierarchy, trust or actionability, do not add it.
