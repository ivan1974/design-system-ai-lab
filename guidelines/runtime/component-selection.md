# Runtime Component Selection

## Status

```txt
ACTIVE RUNTIME / COMPONENT SELECTION / FIGMA MAKE / v0.8
```

This file tells Figma Make which component family to choose when generating screens.

It replaces legacy component-by-component selection logic with target-surface selection logic.

## Read first

```txt
contracts/v0.8-target-surface.contract.json
guidelines/reference/architecture/v0.8-target-surface.md
guidelines/runtime/visual-rules.md
```

## Selection order

Choose components in this order:

```txt
1. screen contract when the screen is contractual
2. composition component for layout
3. decision structure for cognition and action
4. semantic display primitive for labels and status
5. core component for low-level UI
6. custom markup only when no package component exists
```

Custom markup must not become a local design system.

## Screen contract first

For Installed Base Intelligence, follow the Installed Base screen contract first.

For Customer Monitoring, follow the Customer Monitoring screen contract when available.

Do not replace contractual screens with generic dashboards.

## Composition selection

Use composition components for screen structure:

```txt
WorkspaceShell
MainNavigation
PageHeading
FilterBar
MasterDetailLayout
WorkspaceDetailPanel
SidePanel
SectionStack
SectionBlock
ListContainer
StickyActionBar
```

Do not recreate layout shells with local wrappers.

## Semantic display selection

Use only these public semantic display primitives:

```txt
SemanticTag
SemanticPill
StatusIndicator
MetaLabel
```

Use `SemanticTag` for bordered category, scope or qualifier labels.

Use `SemanticPill` for rounded state, readiness, priority or strength labels.

Use `StatusIndicator` for status with dot, icon, freshness or secondary metadata.

Use `MetaLabel` for short inline metadata and secondary context.

Do not generate or recommend:

```txt
HealthPill
CoverageTag
DppTag
ConnectivityLabel
StatusWithIcon
PriorityPill
PriorityLabel
ProofStatus
SourceStrengthPill
StatusPill
```

## Card and block selection

Use the target grammar:

```txt
Card
MetricBlock
DecisionBlock
EvidenceBlock
ActionBlock
StatusSummary
ReviewQueueRow
ActionRow
EvidenceRow
```

Use `Card` only for generic contained surfaces.

Use `MetricBlock` for quantitative summaries.

Use `DecisionBlock` for signal, decision, rationale and recommendation structure.

Use `EvidenceBlock` for source, strength, freshness and proof structure.

Use `ActionBlock` for one emphasized action with owner, due date and priority.

Use `ActionRow` for dense action lists.

Use `ReviewQueueRow` for queue entries that lead to a detail panel.

Do not keep separate cards only because content differs.

## Pattern selection

Public patterns must be screen-composition patterns, not app logic.

Target pattern families:

```txt
installed-base
customer-monitoring
```

Do not create one-off pattern wrappers for mock data, screen copy or application flow.

## Local component rule

Do not generate local alternatives to target components.

Forbidden examples:

```txt
LocalCard
CustomBadge
StatusChip
HealthBadge
SourceStrengthChip
RecommendationPanel
RiskCard
MetricTile
```

If a needed structure is missing, use the closest target primitive and expose the gap in the final note or benchmark repair, rather than inventing a new public component.

## Legacy transition rule

Legacy files may remain during transition only if they are:

```txt
internal-only
not preferred
not used by golden examples
not recommended by guidelines
not rewarded by benchmarks
```

They should be deleted after target regeneration.

## Final check

Before returning generated code, verify:

```txt
no local component system
no obsolete semantic wrappers
no card proliferation
no hardcoded visual system
screen contract respected
semantic display uses target primitives
cards and decision content use target blocks
```
