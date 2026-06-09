# Asset Recommendation Review Prompt

## Purpose

Use this prompt to generate an asset recommendation review screen with the v2
decision workspace standard.

The screen should help a Service Manager, Customer Success Manager or asset
expert review asset signals, source limits, recommendation readiness and
validation actions before customer communication.

---

## Primary decision

```txt
Decide whether asset recommendations are ready for customer communication.
```

---

## Primary prompt

```txt
Create a complete visible desktop asset recommendation review workspace in App.tsx.

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

User role: Service Manager or Customer Success Manager.
User decision: decide whether asset recommendations are ready for customer communication.

Required workspace structure:
1. WorkspaceShell with recommendation review header and primary validation action.
2. FilterBar for recommendation scope, priority, readiness and source status.
3. MasterDetailLayout when recommendations or assets need selected-item review.
4. DetailPanel with DetailPanelTabs for selected recommendation detail.
5. StickyActionBar for expert validation or follow-up action.
6. SectionStack and SectionBlock for dense grouped content.

Use these patterns and components when relevant:
- CustomerStatusCard or KeyValueList for customer context.
- AssetIntelligenceSummary before asset recommendations.
- ServiceRiskSummary when partial asset visibility creates service risk.
- RecommendationReviewPanel in mode="drawer" for recommendation review.
- RecommendationCard for recommendation rationale and readiness.
- EvidenceRow for source and evidence verification.
- ActionRow for validation and follow-up actions.
- MetricStrip with CompactMetric for compact Health signals.

Content constraints:
- Show source-system facts before Health signals.
- Separate Health signals from Intelligence interpretation.
- Do not present Intelligence interpretation as source-system truth.
- Do not present partial visibility as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Keep source scope, source strength, freshness and validation visible.
- Every recommendation must be grounded in visible facts or evidence.
- Every action must include owner, due date and priority.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

---

## Short prompt

```txt
Create an asset recommendation review workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, FilterBar, MasterDetailLayout, DetailPanel, DetailPanelTabs and StickyActionBar.
Use AssetIntelligenceSummary, ServiceRiskSummary, RecommendationReviewPanel, RecommendationCard, EvidenceRow and ActionRow.
Do not create local components.
Do not generate a generic dashboard or card stack.
Keep source scope, freshness and expert validation visible before customer use.
```

---

## Repair prompts

Use these when Make drifts:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
```
