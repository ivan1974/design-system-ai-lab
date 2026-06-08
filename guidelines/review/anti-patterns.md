# Anti-Patterns

## Purpose

Use this file to identify generated screens that should be rejected or revised.

An anti-pattern is not only a visual mistake.

It is a generation behavior that weakens the usefulness, accessibility,
sobriety, trustworthiness, research grounding or maintainability of the
interface.

A generated screen should be revised if it:

- does not use the published package correctly
- recreates the design system locally
- ignores the approved component vocabulary
- ignores business patterns
- ignores documented user needs when they apply
- treats open research questions as validated facts
- is inaccessible
- is over-generated or noisy
- uses GenAI where structured data should be used
- makes unsupported recommendations
- hides uncertainty, partial visibility or scope limits
- hides asset scope, source scope, source strength, connectivity status or proof status when they affect trust
- presents raw Health data and Intelligence interpretation at the same visual level
- invents proof, value outcomes, sources or citations
- invents asset facts, telemetry, lifecycle status, source scope, expected outcomes or proven value
- does not help the user decide what to do next

## Knowledge layer

Anti-patterns should also be evaluated against the knowledge layer when the
generated screen relates to known service experience needs, internal workflows
or open validation questions.

Relevant files:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Current evidence status:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Do not treat open research questions as fully validated product standards.

Use `knowledge/asset-intelligence.md` when the generated screen involves
installed base, asset monitoring, connectivity, lifecycle, asset intelligence
recommendations or asset-based value proof.

Do not present asset-heavy demo assumptions as complete, production-validated
asset intelligence rules.

Do not copy research notes directly into the interface.

Translate knowledge into:

```txt
user need
→ design implication
→ screen goal
→ pattern choice
→ evidence
→ action
→ review criterion
```

---

## Mandatory principles

Anti-patterns should be evaluated against the four transversal principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

If a generated screen violates one of these principles, revise it before using it
as a demo or design reference.

---

## Critical anti-patterns

These anti-patterns should block acceptance immediately:

- local recreation of `design-system-ai-lab`
- local wrappers for package components
- internal package imports
- empty `App.tsx`
- generic dashboard with no clear user decision
- screen disconnected from documented user needs when they apply
- open research questions presented as validated facts
- prompt-first chatbot for basic structured data
- GenAI used for simple retrieval, counts, statuses, dates, owners, asset coverage, monitoring freshness, renewal status, action ownership, asset hierarchy, telemetry values, connectivity status, lifecycle status or source scope
- recommendations without evidence
- fake citations, fake sources, invented proof points or invented value outcomes
- critical decisions without human validation
- hidden partial visibility, missing scope limits or hidden proof gaps
- hidden asset scope, source scope, source strength, connectivity status or Health versus Intelligence distinction when they affect trust
- non-connected assets presented as live-monitored
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- confidence language used as a substitute for source evidence
- embedded components presented as top-level assets unless component-level investigation is required
- customer-ready proof confused with internal draft proof
- inaccessible forms with no labels
- raw inline-styled form controls replacing package form components

These issues require revision before review can continue.

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

It breaks the design system contract.

It creates a parallel system that will drift from the real package.

It makes the generated code harder to review, maintain and reuse.

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

Wrappers hide the real package API and create style drift.

They often remove accessibility and consistency provided by the package.

Better:

```tsx
import { Button, Card } from "design-system-ai-lab";
```

Use package components directly.

---

## 3. Internal package imports

Anti-pattern:

Make imports from internal package paths.

Bad:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
import { MetricCard } from "design-system-ai-lab/dist/components/metric-card";
```

Why it is a problem:

Internal paths are not the public API.

They can change without warning and make generated code fragile.

Better:

```tsx
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

Bad:

```tsx
export default function App() {
  return <div />;
}
```

Why it is a problem:

The Make output cannot be reviewed as a screen.

The project setup may be correct, but the design outcome is missing.

Corrective instruction:

```txt
Revise App.tsx.
App.tsx must render a complete visible desktop screen using components imported from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
Do not stop after package setup.
Generate the visible interface now.
```

---

## 5. Generic dashboard

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

A generic dashboard does not explain what the user should do next.

It often displays available data instead of supporting a decision.

Better:

Use a specific screen pattern:

```txt
Customer monitoring screen
Renewal risk review screen
Connectivity review screen
Value proof summary screen
Service action plan screen
```

Preferred flow:

```txt
PageHeader
→ Business context pattern
→ MetricGrid
→ PriorityList
→ ActionList
```

---

## 6. Wrong component hierarchy

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

The screen becomes harder to scan and trust.

Better:

```txt
PageHeader
→ Business context pattern
→ MetricGrid
→ PriorityList
→ ActionList
```

Use this decision flow:

```txt
Observed facts
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ human validation when needed
```

For asset intelligence screens, use this additional flow:

```txt
Asset context
→ connectivity, source scope and source strength
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or value proof status
→ human validation when needed
```

---

## 7. Manual reconstruction of business patterns

Anti-pattern:

Make rebuilds a known business pattern manually with `Card`, `Badge`, `div` or
`dl` markup.

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

The package already provides business patterns that encode the intended
structure and meaning.

Manual reconstruction increases inconsistency and maintenance cost.

Better:

```tsx
<CustomerStatusCard
  customerName="Northstar Manufacturing"
  plan="Advanced service plan"
  coverage="68% connected"
/>
```

Use business patterns first when they match the section intent.

---

## 8. Metrics without decision value

Anti-pattern:

The screen contains too many metrics or metrics that do not support a decision.

Bad:

```txt
Data points
Total records
Generic performance
System score
Random percentage
```

Bad:

```txt
12 MetricCard items at the top of the screen
```

Why it is a problem:

Too many metrics increase cognitive load.

Weak metrics make the screen feel complete without improving the decision.

Better:

Use 2 to 4 decision-relevant metrics inside `MetricGrid`.

Good:

```txt
Connected equipment
Open critical alerts
Overdue actions
Renewal readiness
Recommendations reviewed
Value proof status
Partially connected assets
Source strength
Expected outcome status
```

Avoid metrics that sound precise but are not grounded in source evidence, such
as generic asset scores or high-confidence labels without source strength.

---

## 9. Alerts without recommendations

Anti-pattern:

Alerts describe a problem but do not tell the user what to do next.

Bad:

```tsx
<AlertCard
  severity="warning"
  title="Connectivity issue"
  equipment="Main site"
  description="Some assets are disconnected."
  recommendation=""
/>
```

Why it is a problem:

The design system treats alerts as decision-support elements, not passive status
messages.

An alert without a recommendation does not support action.

Asset-related alerts are also problematic when they do not include enough asset,
source or connectivity context to make the recommendation reviewable.

Better:

```tsx
<AlertCard
  severity="warning"
  title="Connectivity loss on critical equipment"
  equipment="Main switchboard"
  description="Two critical assets are no longer monitored, reducing service visibility."
  recommendation="Plan a connectivity review with the customer and support team."
/>
```

---

## 10. Actions without ownership

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

Unowned actions do not create accountability.

They make the interface look actionable without supporting execution.

Better:

```tsx
<ActionCard
  title="Plan connectivity review with the customer"
  owner="CSM"
  dueDate="This week"
  priority="high"
/>
```

Every action should include:

- title
- owner
- due date
- priority

Asset-related actions should also include site, zone, room, asset group or asset
context when needed for follow-through.

---

## 11. GenAI for basic retrieval

Anti-pattern:

The screen uses GenAI to retrieve simple structured facts.

Bad:

```txt
Ask the chatbot: What is the renewal date?
Ask the AI: Who owns this action?
Ask the AI: How many assets are disconnected?
Ask the AI: Which assets are partially connected?
Ask the AI: What is the lifecycle status?
Ask the AI: What telemetry values changed?
Ask the AI: List open cases.
```

Why it is a problem:

This uses an expensive, less traceable capability for a structured retrieval
need.

It also makes users prompt for information that should be directly visible.

Better:

Display structured facts directly through components and patterns.

Good:

```tsx
<RenewalRiskSummary
  customerName="Northstar Manufacturing"
  renewalDate="Sep 15, 2026"
  overdueActions="4 mitigation actions"
/>
```

Use GenAI only for synthesis, explanation, prioritization, recommendation,
proof gap explanation, grounded action-plan drafting, drafting or reformulation.

---

## 12. Prompt-first screen for structured workflows

Anti-pattern:

The screen starts with a prompt box for a structured operational workflow.

Bad:

```txt
Ask anything about this customer
```

Bad screen order:

```txt
Prompt box
AI answer
Hidden evidence
Unclear action
```

Why it is a problem:

Users must know what to ask before they can understand the situation.

Quality becomes dependent on prompt skill.

Facts and evidence may be hidden behind the AI answer.

Better:

Use guided actions on top of visible facts.

Preferred:

```txt
Visible structured facts
→ guided AI synthesis or explanation
→ evidenced recommendation
→ human-reviewed action
```

For asset-heavy screens, the user should not have to prompt for asset scope,
connectivity status, source scope, source strength or raw Health facts. These
should be visible before any AI-assisted Intelligence interpretation.

---

## 13. Unsupported recommendations

Anti-pattern:

The screen presents recommendations without evidence.

Bad:

```txt
Recommendation: Contact the customer immediately.
Evidence: Not shown.
```

Bad:

```txt
The customer is at high risk and must be contacted immediately.
```

Why it is a problem:

The user cannot understand why the recommendation exists.

Unsupported recommendations create false confidence.

Better:

```txt
Fact: Coverage dropped to 68%.
Signal: Two critical assets are disconnected.
Recommendation: Plan a connectivity review.
Human action: CSM validates and assigns the recovery owner.
```

Asset intelligence recommendations should also show which asset, asset group,
room, zone or site is affected when relevant, and whether evidence is live,
partial, historical or manual.

---

## 14. Fake evidence or invented proof

Anti-pattern:

The generated screen invents sources, proof points or citations.

Bad:

```txt
Source: Verified Schneider AI database
Citation: internal-report-2026-final.pdf
Proof point: 12 incidents avoided
```

when these facts are not provided by the prompt or source systems.

Why it is a problem:

Invented evidence makes the interface untrustworthy.

It can create false business, customer or compliance confidence.

Better:

Use neutral sample data only when it is clearly part of a demo.

Do not invent production sources, citations or proof.

Do not invent asset facts, telemetry values, lifecycle status, source scope,
source strength, expected outcomes or proven value.

Use language such as:

```txt
Source data requires review.
Proof summary is draft.
Requires source-system confirmation.
```

---

## 15. Hidden uncertainty

Anti-pattern:

The screen hides incomplete, outdated or inferred data.

Bad:

```txt
The contract is confirmed.
The customer will churn.
The owner is correct.
AI confirmed the answer.
```

Why it is a problem:

Confident wording can hide weak data.

Users need to know when source information requires review.

Better:

```txt
Contract field requires review.
Renewal risk should be validated against source data.
Owner not confirmed.
Monitoring status last updated 18 hours ago.
```

Make uncertainty readable when it affects the decision.
For asset-heavy screens, uncertainty includes partial asset scope, partially
connected assets, non-connected assets, source strength, freshness, manual
inventory, expected outcomes and proof gaps.

---

## 16. Critical decision without human validation

Anti-pattern:

The generated screen implies that AI or the system autonomously decides a
critical action.

Bad:

```txt
AI approved the renewal action.
AI confirmed entitlement.
AI decided escalation.
AI confirmed the asset recommendation.
AI proved the expected outcome.
```

Why it is a problem:

Customer, contract, safety, compliance, field, renewal, asset intelligence,
modernization and value proof decisions require human accountability.

Better:

```txt
AI-assisted recommendation ready for CSM review.
Entitlement should be confirmed against the source system.
CSM validates escalation before action is created.
```

Critical decisions should keep human validation visible.

---

## 17. Form fields used for display-only facts

Anti-pattern:

The screen displays facts through disabled inputs.

Bad:

```tsx
<Input value="Sep 15, 2026" disabled />
```

Why it is a problem:

Disabled inputs suggest editability while reducing readability and accessibility.

They blur the difference between source-system facts and user-entered values.

Better:

```tsx
<RenewalRiskSummary
  customerName="Northstar Manufacturing"
  renewalDate="Sep 15, 2026"
/>
```

Use display components and patterns for facts.

Use form components for user input.

---

## 18. Raw inline-styled form controls

Anti-pattern:

Make creates raw form controls with inline styles or custom classes instead of
package form components.

Bad:

```tsx
<input style={{ height: "40px", borderRadius: "8px" }} />
```

Bad:

```tsx
<select className="border rounded-lg px-3 py-2" />
```

Why it is a problem:

It bypasses package styling, focus states and form conventions.

It often leads to missing labels and accessibility issues.

Better:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Use `Field`, `Input`, `Select` and `Textarea`.

---

## 19. Status communicated only through color

Anti-pattern:

The screen relies on color alone to communicate status.

Bad:

```tsx
<span className="text-(--ec-color-warning)">Warning</span>
```

Bad:

```tsx
<div className="bg-red-500" />
```

Why it is a problem:

Color-only communication is inaccessible and ambiguous.

Users need text labels that explain the state.

Better:

```tsx
<Badge tone="warning">Source data requires review</Badge>
```

```tsx
<AlertCard
  severity="warning"
  title="Value proof is incomplete"
  equipment="Renewal preparation"
  description="The proof summary is not yet customer-ready."
  recommendation="Prepare a customer-ready value summary before the renewal discussion."
/>
```

---

## 20. Visual styling that hides trust signals

Anti-pattern:

Important evidence, freshness or validation status is visually hidden.

Bad:

```txt
Last update unavailable
```

shown in very low contrast or buried at the bottom of the card.

Why it is a problem:

Trust information must be readable when it affects the user decision.

Better:

Show trust-sensitive states clearly:

```txt
Last update: 18 hours ago
Source data requires review
Human review required
```

Do not use visual hierarchy to hide uncertainty.

Do not hide asset scope, source scope, source strength, connectivity status,
Health versus Intelligence distinction or proof status when they affect trust.

---

## 21. Over-generated screen

Anti-pattern:

The screen contains too many sections, metrics, cards, alerts or actions.

Bad:

```txt
12 metrics
8 cards
10 alerts
14 actions
3 dialogs
large raw table
```

Why it is a problem:

Over-generation increases cognitive load and review effort.

It also makes priorities harder to see.

Better:

Recommended density:

```txt
1 PageHeader
1 to 2 business context patterns
2 to 4 MetricCard items inside MetricGrid
2 to 5 AlertCard items inside PriorityList
2 to 5 ActionCard items inside ActionList
0 to 1 CreateActionDialog or Dialog
```

Generate less, but better.

For asset-heavy screens, avoid full asset dumps when grouped asset
representation is enough for the decision.

---

## 22. Decorative visual system

Anti-pattern:

The screen adds decorative styling that does not support the user task.

Bad:

```txt
gradients
glassmorphism
decorative hero sections
large decorative icons
animated background
custom color palette
custom shadows
```

Why it is a problem:

Decorative styling can make generated screens look polished while reducing
clarity, maintainability and trust.

Better:

Use the package styles and tokens.

Keep the visual style:

```txt
sober
B2B
readable
structured
evidence-aware
action-oriented
```

---

## 23. Raw data dump

Anti-pattern:

The screen displays all available data instead of selecting decision-relevant
information.

Bad:

```txt
all customer fields
all contract fields
all cases
all work orders
all alerts
all recommendations
```

Why it is a problem:

A raw data dump shifts cognitive work back to the user.

A full asset dump can create the same problem when the user only needs grouped
scope, coverage, risk, recommendation or proof status.

It makes the screen harder to scan and harder to act on.

Better:

Select the information needed for the current decision.

Show:

```txt
context
key signals
priority risks
recommended actions
```

---

## 24. Duplicated context

Anti-pattern:

The same customer, renewal, coverage or proof information is repeated in several
sections.

Bad:

```txt
Customer name repeated in every card.
Renewal date repeated in the header, summary, metrics and alerts.
Coverage rate repeated in three sections without new meaning.
```

Why it is a problem:

Duplication increases noise and makes the hierarchy harder to understand.

Better:

Show core context once in the right business pattern.

Repeat information only when it adds new meaning to a specific risk or action.

---

## 25. Generic or vague copy

Anti-pattern:

The generated screen uses vague filler text.

Bad:

```txt
Data available
Some issues detected
Follow up
Review later
Important information
Customer insights
```

Why it is a problem:

Vague copy creates the impression of a usable screen without supporting a real
decision.

Better:

Use specific, action-oriented wording.

Good:

```txt
Two critical assets are disconnected from monitoring.
Prepare a customer-ready value summary before the renewal discussion.
Assign owners to overdue mitigation actions this week.
```

---

## 26. Wrong use of Dialog

Anti-pattern:

The screen uses a dialog for a large workflow or rebuilds action creation
manually.

Bad:

```txt
A large multi-step renewal workflow inside Dialog.
Raw form fields directly inside ActionList.
Custom modal instead of Dialog or CreateActionDialog.
```

Why it is a problem:

Dialogs should be focused.

Large workflows need dedicated screen structure.

Standard action creation should use `CreateActionDialog`.

Better:

Use:

```tsx
<CreateActionDialog />
```

Use `Dialog` only for short focused flows not covered by a business pattern.

---

## 27. Bad screen names

### Anti-pattern

The screen uses generic titles.

Bad:

```txt
Dashboard
Overview
Insights
Data
Customer page
```

### Why it is a problem

Generic titles do not orient the user toward the decision.

### Better

Use specific task-oriented titles:

```txt
Customer monitoring
Renewal risk review
Connectivity review
Value proof summary
Service action plan
```

---

## 28. Asset intelligence false confidence

Anti-pattern:

The screen makes asset intelligence look more complete, certain or proven than
the available evidence supports.

Bad:

```txt
All assets monitored.
AI confirmed the asset risk.
Asset value proven.
High confidence recommendation.
```

Why it is a problem:

Asset-heavy screens may combine installed base data, connectivity coverage,
telemetry, lifecycle status, service history, manual inventory and AI-assisted
interpretation.

If these layers are visually collapsed, users may mistake partial visibility for
full visibility, AI interpretation for source-system truth or expected outcomes
for proven value.

Better:

```txt
Monitoring coverage is partial.
68% connected, 12% partially connected, 20% non-connected.
Source scope: Schneider monitored assets only.
Intelligence interpretation: review recommended.
Expected outcome: reduce interruption risk.
Proof status: not proven yet.
```

Corrective instruction:

```txt
Show asset scope, connectivity status, source scope and source strength when they affect trust.
Separate raw Health facts from Intelligence interpretation.
Do not present non-connected assets as live-monitored.
Do not present expected outcomes as proven value.
Keep technical outcomes, internal proof and customer-ready proof distinguishable.
Keep human validation visible for critical asset intelligence recommendations.
```

## Correction prompt

Use this prompt when one or more anti-patterns are present:

```txt
Revise the generated screen.

Use the published npm package design-system-ai-lab directly.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from internal package paths.
Do not use local components such as ./components/ui/button or ./components/ui/card.

Use business patterns when they match the section intent.
Use decision components for metrics, risks and actions.
Use form components for form fields.

Follow accessibility, eco-design, AI usage, and evidence and trust principles.
Follow relevant knowledge-layer guidance, including knowledge/asset-intelligence.md when the screen involves installed base, monitoring, lifecycle, connectivity, asset recommendations or asset-based value proof.

Use this flow:
Observed facts
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ human validation when needed

For asset-heavy screens, use this flow:
Asset context
→ connectivity, source scope and source strength
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or value proof status
→ human validation when needed

Use BI-first, AI-assisted logic when AI is relevant.
Do not use GenAI for basic retrieval, dates, owners, statuses, counts, lists, standard KPIs, asset hierarchy, telemetry values, connectivity status, lifecycle status or source scope.
Do not invent proof points, value outcomes, expected outcomes, asset facts, telemetry, evidence, sources or citations.
Do not make unsupported recommendations.
Show uncertainty when data may be incomplete, outdated or inferred.
Do not present non-connected assets as live-monitored.
Do not present expected outcomes as proven value.
Keep expected outcomes, technical outcomes, internal proof and customer-ready proof distinguishable.
Keep human validation visible for critical customer, contract, service, renewal, asset intelligence, modernization and value proof decisions.

The result must render a complete visible, sober, B2B, evidence-aware screen in App.tsx.
```

---

## Final principle

An anti-pattern is a signal to revise.

Do not accept generated screens only because they look polished.

Accept them only when they use the package correctly, follow the system rules,
make evidence reviewable, preserve asset and source context when relevant and
help the user decide what to do next.
