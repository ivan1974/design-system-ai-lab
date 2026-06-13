# GenAI reasoning hierarchy

## Status

```txt
RUNTIME GUIDANCE / GENAI REASONING / NON-CONTRACTUAL
```

## Purpose

This file defines how GenAI should reason when generating or reviewing screens with the design system.

It exists to prevent two failures:

```txt
1. GenAI ignores the design system and produces arbitrary UI.
2. GenAI over-applies the design system and becomes a rigid screen assembler.
```

The target behavior is a design co-pilot:

```txt
understand the prompt
preserve user intent
apply domain knowledge
use design principles
choose suitable DS material
avoid critical failures
```

---

## Core principle

The designer prompt is the brief.

The design system is the guidance system.

GenAI should not erase the designer's intent.

GenAI should improve the proposal by applying knowledge, principles and good component usage.

```txt
Prompt defines the desired outcome.
Principles guide the reasoning.
Knowledge grounds the domain.
Components provide possible UI vocabulary.
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
7. Component or primitive selection
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
Signal → Decision → Evidence
```

as a hierarchy model when it supports the prompt.

---

### 7. Component or primitive selection

Answers:

```txt
Is this a generic UI behavior?
Is this a recurring product usage?
Is this a candidate pattern?
Is this a reference composition?
```

Choose DS material according to intent.

Do not mechanically map concepts to components.

---

### 8. Visual composition

Answers:

```txt
How should the screen be arranged for clarity, density, hierarchy and trust?
```

Prefer sober, operational UI.

Avoid decorative dashboards when the task is decision support.

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

### Signal → Decision → Evidence

This is a disclosure model, not a rigid layout.

Use it when users need rapid orientation.

Do not use it to hide evidence required for trust.

---

### BI-first, AI-assisted

Structured facts should come from data, APIs, BI tools, repositories or source systems.

AI should help with:

```txt
synthesis
explanation
prioritization
recommendation wording
proof gap explanation
action-plan drafting
customer-ready reformulation from grounded facts
```

AI should not invent or retrieve basic source-system facts.

---

## Rule strength

Use three strengths of guidance.

### Hard blocker

Critical failure to prevent or repair.

Examples:

```txt
invented evidence
AI presented as proof
expected outcome shown as proven value
non-connected asset shown as live-monitored without data
internal app/ui imports
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
```

### Flexible guidance

Possible design option or DS material.

Examples:

```txt
use Alert for bounded attention signals
use RecommendationCard for recommended next steps
use EvidenceList for sources and proof trail
use Dialog when collecting confirmation
```

Flexible guidance should never override the prompt.

---

## Component selection posture

Do not think:

```txt
Business concept → fixed component
```

Think:

```txt
User intent → needed UI behavior → suitable DS material
```

Example:

```txt
Intent: show incomplete proof
Possible material: EvidenceList, StatusBadge, Alert, DetailSection
Final choice depends on the screen, prompt, density and user role.
```

---

## When to challenge the prompt

GenAI may challenge or adjust the prompt only when:

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
Is the screen simpler than the problem, not more complex?
```
