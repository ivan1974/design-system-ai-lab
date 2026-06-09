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

## Sprint 1 status

Sprint 1 completes the first architecture audit.

Current public API coverage:

```txt
Base components
- Badge
- Button
- Card
- Dialog
- DialogClose
- DialogFooter
- MetricCard
- PageHeader

Forms
- Field
- Input
- Label
- Select
- Textarea

Decision components
- ActionCard
- ActionList
- AlertCard
- MetricGrid
- PriorityList
- RecommendationCard
- SectionHeader
- StatusSummary

Business patterns
- AssetIntelligenceSummary
- ConnectivityCoverageCard
- CustomerReviewReadinessCard
- CreateActionDialog
- CustomerStatusCard
- RecommendationReviewPanel
- RenewalRiskSummary
- ServiceRiskSummary
- ValueProofCard
```

Current structural gap:

```txt
No public composition layout is currently exposed for workspace generation.
```

This means the design system already has strong components for content, status,
risks, recommendations and actions, but it lacks the layout grammar needed to
organize them into dense, navigable operational workspaces.

Sprint 1 conclusion:

```txt
The next implementation priority is not another business card.
The next implementation priority is workspace structure.
```

---

## Why this evolution is needed

The current design system is strong on principles, tokens, business semantics,
evidence discipline and Figma Make governance.

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

The installed-base prototype shows useful interaction patterns that the current
design system does not yet support well:

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

## Sprint 1 audit map

### Keep

These components remain useful and should mostly keep their current role.

| Item | Type | Current role | Why keep | Priority |
| --- | --- | --- | --- | --- |
| Button | Base | Action trigger. | Required for every workflow; keep hierarchy sober. | P3 |
| Dialog | Base | Modal container. | Still useful for confirmations and action creation. | P2 |
| DialogClose | Base | Modal close action. | Keep with Dialog. | P3 |
| DialogFooter | Base | Modal footer actions. | Keep with Dialog and CreateActionDialog. | P3 |
| Field | Form | Field structure. | Essential to avoid raw form controls. | P3 |
| Input | Form | Short text entry. | Essential to avoid raw input markup. | P3 |
| Label | Form | Accessible field label. | Essential for accessibility. | P3 |
| Select | Form | Controlled choice. | Essential for scoped choices. | P3 |
| Textarea | Form | Long text entry. | Essential for rationale and notes. | P3 |
| PageHeader | Base | Page context and primary actions. | Keep as workspace entry point, not as a dashboard title only. | P2 |
| MetricGrid | Decision | Small metric grouping. | Useful for 2–4 primary metrics; should not be used for dense telemetry. | P2 |
| PriorityList | Decision | Ordered blockers or risks. | Useful for prioritization, especially before actions. | P2 |
| ActionList | Decision | Group of major actions. | Keep for card-based action summaries; add ActionRow later for dense lists. | P2 |
| CreateActionDialog | Pattern | Structured action creation. | Strong guardrail against raw forms and unowned actions. | P2 |

---

### Refactor

These components are useful but need to become less card-centric or more
workspace-compatible.

| Item | Type | Current issue | Recommended evolution | Priority |
| --- | --- | --- | --- | --- |
| Card | Base | Overused as generic container. | Clarify that cards are for emphasis or containment, not the default layout primitive. | P0 |
| Badge | Base | Carries too many meanings: status, attribute, priority, evidence. | Split semantics into SemanticTag, StatusPill, PriorityPill and SourceStrengthPill. | P0 |
| MetricCard | Base / Decision | Too large for dense telemetry or secondary signals. | Keep for primary KPIs; create CompactMetric and MetricStrip for dense signals. | P0 |
| AlertCard | Decision | Useful but heavy for repeated risks. | Keep for high-priority risks; consider RiskRow / AlertRow after compact components exist. | P1 |
| ActionCard | Decision | Good for major actions but too large for operational action queues. | Keep for important actions; create ActionRow for dense workflows. | P1 |
| RecommendationCard | Decision | Useful but too card-heavy in recommendation review flows. | Add compact row mode or RecommendationRow. | P1 |
| StatusSummary | Decision | Can hide partial visibility behind a single overall status. | Require source scope, source strength and uncertainty cues when trust matters. | P1 |
| SectionHeader | Decision | Useful label, but weak as a workspace section primitive. | Align with SectionStack and panel section semantics. | P2 |

---

### Split or modularize

These business patterns should become composable workspace sections rather than
single large cards.

| Item | Current issue | Proposed split | Priority |
| --- | --- | --- | --- |
| CustomerStatusCard | Too card-centric for drawer and compact customer context. | CustomerContextBar, CustomerStatusSummary, CustomerScopeFacts. | P1 |
| ConnectivityCoverageCard | Useful but should support compact coverage review. | CoverageSummary, ConnectivityBreakdown, MonitoringScopeNotice, DisconnectedCriticalAssets. | P1 |
| RenewalRiskSummary | Strong concept but locked into summary card behavior. | RenewalContextSummary, RenewalBlockerList, ProofGapSummary, MitigationSummary. | P2 |
| ValueProofCard | Needs clearer proof taxonomy and less card weight. | ValueProofSummary, ProofPointList, ProofGapNotice, ExpectedOutcomeNotice. | P1 |
| CustomerReviewReadinessCard | Useful but should fit drawer and QBR workspace flows. | ReviewReadinessSummary, ReadinessChecklist, ReviewBlockerList. | P2 |
| AssetIntelligenceSummary | Needs hierarchy, signals and interpretation separation. | AssetScopeHeader, HealthSignalGroup, IntelligenceInterpretationBlock, SourceQualityBlock, ValidationNotice. | P0 |
| ServiceRiskSummary | Useful but too summary-heavy. | RiskSummaryBlock, AffectedScopeBlock, ServiceImpactBlock, ValidationNotice. | P1 |
| RecommendationReviewPanel | Important but should support compact review. | RecommendationSetHeader, RecommendationList, RecommendationRow, EvidenceSummary, ValidationStatus. | P0 |

---

### Create

These are the missing components needed to support decision workspace generation.

#### Composition layouts

| Item | Role | Why needed | Priority |
| --- | --- | --- | --- |
| WorkspaceShell | Page-level shell for dense operational screens. | Creates a consistent workspace frame around headers, filters, lists and detail areas. | P1 |
| MasterDetailLayout | Main list/table plus detail area. | Core missing layout for exploration and drill-down. | P0 |
| DetailPanel | Right-side detail container. | Enables detail review without leaving the workspace. | P0 |
| DetailPanelHeader | Contextual header for selected item. | Keeps identity, status and close actions consistent. | P0 |
| DetailPanelTabs | Tabs for overview, health, intelligence, history and documents. | Creates progressive disclosure inside detail views. | P0 |
| DetailPanelBody | Scrollable content area. | Prevents whole-page scrolling and supports dense panels. | P0 |
| DetailPanelFooter | Sticky action area. | Keeps follow-through visible. | P0 |
| StickyActionBar | Persistent contextual actions. | Supports action continuity without marketing-style CTAs. | P0 |
| FilterBar | Quick filters above a list or table. | Supports exploration and reduces dashboard drift. | P1 |
| FilterPanel | Extended filter panel. | Supports advanced filtering without cluttering the page. | P1 |
| SectionStack | Vertical stack of sections without card saturation. | Main replacement for Card / Card / Card generation. | P0 |
| TwoColumnLayout | Detail page with primary and secondary columns. | Useful for QBR, renewal and review pages. | P1 |

#### Compact components

| Item | Role | Why needed | Priority |
| --- | --- | --- | --- |
| KeyValueList | Compact fact display. | Replaces small cards used only to show facts. | P0 |
| KeyValueRow | Single fact row. | Enables dense identity, coverage, source and passport sections. | P0 |
| CompactMetric | Small metric for telemetry or secondary signals. | Avoids using MetricCard for every operational signal. | P0 |
| MetricStrip | Horizontal or grid group of compact metrics. | Supports dense monitoring and health views. | P0 |
| SemanticTag | Stable attribute: family, offer, DPP, cohort. | Prevents Badge semantic overload. | P0 |
| StatusPill | Dynamic state: critical, live, non-connected, review needed. | Separates state from stable attributes. | P0 |
| PriorityPill | Action or recommendation priority. | Makes priority consistent without arbitrary badge labels. | P1 |
| SourceStrengthPill | Source quality or evidence strength. | Makes trust state visible and standardized. | P1 |
| EvidenceRow | Compact evidence item. | Shows proof or source cue without card saturation. | P1 |
| SignalRow | Compact observed signal. | Supports facts-before-interpretation. | P1 |
| ActionRow | Compact owned action. | Enables action queues and sticky panels without ActionCard overload. | P1 |
| DocumentRow | Downloadable or linked document row. | Supports documents without custom markup. | P1 |
| Timeline | History container. | Supports maintenance, alert and proof history. | P1 |
| TimelineItem | One maintenance, alert, install or service event. | Standardizes historical event display. | P1 |
| ComponentHierarchy | Asset-to-component hierarchy. | Critical for asset intelligence and root cause drill-down. | P0 |
| ComponentHierarchyItem | One row in a component hierarchy. | Enables expandable or nested component review. | P0 |

#### Business workspace patterns

| Item | Role | Why needed | Priority |
| --- | --- | --- | --- |
| InstalledBaseExplorer | Workspace example/pattern for asset list + detail. | Teaches Make a complete asset workspace structure. | P1 |
| AssetDetailPanel | Detail panel pattern for selected asset. | First high-value business workspace pattern. | P0 |
| AssetHealthOverview | Health section using compact metrics and source cues. | Refactors Health signals out of large summary cards. | P0 |
| PeerBenchmarkPanel | Explainable benchmark section with source and validation cues. | Supports benchmark insights without false certainty. | P1 |
| ServiceHistoryTimeline | Maintenance and alert history pattern. | Turns history into a reusable pattern. | P1 |
| DocumentList | Document grouping pattern. | Useful but less urgent than layout and health. | P2 |
| RecommendationSet | Compact recommendation review pattern. | Reduces RecommendationReviewPanel card saturation. | P1 |

---

### Deprecate or discourage

These should not necessarily be removed, but should be discouraged in Figma Make
generation unless explicitly needed.

| Item / Usage | Reason | Replacement |
| --- | --- | --- |
| Generic full-width card stack | Encourages dashboard-like screens. | MasterDetailLayout, SectionStack, TwoColumnLayout. |
| Card used for every fact | Creates card saturation. | KeyValueList, EvidenceRow, SignalRow. |
| MetricCard for every signal | Makes dense telemetry too heavy. | CompactMetric, MetricStrip. |
| Badge used for every semantic role | Mixes stable attributes, dynamic status and priority. | SemanticTag, StatusPill, PriorityPill. |
| Large business pattern for every drawer section | Makes drawers too heavy. | Compact sections and pattern subcomponents. |
| One-column layout for review-heavy flows | Prevents comparison and drill-down. | WorkspaceShell, MasterDetailLayout, DetailPanel. |
| Decorative chart or benchmark block without evidence scope | Creates false confidence. | Visualization selection rules, PeerBenchmarkPanel with source context. |

---

## Sprint 1 architecture target

The target architecture is layered.

```txt
1. Foundations
   tokens, colors, typography, spacing, accessibility

2. Base components
   Button, Card, Dialog, PageHeader, forms

3. Compact primitives
   KeyValueList, CompactMetric, SemanticTag, StatusPill, EvidenceRow, Timeline

4. Composition layouts
   WorkspaceShell, MasterDetailLayout, DetailPanel, SectionStack, StickyActionBar

5. Decision components
   MetricCard, AlertCard, ActionCard, RecommendationCard, PriorityList, StatusSummary

6. Business patterns
   AssetIntelligenceSummary, RecommendationReviewPanel, ValueProofCard, CustomerStatusCard

7. Workspace patterns
   AssetDetailPanel, InstalledBaseExplorer, RecommendationSet, ServiceHistoryTimeline

8. Figma Make governance
   prompts, golden examples, checklists, repair prompts, generation tests
```

Important dependency:

```txt
Compact primitives + composition layouts must come before major pattern refactors.
```

Why:

```txt
If patterns are refactored before compact primitives exist, they will keep recreating local rows, pills and metric strips internally.
If layouts are not available first, Make will continue generating one-column card stacks even with improved patterns.
```

---

## Sprint 1 recommended build sequence

```txt
1. Create composition directory and exports.
2. Build MasterDetailLayout.
3. Build DetailPanel family.
4. Build StickyActionBar.
5. Build SectionStack.
6. Build KeyValueList.
7. Build SemanticTag and StatusPill.
8. Build CompactMetric and MetricStrip.
9. Build ComponentHierarchy.
10. Build Timeline.
11. Refactor AssetIntelligenceSummary and RecommendationReviewPanel.
12. Update golden examples and Make guidance.
```

---

## Sprint 1 success criteria

Sprint 1 is complete when the team has a clear implementation map showing:

```txt
what stays as-is
what must be refactored
what must be split
what must be created
what must be discouraged in Make generation
which components block the decision workspace transition
which components can wait
```

Sprint 1 should also make one strategic decision clear:

```txt
Do not start with more business patterns.
Start with workspace layout and compact primitives.
```

---

# Phase A2 — Information architecture, domain model and visualization rules

## Objective

Add the missing architecture layer between principles and components.

Before building too many new components, define:

```txt
which screen types the design system should produce
which domain objects it represents
how information is progressively disclosed
which navigation models are allowed
when to use visualization
when not to use visualization
```

## Expected files

```txt
guidelines/ia/screen-types.md
guidelines/ia/navigation-models.md
guidelines/ia/panel-structures.md
guidelines/ia/tab-architectures.md
guidelines/ia/progressive-disclosure.md

guidelines/domain-models/customer.md
guidelines/domain-models/site.md
guidelines/domain-models/asset.md
guidelines/domain-models/component.md
guidelines/domain-models/recommendation.md
guidelines/domain-models/action.md
guidelines/domain-models/evidence.md
guidelines/domain-models/source.md
guidelines/domain-models/proof.md

guidelines/visualization/selection-rules.md
guidelines/visualization/benchmarking.md
guidelines/visualization/timelines.md
guidelines/visualization/topology-and-sld.md
```

## Acceptance criteria

```txt
The design system can explain what type of screen to generate before selecting components.
The design system can explain domain relationships before inventing content.
The design system can select visual formats based on comparison, trend, hierarchy, distribution, causality or follow-through.
```

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
src/design-system/composition/detail-panel-body.tsx
src/design-system/composition/detail-panel-footer.tsx
src/design-system/composition/sticky-action-bar.tsx
src/design-system/composition/section-stack.tsx
src/design-system/composition/filter-bar.tsx
src/design-system/composition/filter-panel.tsx
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

# Phase F — Update Figma Make guidelines

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
1. Audit components / decision / patterns / composition.
2. Identify card-centric components and patterns.
3. Identify needs from the prototype.
4. Define target decision workspace architecture.
5. Update this component-audit-roadmap.md.
```

Deliverable:

```txt
A clear implementation map for what to keep, refactor, split, create and discourage.
```

## Sprint 1.5 — Information architecture and domain model

```txt
1. Create screen-types.md.
2. Create navigation-models.md.
3. Create panel-structures.md.
4. Create tab-architectures.md.
5. Create progressive-disclosure.md.
6. Create first domain models.
7. Create visualization selection rules.
```

Deliverable:

```txt
The design system can choose the right screen architecture before choosing components.
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

## Sprint 5 — Figma Make kit v2

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

# Final principle

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
