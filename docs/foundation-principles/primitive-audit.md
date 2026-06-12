# Primitive audit

## Purpose

This document audits the primitive-level UI material currently present in the Figma Make prototype before extracting any reusable primitive code.

The goal is not to redesign the UI.

The goal is to identify the smallest reliable interface material that can be extracted from a real product need while preserving visual and behavioral parity.

This audit supports:

```txt
Phase 2 — Minimal design system extraction
Phase 2.2 — Primitive extraction
```

Initial primitive targets from the roadmap:

```txt
Button
Badge
Pill
Tag
```

## Phase 3 clarification

This audit remains valid as a Phase 2 primitive extraction record.

However, the generic component vocabulary decision clarifies the target direction:

```txt
Primitive extraction must remain form-first.
Domain-specific labels, icons or states must not become primitive APIs.
Phase 3 must de-specialize product-grounded helpers into generic component vocabulary.
```

This means that examples such as `HealthBadge`, `DPPStatus` or `ConnectivityLabel` should be understood as transitional product-grounded examples, not final target component names.

The target direction is closer to:

```txt
StatusBadge
StatusIndicator
SignalDot
DataLabel
ScoreBar
```

## Guiding principle

Prototype files are not the generation API.

Primitive extraction must not turn GenAI into a rigid component assembler.

Extracted primitives should become reliable interface material that GenAI can use together with patterns, principles, domain knowledge and guardrails.

```txt
Do not extract because a UI shape exists.
Extract because a real product need repeats or must be reliable.
```

## Audit scope

Audited product files:

```txt
src/app/components/MainNav.tsx
src/app/components/PageHeader.tsx
src/app/components/ViewFilterBar.tsx
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetList.tsx
src/app/components/AssetDetailPanel.tsx
```

Supporting source:

```txt
src/app/data/assets.ts
```

The generated `src/app/components/ui/*` directory is intentionally not treated as the design-system primitive layer yet.

It may be used as reference material later, but the first extraction should be driven by the product reference, not by generated helper availability.

## High-level finding

The prototype already contains primitive candidates, but most of them are embedded inside product components.

The main repeated primitive families are:

```txt
action buttons
icon buttons
segmented buttons
filter buttons
badges
pills
tags
status labels
count indicators
selection indicators
```

However, not all of these should be extracted immediately.

The safest first targets are:

```txt
Button
Badge
Pill
Tag
```

## Candidate: Button

### Current locations

Button-like controls appear in:

```txt
src/app/components/MainNav.tsx
src/app/components/ViewFilterBar.tsx
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetDetailPanel.tsx
```

Observed examples:

```txt
Help icon button
User menu button
View switch buttons
Quick filter dropdown buttons
All Filters button
Filter option buttons
Clear All button
Apply button
Panel tab buttons
Secondary action buttons
Primary action button
Close icon buttons
```

### Product need

The Installed Base Intelligence screen needs several action types:

```txt
primary action
secondary action
filter action
icon action
segmented view action
tab action
```

These actions are critical because they drive filtering, navigation, panel control and final service actions.

### Current prototype traits

Common visual traits:

```txt
rounded-lg or rounded-md
text-[13px]
transition-colors or transition-all
neutral default state
green active or primary state
hover feedback
inline icons in some variants
```

Common interaction traits:

```txt
click action
active state
hover state
selected state
count badge in some cases
```

### Extraction recommendation

Extract a conservative `Button` primitive only if it can cover the common action surface without forcing all product-specific behaviors into one component.

Recommended first API shape:

```txt
variant: primary | secondary | ghost | filter | icon
size: sm | md
active?: boolean
icon?: ReactNode
children: ReactNode
```

Do not include domain-specific props yet.

Avoid props such as:

```txt
assetStatus
health
coverage
filterCategory
```

Those belong to product components, generic higher-level components or injected data, not the base primitive.

### Do not extract yet

Do not extract these as generic button behavior yet:

```txt
segmented view control logic
dropdown open / close logic
filter selection logic
tab navigation logic
primary service action semantics
```

Those should remain in product or pattern components until repeated needs are clearer.

## Candidate: Badge

### Current locations

Badge-like elements appear in:

```txt
src/app/components/PageHeader.tsx
src/app/components/AssetList.tsx
src/app/components/AssetDetailPanel.tsx
src/app/components/AllFiltersPanel.tsx
```

Observed examples:

```txt
Reference Campus badge
HealthBadge
HeaderBadge
active filter count badge
group asset count badge
connectivity / coverage / DPP badge row
```

### Product need

Badges provide compact status, context or classification signals.

They are important for Installed Base Intelligence because the screen must let users quickly scan:

```txt
health
coverage
connectivity
DPP availability
active filter count
portfolio context
```

### Current prototype traits

Common visual traits:

```txt
inline-flex
rounded-full
small text: text-[10px] to text-[11px]
compact horizontal padding
semantic color backgrounds
border in some cases
font-weight 500 to 700
```

### Extraction recommendation

Extract a base `Badge` primitive for compact labels.

Recommended first API shape:

```txt
variant: neutral | success | info | warning | danger
size: xs | sm
shape: pill | rounded
children: ReactNode
```

The base `Badge` should not know the Installed Base domain.

Do not turn domain examples into target component APIs.

Earlier examples such as:

```txt
HealthBadge
CoverageBadge
ConnectivityBadge
DPPBadge
```

should now be treated as transitional examples or wrappers only.

Target generic direction:

```txt
StatusBadge
StatusIndicator
DataLabel
SignalDot
ScoreBar
```

### Do not extract yet

Do not extract health semantics into the base badge.

Health-specific mapping belongs to injected data, a generic status/score configuration, or a transitional product wrapper:

```txt
Critical
Poor
Fair
Good
Excellent
Unknown
```

## Candidate: Pill

### Current locations

Pill-like controls appear mainly in:

```txt
src/app/components/AllFiltersPanel.tsx
```

Spec note in the prototype:

```txt
Health = Pill style
Coverage / DPP = Tag style
```

Health filter options are rendered as horizontal rounded selectable pills.

### Product need

Pills are used when options are short, comparable and visually scan-friendly.

In the prototype, they are especially useful for health state filtering.

### Current prototype traits

Common visual traits:

```txt
rounded-full
border
compact padding
selected and unselected states
semantic color state when selected
hover border feedback
```

### Extraction recommendation

Extract a selectable `Pill` only after clarifying whether it is needed outside Health filters.

Recommended first API shape:

```txt
selected?: boolean
variant: neutral | success | warning | danger
children: ReactNode
onClick?: () => void
```

### Do not extract yet

Do not create a health-specific `HealthPill` as a primitive.

If needed, health options should be represented through a generic `Pill` or `PillOption` with injected label, tone and active state.

## Candidate: Tag

### Current locations

Tag-like elements appear in:

```txt
src/app/components/AssetList.tsx
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetDetailPanel.tsx
```

Observed examples:

```txt
Asset type tag
Coverage / DPP filter tags
Key component tags
```

### Product need

Tags represent compact categorical metadata.

They are useful when the user needs to identify type, category or metadata without implying action priority.

### Current prototype traits

Common visual traits:

```txt
rounded-md or rounded-lg
border or neutral background
text-[11px] to text-[12px]
small horizontal padding
neutral visual tone by default
selected state in filter context
```

### Extraction recommendation

Extract a neutral `Tag` primitive for metadata display first.

Add selectable behavior only if the same visual grammar is needed in filters.

Recommended first API shape:

```txt
variant: neutral | selected
size: xs | sm
children: ReactNode
```

Optional later extension:

```txt
selectable?: boolean
onClick?: () => void
```

### Do not extract yet

Do not make every filter option a `Tag`.

Some filter options are pills, some are tags, and some are checkboxes because they communicate different scanning and selection behaviors.

## Candidate: Status label

### Current locations

Status labels appear in:

```txt
src/app/components/AssetList.tsx
src/app/components/AssetDetailPanel.tsx
```

Observed examples:

```txt
ConnectivityLabel
StatusLabel
DPPStatus
Lifecycle Status
```

### Product need

Status labels communicate operational state in a dense screen.

They are important, but they are more semantic than generic Badge / Tag / Pill primitives.

### Extraction recommendation

Do not extract as a primitive in the first pass.

Phase 3 should de-specialize these examples into generic components:

```txt
StatusIndicator
StatusBadge
SignalDot
DataLabel
ScoreBar
```

Domain values such as connectivity, health, DPP or activity should be injected as data and guided by usage rules.

## Candidate: Count indicator

### Current locations

Count indicators appear in:

```txt
src/app/components/ViewFilterBar.tsx
src/app/components/AllFiltersPanel.tsx
src/app/components/AssetList.tsx
```

Observed examples:

```txt
active filter count
group asset count
filter category selected count
```

### Extraction recommendation

Do not extract as a standalone primitive yet.

It may become a `Badge` variant, `ActiveFilterCount`, or a generic count indicator after the base `Badge` is stable.

## Candidate: Input

### Current locations

Search input appears in:

```txt
src/app/components/MainNav.tsx
```

The input includes custom focus behavior via event handlers.

### Extraction recommendation

Do not extract in the first primitive pass.

Reason:

```txt
Only one strong product use exists so far.
Focus behavior is still prototype-specific.
```

Potential later component:

```txt
SearchField
```

This should be extracted during Phase 3 if search becomes part of the generic component vocabulary.

## Candidate: Checkbox

### Current locations

Checkbox-like controls appear in:

```txt
src/app/components/AllFiltersPanel.tsx
```

The checkbox is custom markup inside filter option labels.

### Extraction recommendation

Do not extract in the first primitive pass.

Reason:

```txt
Current behavior is tightly coupled to filter option selection.
```

Potential later extraction:

```txt
Checkbox
CheckboxOption
FilterOption
```

## Recommended extraction order

Recommended first extraction order:

```txt
1. Button
2. Badge
3. Tag
4. Pill
```

Reason:

```txt
Button is the most reused action primitive.
Badge is the most reused compact status/context primitive.
Tag is lower-risk display metadata.
Pill is currently more specific to filter selection and should come after Tag.
```

## Proposed folder structure

Initial structure:

```txt
src/design-system/primitives/
  button.tsx
  badge.tsx
  tag.tsx
  pill.tsx
  index.ts
```

Do not move product components yet.

Do not create `src/design-system/components` until at least one primitive is stable and used by the prototype.

Phase 3 target structure may expand into:

```txt
src/design-system/components/
  search-field.tsx
  view-switcher.tsx
  filter-dropdown.tsx
  side-panel.tsx
  detail-panel.tsx
  data-grid.tsx
  status-badge.tsx
  score-bar.tsx
```

## Extraction rules

For each primitive extraction:

```txt
preserve the UI
preserve behavior
replace only one or two usage sites first
avoid broad refactors
avoid domain-specific props
keep product logic in src/app
run npm run build
run npm run dev
```

## Acceptance criteria

The primitive extraction phase is acceptable only if:

```txt
npm run build passes
npm run dev starts
visual output remains equivalent
primitive API is domain-neutral
product-specific semantics remain outside primitive layer
raw prototype files are not exposed as generation API
```

## Open questions

Before implementation, clarify:

```txt
Should Badge and Pill share a base visual recipe?
Should Tag support selection now or later?
Should Button variants include filter and tab, or should those become generic controls?
Should health color mapping stay transitional until StatusBadge / ScoreBar exists?
```

## Decision

Proceed with primitive extraction, starting with `Button`.

The first implementation should be conservative:

```txt
create src/design-system/primitives/button.tsx
replace a small number of low-risk button usages
preserve prototype UI
validate build and visual parity
```

Do not extract all button-like controls at once.

Phase 3 supersedes any earlier implication that domain-specific wrappers should become the final target vocabulary.
