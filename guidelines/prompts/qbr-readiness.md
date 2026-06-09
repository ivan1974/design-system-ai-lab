# QBR Readiness Prompt

## Purpose

Use this prompt to generate a QBR readiness screen with the v2 decision workspace
standard.

The screen should help a Customer Success Manager prepare a customer-ready QBR by
checking proof readiness, recommendation readiness, open risks and assigned
preparation actions.

---

## Primary decision

```txt
Decide whether the QBR is ready or which proof and recommendation gaps must be closed first.
```

---

## Primary prompt

```txt
Create a complete visible desktop QBR readiness workspace in App.tsx.

Read and follow:
- Guidelines.md
- setup.md
- tokens.md
- styles.md
- screen-architecture/README.md
- prompts/workspace-v2.md

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not recreate design system components locally.
Do not import from dist/ or src/.
Do not generate a slide deck.
Do not generate a generic dashboard.
Do not create card saturation.

User role: Customer Success Manager.
User decision: decide whether the QBR is ready or which proof and recommendation gaps must be closed first.

Required workspace structure:
1. WorkspaceShell with QBR readiness header and primary preparation action.
2. FilterBar for review scope, proof readiness and blockers.
3. MasterDetailLayout when proof gaps or blockers need selected-item review.
4. DetailPanel with DetailPanelTabs for selected blocker detail.
5. StickyActionBar for the next preparation action.
6. SectionStack and SectionBlock for dense grouped content.

Use these patterns and components when relevant:
- CustomerStatusCard or KeyValueList for customer context.
- CustomerReviewReadinessCard for review readiness.
- ValueProofCard in mode="section" for proof readiness and proof gaps.
- ServiceRiskSummary when service risk affects the review.
- RecommendationReviewPanel in mode="drawer" when recommendations need review.
- RecommendationCard for recommendation rationale and readiness.
- AlertCard for highlighted blockers.
- ActionRow for preparation actions.

Content constraints:
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcome from proven value.
- Show validation status when proof needs review before customer use.
- Keep source context visible where trust matters.
- Every blocker must have a recommended next step.
- Every action must include owner, due date and priority.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

---

## Short prompt

```txt
Create a QBR readiness workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, FilterBar, MasterDetailLayout, DetailPanel, DetailPanelTabs and StickyActionBar.
Use CustomerReviewReadinessCard, ValueProofCard, ServiceRiskSummary, RecommendationReviewPanel, AlertCard and ActionRow.
Do not create local components.
Do not generate a slide deck, dashboard or card stack.
Keep proof readiness, validation and source context visible.
```

---

## Repair prompts

Use these when Make drifts:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
```
