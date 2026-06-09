# Renewal Risk Review Prompt

## Purpose

Use this prompt to generate a renewal risk review screen with the v2 decision
workspace standard.

The screen should help a Customer Success Manager or Renewal Manager identify
renewal blockers, proof gaps and mitigation actions before the renewal discussion.

---

## Primary decision

```txt
Decide which renewal blockers require mitigation before the renewal discussion.
```

---

## Primary prompt

```txt
Create a complete visible desktop renewal risk review workspace in App.tsx.

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
Do not generate a generic dashboard.
Do not create card saturation.

User role: Customer Success Manager or Renewal Manager.
User decision: decide which renewal blockers require mitigation before the renewal discussion.

Required workspace structure:
1. WorkspaceShell with renewal review header and primary mitigation action.
2. FilterBar for renewal scope, blockers and readiness status.
3. MasterDetailLayout when blockers or proof gaps need selected-item review.
4. DetailPanel with DetailPanelTabs for selected blocker review.
5. StickyActionBar for the next mitigation action.
6. SectionStack and SectionBlock for dense grouped content.

Use these patterns and components when relevant:
- RenewalRiskSummary for renewal context.
- ValueProofCard in mode="section" for proof readiness and proof gaps.
- CustomerReviewReadinessCard when customer discussion readiness matters.
- RecommendationReviewPanel in mode="drawer" when recommendations need review.
- RecommendationCard for recommendation rationale and readiness.
- AlertCard for highlighted renewal blockers.
- ActionRow for mitigation actions.
- KeyValueList for compact facts.

Content constraints:
- Show renewal date or renewal window.
- Show proof readiness and validation status.
- Distinguish internal proof from customer-ready proof.
- Do not present expected outcomes as proven value.
- Every alert must include a recommendation.
- Every action must include owner, due date and priority.
- Keep source context visible where trust matters.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

---

## Short prompt

```txt
Create a renewal risk review workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, FilterBar, MasterDetailLayout, DetailPanel, DetailPanelTabs and StickyActionBar.
Use RenewalRiskSummary, ValueProofCard, RecommendationReviewPanel, AlertCard and ActionRow.
Do not create local components.
Do not generate a generic dashboard or card stack.
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
