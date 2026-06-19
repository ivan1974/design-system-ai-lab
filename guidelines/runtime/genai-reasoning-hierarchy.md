# GenAI reasoning hierarchy

## Status

```txt
RUNTIME GUIDANCE / GENAI REASONING / FIGMA MAKE / AGENTIC WORKFLOWS
```

## Purpose

This file defines how to reason when generating, reviewing or orchestrating screen exploration with the design system.

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
justify controlled exploration
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

You must explain any significant deviation from a strong recommendation when the deviation affects component choice, information hierarchy, evidence visibility or user control.

---

## Should

You should use package primitives and components when they support the brief intent and layout.

You should compose locally when exported components do not fit.

You should keep facts, interpretation, recommendation and proof distinct when trust matters.

You should repair the smallest failing reasoning layer instead of adding more UI.

You should distinguish between exported package components, primitive composition, local screen-specific components and exploratory design-system candidates.

---

## May

You may create local screen-specific components when no exported component fits.

You may challenge or adjust the prompt when it creates a critical failure.

You may simplify the screen when the prompt asks for too much structure or too much decoration.

You may propose a local exploratory component when it reveals a possible missing pattern in the design system.

You may propose multiple screen directions when the brief supports different valid interaction models.

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
Exploratory components may reveal design-system evolution opportunities.
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
10. Report reasoning, deviations and candidate patterns
```

Do not start at step 7.

Component selection is a consequence of reasoning.

Exploration is allowed only after the intent, decision, evidence needs and component fit have been reasoned through.

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

### 10. Report reasoning, deviations and candidate patterns

Answers:

```txt
Which MUST rules were applied?
Which SHOULD rules were followed?
Which SHOULD rules were intentionally deviated from?
Which MAY explorations were used?
Which local components were created?
Do any local components reveal a possible design-system gap?
```

The report is part of the design output.

A generated screen without reasoning trace is incomplete for agentic workflows.

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

## Instruction strength reference

This file applies instruction strength during runtime reasoning.

It does not define the vocabulary rules.

For the source of truth on `must`, `should` and `may`, read:

```txt
guidelines/reference/instruction-language.md
```

### Runtime hard blocker

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

### Runtime strong recommendation

A preferred runtime behavior unless the prompt clearly requires another approach.

Examples:

```txt
show relevant context early
show trust cues when trust matters
keep actions owned and time-bound when execution matters
make partial visibility explicit
prefer dense rows or tables for asset comparison
use package components when they fit the brief and layout
```

### Runtime flexible guidance

A possible design option or DS material.

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

## Exploratory local components

Local screen-specific components are allowed when exported package components or primitives do not adequately support the prompt intent, user task or decision need.

They are not design-system components by default.

A local exploratory component may be useful when it reveals a missing reusable pattern in the design system.

### Exploratory component requirements

You must keep exploratory components local to the generated screen unless they are explicitly exported by the package.

You must not import exploratory component names from the package.

You must explain why the existing package components or primitives were insufficient.

You must preserve the package visual foundation.

You must respect all hard blockers and non-negotiable principles.

### Exploratory component recommendations

You should name exploratory components according to their user-facing role or interaction behavior.

You should describe the design need they address.

You should identify which existing design-system material they reuse or build upon.

You should state whether the component should remain local or be considered as a design-system candidate.

### Exploratory component permissions

You may propose an exploratory component as a candidate for future design-system evolution.

You may propose multiple exploratory alternatives when the brief is ambiguous or when different interaction models are plausible.

### Exploratory component example

A `RecommendationCard` may be created locally when the screen needs to connect evidence, interpretation, recommended action, confidence and user control in one decision-support unit.

It must not be imported from the package unless it is explicitly exported.

It should be documented as:

```txt
purpose
user need
reused DS material
reason existing components were insufficient
risks or guardrails
candidate status
```

---

## Deviation reporting

A deviation is acceptable only when it does not violate a MUST rule or hard blocker.

Deviation reporting is required when a screen intentionally does not follow a relevant SHOULD rule.

For each significant deviation, explain:

```txt
Which SHOULD rule was not followed?
Why was the deviation useful for this prompt?
Which user decision, evidence need or interaction need justified it?
Which MUST rules remain respected?
Is the deviation a one-off local decision or a design-system evolution signal?
```

Do not use deviation reporting to justify invented evidence, fictional imports, unsafe recommendations or local design-system clones.

---

## Agent output contract

For agentic workflows, a screen proposal should include both the generated UI and a reasoning trace.

The output should include:

```txt
interpreted brief
primary user role and task
primary decision or job to be done
applicable MUST rules
applicable SHOULD rules
MAY explorations used
component and primitive choices
local components created
deviations and rationale
evidence, trust and safety notes
review result
design-system candidate signals
```

A local component should be classified as one of:

```txt
one-off local component
reusable local pattern
exploratory candidate
candidate for design-system review
rejected or too specific
```

The goal is not only to generate a screen.

The goal is to preserve intent, explore within constraints, explain trade-offs, prevent critical failures and reveal how the design system may need to evolve.

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

Before finalizing a generated screen or agentic screen proposal, ask:

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
Are exploratory components justified and classified?
Are deviations from SHOULD rules explained?
Is the screen simpler than the problem, not more complex?
```
