# Runtime Component Selection

## Status

```txt
ACTIVE RUNTIME / COMPONENT ROUTER / FIGMA MAKE
```

This file gives Figma Make a short component and pattern selection table.

Use preferred components before lower-level or legacy primitives.

If no component fits, simplify the screen instead of creating a local design system.

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

---

## Use with care

Use only with a specific reason:

| Component | Prefer instead | Reason |
| --- | --- | --- |
| `PageHeader` | `PageHeading` | Legacy page header |
| `DetailPanel` | `WorkspaceDetailPanel` | Lower-level primitive |
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
```

---

## Selection check

Before final answer, verify:

```txt
preferred component used when available
business pattern used when intent matches
legacy component avoided unless justified
repeated objects use rows and lists, not cards
trust-sensitive content uses evidence and validation markers
actions use ActionRow, ActionCard or StickyActionBar
```
