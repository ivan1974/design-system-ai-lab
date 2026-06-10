# Workspace v2 checklist — v0.4

Use this checklist after generating a v0.4 workspace.

---

## Required structure

- [ ] The screen has one clear decision or review goal.
- [ ] The page starts with `PageHeading`.
- [ ] Major sections use `SectionHeading` or `SectionBlock`.
- [ ] Scope and filters use `FilterBar`, `SecondaryNavigation` or `SegmentedControl`.
- [ ] List/detail review uses `MasterDetailLayout`.
- [ ] Selected detail uses `WorkspaceDetailPanel` when closable or overlay detail is needed.
- [ ] Detail tabs use `Tabs`.
- [ ] Follow-through uses `StickyActionBar` or `ActionRow`.

---

## Required v0.4 components

- [ ] Repeated customers use `CustomerQueueRow`.
- [ ] Repeated assets use `AssetQueueRow`.
- [ ] Repeated risks use `RiskQueueRow`.
- [ ] Repeated recommendations use `RecommendationQueueRow`.
- [ ] Generic review items use `ReviewQueueRow`.
- [ ] Queue rows are inside `ListContainer`.
- [ ] Context sections use the most specific business pattern available.

---

## Business pattern fit

- [ ] Customer context uses `CustomerStatusCard` when appropriate.
- [ ] QBR readiness uses `CustomerReviewReadinessCard` when appropriate.
- [ ] Asset interpretation uses `AssetIntelligenceSummary` when appropriate.
- [ ] Connectivity coverage uses `ConnectivityCoverageCard` when appropriate.
- [ ] Renewal exposure uses `RenewalRiskSummary` when appropriate.
- [ ] Value proof uses `ValueProofCard` when appropriate.
- [ ] Service risk uses `ServiceRiskSummary` when appropriate.
- [ ] Recommendation review uses `RecommendationReviewPanel` and `RecommendationCard` when appropriate.

---

## Visual quality

- [ ] White-first visual style is preserved.
- [ ] No decorative gradients are used.
- [ ] No glassmorphism or glow effects are used.
- [ ] Shadows are not used for normal cards or rows.
- [ ] Layout density is operational, not marketing-like.
- [ ] There is no card saturation.
- [ ] Typography hierarchy is clear.

---

## Trust and evidence

- [ ] Source scope is visible where relevant.
- [ ] Source strength is visible where relevant.
- [ ] Freshness is visible where timing matters.
- [ ] Validation status is visible before customer use.
- [ ] Expected outcomes are not shown as proven value.
- [ ] Internal proof is not shown as customer-ready proof without validation.
- [ ] AI interpretation does not appear as source-system truth.

---

## Content quality

- [ ] All visible screen text is in English.
- [ ] Headings are not duplicated verbatim in rows, panels and actions.
- [ ] Recommendation titles and recommendation text are not identical.
- [ ] Button labels are explicit.
- [ ] The next action is clear.

---

## Local implementation quality

- [ ] No local visual component duplicates the package.
- [ ] No local tabs, drawer, card, button, badge, queue row or form system is created.
- [ ] Small local helpers are pure mapping helpers only.
- [ ] All imports come from the package root.
- [ ] All documented prop values are valid.
