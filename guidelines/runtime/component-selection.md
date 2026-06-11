# Runtime Component Selection

## Status

```txt
ACTIVE RUNTIME / COMPONENT ROUTER / FIGMA MAKE
```

This file gives Figma Make a short component and pattern selection table.

Use preferred components before lower-level or legacy primitives.

If no component fits, simplify the screen instead of creating a local design system.

---

## Screen contract selection rule

When a screen contract exists, component selection is contract-led.

Use only components mapped or allowed by the screen contract.

Do not replace a required screen-specific component with a local substitute.

If a mapped component does not exist yet, report a missing DS capability instead of inventing `components/ui` or local wrappers.

For Installed Base Intelligence, the contract-led mapping is:

| Screen zone | Required component |
| --- | --- |
| Main Navigation | `MainNavigation` |
| Page Header | `InstalledBaseHeader` |
| View & Filter Bar | `InstalledBaseViewFilterBar` |
| All Filters Panel | `AllFiltersPanel` |
| Installed Base List | `InstalledBaseList` |
| Asset Row | `AssetInventoryRow` |
| Asset Detail Panel | `AssetDetailAnalysisPanel` |

These components are target v0.7.0 components. Until implemented, they are blockers, not permission to create local substitutes.

---

## Preferred selection table

| Need | Prefer |
| --- | --- |
| App shell | `WorkspaceShell` |
| Page intent | `PageHeading` |
| Scope and filters | `FilterBar` |
| Secondary navigation | `SecondaryNavigation` |
| List/detail workspace | `MasterDetailLayout` |
| Selected item detail | `WorkspaceDetailPanel` |
| Repeated operational objects | `ListContainer` + approved row component |
| Compact signal group | `MetricStrip` + `CompactMetric` |
| Asset hierarchy | `ComponentHierarchy` |
| Structured metadata | `KeyValueList` or `StatusSummary` |
| Evidence trail | `EvidenceRow` |
| Trust marker | `SourceStrengthPill` + validation status when relevant |
| Status or readiness | `StatusPill` |
| Priority | `PriorityPill` |
| Owned follow-through | `ActionRow` |
| Rich action context | `ActionCard` |
| Persistent action area | `StickyActionBar` |
| Highlighted risk | `AlertCard` with recommendation |
| Recommendation review | `RecommendationReviewPanel` |
| Known customer/service section | Business pattern first |
| Operational inventory | approved list/table pattern + approved row component |

---

## Business pattern selection

| Intent | Prefer |
| --- | --- |
| Customer context | `CustomerStatusCard` |
| Customer review readiness | `CustomerReviewReadinessCard` |
| Connectivity coverage | `ConnectivityCoverageCard` |
| Asset intelligence | `AssetIntelligenceSummary` |
| Renewal risk | `RenewalRiskSummary` |
| Value proof | `ValueProofCard` |
| Service risk | `ServiceRiskSummary` |
| Recommendation review | `RecommendationReviewPanel` |
| Action creation | `CreateActionDialog` |
| Customer queue | `CustomerQueueRow` |
| Asset queue | `AssetQueueRow` |
| Risk queue | `RiskQueueRow` |
| Recommendation queue | `RecommendationQueueRow` |
| Review queue | `ReviewQueueRow` |

Use business patterns only when they do not violate screen-contract structure.

---

## Use with care

Use only with a specific reason:

| Component | Prefer instead | Reason |
| --- | --- | --- |
| `PageHeader` | `PageHeading` or screen-specific header | Legacy page header |
| `DetailPanel` | `WorkspaceDetailPanel` or screen-specific panel | Lower-level primitive |
| `ComponentHierarchyItem` | `ComponentHierarchy` | Internal item |
| `Card` | Pattern, row, `Surface` or `ListContainer` | Emphasis container only |
| `MetricCard` | `MetricStrip` + `CompactMetric` | Avoid metric card stacks |
| `Timeline` | Rows or evidence list | Use only when sequence is the decision |

---

## Do not generate local substitutes

Do not create local substitutes for:

```txt
cards
rows
metrics
badges
status pills
tabs
filters
forms
panels
business patterns
buttons
selects
screen-contract components
```

---

## Selection check

Before final answer, verify:

```txt
screen contract checked first when available
mapped screen components used when available
missing target components reported instead of locally recreated
preferred component used when available
business pattern used when intent matches and contract allows it
legacy component avoided unless justified
repeated objects use rows and lists, not cards
trust-sensitive content uses evidence and validation markers
actions use ActionRow, ActionCard or StickyActionBar
```
