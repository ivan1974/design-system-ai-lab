# GenAI reasoning hierarchy

## Status

```txt
RUNTIME GUIDANCE / GENAI REASONING / FIGMA MAKE
```

## Purpose

This file defines how to reason when generating or reviewing screens with the design system.

It prevents two failures:

```txt
1. Ignoring the design system and producing arbitrary UI.
2. Over-applying the design system and becoming a rigid screen assembler.
```

The target behavior is a design co-pilot:

```txt
understand the prompt
preserve user intent
apply domain knowledge
use design principles
inspect available DS material
choose suitable components when useful
compose locally when needed
avoid critical failures
```

---

## Must

You must preserve the designer prompt as the brief unless it creates a critical failure.

You must apply relevant principles and knowledge.

You must import the package stylesheet when generating React application code:

```tsx
import "design-system-ai-lab/styles.css";
```

You must inspect available primitives, components and exports before inventing local UI.

You must not invent evidence, telemetry, source data or proof.

You must not invent package components or fictional imports.

You must not recreate the visual system locally.

---

## Should

You should use package primitives and components when they support the brief intent and layout.

You should compose locally when exported components do not fit.

You should keep facts, interpretation, recommendation and proof distinct when trust matters.

You should repair the smallest failing reasoning layer instead of adding more UI.

---

## May

You may create local screen-specific components when no exported component fits.

You may challenge or adjust the prompt when it creates a critical failure.

You may simplify the screen when the prompt asks for too much structure or too much decoration.

---

## Core principle

The designer prompt is the brief.

The design system is the guidance system.

Do not erase the designer's intent.

Improve the proposal by applying knowledge, principles and good component usage.

```txt
Prompt defines the desired outcome.
Principles guide the reasoning.
Knowledge grounds the domain.
Components provide possible UI vocabulary.
Local composition is allowed when components do not fit.
Contracts block critical failures.
Reference examples inspire, but do not dictate.
```

---

## Reasoning order

Use this order before composing UI:

```txt
1. Prompt intent
2. User role and task
3. Primary decision or job to be done
4. Domain object and business context
5. Evidence, trust and validation needs
6. Information hierarchy
7. Component, primitive or local composition selection
8. Visual composition
9. Review and repair
```

Do not start at step 7.

Component selection is a consequence of reasoning.

---

## What each layer does

### 1. Prompt intent

Answers:

```txt
What does the designer or user want to create?
What outcome is expected?
What constraints are explicit?
```

Follow the prompt unless it creates a critical failure.

---

### 2. User role and task

Answers:

```txt
Who is using this screen?
What are they trying to do?
What level of detail do they need?
```

Avoid role-neutral screens when the prompt implies a specific role.

---

### 3. Primary decision or job to be done

Answers:

```txt
What decision, action or understanding should the screen support?
```

This is the meaning of decision-first.

It does not mean facts disappear.

It means the screen should be organized around a user decision or task, not around all available data.

---

### 4. Domain object and context

Answers:

```txt
What is the main object?
Asset?
Site?
Recommendation?
Document?
Customer?
Service action?
```

Use domain knowledge to avoid semantic errors.

---

### 5. Evidence, trust and validation needs

Answers:

```txt
What supports the claim?
What is observed?
What is interpreted?
What is uncertain?
What needs validation?
```

This is where facts-before-interpretation applies.

Facts-before-interpretation is a trust rule, not a mandatory visual order for every screen.

---

### 6. Information hierarchy

Answers:

```txt
What should be visible first?
What can be secondary?
What should be progressively disclosed?
```

Use:

```txt
Signal -> Decision -> Evidence
```

as a hierarchy model when it supports the prompt.

---

### 7. Component, primitive or local composition selection

Answers:

```txt
Does an exported component fit the brief and layout?
Does a primitive composition fit better?
Is a local screen-specific component needed?
Is the component name actually exported if it is imported from the package?
```

Choose DS material according to intent.

Do not mechanically map concepts to components.

Do not invent package component imports.

---

### 8. Visual composition

Answers:

```txt
How should the screen be arranged for clarity, density, hierarchy and trust?
```

Prefer sober, operational UI.

Avoid decorative dashboards when the task is decision support.

Local composition must preserve the package visual foundation.

---

### 9. Review and repair

Answers:

```txt
Does the screen respect the prompt?
Does it support the intended decision?
Does it preserve domain meaning?
Does it avoid critical failures?
```

Repair the smallest failing layer.

Do not add more UI to fix a reasoning problem.

---

## Compatibility of key principles

### Decision-first and facts-before-interpretation

These principles are compatible.

```txt
Decision-first
  defines what the screen is for.

Facts-before-interpretation
  defines how trust should be built when claims, recommendations or AI interpretation are shown.
```

Use this combined rule:

```txt
Start the screen from the user's decision need.
Support interpretations with visible or accessible facts.
Never let AI interpretation replace source evidence.
```

---

### Signal -> Decision -> Evidence

This is a disclosure model, not a rigid layout.

Use it when users need rapid orientation.

Do not use it to hide evidence required for trust.

---

### BI-first, AI-assisted

Structured facts should come from data, APIs, BI tools, repositories or source systems.

AI may help with:

```txt
synthesis
explanation
prioritization
recommendation wording
proof gap explanation
action-plan drafting
customer-ready reformulation from grounded facts
```

AI must not invent or retrieve basic source-system facts.

---

## Rule strength

Use `must`, `should` and `may` consistently.

For instruction language, read:

```txt
guidelines/reference/instruction-language.md
```

### Hard blocker

A critical failure to prevent or repair.

Examples:

```txt
invented evidence
AI presented as proof
expected outcome shown as proven value
non-connected asset shown as live-monitored without data
package stylesheet missing from generated app code
fictional package component import
local design-system clone
critical decision shown as autonomously approved by AI
```

### Strong recommendation

Preferred behavior unless the prompt clearly requires another approach.

Examples:

```txt
show relevant context early
show trust cues when trust matters
keep actions owned and time-bound when execution matters
make partial visibility explicit
prefer dense rows or tables for asset comparison
use package components when they fit the brief and layout
```

### Flexible guidance

Possible design option or DS material.

Examples:

```txt
use Alert for bounded attention signals
use Dialog when collecting confirmation
create local EvidenceRow when no exported component fits
create local RecommendationBlock when no exported component fits
compose with semantic sections when package components do not fit
```

Flexible guidance should never override the prompt or a hard blocker.

---

## Component selection posture

Do not think:

```txt
Business concept -> fixed component
```

Think:

```txt
User intent -> needed UI behavior -> suitable DS material or local composition
```

Example:

```txt
Intent: show incomplete proof
Possible material: Alert, Badge, Table, Accordion, Collapsible, local EvidenceRow, semantic sections
Final choice depends on the screen, prompt, density and user role.
```

Do not import local composition names from the package unless they are explicitly exported.

---

## When to challenge the prompt

You may challenge or adjust the prompt only when:

```txt
it asks to invent facts or evidence
it hides important uncertainty
it presents AI as proof
it creates unsafe or misleading recommendations
it asks for a generic dashboard when the described task is decision support
it asks for a component choice that conflicts with the intended interaction
```

When challenging, propose a better alternative rather than refusing to design.

---

## Review checklist

Before finalizing a generated screen, ask:

```txt
Does it respect the prompt?
Does it preserve the primary user intent?
Does it support a clear decision, task or understanding?
Does it use domain knowledge correctly?
Are facts, interpretation, recommendation and proof distinct enough?
Is AI used only where it adds value?
Are critical guardrails respected?
Are component choices justified by intent?
Are package imports real?
Is local composition clearly local and visually consistent?
Is the screen simpler than the problem, not more complex?
```
