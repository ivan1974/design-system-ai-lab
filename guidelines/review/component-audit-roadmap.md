# Component audit roadmap

## Purpose

This roadmap defines how to evolve the design system from a set of useful
business cards into a true decision workspace system.

The goal is not to remove cards.

The goal is to stop using cards as the default answer to every business need.

Target shift:

```txt
From: business-card design system
To: decision workspace design system
```

A decision workspace must support:

```txt
exploration
comparison
drill-down
dense operational review
source and evidence checking
recommendation review
owned follow-through
```

---

## Why this evolution is needed

The current design system is strong on principles, tokens, business semantics,
evidence discipline and Make governance.

However, many decision and pattern components still encourage generated screens
like this:

```txt
PageHeader
Card
Card
Card
Card
ActionList
```

That structure is safe, but it is not enough for operational workflows such as:

```txt
installed base review
asset intelligence review
recommendation validation
renewal risk queue
customer review preparation
service action follow-up
```

The uploaded installed-base prototype shows useful interaction patterns that the
current design system does not yet support well:

```txt
asset list + detail panel
filter bar + filter panel
right-side detail drawer
detail tabs
sticky action footer
compact facts
semantic tags
status pills
component hierarchy
timeline
document rows
peer benchmark detail
intelligence explanation
```

The prototype is a good UX reference, not an implementation model.

It also contains design-system anti-patterns that should not be copied:

```txt
inline styles
local tokens
arbitrary colors
raw HTML controls
onclick handlers
local CSS classes
emoji icons as system icons
animated pulse / blink effects
strong benchmark claims without explicit proof governance
confidence labels that need source evidence and validation rules
```

---

## Design direction

The new system should follow this rule:

```txt
Use cards for emphasis.
Use rows for facts.
Use panels for context.
Use layouts for decision flow.
Use sticky actions for follow-through.
```

Cards should remain available for:

```txt
high-priority summaries
risk emphasis
proof blocks
recommendation details
customer-ready review modules
```

But cards should not be the default primitive for:

```txt
every fact
every metric
every source cue
every action
every document
every timeline item
every detail section
```

---

## Audit lens

Audit each component with the same question:

```txt
Does this component help the user decide, verify, compare, drill down or act?
```

For each component or pattern, evaluate:

```txt
current role
current abstraction level
card dependency
workspace compatibility
drawer compatibility
dense layout compatibility
source and evidence support
asset-intelligence support
actionability
Figma Make risk
recommended evolution
priority
```

---

## Priority definitions

```txt
P0 — Needed before decision workspace generation can be reliable
P1 — Important for the first workspace examples
P2 — Useful refinement after core layouts and compact components exist
P3 — Keep as-is for now
```

---

# Phase A — Audit current components

## Objective

Create a clear map of what to keep, refactor, split, create or deprecate.

This phase should not produce code first.

It should produce an implementation map.

---

## Audit matrix

Use this matrix while reviewing each component.

| Item | Type | Current role | Current issue | Workspace need | Decision | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| ComponentName | Base / Form / Decision / Pattern / Composition | TBD | TBD | TBD | Keep / Refactor / Split / Create / Deprecate | P0 / P1 / P2 / P3 |

---

## Initial audit map

### Keep

These components remain useful and should mostly keep their current role.

| Item | Type | Rationale | Priority |
| --- | --- | --- | --- |
| Button | Base | Still needed for actions, but hierarchy must remain sober. | P3 |
| Dialog | Base | Useful for action creation and confirmation flows. | P2 |
| Field | Form | Needed to avoid raw form controls. | P3 |
| Input | Form | Needed for structured forms. | P3 |
| Label | Form | Needed for accessibility. | P3 |
| Select | Form | Needed for controlled choices. | P3 |
| Textarea | Form | Needed for notes and rationale. | P3 |
| MetricGrid | Decision | Useful for small metric groups, but should not be the only layout option. | P2 |
| PriorityList | Decision | Useful for blockers and risks. | P2 |
| ActionList | Decision | Useful when actions are presented as cards. | P2 |

---

### Refactor

These components are useful but need to become less card-centric or more
workspace-compatible.

| Item | Type | Current issue | Recommended evolution | Priority |
| --- | --- | --- | --- | --- |
| Card | Base | Overused as generic container. | Clarify when to use cards for emphasis, not as default layout primitive. | P0 |
| Badge | Base | Carries too many meanings. | Split stable attributes and dynamic status into SemanticTag / StatusPill. | P0 |
| MetricCard | Decision | Too large for dense telemetry or secondary signals. | Keep for primary KPIs; add CompactMetric / MetricStrip for dense signals. | P0 |
| AlertCard | Decision | Useful but often card-heavy. | Keep for priority risks; add AlertRow or RiskRow later if needed. | P1 |
| ActionCard | Decision | Useful but not always appropriate for dense action lists. | Keep for major actions; add ActionRow for compact workflows. | P1 |
| RecommendationCard | Decision | Useful but can become too large in review flows. | Add compact row variant or RecommendationRow. | P1 |
| StatusSummary | Decision | Can hide partial visibility behind one status. | Add visible scope, source strength and uncertainty patterns. | P1 |
| SectionHeader | Decision | Useful but too weak for workspace sections. | Align with SectionStack and panel sections. | P2 |

---

### Split or modularize

These business patterns should become composable workspace sections rather than
single large cards.

| Item | Current issue | Proposed split | Priority |
| --- | --- | --- | --- |
| CustomerStatusCard | Too card-centric for drawer and compact context. | CustomerContextBar, CustomerStatusSummary, CustomerScopeFacts. | P1 |
| ConnectivityCoverageCard | Useful but should support compact coverage review. | CoverageSummary, ConnectivityBreakdown, MonitoringScopeNotice. | P1 |
| RenewalRiskSummary | Strong concept but locked into summary card behavior. | RenewalContextSummary, RenewalBlockerList, ProofGapSummary. | P2 |
| ValueProofCard | Needs clearer proof taxonomy. | ValueProofSummary, ProofPointList, ProofGapNotice, ExpectedOutcomeNotice. | P1 |
| CustomerReviewReadinessCard | Useful but should fit drawer/QBR workspace. | ReviewReadinessSummary, ReadinessChecklist, ReviewBlockerList. | P2 |
| AssetIntelligenceSummary | Needs hierarchy, signals and interpretation separation. | AssetScopeHeader, HealthSignalGroup, IntelligenceInterpretationBlock, SourceQualityBlock, ValidationNotice. | P0 |
| ServiceRiskSummary | Useful but too summary-heavy. | RiskSummaryBlock, AffectedScopeBlock, ServiceImpactBlock, ValidationNotice. | P1 |
| RecommendationReviewPanel | Important but should support compact review. | RecommendationSetHeader, RecommendationList, RecommendationRow, EvidenceSummary, ValidationStatus. | P0 |

---

### Create

These are the missing components needed to support decision workspace generation.

#### Composition layouts

| Item | Role | Priority |
| --- | --- | --- |
| WorkspaceShell | Page-level shell for dense operational screens. | P1 |
| MasterDetailLayout | Main list/table plus detail area. | P0 |
| DetailPanel | Right-side detail container. | P0 |
| DetailPanelHeader | Contextual header for selected item. | P0 |
| DetailPanelTabs | Tabs for overview, health, intelligence, history, documents. | P0 |
| DetailPanelBody | Scrollable content area. | P0 |
| DetailPanelFooter | Sticky action area. | P0 |
| StickyActionBar | Persistent contextual actions. | P0 |
| FilterBar | Quick filters above a list or table. | P1 |
| FilterPanel | Extended filter panel. | P1 |
| SectionStack | Vertical stack of sections without card saturation. | P0 |
| TwoColumnLayout | Detail page with primary and secondary columns. | P1 |

#### Compact components

| Item | Role | Priority |
| --- | --- | --- |
| KeyValueList | Compact fact display. | P0 |
| KeyValueRow | Single fact row. | P0 |
| CompactMetric | Small metric for dense telemetry or secondary signals. | P0 |
| MetricStrip | Horizontal or grid group of compact metrics. | P0 |
| SemanticTag | Stable attribute: asset family, offer, DPP, cohort. | P0 |
| StatusPill | Dynamic status: critical, live, non-connected, review needed. | P0 |
| PriorityPill | Action or recommendation priority. | P1 |
| SourceStrengthPill | Source quality or evidence strength. | P1 |
| EvidenceRow | Compact evidence item. | P1 |
| SignalRow | Compact observed signal. | P1 |
| ActionRow | Compact owned action. | P1 |
| DocumentRow | Downloadable or linked document row. | P1 |
| Timeline | History container. | P1 |
| TimelineItem | Maintenance, alert, install or service event. | P1 |
| ComponentHierarchy | Asset-to-component hierarchy. | P0 |
| ComponentHierarchyItem | One row in a component hierarchy. | P0 |

#### Business workspace patterns

| Item | Role | Priority |
| --- | --- | --- |
| InstalledBaseExplorer | Workspace example/pattern for asset list + detail. | P1 |
| AssetDetailPanel | Detail panel pattern for selected asset. | P0 |
| AssetHealthOverview | Health section using compact metrics and source cues. | P0 |
| PeerBenchmarkPanel | Explainable benchmark section with source and validation cues. | P1 |
| ServiceHistoryTimeline | Maintenance and alert history pattern. | P1 |
| DocumentList | Document grouping pattern. | P2 |
| RecommendationSet | Compact recommendation review pattern. | P1 |

---

### Deprecate or discourage

These should not necessarily be removed, but should be discouraged in Make
generation unless explicitly needed.

| Item / Usage | Reason | Replacement |
| --- | --- | --- |
| Generic full-width card stack | Encourages dashboard-like screens. | MasterDetailLayout, SectionStack, TwoColumnLayout. |
| Card used for every fact | Creates card saturation. | KeyValueList, EvidenceRow, SignalRow. |
| MetricCard for every signal | Makes dense telemetry too heavy. | CompactMetric, MetricStrip. |
| Badge used for every semantic role | Mixes stable attributes, status and priority. | SemanticTag, StatusPill, PriorityPill. |
| Large business pattern for every drawer section | Makes drawers too heavy. | Compact sections and pattern subcomponents. |

---

# Phase B — Create workspace composition layouts

## Objective

Make `composition/` strong enough to produce list + detail, drawer, tabs and
action-footer workspaces.

## Build order

```txt
1. MasterDetailLayout
2. DetailPanel
3. DetailPanelHeader
4. DetailPanelTabs
5. DetailPanelBody
6. DetailPanelFooter
7. StickyActionBar
8. SectionStack
9. FilterBar
10. TwoColumnLayout
```

## Expected files

```txt
src/design-system/composition/master-detail-layout.tsx
src/design-system/composition/detail-panel.tsx
src/design-system/composition/detail-panel-tabs.tsx
src/design-system/composition/sticky-action-bar.tsx
src/design-system/composition/section-stack.tsx
src/design-system/composition/filter-bar.tsx
src/design-system/composition/two-column-layout.tsx
```

## Storybook examples

```txt
Default
With selected item
With empty detail
With filters
With sticky action bar
Asset review workspace
Renewal queue workspace
```

## Acceptance criteria

```txt
A generated screen can show a dense list and a detail area without relying on a one-column stack of cards.
The detail area can include tabs and a sticky action footer.
The layout remains usable with partial data and empty states.
```

---

# Phase C — Create compact components

## Objective

Give designers and Make smaller building blocks for dense, evidence-aware
business information.

## Build order

```txt
1. KeyValueList / KeyValueRow
2. SemanticTag
3. StatusPill
4. CompactMetric / MetricStrip
5. SourceStrengthPill
6. EvidenceRow
7. SignalRow
8. ActionRow
9. Timeline / TimelineItem
10. DocumentRow
11. ComponentHierarchy / ComponentHierarchyItem
```

## Key semantic split

```txt
SemanticTag = stable attribute
StatusPill = dynamic status
PriorityPill = action or recommendation urgency
SourceStrengthPill = quality of evidence or source
```

Examples:

```txt
SemanticTag: MV Switchgear, UPS, EcoCare Advanced, DPP Enabled
StatusPill: Critical, Live monitored, Non-connected, Review needed
PriorityPill: High priority, Medium priority
SourceStrengthPill: Source strength: partial, Internal proof, Customer-ready
```

## Acceptance criteria

```txt
A workspace can show facts, signals, source cues, actions and timeline events without wrapping every item in a Card.
Color is never the only carrier of status.
Source and validation states remain visible when trust matters.
```

---

# Phase D — Refactor card-centric business patterns

## Objective

Make business patterns modular, dense and compatible with workspace layouts.

## Refactor order

```txt
1. AssetIntelligenceSummary
2. RecommendationReviewPanel
3. ServiceRiskSummary
4. ValueProofCard
5. CustomerStatusCard
6. ConnectivityCoverageCard
7. RenewalRiskSummary
8. CustomerReviewReadinessCard
```

## Required pattern capabilities

Each refactored pattern should support:

```txt
comfortable usage in pages
compact usage in drawers
facts before interpretation
source scope when trust matters
source strength when evidence is partial
freshness when timing matters
validation status before customer use
owned actions when follow-through is required
```

## Pattern modes

Where useful, add:

```txt
variant="card" | "section" | "compact"
density="comfortable" | "compact"
```

Only add variants when the visual difference is meaningful and maintainable.

Do not create variants just to solve one demo screen.

---

# Phase E — Update golden examples

## Objective

Teach Figma Make the new decision workspace standard.

## Update order

```txt
1. asset-recommendation-review.App.tsx
2. customer-monitoring.App.tsx
3. renewal-risk-review.App.tsx
4. qbr-readiness.App.tsx
5. optional installed-base-explorer.App.tsx
```

## New golden standard

Golden examples should show:

```txt
workspace layouts
list + detail when useful
compact sections
less full-width card stacking
tabs or drill-down when relevant
sticky actions for follow-through
facts before interpretation
source cues and validation state
semantic tags vs status pills
actions connected to risks or recommendations
```

---

# Phase F — Update Make guidelines

## Objective

Make sure Figma Make understands the new design-system vocabulary.

## Files to update

```txt
guidelines/Guidelines.md
guidelines/setup.md
guidelines/tokens.md
guidelines/styles.md
guidelines/prompts/*.md
guidelines/examples/golden/README.md
guidelines/review/blocking-checklist.md
guidelines/review/quality-checklist.md
guidelines/review/anti-patterns.md
guidelines/repair-prompts/*.md
tests/generation-rules/*
```

## New guideline principle

Add this principle to `Guidelines.md` and `styles.md`:

```txt
Do not default to a vertical stack of business cards.
Use workspace layouts when the user needs to review, compare, drill down or act across multiple items.
Prefer master-detail layouts for asset, customer, recommendation or risk review flows.
Use compact components for secondary facts, evidence, source context and history.
Use cards only when a section needs visual containment or prioritization.
```

## Prompt updates

Prompts should instruct Make to:

```txt
use MasterDetailLayout when reviewing multiple assets, customers, risks or recommendations
use DetailPanel for selected item review
use SectionStack instead of repeated Card sections
use KeyValueList for facts
use CompactMetric / MetricStrip for dense signals
use SemanticTag for stable attributes
use StatusPill for dynamic states
use StickyActionBar for persistent contextual actions
avoid one-column card stacks when the screen intent is exploratory or review-heavy
```

## Review checklist updates

Add to blocking review:

```txt
Reject if Make creates a generic one-column card stack when the prompt asks for a workspace, list-detail view or drill-down flow.
```

Add to quality review:

```txt
Cards are used intentionally, not by default.
Layout supports comparison, drill-down and action.
Compact components reduce repetition and improve scanability.
```

## Repair prompt updates

Create later:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-workspace-layout.md
repair-prompts/missing-detail-panel.md
```

---

# Sprint plan

## Sprint 1 — Audit and target architecture

```txt
1. Refocus component-audit-roadmap.md on decision workspace evolution.
2. Audit current components and classify Keep / Refactor / Split / Create.
3. Confirm build order for composition and compact components.
4. Identify first screen to rebuild as workspace.
```

Deliverable:

```txt
component-audit-roadmap.md becomes the implementation map for the next design-system evolution.
```

## Sprint 2 — Workspace layouts

```txt
1. Build MasterDetailLayout.
2. Build DetailPanel family.
3. Build StickyActionBar.
4. Build SectionStack.
5. Add composition stories.
```

Deliverable:

```txt
The design system can generate a non-card-stack workspace.
```

## Sprint 3 — Compact components

```txt
1. Build KeyValueList.
2. Build SemanticTag and StatusPill.
3. Build CompactMetric and MetricStrip.
4. Build ComponentHierarchy.
5. Build Timeline.
```

Deliverable:

```txt
The design system can express dense operational information without card saturation.
```

## Sprint 4 — Asset intelligence workspace

```txt
1. Refactor AssetIntelligenceSummary.
2. Refactor RecommendationReviewPanel.
3. Create AssetDetailPanel pattern.
4. Create updated asset-recommendation golden example.
```

Deliverable:

```txt
The first decision workspace is available and teachable to Make.
```

## Sprint 5 — Make kit v2

```txt
1. Update Guidelines.md with decision workspace principle.
2. Update setup.md with new public API.
3. Update styles.md with card saturation rules.
4. Update prompts and golden examples.
5. Add repair prompts for card saturation and weak workspace layout.
```

Deliverable:

```txt
Figma Make can generate decision workspaces, not only card-based dashboards.
```

---

# Real build priority

Start with this order:

```txt
1. MasterDetailLayout
2. DetailPanel + tabs + sticky footer
3. SectionStack
4. KeyValueList
5. SemanticTag / StatusPill
6. CompactMetric / MetricStrip
7. ComponentHierarchy
8. Timeline
9. AssetIntelligenceSummary refactor
10. RecommendationReviewPanel refactor
11. Asset recommendation golden v2
12. Guidelines Make v2
```

This order reflects the real UX need shown by the prototype:

```txt
exploration first
drill-down second
dense facts third
business patterns fourth
Make documentation last
```

---

## Final principle

The next design-system evolution should not add more large business cards.

It should add the missing workspace grammar:

```txt
workspace
panel
section
row
pill
tag
compact metric
timeline
hierarchy
sticky action
```

That is the foundation for a real decision workspace system.
