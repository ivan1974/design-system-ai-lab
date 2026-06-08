# Demo Narrative — Make-ready Design System

## Core message

This demo shows how a coded design system can become a controlled generation
infrastructure for AI-assisted product interfaces.

The goal is not to replace designers.

The goal is to reduce repetitive screen production so designers can focus on:

- user understanding
- journey structure
- experience quality
- interaction logic
- design system governance
- generated screen review
- UX decision-making

In this model, the designer does not become a prompt operator.

The designer becomes the architect of the system that makes prompts reliable.

---

## Demo positioning

This demo should not be presented as:

> AI can generate screens automatically.

It should be presented as:

> A controlled design system can make AI-generated interfaces more consistent,
> reusable and aligned with UX intent.

The key idea is that AI generation is only useful when it is constrained by:

- foundations
- design tokens
- component contracts
- form components
- decision components
- business patterns
- usage rules
- quality criteria

Without those constraints, AI produces generic screens.

With those constraints, AI can help produce coherent product interfaces faster.

---

## Before

Designers often spend time on repetitive production tasks:

- producing many screen variations manually
- aligning UI inconsistencies
- preparing repetitive handoff material
- recreating known patterns
- checking basic component usage
- redrawing states that already exist in the system
- explaining the same component rules repeatedly

This can reduce the time available for higher-value design work:

- understanding user situations
- clarifying the journey
- defining the hierarchy of information
- testing experience quality
- aligning stakeholders
- improving the design system itself

---

## After

Designers define:

- the design system foundations
- UX principles
- component contracts
- prompt rules
- screen patterns
- quality criteria
- interaction rules
- acceptance criteria for generated screens

AI tools generate:

- first screen drafts
- coherent component compositions
- simple interactions
- structured variants
- reusable prototype code
- alternative screen organizations
- first-pass UX flows for review

The designer then reviews, critiques and improves the generated output.

---

## Key point

The AI does not replace design judgment.

The AI produces within a controlled system.

The designer remains responsible for:

- the experience strategy
- the user problem
- the hierarchy of information
- the interaction model
- the validation of generated screens
- the quality of the design system
- the governance of reusable patterns

The AI can accelerate production, but it cannot decide what experience should be
created.

---

## What this project demonstrates

This project demonstrates six things:

1. A coded React design system package.
2. A visual catalog in Storybook.
3. Foundations documented through tokens, colors and typography.
4. Forms, decision components and business patterns ready for composition.
5. AI instructions for controlled generation.
6. Prompt examples for generating new screens with constraints.

Together, these elements show how a design system can become a promptable
interface generation system.

---

## Demo flow

### 1. Show the coded interface

Open the customer monitoring or renewal risk review screen in the Vite app.

Explain:

> This screen is not a one-off mockup. It is composed from reusable design
> system components and patterns.

Point out:

- `PageHeader`
- `CustomerStatusCard`
- `MetricGrid`
- `PriorityList`
- `ActionList`
- `CreateActionDialog`

### 2. Show Storybook foundations

Open Storybook and start with the foundations.

Explain:

> The system starts with tokens, colors and typography. These foundations make
> generated screens visually consistent.

Show:

- token namespace `--ec-*`
- compatibility aliases for Figma Make
- color palette
- typography scale

### 3. Show Storybook components

Move to the component stories.

Explain:

> Storybook is the living catalog of the system. It shows the components,
> variants and usage boundaries.

Show:

- `Button` variants
- `Badge` tones
- `Card`
- `MetricCard`
- `Dialog` with a direct `Button` trigger

### 4. Show form components

Open the form component stories.

Explain:

> Form components prevent AI tools from rebuilding form fields with inline
> styles. They give generated dialogs a controlled structure.

Show:

- `Field`
- `Input`
- `Select`
- `Textarea`

### 5. Show decision components

Open the decision component stories.

Explain:

> These components help generated screens support decision-making instead of
> only displaying information.

Show:

- `SectionHeader`
- `MetricGrid`
- `StatusSummary`
- `PriorityList`
- `ActionList`

### 6. Show business patterns

Open the pattern stories.

Explain:

> Patterns are the most useful layer for AI-assisted generation. They prevent
> the tool from rebuilding common business sections from scratch.

Show:

- `CustomerStatusCard`
- `ConnectivityCoverageCard`
- `RenewalRiskSummary`
- `ValueProofCard`
- `CreateActionDialog`

### 7. Show component contracts

Open `component-contracts.md`.

Explain:

> The components are not only visual elements. They have usage contracts. These
> contracts tell an AI tool how and when to use them.

Example rules:

- `AlertCard` must include a recommendation.
- `ActionCard` must include owner, due date and priority.
- `MetricCard` should only be used for decision-relevant metrics.
- `CreateActionDialog` should be used for action creation flows.
- `CustomerStatusCard` should be used before rebuilding customer context.

### 8. Show prompt library

Open `prompt-library.md`.

Explain:

> The prompt does not ask the AI to invent a dashboard. It asks the AI to
> compose an interface using a controlled vocabulary.

This is the difference between generic generation and system-based generation.

### 9. Connect to Figma Make

Explain:

> The next step is to expose the same component vocabulary and rules inside
> Figma Make, so screen generation starts from the design system instead of
> from a blank canvas.

---

## Suggested spoken narrative

> The objective here is not to automate design judgment. The objective is to
> automate part of repetitive interface production.
>
> The designer defines the system: foundations, components, tokens, UX
> principles, usage rules and quality criteria.
>
> Then AI tools can generate first versions of screens and interactions by
> composing the system.
>
> The designer stays responsible for the user problem, the experience logic and
> the final quality.
>
> In other words, the design system becomes an infrastructure for interface
> generation.

---

## What the demo proves

The demo proves that:

- a design system can be coded as reusable components
- the same system can be documented in Storybook
- foundations can make generated screens visually consistent
- form components can prevent inline-styled generated forms
- decision components can guide generated screens toward useful structure
- business patterns can reduce AI improvisation
- component usage can be described as AI-readable contracts
- prompts can be constrained by the design system
- AI generation can become more reliable when the system is explicit

---

## What the demo does not claim

This demo does not claim that:

- AI-generated code is automatically production-ready
- designers no longer need to review screens
- Figma Make can replace UX work
- prompts alone are enough to create good product experiences
- a design system removes the need for design governance

The point is more precise:

> AI becomes more useful when the design system provides the language, rules and
> constraints for generation.

---

## Final sentence

The designer does not disappear from the production process.

The designer moves upstream:

from producing every screen manually

to designing the system that makes generated screens coherent.
