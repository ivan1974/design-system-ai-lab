# Blocking Checklist v0.4

## Purpose

Use this checklist to decide whether a Figma Make generation must be rejected before quality review.

This is the blocking checklist. It answers one question:

```txt
Can this generated screen be accepted as a valid first draft?
```

If any blocking item fails, stop the review and ask Make to revise the output.

Do not use this checklist to polish the screen. Use `review/workspace-v2-checklist.md` and `review/quality-checklist.md` for improvement points.

---

## Blocking decision

Reject the generation if any item below is false.

---

## 1. Visible screen output

- [ ] `App.tsx` renders a complete visible screen.
- [ ] The screen is not empty.
- [ ] The output is not only package setup code.
- [ ] The output is not only a component gallery.
- [ ] The screen can be reviewed visually without additional implementation work.

Reject if `App.tsx` returns null, renders only a placeholder, or stops after setup.

---

## 2. Package contract

- [ ] Components are imported from `design-system-ai-lab`.
- [ ] `design-system-ai-lab/styles.css` is imported once.
- [ ] No local package named `design-system-ai-lab` was created.
- [ ] No `packages/design-system-ai-lab` folder was created.
- [ ] No local design system was generated to replace the package.
- [ ] No internal package imports are used.

Reject if Make imports from internal paths or local recreated components.

---

## 3. Documented prop values only

- [ ] Every package component prop uses a documented value.
- [ ] No undocumented `variant`, `tone`, `severity`, `priority`, `strength`, `mode`, `size`, `status` or `readiness` value is used.

Reject if Make guesses enum-like prop values instead of using the component contract, Storybook story or TypeScript declaration.

Repair with:

```txt
repair-prompts/invalid-props-or-local-visual-components.md
```

---

## 4. No local visual components

- [ ] No local `Button`, `Card`, `Badge`, `Dialog`, `Tabs`, `Drawer`, `SidePanel`, `Metric`, `Pill`, `Tag`, `Row`, `Panel` or form primitive duplicates package components.
- [ ] No local visual wrappers were created for package components.
- [ ] No shadcn-like, Radix-based, MUI or unrelated component system was introduced.
- [ ] Package components are used directly.

Small local helpers are acceptable only if they compose approved package components and do not introduce their own visual style, tokens, states or primitives.

Repair with:

```txt
repair-prompts/invalid-props-or-local-visual-components.md
```

---

## 5. v0.4 workspace structure

- [ ] A review/comparison task uses workspace structure instead of a long card stack.
- [ ] `WorkspaceShell` is used for a decision workspace.
- [ ] `PageHeading` is used for page intent.
- [ ] `SectionHeading` or `SectionBlock` is used for section hierarchy.
- [ ] `MasterDetailLayout` is used when the user inspects an item from a list.
- [ ] `WorkspaceDetailPanel` is used when selected detail should open, close or preserve the central workspace.
- [ ] `Tabs`, `HeaderTabs`, `SegmentedControl`, `SecondaryNavigation` or `Breadcrumbs` are used instead of local navigation.

Reject if the prompt asks for review, comparison or item inspection and the output is only a long sequence of equal cards.

---

## 6. Rows and lists

- [ ] Repeated customers use `CustomerQueueRow`.
- [ ] Repeated assets use `AssetQueueRow`.
- [ ] Repeated risks or blockers use `RiskQueueRow`.
- [ ] Repeated recommendations use `RecommendationQueueRow`.
- [ ] Generic review items use `ReviewQueueRow`.
- [ ] Queue rows are grouped in `ListContainer`.
- [ ] Make does not create local selected, hover or divider states for rows.

Reject if repeated customer, asset, risk or recommendation objects are rebuilt as local rows or card stacks.

Repair with:

```txt
repair-prompts/poor-row-density.md
repair-prompts/missing-list-container.md
```

---

## 7. Business patterns are used when available

- [ ] `CustomerStatusCard` is used for customer context when relevant.
- [ ] `CustomerReviewReadinessCard` is used for QBR or review readiness when relevant.
- [ ] `ConnectivityCoverageCard` is used for monitoring coverage when relevant.
- [ ] `AssetIntelligenceSummary` is used for asset intelligence or asset recommendation context when relevant.
- [ ] `RenewalRiskSummary` is used for renewal context when relevant.
- [ ] `ValueProofCard` is used for proof readiness, proof points or proof gaps when relevant.
- [ ] `ServiceRiskSummary` is used for service risk synthesis when relevant.
- [ ] `RecommendationReviewPanel` and `RecommendationCard` are used for selected recommendation review when relevant.
- [ ] Generic `Card`, `div`, `dt` or `dd` markup does not manually rebuild an existing business pattern.

Reject if a known business section is rebuilt manually while an approved pattern exists.

---

## 8. Alerts and actions are actionable

- [ ] `AlertCard` is used for important risks or blockers.
- [ ] Every `AlertCard` has severity, title, description and recommendation.
- [ ] `ActionRow` or `ActionCard` is used for assigned actions when relevant.
- [ ] Every action has owner, due date and priority.
- [ ] Actions describe concrete work, not vague notes.

Reject if alerts explain a problem without a recommendation, or if actions lack ownership.

---

## 9. Evidence is not invented or overstated

- [ ] No invented source is presented as real.
- [ ] No invented evidence is presented as real.
- [ ] No invented asset fact, telemetry, source scope or source strength is presented as real.
- [ ] No unsupported recommendation is presented as evidence-backed.
- [ ] Expected outcomes are not presented as proven value.
- [ ] Internal proof is not presented as customer-ready proof without validation.
- [ ] Proof readiness and validation status are visible when customer use is sensitive.

Reject if the screen creates false evidence or makes weak evidence look validated.

---

## 10. Asset and AI safety are respected when relevant

- [ ] Non-connected assets are not presented as live-monitored.
- [ ] Partial visibility is not presented as complete asset knowledge.
- [ ] Health signals are not presented as source-system truth.
- [ ] Intelligence interpretation is not presented as source-system truth.
- [ ] AI confidence is not presented as source strength, validation status, customer readiness or proof readiness.
- [ ] Critical customer, service, renewal, proof or asset decisions keep human validation visible.

Reject if the screen hides partial visibility, overstates AI, or removes human validation from critical decisions.

---

## 11. Visual blockers

- [ ] The screen uses white-first visual style.
- [ ] No decorative gradients, glassmorphism, glow effects or heavy shadows are used.
- [ ] No card-saturated layout is created.
- [ ] Typography hierarchy is not flat.
- [ ] Trust-sensitive information is not hidden by muted styling.

Repair with:

```txt
repair-prompts/weak-typography-hierarchy.md
repair-prompts/overdecorated-surface.md
```

---

## 12. Content blockers

- [ ] Visible screen text is in English.
- [ ] Headings, row labels, detail titles and actions do not repeat the same sentence verbatim.
- [ ] Recommendation title and recommendation text are not identical.
- [ ] Button labels are explicit.
- [ ] The screen makes the next action clear.

Reject if the screen mixes French and English or repeats generic text across sections.

---

## Final principle

Blocking criteria protect the package contract and trust integrity.

If the screen breaks the package contract, hides accountability or creates false evidence, reject it.
