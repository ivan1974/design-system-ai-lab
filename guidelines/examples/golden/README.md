# Golden Examples

## Purpose

This folder contains golden `App.tsx` examples for Figma Make.

Golden examples show what a good generated screen should look like when using
`design-system-ai-lab`.

They are not application demos.

They are Make-ready reference outputs.

Use them to help Make understand:

- the expected import pattern
- the expected screen structure
- the right business patterns for each screen intent
- how much density is appropriate
- how to keep evidence and validation context visible
- how to avoid generic dashboards
- how to avoid local component recreation
- how to keep the interface sober, B2B and action-oriented

---

## Relationship with src/demo

Do not move `src/demo` files into this folder.

Use this separation:

```txt
src/demo/
= application demos, development demos and Storybook-oriented examples

guidelines/examples/golden/
= Figma Make reference outputs for governed screen generation
```

Golden examples can be inspired by `src/demo`, but they should remain optimized
for Make guidance.

They should be complete, direct and easy for Make to imitate.

---

## Required Make kit context

Before using a golden example, Figma Make should read and follow:

```txt
Guidelines.md
setup.md
tokens.md
styles.md
prompts/overview.md
prompts/template.md
```

Use the relevant prompt file with the relevant golden example.

Do not use a golden example alone as the full instruction set.

---

## Available golden examples

### Customer monitoring

```txt
customer-monitoring.App.tsx
```

Use this when the screen intent is:

```txt
Customer monitoring
```

Main decision:

```txt
Decide which service risks need action before the next customer touchpoint.
```

Expected flow:

```txt
Customer context
→ decision signals
→ monitoring visibility limits
→ service risk synthesis
→ priority risks
→ owned actions
```

Key patterns:

```txt
PageHeader
CreateActionDialog
CustomerStatusCard
MetricGrid
MetricCard
ConnectivityCoverageCard
ServiceRiskSummary
PriorityList
AlertCard
ActionList
ActionCard
```

---

### Renewal risk review

```txt
renewal-risk-review.App.tsx
```

Use this when the screen intent is:

```txt
Renewal risk review
```

Main decision:

```txt
Decide which renewal blockers require mitigation before the renewal discussion.
```

Expected flow:

```txt
Renewal context
→ review readiness
→ value proof status
→ decision signals
→ renewal blockers
→ recommendation review
→ mitigation actions
```

Key patterns:

```txt
PageHeader
CreateActionDialog
RenewalRiskSummary
CustomerReviewReadinessCard
ValueProofCard
MetricGrid
MetricCard
PriorityList
AlertCard
RecommendationReviewPanel
RecommendationCard
ActionList
ActionCard
```

---

### Asset recommendation review

```txt
asset-recommendation-review.App.tsx
```

Use this when the screen intent is:

```txt
Asset recommendation review
```

Main decision:

```txt
Decide whether asset recommendations are ready for customer communication.
```

Expected flow:

```txt
Customer context
→ asset source facts
→ Health signals
→ Intelligence interpretation
→ service or communication risk
→ recommendation review
→ validation actions
```

Key patterns:

```txt
PageHeader
CreateActionDialog
CustomerStatusCard
AssetIntelligenceSummary
ServiceRiskSummary
RecommendationReviewPanel
RecommendationCard
ActionList
ActionCard
```

---

### QBR readiness

```txt
qbr-readiness.App.tsx
```

Use this when the screen intent is:

```txt
QBR readiness
```

Main decision:

```txt
Decide whether the QBR is ready or which proof and recommendation gaps must be closed first.
```

Expected flow:

```txt
Customer context
→ QBR readiness
→ value proof readiness
→ service risk status
→ recommendation readiness
→ blockers
→ preparation actions
```

Key patterns:

```txt
PageHeader
CreateActionDialog
CustomerStatusCard
CustomerReviewReadinessCard
ValueProofCard
ServiceRiskSummary
RecommendationReviewPanel
RecommendationCard
PriorityList
AlertCard
ActionList
ActionCard
```

---

## How Make should use golden examples

Use golden examples as reference outputs, not as copy-paste-only templates.

Make should preserve:

- root package imports
- single package CSS import
- complete visible `App.tsx`
- package components and business patterns
- screen intent flow
- evidence-first hierarchy
- source context when trust matters
- validation status when customer use is sensitive
- owner, due date and priority for actions
- recommendations grounded in visible facts
- sober B2B visual style

Make may adapt:

- customer name
- dates
- owners
- counts
- proof points
- recommendation copy
- action titles
- section labels when the intent remains clear

Make should not adapt:

- import strategy
- package source
- component vocabulary
- business pattern hierarchy
- screen intent flow
- evidence and validation principles
- visual style principles
- approved Badge tones

---

## Golden example quality criteria

A golden example should be:

- complete
- visible
- sober
- B2B
- readable
- action-oriented
- evidence-aware
- imported only from `design-system-ai-lab`
- styled through `design-system-ai-lab/styles.css`
- free of local component wrappers
- free of internal imports
- free of local design system files
- free of decorative dashboards
- free of glassmorphism, gradients and decorative charts
- faithful to the screen intent router
- accompanied by a short `Why this is compliant` note

---

## Common mistakes to avoid

Do not use golden examples to justify:

- creating local components
- creating `packages/design-system-ai-lab`
- importing from `dist/` or `src/`
- rebuilding business patterns manually
- adding generic dashboard cards
- adding decorative charts
- adding glassmorphism or gradients
- hiding source weakness or validation context
- presenting expected outcomes as proven value
- presenting internal proof as customer-ready proof
- presenting non-connected assets as live-monitored
- claiming AI validation or automatic approval

---

## Review instruction

After Make generates a screen, compare it with the closest golden example.

Check whether the generated screen preserves:

```txt
screen intent
→ component hierarchy
→ evidence hierarchy
→ actionability
→ visual sobriety
→ package usage
```

If the generated screen drifts, use the relevant repair prompt from the matching
prompt file.

---

## Final principle

Rules tell Make what to avoid.

Golden examples show Make what good looks like.

Use both.
