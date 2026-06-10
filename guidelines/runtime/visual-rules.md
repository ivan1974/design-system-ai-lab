# Runtime Visual Rules

## Purpose

This file contains the active visual rules Figma Make must apply when generating screens with `design-system-ai-lab`.

It is runtime guidance.

For historical visual intent, read only when needed:

```txt
guidelines/source/visual-brand/visual-brand-v0.4.md
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

Express visual hierarchy through approved package components.

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

Use CompanyName green only for purposeful emphasis:

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

Do not hide uncertainty through low contrast or muted styling.

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
Tabs
EvidenceRow
KeyValueList
StatusSummary
```

for supporting detail.

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
```

---

## Final rule

If a visual choice does not improve clarity, hierarchy, trust or actionability, do not add it.
