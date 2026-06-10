# Workspace v2 Quality Checklist — v0.5.1

## Purpose

Use this checklist after `review/blocking-checklist.md` passes.

This checklist improves valid Figma Make outputs that should follow the v0.5.1 decision workspace standard.

It does not replace:

```txt
guidelines/review/blocking-checklist.md
guidelines/review/quality-checklist.md
guidelines/repair-prompts/repair-router.md
```

---

## Checklist level

```txt
level: quality
use after: blocking checklist
output: repair suggestions, not automatic rejection
```

If a problem breaks package contract, trust integrity, accessibility or actionability, return to the blocking checklist.

---

## 1. User decision

- [ ] The screen supports one clear user decision.
- [ ] The target user role is visible or inferable.
- [ ] The title and description match the decision.
- [ ] The primary action supports the decision.
- [ ] The screen does not solve unrelated goals.

Repair route:

```txt
repair-prompts/weak-layout.md
```

---

## 2. Page and section hierarchy

- [ ] `PageHeading` is used for page-level intent.
- [ ] `SectionHeading` is used for major content areas when a section needs an introduction.
- [ ] `SectionBlock`, `SectionStack` or business patterns are used for grouped content.
- [ ] Text hierarchy is not flat.
- [ ] Important source, validation and proof text remains readable.

Repair route:

```txt
repair-prompts/weak-typography-hierarchy.md
repair-prompts/weak-layout.md
```

---

## 3. Workspace structure

- [ ] `WorkspaceShell` is used when the screen has scope, filters, review areas or persistent actions.
- [ ] `FilterBar`, `SecondaryNavigation` or `SegmentedControl` shows scope, filters or mode when relevant.
- [ ] `MasterDetailLayout` is used when the user reviews a list and a selected item.
- [ ] `WorkspaceDetailPanel` is used for selected-item review when detail should open, close or preserve the central workspace.
- [ ] `Tabs` are used when selected detail has multiple review questions.
- [ ] `StickyActionBar`, `ActionRow` or `ActionCard` is used when there is clear follow-through.
- [ ] `SectionStack` and `SectionBlock` group dense sections.

Repair route:

```txt
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
```

---

## 4. Surface and visual style

- [ ] The screen is white-first.
- [ ] `Surface`, `ListContainer`, `Well`, `Divider`, `Toolbar` or approved patterns are used before styled div wrappers.
- [ ] No decorative gradients are used.
- [ ] No glassmorphism is used.
- [ ] No glow or heavy shadows are used.
- [ ] The output does not feel like a generic SaaS dashboard.

Repair route:

```txt
repair-prompts/overdecorated-surface.md
repair-prompts/generic-dashboard.md
```

---

## 5. Queue rows and density

- [ ] Repeated customers use `CustomerQueueRow`.
- [ ] Repeated assets use `AssetQueueRow`.
- [ ] Repeated risks or blockers use `RiskQueueRow`.
- [ ] Repeated recommendations use `RecommendationQueueRow`.
- [ ] Generic review items use `ReviewQueueRow`.
- [ ] Queue rows are grouped in `ListContainer`.
- [ ] Repeated facts use `KeyValueList` or rows.
- [ ] Repeated signals use `SignalRow` or `MetricStrip`.
- [ ] Repeated evidence uses `EvidenceRow`.
- [ ] Repeated actions use `ActionRow`.
- [ ] Cards are reserved for highlighted decision objects.

Repair route:

```txt
repair-prompts/poor-row-density.md
repair-prompts/missing-list-container.md
repair-prompts/card-saturation.md
```

---

## 6. Navigation

- [ ] `Tabs` are used for local content switching.
- [ ] `HeaderTabs` are used only for major workspace views.
- [ ] `SegmentedControl` is used for compact filters or mode switching.
- [ ] `SecondaryNavigation` is used for secondary workspace navigation.
- [ ] `Breadcrumbs` are used for location context when useful.
- [ ] No local tab, breadcrumb or segmented control system is created.

Repair route:

```txt
repair-prompts/invalid-props-or-local-visual-components.md
repair-prompts/no-local-components.md
```

---

## 7. Business pattern usage

- [ ] `CustomerStatusCard` is used for customer context when relevant.
- [ ] `CustomerReviewReadinessCard` is used for QBR or review readiness when relevant.
- [ ] `ConnectivityCoverageCard` is used for monitoring coverage when relevant.
- [ ] `AssetIntelligenceSummary` is used for asset intelligence when relevant.
- [ ] `ComponentHierarchy` is used for hierarchy when relevant.
- [ ] `RenewalRiskSummary` is used for renewal context when relevant.
- [ ] `ValueProofCard` is used for proof readiness, proof points or proof gaps when relevant.
- [ ] `ServiceRiskSummary` is used for service risk synthesis when relevant.
- [ ] `RecommendationReviewPanel` and `RecommendationCard` are used for selected recommendation review when relevant.
- [ ] Generic cards do not rebuild existing patterns.

Repair route:

```txt
repair-prompts/no-local-components.md
repair-prompts/weak-layout.md
```

---

## 8. Evidence hierarchy

- [ ] Facts appear before interpretation.
- [ ] Source scope is visible when trust depends on it.
- [ ] Source strength is visible when trust depends on it.
- [ ] Freshness is visible when timing affects trust.
- [ ] Validation status is visible before customer use.
- [ ] Recommendations are traceable to visible facts or evidence.
- [ ] Expected outcomes are not styled as proven value.
- [ ] Internal proof is not styled as customer-ready proof without validation.

Repair route:

```txt
repair-prompts/missing-evidence.md
repair-prompts/expected-outcomes-as-proven-value.md
repair-prompts/missing-human-validation.md
```

---

## 9. Actionability

- [ ] Actions are specific.
- [ ] Actions have owner, due date and priority.
- [ ] Actions follow risks, proof gaps or recommendations.
- [ ] The primary action does not compete with many other primary actions.
- [ ] Button labels are explicit.

Repair route:

```txt
repair-prompts/actions-without-ownership.md
```

---

## 10. Accessibility and form safety

- [ ] Forms appear only when the user has a clear submit, save, review or create action.
- [ ] Form controls use package `Field`, `Input`, `Select`, `Textarea` and `Label`.
- [ ] Visible labels are present.
- [ ] `htmlFor` and `id` relationships are present when labels target controls.
- [ ] Placeholder text is not the only label.

Repair route:

```txt
repair-prompts/raw-form-controls.md
repair-prompts/no-inline-styled-inputs.md
```

---

## 11. Golden example alignment

Compare the generated screen with the closest golden example:

```txt
guidelines/examples/golden/customer-monitoring.App.tsx
guidelines/examples/golden/renewal-risk-review.App.tsx
guidelines/examples/golden/asset-recommendation-review.App.tsx
guidelines/examples/golden/qbr-readiness.App.tsx
guidelines/examples/golden/installed-base-explorer.App.tsx
```

Check whether the generated screen preserves:

```txt
screen intent
→ component hierarchy
→ evidence hierarchy
→ actionability
→ visual sobriety
→ package usage
```

Repair route:

```txt
repair-prompts/weak-layout.md
repair-prompts/generic-dashboard.md
repair-prompts/card-saturation.md
```

---

## Final principle

A workspace v2 screen should make the decision path visible:

```txt
scope
→ facts and source context
→ queue or selected item
→ detail review
→ evidence and validation
→ next action
```

If the issue is blocking, use `blocking-checklist.md` and `repair-router.md` before returning to this quality checklist.
