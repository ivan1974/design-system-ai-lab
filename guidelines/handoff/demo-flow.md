# Demo Flow — Guidelines

## Purpose

This document describes the recommended flow for demonstrating the
promptable design system and its Figma Make readiness.

The demo should show how a design system can support AI-assisted interface
generation without removing design judgment.

The goal is to demonstrate this chain:

```txt
Design system principles
→ coded components and patterns
→ Storybook documentation
→ package build
→ consumer app validation
→ guidelines and prompts
→ Figma Make generation
→ acceptance review
```

The demo should prove that AI-assisted generation becomes more useful when it is
constrained by:

- a real React package
- stable CSS tokens
- documented components
- decision components
- business patterns
- composition rules
- prompt rules
- acceptance criteria

---

## Demo duration

Recommended duration:

```txt
10 to 15 minutes
```

Short version:

```txt
5 to 7 minutes
```

Extended version:

```txt
20 to 30 minutes
```

---

## Main message

The designer is not replaced by AI.

The designer moves upstream:

> from manually producing every screen to defining the system, patterns, prompts
> and review criteria that make generated screens coherent.

The design system becomes the infrastructure that makes AI-assisted interface
production reliable, reviewable and useful.

---

## What the demo should prove

The demo should prove that:

- the design system is coded and reusable
- the package exposes a stable public API
- components and patterns are documented in Storybook
- business screens can be composed from the same vocabulary
- prompts can constrain generation to approved components and patterns
- generated screens can be reviewed with explicit acceptance criteria
- source context, validation status and proof readiness can be preserved in generated screens
- AI usage can remain BI-first and evidence-aware instead of free-form and generic

---

## What the demo should not claim

Do not claim that:

- AI replaces designers
- Figma Make automatically creates production-ready screens
- prompts alone are enough to create good UX
- a design system removes the need for review
- generated screens should be accepted without critique
- AI can validate recommendations automatically
- AI can prove value automatically
- generated recommendations are customer-ready without source and validation context

The correct claim is:

> AI-assisted production becomes more useful when generation is constrained by a
> governed design system and reviewed with explicit criteria.

---

## Demo storyline

The demo should follow this narrative:

```txt
1. We do not ask AI to invent UI freely.
2. We give AI a governed product vocabulary.
3. We give AI composition rules and prompts.
4. We generate a first draft inside that system.
5. We review the generated output against explicit criteria.
6. The designer remains responsible for judgment, hierarchy and quality.
```

The designer's role shifts from producing every variation manually to defining:

- the system
- the patterns
- the prompt model
- the evidence rules
- the acceptance criteria
- the review process

---

## Before the demo

Run these checks before presenting.

### Main app

```bash
npm run dev
```

Verify that the local demo screen renders correctly.

### Storybook

```bash
npm run storybook
```

Verify that the main component groups are visible:

```txt
Design System / Components
Design System / Decision
Design System / Patterns
```

Key examples to verify:

```txt
Button
Badge
Card
Dialog
MetricCard
ActionCard
AlertCard
RecommendationCard
MetricGrid
PriorityList
ActionList
StatusSummary
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
AssetIntelligenceSummary
RecommendationReviewPanel
CustomerReviewReadinessCard
ServiceRiskSummary
CreateActionDialog
```

### Package build

```bash
npm run build:ds
```

Verify that `dist/` contains package entry points and declarations such as:

```txt
dist/index.js
dist/index.d.ts
dist/styles.css
dist/components/*.d.ts
dist/decision/*.d.ts
dist/forms/*.d.ts
dist/patterns/*.d.ts
```

The exact declaration structure may evolve, but package-root imports should
remain the public API.

### Package contents

```bash
npm pack --dry-run
```

Verify that the package includes only expected files:

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

### Consumer app

In the external consumer app:

```bash
npm run dev
```

Verify that package components render correctly when imported from:

```txt
design-system-ai-lab
```

and that styles are imported from:

```txt
design-system-ai-lab/styles.css
```

No consumer screen should import from `dist/`, `src/` or internal package paths.

No consumer screen should recreate local design system components.

---

## Demo setup

Prepare these windows or tabs before starting:

1. Vite app running the demo screen
2. Storybook
3. VS Code on the project repository
4. Terminal showing successful package build or `npm pack --dry-run`
5. Consumer test app, if available
6. Figma Make, if available
7. `guidelines/` folder in VS Code

If Figma Make is not available, use generated screen examples or Storybook demos
as a simulation.

---

## Recommended files to show

### For product or design audience

```txt
README.md
guidelines/principles/
guidelines/composition/
guidelines/prompts/customer-monitoring.md
guidelines/prompts/renewal-risk-review.md
guidelines/review/acceptance-checklist.md
guidelines/handoff/demo-flow.md
```

### For technical audience

```txt
src/index.ts
src/styles.css
src/tokens.css or token files
vite.lib.config.ts
tsconfig.lib.json
package.json
guidelines/handoff/design-system-package.md
```

### For Figma Make audience

```txt
guidelines/handoff/design-system-package.md
guidelines/prompts/overview.md
guidelines/prompts/template.md
guidelines/prompts/customer-monitoring.md
guidelines/prompts/renewal-risk-review.md
guidelines/review/acceptance-checklist.md
guidelines/composition/
```

---

## Demo sequence — recommended 15-minute flow

### Step 1 — Introduce the problem

#### What to say — Introduce the problem

Designers often spend too much time producing screen variations and repetitive UI
states.

The higher-value work is upstream:

- understanding the user problem
- structuring the experience
- defining information hierarchy
- defining reusable patterns
- governing AI usage
- reviewing quality

The question is:

> How can AI reduce repetitive screen production without reducing UX quality?

#### What to show — Introduce the problem

No tool required.

Start with the intent of the demo.

#### Key message — Introduce the problem

> The objective is not to replace design work. The objective is to shift design
> effort toward system definition, experience quality and review discipline.

---

### Step 2 — Show the coded screen

#### What to say — Coded screen

This first screen is a coded service interface.

It helps the user understand:

- what is happening
- why it matters
- what to do next

The screen is not a one-off mockup.

It is composed from reusable design system components and business patterns.

#### What to show — Coded screen

Open the Vite app.

Show the screen structure and call out the pattern-first composition.

For a customer monitoring screen, show:

```txt
PageHeader
CustomerStatusCard
MetricGrid with MetricCard items
ConnectivityCoverageCard
ServiceRiskSummary
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog
```

For a renewal review screen, show:

```txt
PageHeader
RenewalRiskSummary
CustomerReviewReadinessCard
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
RecommendationReviewPanel with RecommendationCard items
ActionList with ActionCard items
CreateActionDialog
```

#### Key message — Coded screen

> The screen is a composition of reusable product patterns, not a static drawing
> and not a generic dashboard.

---

### Step 3 — Show Storybook as the component and pattern catalog

#### What to say — Storybook catalog

Storybook is the living catalog of the system.

It shows what AI generation is allowed to use.

For AI generation, this matters because the AI needs a controlled vocabulary.

The vocabulary now includes:

- base components
- form components
- decision components
- business patterns

#### What to show — Storybook catalog

Open Storybook and show a few pages from each layer.

Base components:

```txt
Button
Badge
Card
Dialog
PageHeader
```

Decision components:

```txt
MetricGrid
AlertCard
PriorityList
ActionCard
ActionList
RecommendationCard
StatusSummary
```

Business patterns:

```txt
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
AssetIntelligenceSummary
RecommendationReviewPanel
CustomerReviewReadinessCard
ServiceRiskSummary
CreateActionDialog
```

#### Key message — Storybook catalog

> If the vocabulary is unclear, AI output becomes inconsistent. Storybook makes
> the vocabulary explicit and reviewable.

---

### Step 4 — Show the composition rules

#### What to say — Composition rules

Components alone are not enough.

AI also needs composition rules.

The system tells Make which component or pattern to use for each type of section.

For example:

```txt
Customer context → CustomerStatusCard
Renewal context → RenewalRiskSummary
Value proof → ValueProofCard
Asset intelligence → AssetIntelligenceSummary
Service risk overview → ServiceRiskSummary
Recommendation review → RecommendationReviewPanel
Risks and blockers → PriorityList with AlertCard items
Assigned actions → ActionList with ActionCard items
```

#### What to show — Composition rules

Open:

```txt
guidelines/composition/
```

Show the pattern-first rule:

```txt
Use business patterns before low-level components when a pattern matches the section intent.
```

#### Key message — Composition rules

> The design system is becoming a generation framework, not just a library of UI
> parts.

---

### Step 5 — Show principles and trust rules

#### What to say — Principles and trust rules

The system also defines how AI-generated screens should behave.

Generated screens should follow:

```txt
accessibility principles
eco-design principles
AI usage principles
evidence and trust principles
```

This prevents generated screens from being visually coherent but misleading.

Important rules include:

- BI-first, AI-assisted
- visible facts before interpretation
- source context when trust matters
- source strength when evidence is partial
- freshness when data may be outdated
- validation status before customer use
- no AI validation claims
- no automatic approval
- no expected outcome presented as proven value
- no internal proof presented as customer-ready proof without validation
- no Intelligence interpretation presented as source-system truth

#### What to show — Principles and trust rules

Open:

```txt
guidelines/principles/ai-usage.md
guidelines/principles/evidence-and-trust.md
```

Optionally show:

```txt
guidelines/patterns/asset-intelligence-summary.md
guidelines/patterns/value-proof-card.md
guidelines/patterns/recommendation-review-panel.md
```

#### Key message — Principles and trust rules

> AI output must be useful, source-aware and reviewable, not just plausible.

---

### Step 6 — Show the package build

#### What to say — Package build

For this to work beyond the current app, the design system must be executable and
reusable.

That means it must be buildable as a package.

#### What to show — Package build

Run or show the output of:

```bash
npm run build:ds
npm pack --dry-run
```

Show expected files:

```txt
dist/index.js
dist/index.d.ts
dist/styles.css
dist/components/*.d.ts
dist/decision/*.d.ts
dist/forms/*.d.ts
dist/patterns/*.d.ts
```

Open:

```txt
guidelines/handoff/design-system-package.md
```

Show the public import rules:

```tsx
import { CustomerStatusCard, MetricGrid } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

#### Key message — Package build

> The design system is not only documented. It can be packaged, consumed and used
> as the executable source of truth.

---

### Step 7 — Show the consumer app

#### What to say — Consumer app

This external app proves that the package can be installed and used outside the
original project.

That is important because Figma Make and future prototypes need a reusable source
of truth.

#### What to show — Consumer app

Open the consumer test app.

Show imports like:

```tsx
import {
  CustomerStatusCard,
  MetricGrid,
  PriorityList,
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

Then show the rendered page.

Also point out what should not happen:

```txt
no dist/ imports
no src/ imports
no local design system recreation
no local wrappers
```

#### Key message — Consumer app

> The design system can travel outside the original app without exposing internal
> implementation paths.

---

### Step 8 — Show the prompt model

#### What to say — Prompt model

The prompt is not asking for a beautiful dashboard.

It defines:

- package imports
- CSS import
- user role
- user goal
- screen pattern
- required components and patterns
- section structure
- content rules
- AI usage constraints
- evidence and trust constraints
- visual constraints
- acceptance criteria

A good prompt does not ask AI to invent an interface.

It asks AI to compose a screen from a governed design system.

#### What to show — Prompt model

Open:

```txt
guidelines/prompts/template.md
guidelines/prompts/customer-monitoring.md
guidelines/prompts/renewal-risk-review.md
```

Show that prompts now specify business patterns such as:

```txt
CustomerStatusCard
ConnectivityCoverageCard
ServiceRiskSummary
RenewalRiskSummary
CustomerReviewReadinessCard
ValueProofCard
RecommendationReviewPanel
ActionList
```

#### Key message — Prompt model

> Prompt quality is part of design system governance.

---

### Step 9 — Generate or simulate in Figma Make

#### Option A — Figma Make available

Copy one ready-to-use prompt into Figma Make:

```txt
guidelines/prompts/customer-monitoring.md
```

or:

```txt
guidelines/prompts/renewal-risk-review.md
```

Ask Figma Make to generate a complete visible screen in `App.tsx` using only
`design-system-ai-lab`.

Then review the generated output.

#### Option B — Figma Make not available

Use an existing generated or simulated screen.

Explain it as a generated output based on the same design system vocabulary,
composition rules and prompt constraints.

#### Key message — Generate or simulate

> The point is not the magic of generation. The point is that generated output is
> constrained, inspectable and reviewable.

---

### Step 10 — Review the generated screen

#### What to say — Review generated screen

The generated screen should not be accepted just because it looks plausible.

It must be reviewed against explicit criteria.

#### What to show — Review generated screen

Open:

```txt
guidelines/review/acceptance-checklist.md
```

Review the generated or simulated screen against:

- package compliance
- package root imports
- no local component recreation
- pattern-first usage
- visual design compliance
- user goal clarity
- decision-oriented structure
- evidence and trust
- AI usage constraints
- component-specific rules
- content quality
- interaction quality

#### Key message — Review generated screen

> The designer remains responsible for judgment, hierarchy, trust and quality.

---

### Step 11 — Close the demo

#### What to say — Close the demo

This project shows a shift in the designer's role.

The designer defines:

- the system
- the components
- the business patterns
- the principles
- the prompts
- the review criteria

AI can then generate first drafts inside that system.

The designer still validates the experience.

#### Key message — Close the demo

> The design system becomes the infrastructure that makes AI-assisted interface
> production reliable.

---

## Short demo flow — 5 to 7 minutes

Use this sequence when time is limited.

1. Show the coded screen.
2. Explain it is composed from reusable components and business patterns.
3. Show Storybook component and pattern catalog.
4. Show one composition rule: use business patterns before low-level components.
5. Show the package import model.
6. Show one prompt from `guidelines/prompts/`.
7. Show or simulate the generated screen.
8. Review it with the acceptance checklist.

Main closing line:

> AI is useful here because it is constrained by a governed design system, not
> because it generates freely.

---

## Extended demo flow — 20 to 30 minutes

Use this version for a deeper technical audience.

Add these details:

- project structure
- package exports in `src/index.ts`
- component source code
- business pattern source code
- token files
- Storybook stories
- `vite.lib.config.ts`
- `tsconfig.lib.json`
- `npm pack --dry-run`
- consumer app installation
- prompt iteration
- acceptance checklist walkthrough
- examples of correction prompts when Make recreates local components

This version is useful for:

- design system teams
- design technologists
- frontend developers
- product design leads
- innovation teams

---

## Figma Make handoff sequence

When moving from this repo to Figma Make, use this order:

1. Provide the package or package access.
2. Provide the CSS import requirement.
3. Provide the public package API.
4. Provide the pattern-first composition rules.
5. Provide the principles.
6. Provide the prompt template.
7. Provide a ready-to-use prompt.
8. Generate a first screen.
9. Review against the checklist.
10. Refine by prompt.
11. Decide whether a new component, decision component or business pattern is needed.

---

## Recommended first Figma Make tests

Run the tests in this order:

```txt
1. Customer monitoring screen
2. Renewal risk review screen
3. Asset recommendation review screen, later
4. Customer review readiness / QBR preparation screen, later
```

Use these files first:

```txt
guidelines/prompts/customer-monitoring.md
guidelines/prompts/renewal-risk-review.md
```

Use correction prompts from:

```txt
guidelines/prompts/template.md
```

when Make:

- creates local components
- creates a local package
- imports from `dist/` or `src/`
- leaves `App.tsx` empty
- generates a generic dashboard
- claims AI validation
- presents expected outcomes as proven value

---

## Common questions

### Does this replace designers?

No.

It reduces repetitive production and keeps the designer responsible for system
quality, UX judgment and review criteria.

### Why not let Figma Make generate freely?

Because free generation tends to create generic UI, local wrappers, decorative
styles and unsupported claims.

The value comes from generation constrained by a design system.

### Is the generated screen production-ready?

Not automatically.

It is a first draft that should be reviewed, refined and validated.

### Why package the design system?

Because a package gives Figma Make and other apps a reusable executable source of
truth.

### Why use Storybook?

Because Storybook makes the component and pattern vocabulary visible and
reviewable.

### Why use business patterns?

Because business patterns guide Make toward correct information hierarchy.

They reduce the need for local wrappers and prevent Make from rebuilding complex
sections with generic cards.

### Why include evidence and trust rules?

Because generated screens can look plausible while overstating certainty.

Evidence and trust rules keep source context, validation status, proof readiness
and human judgment visible.

---

## Final demo message

A promptable design system changes the production model.

Instead of asking AI to create screens from scratch, we give it:

- a component vocabulary
- business patterns
- tokens
- principles
- composition rules
- prompts
- acceptance criteria

The designer does not disappear.

The designer designs the system that makes AI output useful, trustworthy and
reviewable.
