# QBR Readiness Prompt

## Purpose

Use this reusable prompt to generate a QBR readiness workspace with the v0.5.1 decision workspace standard.

This is reusable generation guidance, not a fixed benchmark case.

Fixed scoring cases live in:

```txt
benchmarks/figma-make/cases/*
```

## Primary decision

```txt
Decide whether the QBR is ready, or which proof and recommendation gaps must be closed first.
```

## Primary prompt

```txt
Create a complete visible desktop QBR readiness workspace in App.tsx.

Read and follow:
- make-minimal-contract.md
- Guidelines.md
- setup.md
- prompts/workspace-v2.md
- contracts/components.contract.json
- contracts/props.contract.json
- contracts/evidence-and-trust.contract.json

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/ or src/.
Do not generate a slide deck.
Do not generate a generic dashboard.
Do not create card saturation.

User role: account owner or service team member.
User decision: decide whether the QBR is ready, or which proof and recommendation gaps must be closed first.

Use a v0.5.1 decision workspace structure:
1. WorkspaceShell with PageHeading and a primary preparation action.
2. FilterBar for review scope, proof readiness and blockers.
3. MasterDetailLayout when proof gaps or blockers need selected-item review.
4. ListContainer with RiskQueueRow for repeated readiness blockers.
5. WorkspaceDetailPanel for selected blocker detail.
6. Tabs when selected detail has several local views.
7. StickyActionBar, ActionRow or ActionCard for preparation follow-through.
8. SectionStack and SectionBlock for grouped content.

Use business patterns before low-level composition:
- CustomerReviewReadinessCard for review readiness.
- ValueProofCard in mode="section" for proof readiness and proof gaps.
- ServiceRiskSummary when service risk affects the review.
- RecommendationReviewPanel in mode="drawer" when recommendations need review.
- RecommendationCard for recommendation rationale and readiness.
- AlertCard for highlighted blockers.
- RiskQueueRow inside ListContainer for repeated blockers.
- ActionRow for preparation actions.

Content constraints:
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcome from proven value.
- Show validation status when proof needs review before customer use.
- Keep source context visible where trust matters.
- Every blocker must have a recommended next step.
- Every action must include owner, due date and priority.
- Do not invent proof, sources, customer facts, readiness or validation.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

## Short prompt

```txt
Create a QBR readiness workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, PageHeading, FilterBar, MasterDetailLayout, ListContainer, RiskQueueRow, WorkspaceDetailPanel, Tabs and StickyActionBar.
Use CustomerReviewReadinessCard, ValueProofCard, ServiceRiskSummary, RecommendationReviewPanel, AlertCard and ActionRow.
Do not create local components, a slide deck, dashboard or card stack.
Keep proof readiness, validation, source context and action ownership visible.
```

## Repair prompts

Use these when Make drifts:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
repair-prompts/expected-outcomes-as-proven-value.md
repair-prompts/missing-human-validation.md
repair-prompts/actions-without-ownership.md
```

## Benchmark alignment

Related fixed benchmark case:

```txt
benchmarks/figma-make/cases/04-qbr-readiness.md
```

Benchmark cases are stable scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.
