# Runtime Component Selection

## Purpose

This file gives Figma Make a short component and pattern selection table.

Use preferred components before lower-level or legacy primitives.

---

## Preferred selection table

| Need | Prefer |
|---|---|
| Page intent | `PageHeading` |
| App shell | `WorkspaceShell` |
| Scope and filters | `FilterBar` |
| List/detail decision workspace | `MasterDetailLayout` |
| Selected item detail | `WorkspaceDetailPanel` |
| Repeated operational objects | `ListContainer` + approved row component |
| Compact signal group | `MetricStrip` + `CompactMetric` |
| Asset hierarchy | `ComponentHierarchy` |
| Owned follow-through | `ActionRow` |
| Persistent action area | `StickyActionBar` |
| Highlighted risk | `AlertCard` with recommendation |
| Recommendation review | `RecommendationReviewPanel` |
| Evidence row | `EvidenceRow` |
| Source strength | `SourceStrengthPill` |
| Structured metadata | `KeyValueList` or `StatusSummary` |
| Known customer/service section | Business pattern first |

---

## Business pattern selection

| Intent | Prefer |
|---|---|
| Customer context | `CustomerStatusCard` |
| Customer review readiness | `CustomerReviewReadinessCard` |
| Connectivity coverage | `ConnectivityCoverageCard` |
| Asset intelligence | `AssetIntelligenceSummary` |
| Renewal risk | `RenewalRiskSummary` |
| Value proof | `ValueProofCard` |
| Service risk | `ServiceRiskSummary` |
| Recommendation review | `RecommendationReviewPanel` |
| Action creation | `CreateActionDialog` |

---

## Use with care

Use only with a specific reason:

| Component | Reason |
|---|---|
| `PageHeader` | Legacy page header; prefer `PageHeading` |
| `DetailPanel` | Lower-level primitive; prefer `WorkspaceDetailPanel` |
| `ComponentHierarchyItem` | Internal item; use only inside `ComponentHierarchy` |
| `Card` | Emphasis container only; not repeated object layout |
| `MetricCard` | Use only when `MetricStrip` is not enough |
| `Timeline` | Use only when sequence is the core decision support |

---

## Do not generate

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
```

If no component fits, simplify the screen instead of creating a local design system.
