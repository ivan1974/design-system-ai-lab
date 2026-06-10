# Anti-Patterns

## Purpose

Use this file to identify recurring Figma Make failure modes and repair them.

This file is not a checklist.

Use checklists for review decisions:

```txt
review/blocking-checklist.md
review/quality-checklist.md
```

Use this file when the generated screen shows a recognizable drift:

```txt
failure mode
→ why it is a problem
→ corrective instruction
```

---

## Critical anti-patterns

These anti-patterns should block acceptance immediately:

- empty or invisible `App.tsx`
- local package recreation
- local design system components
- local wrappers around package components
- internal package imports
- raw form fields replacing package form components
- manual reconstruction of business patterns
- generic dashboard with no clear user decision
- prompt-first chatbot for basic structured facts
- GenAI used for simple retrieval, counts, statuses, dates, owners, asset coverage, monitoring freshness, renewal status, action ownership, telemetry values, connectivity status, lifecycle status or source scope
- alerts without recommendations
- actions without owner, due date or priority
- recommendations without visible facts or evidence context
- invented sources, citations, evidence, telemetry, asset facts or value proof
- expected outcomes presented as proven value
- internal proof or technical outcomes presented as customer-ready proof without validation
- non-connected assets presented as live-monitored
- source-system facts, Health signals and Intelligence interpretation mixed together without distinction
- critical customer, service, renewal, proof or asset decisions without human validation
- visual styling that hides uncertainty, source weakness, partial visibility or proof gaps

When a critical anti-pattern appears, use `review/blocking-checklist.md` and the
relevant correction prompt.

---

## 1. Local package recreation

Anti-pattern:

Make creates a local package instead of using the published package.

Bad:

```txt
packages/design-system-ai-lab/
  package.json
  src/index.ts
  src/components/button.tsx
```

Bad:

```tsx
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
```

Why it is a problem:

It breaks the design system contract and creates a parallel system that will
drift from the real package.

Corrective instruction:

```txt
Use the published npm package design-system-ai-lab directly.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
```

---

## 2. Local component wrappers

Anti-pattern:

Make creates wrappers around package components or raw HTML elements.

Bad:

```tsx
function ForwardedButton(props) {
  return <button className="rounded-md px-4 py-2" {...props} />;
}
```

Bad:

```tsx
const LocalCard = ({ children }) => (
  <div className="rounded-xl border bg-white p-4 shadow-sm">{children}</div>
);
```

Why it is a problem:

Wrappers hide the package API, create style drift and often remove accessibility
or consistency provided by the package.

Corrective instruction:

```txt
Remove local wrappers.
Use package components directly from design-system-ai-lab.
Do not wrap Button, Card, Badge, Dialog, MetricCard, AlertCard, ActionCard or business patterns.
```

---

## 3. Internal package imports

Anti-pattern:

Make imports from internal package paths.

Bad:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
import { MetricCard } from "design-system-ai-lab/src/components/metric-card";
```

Why it is a problem:

Internal paths are not the public API and make generated code fragile.

Corrective instruction:

```txt
Import all components from the package root:
import { Button, MetricCard } from "design-system-ai-lab";
```

---

## 4. Empty or invisible App.tsx

Anti-pattern:

Make installs dependencies or creates files but leaves `App.tsx` empty or nearly
empty.

Bad:

```tsx
export default function App() {
  return null;
}
```

Why it is a problem:

The Make output cannot be reviewed as a screen.

Corrective instruction:

```txt
Revise App.tsx.
App.tsx must render a complete visible desktop screen using components imported from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
Do not stop after package setup.
Generate the visible interface now.
```

---

## 5. Raw form fields

Anti-pattern:

Make creates raw or inline-styled form controls instead of using package form
components.

Bad:

```tsx
<input style={{ height: "40px", borderRadius: "8px" }} />
<select className="custom-select" />
```

Why it is a problem:

It bypasses package accessibility, labeling, spacing and styling rules.

Corrective instruction:

```txt
Use CreateActionDialog for standard action creation.
Use Field, Input, Select and Textarea from design-system-ai-lab for forms.
Do not use inline-styled raw input, select or textarea elements.
Do not use disabled form controls for display-only facts.
```

---

## 6. Generic dashboard

Anti-pattern:

The screen is a generic dashboard with vague sections and no clear decision.

Bad:

```txt
Dashboard
Overview cards
Many KPIs
Large chart
Recent activity
Table
```

Why it is a problem:

A generic dashboard displays available data instead of helping the user decide
what to do next.

Corrective instruction:

```txt
Keep one primary user decision.
Use the relevant screen intent router.
Replace generic dashboard sections with package business patterns, risks, recommendations and owned actions.
Remove decorative charts, generic cards and unrelated activity sections.
```

---

## 7. Wrong component hierarchy

Anti-pattern:

The screen uses components in random order.

Bad:

```txt
ActionList
MetricCards
Customer context
AlertCards
PageHeader
```

Why it is a problem:

The user sees actions before understanding context or risk.

Corrective instruction:

```txt
Reorder the screen around the decision flow:
Context
→ decision signals
→ risks or readiness gaps
→ recommendations when relevant
→ owned actions
```

---

## 8. Manual reconstruction of business patterns

Anti-pattern:

Make rebuilds a known business pattern manually with `Card`, `Badge`, `div`, `dt`
or `dd` markup.

Bad:

```tsx
<Card title="Customer status">
  <div>
    <p>Customer: Northstar Manufacturing</p>
    <p>Plan: Advanced service plan</p>
    <p>Coverage: 68%</p>
  </div>
</Card>
```

Why it is a problem:

The package already provides business patterns that encode the intended structure
and meaning.

Corrective instruction:

```txt
Use business patterns before low-level components.
Use CustomerStatusCard, ConnectivityCoverageCard, RenewalRiskSummary, CustomerReviewReadinessCard, ValueProofCard, AssetIntelligenceSummary, ServiceRiskSummary or RecommendationReviewPanel when they match the section intent.
```

---

## 9. Metrics without decision value

Anti-pattern:

The screen contains too many metrics or metrics that do not support a decision.

Bad:

```txt
12 MetricCard items at the top of the screen
```

Why it is a problem:

Too many metrics increase cognitive load and make the screen feel complete
without improving the decision.

Corrective instruction:

```txt
Use 2 to 4 decision-relevant metrics inside MetricGrid.
Each MetricCard should include helper text and source or freshness context when trust depends on it.
Remove vanity metrics and decorative KPIs.
```

---

## 10. Alerts without recommendations

Anti-pattern:

Alerts describe a problem but do not tell the user what to do next.

Bad:

```tsx
<AlertCard
  severity="warning"
  title="Connectivity issue"
  scope="Main site"
  description="Some assets are disconnected."
  recommendation=""
/>
```

Why it is a problem:

The design system treats alerts as decision-support elements, not passive status
messages.

Corrective instruction:

```txt
Every AlertCard must include a concrete recommendation.
Important alert recommendations should be supported by visible facts or evidence context.
```

---

## 11. Actions without ownership

Anti-pattern:

Actions are vague or missing owner, due date or priority.

Bad:

```tsx
<ActionCard title="Follow up" />
```

Bad:

```txt
Check issue
Review later
Contact someone
```

Why it is a problem:

Unowned actions make the interface look actionable without creating
accountability.

Corrective instruction:

```txt
Every ActionCard must include owner, due date and priority.
Action titles should describe concrete work.
Actions should be connected to risks, proof gaps, recommendations or the user decision.
```

---

## 12. Invented evidence or proof

Anti-pattern:

The screen invents proof points, sources, citations, telemetry, asset facts or
customer facts.

Why it is a problem:

It creates false trust and can make unsupported recommendations look validated.

Corrective instruction:

```txt
Do not invent sources, citations, telemetry, asset facts, evidence or value proof.
Use sample data only when clearly provided by the prompt.
Show source context, source strength and validation status when trust matters.
```

---

## 13. Expected outcomes shown as proven value

Anti-pattern:

Expected outcomes, technical outcomes or internal proof are presented as proven
customer value.

Bad:

```txt
Value delivered: avoided downtime
```

when the screen only shows an expected benefit or internal proof.

Why it is a problem:

It overstates value and weakens trust in renewal, QBR and proof screens.

Corrective instruction:

```txt
Distinguish completed activity, expected outcome, internal proof and customer-ready proof.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.
Use ValueProofCard for proof readiness, proof points and proof gaps.
```

---

## 14. Asset intelligence overconfidence

Anti-pattern:

The screen presents asset intelligence as more complete or certain than it is.

Examples:

- non-connected assets presented as live-monitored
- partial Health visibility presented as complete asset knowledge
- Intelligence interpretation presented as source-system truth
- source strength hidden when source scope is partial

Why it is a problem:

It creates false operational confidence and can mislead customer communication.

Corrective instruction:

```txt
Use AssetIntelligenceSummary before asset-related recommendations.
Distinguish source-system facts, Health signals and Intelligence interpretation.
Do not present Intelligence interpretation as source-system truth.
Do not present partial visibility as complete asset knowledge.
Do not present non-connected assets as live-monitored.
Keep expert or human validation visible before customer use.
```

---

## 15. Wrong GenAI usage

Anti-pattern:

The screen uses GenAI as the source of basic structured facts.

Bad uses:

```txt
retrieve customer name
find renewal date
count disconnected assets
list open cases
validate recommendation automatically
prove value automatically
```

Why it is a problem:

Structured facts should come from source systems, APIs, BI tools or databases.

Corrective instruction:

```txt
Use BI-first, AI-assisted logic.
Do not use GenAI for structured retrieval, counts, dates, owners, statuses, telemetry or source data.
Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation after visible facts are shown.
Do not claim AI validation or automatic approval.
```

---

## 16. Decorative SaaS styling

Anti-pattern:

The screen looks like a generic SaaS template or decorative dashboard.

Examples:

- decorative gradients
- glassmorphism
- arbitrary shadows
- arbitrary radius values
- decorative charts
- decorative hero sections
- neon or glow effects
- too many equal-weight cards

Why it is a problem:

Decoration can hide hierarchy, uncertainty and actionability.

Corrective instruction:

```txt
Keep the visual style sober, B2B, readable, structured, action-oriented and evidence-aware.
Do not use decorative gradients, glassmorphism, arbitrary shadows, arbitrary radius values or decorative charts.
Use styles from design-system-ai-lab/styles.css.
```

---

## Repair workflow

When an anti-pattern appears:

1. Identify whether it is blocking.
2. Use `review/blocking-checklist.md` if acceptance should stop.
3. Use `review/quality-checklist.md` if the screen is valid but weak.
4. Use the relevant correction prompt from the matching prompt file.
5. Compare the revised screen with the closest golden example.

Relevant prompt files:

```txt
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
prompts/asset-recommendation-review.md
prompts/qbr-readiness.md
```

Relevant golden examples:

```txt
guidelines/examples/golden/customer-monitoring.App.tsx
guidelines/examples/golden/renewal-risk-review.App.tsx
guidelines/examples/golden/asset-recommendation-review.App.tsx
guidelines/examples/golden/qbr-readiness.App.tsx
```

---

## Final principle

Anti-patterns explain why a generated screen drifted.

Blocking checklists decide whether the generation must be rejected.

Quality checklists decide how a valid generation should be improved.
