# Composition Overview

## Purpose

This file explains how Figma Make should compose full screens using the
`design-system-ai-lab` package.

Composition is the bridge between individual components, decision components,
business patterns and useful product screens.

The goal is not to place components randomly.

The goal is to create screens that help a user understand a situation, assess
priority, trust the evidence and decide what to do next.

A good composition should be:

- accessible
- sober
- evidence-aware
- research-informed
- decision-oriented
- action-oriented
- easy to review

---

## Mandatory principles

Every generated composition must follow these principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

These principles apply before component choice.

They help prevent generated screens that are visually coherent but inaccessible,
noisy, AI-expensive, unsupported by evidence or disconnected from the user
decision.

---

## Knowledge layer

Composition should also be informed by the knowledge layer when the screen
relates to known service experience needs, internal workflows or open validation
questions.

Refer to:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Use the knowledge layer to understand:

- which user need the screen supports
- why a business pattern exists
- which decision flow is research-informed
- which patterns are demo-ready but not fully validated
- which assumptions should remain visible during review
- how asset scope, connectivity, source scope and source strength affect trust
- why Health facts, Intelligence interpretation, expected outcomes and value proof should remain distinguishable

The knowledge layer should influence composition choices such as:

- user role
- screen goal
- business context
- asset context when the screen is asset-heavy
- source scope and source strength placement
- evidence placement
- Health versus Intelligence distinction
- expected outcome or proof status placement
- risk prioritization
- recommendation wording
- action ownership
- AI placement
- review criteria

Do not copy research notes directly into generated screens.

Translate knowledge into:

```txt
user need
→ design implication
→ composition rule
→ component or pattern choice
→ review criterion
```

Current evidence status:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Do not treat open questions as fully validated product standards.

---

## Core composition principle

Start from the user decision, not from the available data.

Generated screens should answer four questions:

1. What is happening?
2. Why does it matter?
3. What can I trust?
4. What should I do next?

Every section should support one of these questions.

If a section does not support understanding, prioritization, trust or action, do
not generate it.

---

## Evidence-aware composition principle

A screen should distinguish:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
→ human validation when needed
```

Do not start with recommendations before showing the facts or context that make
them credible.

Preferred flow:

```txt
Visible context
→ source scope and source strength
→ measurable signals
→ risks or blockers
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
```

Avoid:

```txt
AI recommendation
→ missing evidence
→ vague action
```

Trust is created through visible facts, clear hierarchy, source scope, source
strength, useful freshness context and explicit human validation when decisions
are critical.

---

## Required package usage

Use the published npm package:

```txt
design-system-ai-lab
```

Import components from the package root:

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  ConnectivityCoverageCard,
  CreateActionDialog,
  CustomerStatusCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  RenewalRiskSummary,
  ValueProofCard,
} from "design-system-ai-lab";
```

Import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not recreate the design system locally.

Do not create `packages/design-system-ai-lab`.

Do not import from internal package paths.

Do not create local wrappers for package components.

---

## Approved composition vocabulary

### Components

Use generic components for reusable UI blocks:

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `MetricCard`
- `PageHeader`

### Forms

Use form components for input flows:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

### Decision components

Use decision components to structure signals, risks and actions:

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `SectionHeader`
- `StatusSummary`

### Business patterns

Use business patterns first when they match the screen intent:

- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerStatusCard`
- `RenewalRiskSummary`
- `ValueProofCard`

Use layout wrappers only for structure:

- `main`
- `section`
- `div`
- `header`
- `article`

Do not create new base components unless explicitly asked by the designer.

Do not manually rebuild an approved business pattern with raw `Card`, `Badge`,
`MetricCard`, `div`, `dl`, `dt` or `dd` markup.

---

## Composition order

When generating a screen, use this order:

1. Apply mandatory principles.
2. Check relevant knowledge-layer user needs, design implications and asset intelligence guidance.
3. Clarify the user role and decision.
4. Use visible facts, asset scope, source scope, source strength and business context before interpretation.
5. Use business patterns for known business sections.
6. Use decision components for metrics, risks and actions.
7. Use generic components only when no specific pattern fits.
8. Use form components for input flows.
9. Add custom markup only when necessary.

This order prevents Make from rebuilding known sections manually.

It also keeps screens more accessible, sober and evidence-aware.

---

## Recommended screen logic

Most generated screens should follow this decision logic:

```txt
1. User role and screen goal
2. Relevant user need
3. Customer, asset or business context
4. Trusted facts, source scope and source strength
5. Key signals, Health facts or Intelligence interpretation
6. Risks or blockers
7. Evidence-aware recommendations
8. Owned actions
9. Expected outcome or proof status when relevant
10. Focused interaction, if needed
```

This usually maps to:

```txt
PageHeader
→ Business context pattern
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
→ CreateActionDialog or Dialog for focused creation or confirmation
```

For asset intelligence screens, use this additional flow:

```txt
PageHeader
→ customer, site or installed base context
→ asset scope, connectivity, source scope and source strength
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ evidence-aware recommendations
→ owned or phased actions
→ expected outcome or proof status
→ human validation when needed
```

For action creation, prefer `CreateActionDialog`.

Use `Dialog` only for focused flows that are not covered by a business pattern.

---

## Why this order works

The order helps the user move from orientation to action.

| Step | User question | Preferred component or pattern |
| --- | --- | --- |
| Role and goal | Who is this for and what decision are they preparing? | `PageHeader` |
| Context | What is the situation? | `CustomerStatusCard`, `RenewalRiskSummary`, `ConnectivityCoverageCard`, `StatusSummary` |
| Evidence | What facts can I trust? | Business patterns, `MetricGrid`, `MetricCard`, source scope, source strength, trust cues |
| Signals | What should I notice? | `MetricGrid`, `MetricCard`, `ValueProofCard` |
| Asset intelligence | What is observed, what is interpreted and what remains partial? | `ConnectivityCoverageCard`, `MetricGrid`, `AlertCard`, trust cues |
| Risks | What requires attention? | `PriorityList`, `AlertCard` |
| Recommendations | What should be considered next? | `AlertCard`, `ValueProofCard`, AI-assisted synthesis when relevant |
| Actions | Who should do what, by when? | `ActionList`, `ActionCard` |
| Interaction | What can I create or confirm? | `CreateActionDialog`, `Dialog` |

---

## Preferred page shell

Use a simple page shell:

```tsx
<main className="min-h-screen bg-(--ec-color-background) p-8">
  <div className="mx-auto max-w-7xl space-y-8">
    ...
  </div>
</main>
```

This keeps generated screens:

- readable
- centered
- consistent
- easy to scan
- easy to review

Do not create decorative page shells.

Do not create custom backgrounds.

Do not add decorative gradients or glassmorphism.

---

## Section hierarchy

Use hierarchy to guide the user.

Recommended hierarchy:

```txt
PageHeader
High-level business context
Decision metrics
Priority risks
Recommended actions
Supporting details
```

Do not put low-value supporting details above risks or actions.

Do not bury the most important alert below long context sections.

Do not display actions before the user understands the context and risks.

Do not repeat the same context across multiple sections.

---

## Customer monitoring composition

For a customer monitoring screen, prefer this structure:

```txt
PageHeader
CustomerStatusCard
MetricGrid with MetricCard items
ConnectivityCoverageCard when monitoring coverage matters
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for action creation
```

The screen should help the Customer Success Manager understand:

- current customer status
- service coverage
- asset scope, connectivity status, source scope and source strength
- what can be trusted or still needs review
- monitoring freshness
- risk signals
- urgent issues
- next actions

Do not rebuild customer context with a generic `Card` when `CustomerStatusCard`
fits.

Avoid turning the screen into a generic analytics dashboard.

---

## Renewal risk composition

For a renewal risk review screen, prefer this structure:

```txt
PageHeader
RenewalRiskSummary
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for mitigation action creation
```

The screen should help the Customer Success Manager or Renewal Manager
understand:

- whether renewal risk exists
- why the risk exists
- what value proof is missing
- whether proof is customer-ready or still internal-only
- whether expected outcomes, technical outcomes, internal proof and customer-ready proof remain distinct
- what recommendations or actions are overdue
- what mitigation actions should be launched

Do not rebuild renewal context with a generic `Card` when `RenewalRiskSummary`
fits.

Do not invent value proof.

Use `ValueProofCard` for grounded proof points.

---

## QBR preparation composition

For a QBR preparation screen, prefer this structure:

```txt
PageHeader
CustomerStatusCard
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for preparation action creation
```

The screen should help the user prepare a customer-ready discussion.

Do not overload the screen with raw operational data.

Prioritize proof points, risks and next actions.

Do not use GenAI to retrieve basic customer facts.

Use AI only when it helps synthesize, explain, prioritize, recommend, explain
proof gaps, draft grounded action plans or reformulate customer-ready language
from grounded facts.

---

## Connectivity review composition

For a connectivity review screen, prefer this structure:

```txt
PageHeader
CustomerStatusCard when customer context is needed
ConnectivityCoverageCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for recovery action creation
```

The screen should help the user decide which connectivity gaps require attention.

Show freshness when monitoring data may be outdated or operationally sensitive.

Show scope and coverage limits when visibility is partial.

Show source strength when it affects trust.

Distinguish connected, partially connected and non-connected assets in text,
not through color alone.

Do not use GenAI to count connected or disconnected assets.

Structured coverage data should come from APIs, BI tools or source systems.

---

## Value proof preparation composition

For a value proof preparation screen, prefer this structure:

```txt
PageHeader
CustomerStatusCard or RenewalRiskSummary when context is needed
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for proof preparation action creation
```

The screen should help the user turn service outcomes into customer-ready proof.

Value proof points must be grounded in completed actions, resolved risks,
reviewed recommendations, completed recommendations or measurable outcomes.

If proof is incomplete, show the proof gap and create a follow-up action when
appropriate.

Keep expected outcomes, technical outcomes, internal proof and customer-ready
proof distinguishable.

Do not invent proof points, sources or citations.

---

## Good composition example

```tsx
export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Understand customer status, risks and next actions."
          actions={<CreateActionDialog />}
        />

        <CustomerStatusCard
          customerName="Northstar Manufacturing"
          plan="Advanced service plan"
          contract="#NS-2024-118"
          csm="Sarah Moreau"
          renewalDate="Sep 15, 2026"
          assetsCovered="25 assets — 3 sites"
          coverage="68% connected"
          badges={[
            { label: "Active plan", tone: "success" },
            { label: "Connectivity partial", tone: "warning" },
            { label: "Renewal watch", tone: "warning" },
          ]}
        />

        <MetricGrid columns={3}>
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 connected assets out of 25"
            trend="+8% this quarter"
          />
          <MetricCard
            label="Open critical alerts"
            value="3"
            helper="2 require customer follow-up"
          />
          <MetricCard
            label="Overdue actions"
            value="4"
            helper="Action plan should be reviewed this week"
          />
        </MetricGrid>

        <ConnectivityCoverageCard
          coverageRate="68%"
          connectedAssets="17 assets"
          disconnectedAssets="8 assets"
          criticalDisconnectedAssets="2 critical assets"
          monitoringStatus="Partial monitoring coverage"
          affectedScope="Main site and backup power system"
          lastUpdate="18 hours ago"
          badges={[
            { label: "Connectivity partial", tone: "warning" },
            { label: "Critical assets disconnected", tone: "danger" },
          ]}
        />

        <PriorityList title="Priority risks">
          <AlertCard
            severity="critical"
            title="Connectivity loss on critical equipment"
            equipment="Main switchboard"
            description="Two critical assets are no longer monitored, reducing visibility before the next customer touchpoint."
            recommendation="Plan a connectivity review with the customer and support team."
          />
        </PriorityList>

        <ActionList title="Recommended actions">
          <ActionCard
            title="Plan connectivity review with the customer"
            owner="CSM"
            dueDate="This week"
            priority="high"
          />
        </ActionList>
      </div>
    </main>
  );
}
```

---

## Why this example works

This composition is strong because:

- the screen starts with a clear `PageHeader`
- customer context is shown through `CustomerStatusCard`
- metrics are grouped through `MetricGrid`
- connectivity facts and freshness are shown through `ConnectivityCoverageCard`
- risks are grouped through `PriorityList`
- every alert includes a recommendation
- actions are grouped through `ActionList`
- the action is owned, timed and prioritized
- facts appear before interpretation and action
- partial visibility is made explicit through coverage and freshness
- the screen supports the research-backed need to know what to do next
- no local components or wrappers are created

---

## Bad composition example

Avoid generic dashboard composition:

```txt
PageHeader: Dashboard
Random cards
Large chart area
Many metrics without interpretation
Generic table
No recommendations
No clear next action
```

This is weak because:

- the user goal is unclear
- the hierarchy is generic
- the metrics do not support a decision
- facts, signals, risks and actions are not distinguished
- alerts are missing recommendations
- actions are missing or vague
- the screen may be noisy without being useful

---

## Composition anti-patterns

Do not generate:

- generic SaaS dashboards
- screens that start with charts before context
- too many metrics
- random component ordering
- alerts without actions or recommendations
- actions without preceding context
- recommendations without visible facts or evidence
- unsupported AI interpretation before structured facts
- many cards with equal importance
- decorative sections
- duplicated information across sections
- empty `App.tsx`
- local design system recreations
- local wrappers for package components
- manual reconstructions of business patterns
- GenAI used for basic facts, counts, statuses, owners or dates
- invented proof points, value outcomes, evidence, sources or citations
- hidden partial visibility or missing scope limits
- hidden asset scope, source scope, source strength or proof status when they affect trust
- raw Health facts and Intelligence interpretation shown at the same visual level
- non-connected assets presented as live-monitored
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- confidence language used as a substitute for source evidence
- treating open research questions as fully validated product standards
- screens disconnected from documented user needs when relevant

---

## Information density rules

Keep screens focused.

Prefer:

```txt
3 strong metrics
2 to 5 important alerts
2 to 5 recommended actions
```

Avoid:

```txt
10+ metrics
large tables
long reports
many competing cards
many low-value alerts
many weak actions
```

A generated screen should be easy to review in one pass.

A screen should be dense enough for B2B operational work without becoming noisy.

---

## Decision-first writing rules

Write content so it supports a decision.

Weak:

```txt
System information is available.
```

Better:

```txt
Three critical assets are no longer connected, reducing visibility before the renewal discussion.
```

Weak:

```txt
Follow up.
```

Better:

```txt
Plan a connectivity review with the customer this week.
```

Avoid confident claims that are not supported by visible facts.

---

## Layout rules

Use simple layouts:

```txt
single centered page container
vertical section stack
small responsive metric grid
vertical alert list
vertical action list
focused dialog for creation or confirmation
```

Avoid:

```txt
complex dashboards
unnecessary sidebars
decorative panels
large multi-column layouts with unclear hierarchy
hidden evidence
```

Only add side navigation if the prompt explicitly asks for it.

---

## Relationship with detailed guidelines

Use the principle guidelines first:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

Use the knowledge guidelines to align composition with research-informed needs:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Use the component guidelines for detailed rules:

```txt
components/page-header.md
components/card.md
components/metric-card.md
components/badge.md
components/button.md
components/dialog.md
forms/field.md
forms/input.md
forms/label.md
forms/select.md
forms/textarea.md
```

Use the decision guidelines for screen-level decision components:

```txt
decision/metric-grid.md
decision/priority-list.md
decision/action-list.md
decision/status-summary.md
decision/alert-card.md
decision/action-card.md
```

Use the pattern guidelines for business patterns:

```txt
patterns/customer-status-card.md
patterns/connectivity-coverage-card.md
patterns/renewal-risk-summary.md
patterns/value-proof-card.md
patterns/create-action-dialog.md
```

Use the composition guidelines for screen-level structure:

```txt
composition/overview.md
composition/decision-layout.md
composition/screen-patterns.md
```

Use the review checklist before accepting a generated screen:

```txt
review/acceptance-checklist.md
review/anti-patterns.md
```

---

## Review checklist

After generation, verify:

- the screen has one clear user goal
- the screen starts with `PageHeader`
- context appears before detailed signals
- visible facts appear before interpretation
- the screen reflects relevant knowledge-layer user needs when applicable
- open research questions are not presented as fully validated facts
- trust, freshness, uncertainty or scope limits are visible when they affect the decision
- asset scope, source scope, source strength, connectivity status and proof status are visible when they affect trust
- raw Health facts and Intelligence interpretation are separated when both are present
- expected outcomes, technical outcomes, internal proof and customer-ready proof remain distinguishable when relevant
- metrics are decision-relevant
- metrics are grouped with `MetricGrid`
- alerts are grouped with `PriorityList`
- alerts are sorted by severity or impact
- every alert includes a recommendation
- important recommendations are supported by visible facts
- actions are grouped with `ActionList`
- actions are concrete and prioritized
- every action includes owner, due date and priority
- the primary action is obvious
- business patterns are used when they match the section intent
- the screen avoids generic dashboard patterns
- the generated code imports from `design-system-ai-lab`
- styles are imported from `design-system-ai-lab/styles.css`
- no local design system was recreated
- no local wrappers were created
- GenAI is not used for basic structured retrieval
- GenAI is not used for asset hierarchy, telemetry values, connectivity status, lifecycle status, source scope or source strength
- no invented proof points, value outcomes, evidence, sources or citations are present
- no invented asset facts, telemetry, lifecycle status, expected outcomes or proven value are present
- confidence language does not replace source evidence

---

## Final principle

Composition should turn components into a research-informed decision flow.

If the screen does not help the user understand, prioritize, trust, act and
prove value when relevant, refine the composition before accepting it.
