# Design System Package — Guidelines

## Purpose

This document explains the `design-system-ai-lab` package that should be used by
Figma Make or by any consuming React application.

The package is the executable source of truth for the design system.

It provides:

- React components
- decision components
- business patterns
- form components
- compiled CSS
- design tokens
- TypeScript declarations
- a stable public API for screen generation

Figma Make should use this package as the controlled component vocabulary for
generated interfaces.

The package should help Make compose governed, decision-oriented screens instead
of rebuilding local UI or generating generic dashboards.

---

## Package name

```txt
design-system-ai-lab
```

This is the local demo package name.

In a production setup, this name could later become a scoped package such as:

```txt
@your-company/design-system
```

or another organization-specific package name.

---

## Package role

The package is not only a component library.

It is the executable vocabulary that helps AI-assisted generation stay within a
governed product system.

The package should be used with the guidelines in this repository:

```txt
guidelines/principles/
guidelines/composition/
guidelines/prompts/
guidelines/review/
guidelines/components/
guidelines/decision/
guidelines/patterns/
```

Together, the package and guidelines provide:

```txt
components
+ tokens
+ business patterns
+ composition rules
+ prompt rules
+ review criteria
= controlled AI-assisted screen generation
```

---

## Public entry points

The package exposes two public entry points.

### Components and patterns

```txt
design-system-ai-lab
```

Use this entry point to import React components, decision components and business
patterns.

### Styles

```txt
design-system-ai-lab/styles.css
```

Use this entry point to import compiled styles and design tokens.

---

## Required imports

A generated screen should import components and patterns from the package root.

Example:

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
```

The CSS import should happen once near the root of the app.

Examples:

```txt
src/main.tsx
src/App.tsx
src/index.tsx
```

Generated screens should not import CSS from internal package paths.

---

## Import rules

### Allowed

```tsx
import { Button } from "design-system-ai-lab";
```

```tsx
import {
  CustomerStatusCard,
  MetricGrid,
  PriorityList,
} from "design-system-ai-lab";
```

```tsx
import "design-system-ai-lab/styles.css";
```

### Not allowed

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

```tsx
import { Button } from "design-system-ai-lab/src/components/button";
```

```tsx
import { CustomerStatusCard } from "design-system-ai-lab/src/patterns/customer-status-card";
```

```tsx
import "design-system-ai-lab/dist/styles.css";
```

Internal paths are not part of the public API.

Generated code should only use package-level imports.

---

## Why internal imports are forbidden

Internal imports create fragile generated code.

They make the consuming app depend on the internal file structure of the package.

If the design system is reorganized, internal imports may break.

The package root protects consumers from these internal changes.

Use:

```tsx
import { Button } from "design-system-ai-lab";
```

Do not use:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

---

## Do not recreate the package locally

Figma Make should consume the package.

It should not create a local replacement.

Do not generate:

```txt
packages/design-system-ai-lab/
src/design-system/
src/components/ui/button.tsx
src/components/ui/card.tsx
local Button wrappers
local Card wrappers
local design-system copies
```

Generated screens should not create local wrappers around package components.

Bad:

```tsx
function LocalButton(props) {
  return <Button className="custom-button" {...props} />;
}
```

Good:

```tsx
<Button>Create action</Button>
```

Use package components directly.

---

## Pattern-first usage

Generated screens should use business patterns before low-level components when a
pattern matches the section intent.

Use this routing map:

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

Use base components only when no business pattern fits.

Do not rebuild customer context, renewal context, value proof, risk summaries,
recommendation review or action lists with raw `Card` or `div` wrappers when a
dedicated pattern exists.

---

## Public API — base components

The package exposes these base components:

```txt
Badge
Button
Card
Dialog
DialogClose
DialogFooter
MetricCard
PageHeader
```

These components are used for foundational UI and simple compositions.

Use them when a more specific decision component or business pattern does not
fit.

---

## Public API — form components

The package exposes these form components:

```txt
Field
Input
Label
Select
Textarea
```

Use form components instead of raw inline-styled form fields.

Good:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<input style={{ padding: 12, borderRadius: 8 }} />
```

Generated screens should not create custom form primitives when package form
components fit.

---

## Public API — decision components

The package exposes these decision components:

```txt
ActionCard
ActionList
AlertCard
MetricGrid
PriorityList
RecommendationCard
SectionHeader
StatusSummary
```

Use these components for decision-oriented sections.

Recommended usage:

```txt
ActionCard → one assigned internal action
ActionList → group of assigned internal actions
AlertCard → one risk, alert or blocker
PriorityList → group of risks or blockers
MetricGrid → group of decision-relevant metrics
MetricCard → one decision-relevant metric
RecommendationCard → one customer-facing or decision recommendation
SectionHeader → section title, description and optional actions
StatusSummary → structured metadata and status context
```

Do not put alerts inside `MetricGrid`.

Do not put assigned actions inside `RecommendationReviewPanel`.

Do not use `ActionCard` for customer-facing recommendation rationale.

Do not use `RecommendationCard` for assigned internal work.

---

## Public API — business patterns

The package exposes these business patterns:

```txt
AssetIntelligenceSummary
ConnectivityCoverageCard
CreateActionDialog
CustomerReviewReadinessCard
CustomerStatusCard
RecommendationReviewPanel
RenewalRiskSummary
ServiceRiskSummary
ValueProofCard
```

Use business patterns to structure generated screens around  decisions.

Recommended usage:

```txt
AssetIntelligenceSummary → asset context, source limits, Health signals and Intelligence interpretation
ConnectivityCoverageCard → monitoring coverage, disconnected assets and visibility limits
CreateActionDialog → focused action creation with owner, due date, priority and optional context
CustomerReviewReadinessCard → readiness before QBR, renewal or customer discussion
CustomerStatusCard → customer, plan, contract, owner, objectives and status context
RecommendationReviewPanel → shared review context for several RecommendationCard items
RenewalRiskSummary → renewal context, proof readiness and mitigation signals
ServiceRiskSummary → service risk overview before detailed risks or actions
ValueProofCard → proof readiness, proof points, proof gaps and expected outcomes
```

Patterns should guide Make toward the right information hierarchy.

---

## Required principles for generated screens

Generated screens should follow the guidelines principles:

```txt
accessibility principles
eco-design principles
AI usage principles
evidence and trust principles
```

This means generated screens should be:

- accessible and readable
- sober and efficient
- BI-first and AI-assisted when AI is relevant
- source-aware and validation-aware
- decision-oriented rather than decorative

---

## AI usage expectations

The package should support BI-first, AI-assisted interfaces.

Generated screens should not use GenAI for basic factual retrieval.

Do not use GenAI to retrieve:

```txt
customer name
contract number
owner
renewal date
asset count
status
standard KPIs
lists of actions
lists of alerts
```

Assume structured facts come from:

```txt
APIs
BI tools
databases
source systems
monitoring platforms
CRM or service systems
```

Use AI only for:

```txt
synthesis
explanation
prioritization
recommendation
drafting
reformulation
```

Generated screens must not claim:

```txt
AI validated
AI approved
automatically validated
automatically proven
```

AI confidence is not a source, validation status or proof readiness.

---

## Evidence and trust expectations

Generated screens should preserve trust.

They should show visible facts before interpretation.

They should distinguish:

```txt
facts
signals
Health signals
Intelligence interpretation
recommendations
actions
proof
expected outcomes
```

Trust-sensitive screens should show:

```txt
source context
source scope
source strength
freshness
validation status
proof readiness
customer-readiness
```

Do not present expected outcomes as proven value.

Do not present internal proof as customer-ready proof without validation.

Do not present Intelligence interpretation as source-system truth.

Do not present partial Health visibility as complete asset knowledge.

Keep human validation visible for critical customer, contract, service, safety,
compliance, renewal, value proof, asset intelligence or modernization decisions.

---

## CSS and token usage

The CSS bundle includes:

- Tailwind-generated utilities used by the components
- CSS variables
- token aliases where supported
- base styles
- typography defaults
- component styling dependencies

The consuming app or generated screen should not recreate these tokens manually.

Use:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not redefine tokens inside generated screens unless the designer
explicitly asks for theming work.

---

## Current token categories

The design system currently includes tokens for:

- background colors
- surface colors
- text colors
- border colors
- semantic tones
- radius
- spacing
- shadows

These are exposed through CSS variables such as:

```css
--ec-color-background
--ec-color-surface
--ec-color-surface-muted
--ec-color-text-primary
--ec-color-text-secondary
--ec-color-text-muted
--ec-color-border
--ec-color-primary
--ec-color-success
--ec-color-warning
--ec-color-danger
--ec-radius-sm
--ec-radius-md
--ec-radius-lg
--ec-shadow-card
--ec-shadow-popover
```

Generated screens may use utility classes that reference these variables.

Example:

```tsx
<main className="min-h-screen bg-(--ec-color-background) p-8">
  ...
</main>
```

Prefer package components and patterns for component styling.

Use layout utility classes only for page layout, spacing and responsive structure.

---

## Minimal generated screen example

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

export function GeneratedScreen() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Understand customer status, service risks and next actions."
          actions={<CreateActionDialog trigger={<button>Create action</button>} />}
        />

        <CustomerStatusCard
          customerName="Northstar Manufacturing"
          plan="Advanced service plan"
          contract="#NS-2024-118"
          csm="Sarah Moreau"
          renewalDate="90 days"
          assetsCovered="25 assets across 3 sites"
          coverage="68% connected"
          customerObjective="Improve service visibility before renewal"
          sourceContext="CompanyName monitored assets only"
          validationStatus="Review before customer communication"
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "Connectivity partial", tone: "warning" },
          ]}
        />

        <MetricGrid columns={3}>
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 connected assets out of 25"
            trend="+8% this quarter"
            trendTone="success"
          />
          <MetricCard
            label="Open critical alerts"
            value="3"
            helper="2 require customer follow-up"
            trend="+2 this week"
            trendTone="danger"
          />
          <MetricCard
            label="Overdue actions"
            value="4"
            helper="Action plan should be reviewed this week"
            trend="+3 since last review"
            trendTone="warning"
          />
        </MetricGrid>

        <ConnectivityCoverageCard
          customerName="Northstar Manufacturing"
          coverageRate="68%"
          connectedAssets="17 assets"
          disconnectedAssets="8 assets"
          criticalDisconnectedAssets="2 critical assets"
          monitoringStatus="Partial monitoring coverage"
          affectedScope="Main site and backup power system"
          lastUpdate="18 hours ago"
          sourceContext="Monitoring platform and known installed base"
          sourceStrength="partial"
          validationStatus="Review before customer communication"
          badges={[
            { label: "Connectivity partial", tone: "warning" },
            { label: "Critical assets disconnected", tone: "danger" },
          ]}
        />

        <ServiceRiskSummary
          riskLevel="critical"
          riskSummary="Critical assets are no longer monitored before the next customer touchpoint."
          affectedScope="Main site and backup power system"
          customerImpact="Customer visibility is reduced for critical power assets."
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
          title="Priority risks"
          description="Risks and blockers requiring review before customer communication."
        >
          <AlertCard
            severity="critical"
            title="Connectivity loss on critical equipment"
            scope="Main switchboard"
            description="Two critical assets are no longer monitored and visibility is partial."
            recommendation="Plan a connectivity review with the customer and support team."
            evidenceSummary="17 of 25 assets are currently monitored."
            sourceStrength="partial"
            validationStatus="Review before customer communication"
          />
        </PriorityList>

        <ActionList
          title="Recommended actions"
          description="Assigned internal actions to reduce risk before the next customer touchpoint."
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

Note: when using `CreateActionDialog`, prefer the package `Button` as trigger if
it is imported in the screen:

```tsx
<CreateActionDialog trigger={<Button>Create action</Button>} />
```

---

## Package build command

Before using the package in a consuming app, build it from the source project:

```bash
npm run build:ds
```

Expected output:

```txt
dist/
  index.js
  index.d.ts
  styles.css
  components/*.d.ts
  decision/*.d.ts
  forms/*.d.ts
  patterns/*.d.ts
```

The exact declaration file structure may evolve, but the public imports should
remain package-root based.

---

## Local package test

To verify that the package can be consumed externally, run:

```bash
npm run build:ds
npm pack --dry-run
```

Expected package contents:

```txt
README.md
package.json
dist/index.js
dist/index.d.ts
dist/styles.css
dist/components/*.d.ts
dist/decision/*.d.ts
dist/forms/*.d.ts
dist/patterns/*.d.ts
```

To create a local tarball:

```bash
npm pack
```

To install it in a separate Vite / React app:

```bash
npm install ../design-system-ai-lab/design-system-ai-lab-0.2.0.tgz
```

Adjust the version number to the tarball generated by `npm pack`.

---

## Package validation checklist

Before using the package in Figma Make or another app, verify:

- `npm run build:ds` works
- `dist/index.js` exists
- `dist/index.d.ts` exists
- `dist/styles.css` exists
- declaration files exist for components, forms, decision components and patterns
- `npm pack --dry-run` includes only expected package files
- a separate consumer app can import package components from `design-system-ai-lab`
- a separate consumer app can import `design-system-ai-lab/styles.css`
- generated screens render with expected styles
- no consumer screen imports from `dist/`, `src/` or internal package paths
- no consumer screen recreates local design system components
- no consumer screen creates local wrappers for package components

---

## Figma Make expectations

When Figma Make generates code, it should:

- import components from `design-system-ai-lab`
- import styles from `design-system-ai-lab/styles.css`
- use business patterns before low-level components when a pattern fits
- use form components instead of inline-styled raw form fields
- avoid internal imports
- avoid local component recreation
- avoid local wrappers around package components
- preserve source context and validation status when trust matters
- avoid unsupported AI validation claims
- avoid generic dashboards when a decision screen is requested

Figma Make should not create custom replacements for existing package components.

---

## Recommended Figma Make prompts

Use prompts from:

```txt
guidelines/prompts/
```

Recommended first tests:

```txt
guidelines/prompts/customer-monitoring.md
guidelines/prompts/renewal-risk-review.md
```

If Make recreates local components, use the correction prompts from:

```txt
guidelines/prompts/template.md
```

---

## Package role in the demo

The package proves that the design system is not only a local prototype.

It can be:

- built
- packed
- installed
- imported
- rendered in another app
- used as a controlled vocabulary for generated screens
- guided by documented principles, composition rules, prompts and review criteria

This is the technical bridge between Storybook, consuming React apps and Figma
Make.

---

## Current limitations

This package is still a demo package.

Current limitations:

- not published to npm
- local package name is still demo-oriented
- no formal changelog yet
- no production Make integration yet
- no production data integration yet
- generated screens still require designer review
- generated screens are not production-ready by default

These limitations are acceptable for the current demo.

The purpose is to prove the workflow from design system source to external
package consumption and governed AI-assisted generation.

---

## Final principle

The package is the executable form of the design system.

For AI-assisted interface generation, this matters because Make should generate
from a real component and pattern vocabulary, not from visual guesswork.

The package does not replace design judgment.

It gives designers a governed system for making generated screens more reliable,
reviewable and useful.
