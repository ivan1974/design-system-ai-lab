# Setup Guidelines

## Purpose

This file explains how Figma Make should set up a generated project when using
`design-system-ai-lab`.

The goal is to make sure Figma Make consumes the published npm package instead
of recreating the design system locally.

The generated project must render a complete visible screen in `App.tsx` using
the approved package components, forms, decision components and business
patterns.

The setup must also preserve the knowledge layer and transversal generation
principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

It should also respect the research-informed knowledge layer when the generated
screen relates to known user needs, service patterns, asset intelligence or open
validation questions:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

A correct setup is not only a technical setup.

It must also support accessible, sober, evidence-aware, research-informed,
reviewable and AI-disciplined generated interfaces.

---

## Required package

Use the published npm package:

```txt
design-system-ai-lab
```

The package provides:

- React components
- form components
- decision components
- business patterns
- research-informed usage guidance through the guidelines
- compiled CSS
- design tokens
- compatibility aliases for generated code
- TypeScript declarations
- the approved public API for generated screens

The generated project should consume this package as an application dependency.

It should not recreate the package source code.

---

## Required dependency

The generated project must depend on:

```txt
design-system-ai-lab
```

If a package installation step is needed, use:

```bash
npm install design-system-ai-lab
```

Do not install a local tarball unless explicitly requested.

Do not create a local workspace package.

Do not create a folder named:

```txt
packages/design-system-ai-lab
```

Do not copy design system components into the generated project.

---

## React compatibility

The package is designed for React-based Make environments.

Expected peer dependencies are React and React DOM.

Do not add a second React version to work around dependency issues.

Do not bundle React inside generated design system code.

Do not recreate the design system locally to bypass dependency resolution.

If dependency resolution fails, preserve the intended package imports and revise
the project setup instead of generating a parallel design system.

---

## Required imports

Generated screens must import components from the package root:

```tsx
import {
  CreateActionDialog,
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
  PriorityList,
} from "design-system-ai-lab";
```

Generated screens must import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

The CSS import may be placed in:

```txt
src/App.tsx
src/main.tsx
src/index.css
```

Prefer importing it once near the application root.

Do not import the same package stylesheet repeatedly in multiple components.

---

## Public API rule

Always import from the package root.

Correct:

```tsx
import { Button } from "design-system-ai-lab";
```

Incorrect:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

Incorrect:

```tsx
import { Button } from "./components/ui/button";
```

The package root is the only stable public API.

Internal package paths are not part of the public contract.

Local recreated components are not part of the design system contract.

---

## Correct setup pattern

A simple generated screen should use business patterns and decision components before manual UI reconstruction:

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
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Understand customer status, trusted signals, risks and next actions."
          actions={<CreateActionDialog />}
        />

        <CustomerStatusCard
          customerName="Greenfield Industries"
          plan="Advanced service plan"
          contract="#CR-2024-441"
          csm="Sarah Moreau"
          renewalDate="Aug 5, 2026"
          assetsCovered="25 assets — 3 sites"
          coverage="68% connected"
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "Connectivity partial", tone: "warning" },
          ]}
        />

        <MetricGrid columns={3}>
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 of 25 known assets monitored — scope limited to connected assets"
          />
          <MetricCard
            label="Open critical alerts"
            value="2"
            helper="Both require review before customer communication"
          />
          <MetricCard
            label="Overdue actions"
            value="3"
            helper="High-priority actions with no owner update"
          />
        </MetricGrid>

        <ConnectivityCoverageCard
          customerName="Greenfield Industries"
          coverageRate="68%"
          connectedAssets="17 of 25 assets"
          disconnectedAssets="8 assets"
          criticalDisconnectedAssets="2 critical assets"
          monitoringStatus="Partial connectivity"
          affectedScope="Main site and HVAC control unit"
          lastUpdate="18 hours ago"
          badges={[
            { label: "Connectivity partial", tone: "warning" },
            { label: "Critical assets disconnected", tone: "danger" },
          ]}
        />

        <ServiceRiskSummary
          riskLevel="critical"
          riskSummary="Critical assets are no longer monitored before the next customer touchpoint."
          affectedScope="Main site and HVAC control unit"
          customerImpact="Customer visibility is reduced for critical assets."
          serviceImpact="Remote monitoring and proactive support are limited."
          sourceContext="Monitoring platform and known installed base"
          sourceStrength="partial"
          freshness="Last update 18 hours ago"
          validationStatus="Review before customer communication"
          recommendedReview="Review connectivity recovery and customer communication before the next customer meeting."
          badges={[
            { label: "Critical service risk", tone: "danger" },
            { label: "Review needed", tone: "warning" },
          ]}
        />

        <PriorityList
          title="Priority alerts"
          description="Risks requiring review before customer communication."
        >
          <AlertCard
            severity="critical"
            title="Critical equipment no longer monitored"
            scope="Main HVAC control unit"
            description="The customer has no visibility on a critical asset since the connectivity loss."
            recommendation="Escalate to support and notify the customer proactively after validation."
            evidenceSummary="Connectivity has been unavailable for 18 hours."
            sourceStrength="partial"
            validationStatus="Review before customer communication"
          />
        </PriorityList>

        <ActionList
          title="Recommended actions"
          description="Assigned internal actions to reduce customer risk."
        >
          <ActionCard
            title="Plan connectivity review with the customer"
            owner="CSM"
            dueDate="This week"
            priority="high"
            status="todo"
            context="Customer communication needed before next touchpoint"
            sourceContext="Monitoring platform and known installed base"
            validationStatus="Review before customer communication"
          />
        </ActionList>
      </div>
    </main>
  );
}
```

This pattern is correct because it:

- imports from the package root
- imports package styles once
- renders a visible screen in `App.tsx`
- uses business patterns instead of rebuilding customer context, connectivity coverage, service risk, alerts or actions
- uses decision components for metrics, risks and assigned actions
- keeps source strength, freshness and validation status visible where trust matters
- keeps the main action explicit

---

## Approved import vocabulary

The generated project may import the following from `design-system-ai-lab`.

### Components

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `MetricCard`
- `PageHeader`

### Forms

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

### Decision components

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `RecommendationCard`
- `SectionHeader`
- `StatusSummary`

### Business patterns

- `AssetIntelligenceSummary`
- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerReviewReadinessCard`
- `CustomerStatusCard`
- `RecommendationReviewPanel`
- `RenewalRiskSummary`
- `ServiceRiskSummary`
- `ValueProofCard`

Do not import or create components outside this approved vocabulary unless the
prompt explicitly requests a new custom element and no existing component fits.

Use business patterns before low-level components when a pattern fits the
section intent.

Pattern-first routing map:

```txt
Customer context → CustomerStatusCard
Connectivity coverage → ConnectivityCoverageCard
Renewal context → RenewalRiskSummary
Value proof → ValueProofCard
Asset intelligence → AssetIntelligenceSummary
Service risk overview → ServiceRiskSummary
Recommendation review → RecommendationReviewPanel
Customer review readiness → CustomerReviewReadinessCard
Action creation → CreateActionDialog
Metrics → MetricGrid with MetricCard items
Risks and blockers → PriorityList with AlertCard items
Assigned internal actions → ActionList with ActionCard items
Generic structured metadata → StatusSummary
```

Do not rebuild customer context, renewal context, value proof, asset
intelligence, service risk, recommendation review, customer review readiness or
action lists with raw `Card` or `div` wrappers when a dedicated pattern exists.

---

## Mandatory principles setup rule

Generated projects must preserve these principles:

```txt
Accessibility
Eco-design
AI usage discipline
Evidence and trust
```

This means the setup should not lead to:

- raw form controls without labels
- clickable `div` elements
- local design system components
- duplicated token systems
- decorative UI by default
- unnecessary heavy layouts
- chatbot-first screens without a clear user need
- GenAI usage for simple structured retrieval
- recommendations without visible or auditable evidence
- fake sources, fake citations, invented proof or invented value outcomes
- confidence language used as a substitute for source evidence
- technical outcomes or internal proof presented as customer-ready proof without validation
- false certainty when data may be incomplete, outdated, partial or asset scope is limited
- non-connected assets presented as live-monitored
- expected outcomes presented as proven value
- embedded components presented as top-level assets unless component-level investigation is required

The setup should make good generation easier and bad generation harder.

---

## Knowledge setup rule

Generated projects do not need to import the `knowledge/` files in code.

However, prompts and generated screens should respect the knowledge layer when
the screen relates to known service experience needs.

The knowledge layer is located in:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Use it to understand:

- what users need to understand, trust, prioritize, act or prove value
- how asset hierarchy, connectivity status, source scope and source strength affect trust
- why raw Health data and Intelligence interpretation should be separated
- why expected outcomes are not proven value until evidenced
- why technical outcomes and internal proof are not customer-ready proof without validation
- why confidence language should not replace source evidence
- why business patterns exist
- which patterns are research-informed or partially validated
- which assumptions are demo-ready but not fully validated
- which questions still need future testing

The knowledge layer should influence:

- screen goal
- user role
- business context
- asset context when the screen is asset-heavy
- connectivity, source-scope and source-strength cues when visibility affects trust
- component and pattern selection
- recommendation wording
- evidence and trust cues
- AI usage decisions
- review criteria

Do not copy research notes directly into generated screens.

Translate knowledge into:

```txt
user need
→ design implication
→ prompt constraint
→ component or pattern rule
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

If a generated screen depends on an unresolved assumption, make the assumption
visible in documentation, review notes or follow-up actions rather than hiding
it in the interface.

For asset-heavy service screens, use `knowledge/asset-intelligence.md` to
preserve installed base hierarchy, connectivity status, source scope, source
strength, recommendation traceability, expected outcome status and value proof
discipline.

---

## Forbidden setup patterns

Do not create a local package replacement.

Do not generate this structure:

```txt
packages/design-system-ai-lab/
  package.json
  src/index.ts
  src/styles.css
```

Do not import from internal package paths:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

Do not import recreated local UI components:

```tsx
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
```

Do not recreate design system components with Radix, MUI, shadcn-like files or
custom local implementations.

Do not create local wrappers such as:

```tsx
function ForwardedButton() {
  return <button />;
}
```

The package already provides the compatible components.

---

## App.tsx requirement

The generated project must render a complete visible screen in `App.tsx`.

Do not leave `App.tsx` empty.

Do not generate only a component library.

Do not stop after setting up packages.

The output should include a visible interface composed from the approved design
system package.

The visible screen should have one clear user goal.

The visible screen should make the main decision or next action understandable.

---

## Composition setup rule

When creating a screen, prefer this composition order:

1. mandatory principles
2. relevant knowledge-layer user needs, design implications and asset intelligence guidance
3. visible facts, asset scope, source scope, source strength and business context
4. business patterns when they match the screen intent
5. decision components for metrics, risks and actions
6. generic components for reusable UI blocks
7. form components for dialogs and input flows
8. custom markup only when no existing component or pattern fits

This means Figma Make should prefer:

```tsx
<CustomerStatusCard />
```

instead of rebuilding the same section with:

```tsx
<Card>
  <div>...</div>
</Card>
```

It should also prefer:

```tsx
<MetricGrid>
  <MetricCard label="Connected equipment" value="68%" />
</MetricGrid>
```

instead of raw metric cards built with `div` elements.

---

## Form setup rule

Generated forms must use package form components.

Correct:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Incorrect:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

Use:

- `Field` for label, helper and error layout
- `Input` for short values
- `Select` for limited choices
- `Textarea` for notes and recommendations
- `Label` only for lower-level custom form composition when `Field` does not fit

Rules:

- connect `htmlFor` and `id` when possible
- do not rely only on placeholders
- do not create raw `input`, `select` or `textarea` elements when package components fit
- do not use disabled form fields for display-only context
- use `StatusSummary` or business patterns for display-only data

---

## Styling setup rule

The generated project must use:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not recreate the package styles manually.

Do not duplicate token definitions.

Do not add a competing design token system.

Do not add a new visual identity.

The generated app may use utility classes for layout, but visual identity should
come from the package styles and tokens.

Use `className` for layout adjustments only.

Do not use `className` to redefine package component identity.

Do not use inline styles to recreate tokens, colors, shadows, radius or form
states.

---

## Accessibility setup rule

The generated setup must support accessible UI by default.

This means:

- use semantic package components
- use one clear `PageHeader` for the main screen
- use `SectionHeader` for internal sections when needed
- use visible labels for form controls
- connect `htmlFor` and `id` when possible
- use explicit button labels
- preserve package focus styles
- avoid clickable non-interactive elements
- avoid status communicated only through color
- avoid disabled form controls as static display

Do not remove package accessibility affordances through custom markup or styles.

---

## Eco-design setup rule

The generated setup must support sober UI by default.

This means:

- reuse existing package components
- prefer business patterns over manual reconstruction
- avoid unnecessary sections
- limit first-level metrics to a useful number
- limit alerts and actions to the most relevant items
- avoid duplicated content
- avoid decorative assets unless they support comprehension
- avoid unnecessary interactions
- avoid local wrappers and local component systems

The setup should encourage a focused decision-support screen, not a large generic
dashboard.

---

## AI usage setup rule

The generated setup must not make GenAI the default interface for every task.

Use this principle:

```txt
BI-first, AI-assisted
```

Structured data should come from:

- APIs
- databases
- BI tools
- CRM
- service tools
- monitoring platforms
- source systems

GenAI should be reserved for:

- synthesis
- explanation
- prioritization
- recommendation
- drafting
- reformulation
- summarizing unstructured notes
- proof gap explanation
- grounded action-plan drafting
- customer-ready value narrative drafting after evidence is visible

Do not use GenAI to retrieve basic facts such as:

- customer name
- contract number
- renewal date
- owner
- status
- count
- KPI
- list
- asset hierarchy
- connectivity status
- telemetry values
- source scope
- source strength
- lifecycle status
- monitoring freshness
- expected outcomes
- proven value

If AI is used, visible structured facts should appear before AI interpretation.

Asset-heavy screens should show asset context, connectivity, source scope,
source strength and raw Health or lifecycle facts before AI-assisted
Intelligence interpretation.

Critical decisions should remain human-reviewed.

---

## Evidence and trust setup rule

The generated setup must support trustworthy UI by default.

This means:

- show visible facts before interpretation
- distinguish facts, signals, recommendations and actions
- use business patterns for structured context
- show freshness or validation context when data may be outdated or uncertain
- support recommendations with visible or auditable evidence
- avoid unsupported AI or non-AI recommendations
- avoid fake sources, fake citations, invented proof or invented value outcomes
- avoid false certainty when data may be incomplete, outdated, partial or asset scope is limited
- show asset scope, connectivity status and source scope when they affect trust
- show source strength when it affects trust
- separate raw Health data from Intelligence interpretation when both are present
- avoid presenting non-connected assets as live-monitored
- avoid presenting expected outcomes as proven value
- avoid presenting technical outcomes or internal proof as customer-ready proof without validation
- avoid using confidence language as a substitute for source evidence
- keep human validation visible for critical decisions
- use display components, not disabled form fields, for display-only facts

Use this principle:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or value proof status when relevant
→ human validation when needed
```

The setup should make it easy to review why a recommendation exists and what
still needs validation.

---

## Package usage rule

Use the package as a consumer would use it.

Correct:

```tsx
import { Button } from "design-system-ai-lab";
```

Incorrect:

```tsx
import { Button } from "./design-system/button";
```

Incorrect:

```tsx
function Button() {
  return <button />;
}
```

The design system package already provides the component.

---

## If package import fails

If Make cannot resolve the package at first, do not recreate the entire design
system.

Instead:

1. keep the intended package imports
2. generate the screen structure in `App.tsx`
3. clearly preserve the intended component vocabulary
4. avoid creating replacement components unless explicitly asked
5. preserve the accessibility, eco-design, AI usage, evidence and trust, and relevant knowledge-layer principles

Use this correction instruction:

```txt
Revise the project.

Use the published npm package design-system-ai-lab directly.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
Use business patterns when they match the section intent.
Use form components instead of inline-styled raw inputs.
Follow accessibility, eco-design, AI usage, evidence and trust, and relevant knowledge-layer guidance.
Use BI-first, AI-assisted logic when AI is relevant.
Show asset scope, connectivity status and source scope when they affect trust.
Show source strength when it affects trust.
Keep expected outcomes, technical outcomes, internal proof and customer-ready proof distinguishable.
Do not present non-connected assets as live-monitored.
Do not present expected outcomes as proven value.
Do not use confidence language as a substitute for source evidence.
Update App.tsx so it renders a complete visible screen using imports from
design-system-ai-lab.
```

---

## Expected generated files

A simple Make output should mainly modify or create:

```txt
src/App.tsx
src/main.tsx
src/index.css
```

It may add small helper files only when needed.

It should not generate a full component library.

It should not generate a parallel design system.

It should not create a local package replacement.

It should not create local UI component folders that duplicate the package.

---

## Validation checklist

After generation, verify:

- `design-system-ai-lab` is listed as a dependency
- components are imported from `design-system-ai-lab`
- styles are imported from `design-system-ai-lab/styles.css`
- no internal package paths are used
- no local `packages/design-system-ai-lab` folder was created
- no local replacement components were created
- no local wrapper duplicates package components
- no inline-styled raw form fields were created
- `App.tsx` renders a complete visible screen
- the generated screen uses approved components and patterns
- business patterns are used when they match the section intent
- form controls have visible labels
- `htmlFor` and `id` are connected when possible
- the screen follows accessibility principles
- the screen follows eco-design principles
- AI usage follows AI usage principles when AI is present
- the screen follows evidence and trust principles
- the screen reflects relevant knowledge-layer user needs when applicable
- the screen applies asset intelligence guidance when installed base, connectivity, asset health or recommendations are involved
- asset scope, connectivity status and source scope are visible when they affect trust
- source strength is visible when it affects trust
- raw Health data is separated from Intelligence interpretation when both are present
- the screen does not treat open research questions as fully validated facts
- GenAI is not used for basic structured data retrieval
- visible structured facts appear before AI interpretation when AI is used
- important recommendations are supported by visible or auditable evidence
- uncertainty is visible when data may be incomplete, outdated, inferred, partial or asset scope is limited
- non-connected assets are not presented as live-monitored
- expected outcomes are not presented as proven value
- technical outcomes and internal proof are not presented as customer-ready proof without validation
- confidence language does not replace source evidence
- no fake evidence, fake citations, invented sources, invented asset facts or invented value outcomes are present
- critical AI-assisted decisions remain human-reviewed
- duplicated content is avoided
- the visible screen supports a clear user decision or next action

---

## Final principle

The setup should make Figma Make a consumer of the design system package.

It should not turn Figma Make into a generator of a new design system.

It should also prevent generated screens from becoming inaccessible, noisy,
AI-expensive, unsupported by evidence, disconnected from the user decision,
disconnected from the research-informed knowledge layer or misleading about
asset scope, source strength, connectivity, expected outcomes and value proof.
