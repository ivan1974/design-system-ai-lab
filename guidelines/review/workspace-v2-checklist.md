# Workspace v2 Quality Checklist — v0.4

## Purpose

Use this checklist after the blocking checklist when reviewing a Make output that should follow the v0.4 decision workspace standard.

This checklist improves valid outputs. It does not replace:

```txt
review/blocking-checklist.md
review/quality-checklist.md
```

---

## 1. User decision

- [ ] The screen supports one clear user decision.
- [ ] The target user role is visible or inferable.
- [ ] The title and description match the decision.
- [ ] The primary action supports the decision.
- [ ] The screen does not solve unrelated goals.

---

## 2. Page and section hierarchy

- [ ] `PageHeading` is used for page-level intent.
- [ ] `SectionHeading` is used for major content areas when a section needs an introduction.
- [ ] `SectionBlock` is used for local grouped content.
- [ ] Text hierarchy is not flat.
- [ ] Important source, validation and proof text remains readable.

Repair with:

```txt
repair-prompts/weak-typography-hierarchy.md
```

---

## 3. Workspace structure

- [ ] `WorkspaceShell` is used when the screen has scope, filters, review areas or persistent actions.
- [ ] `FilterBar`, `SecondaryNavigation` or `SegmentedControl` shows scope, filters or mode when relevant.
- [ ] `MasterDetailLayout` is used when the user reviews a list and a selected item.
- [ ] `WorkspaceDetailPanel` is used for selected-item review when detail should open, close or preserve the central workspace.
- [ ] `Tabs` are used when selected detail has multiple review questions.
- [ ] `StickyActionBar` or `ActionRow` is used when there is clear follow-through.
- [ ] `SectionStack` and `SectionBlock` group dense sections.

---

## 4. Surface and visual style

- [ ] The screen is white-first.
- [ ] `Surface`, `ListContainer`, `Well`, `Divider` or `Toolbar` are used before styled div wrappers.
- [ ] No decorative gradients are used.
- [ ] No glassmorphism is used.
- [ ] No glow or heavy shadows are used.
- [ ] The output does not feel like a generic SaaS dashboard.

Repair with:

```txt
repair-prompts/overdecorated-surface.md
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

Repair with:

```txt
repair-prompts/poor-row-density.md
repair-prompts/missing-list-container.md
```

---

## 6. Navigation

- [ ] `Tabs` are used for local content switching.
- [ ] `HeaderTabs` are used only for major workspace views.
- [ ] `SegmentedControl` is used for compact filters or mode switching.
- [ ] `SecondaryNavigation` is used for secondary workspace navigation.
- [ ] `Breadcrumbs` are used for location context when useful.
- [ ] No local tab, breadcrumb or segmented control system is created.

---

## 7. Business pattern usage

- [ ] `CustomerStatusCard` is used for customer context when relevant.
- [ ] `CustomerReviewReadinessCard` is used for QBR or review readiness when relevant.
- [ ] `ConnectivityCoverageCard` is used for monitoring coverage when relevant.
- [ ] `AssetIntelligenceSummary` is used for asset intelligence when relevant.
- [ ] `RenewalRiskSummary` is used for renewal context when relevant.
- [ ] `ValueProofCard` is used for proof readiness, proof points or proof gaps when relevant.
- [ ] `ServiceRiskSummary` is used for service risk synthesis when relevant.
- [ ] `RecommendationReviewPanel` and `RecommendationCard` are used for selected recommendation review when relevant.
- [ ] Generic cards do not rebuild existing patterns.

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

---

## 9. Actionability

- [ ] Actions are specific.
- [ ] Actions have owner, due date and priority.
- [ ] Actions follow risks, proof gaps or recommendations.
- [ ] The primary action does not compete with many other primary actions.
- [ ] Button labels are explicit.

---

## 10. Content quality

- [ ] Visible text is in English.
- [ ] The same sentence is not repeated across heading, row, panel and action.
- [ ] Recommendation title and recommendation text are not identical.
- [ ] The next action is clear.

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
