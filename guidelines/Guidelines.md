# Guidelines — Design System AI Lab

## Purpose

This file is the mandatory GenAI entry point for `design-system-ai-lab`.

It is a short router, not full documentation.

Use it to find the smallest useful context before generating or reviewing a screen.

```txt
Read little.
Read the same files.
Open detailed references only when needed.
Start from intent before components.
```

---

## What this kit helps GenAI do

Generate sober, operational, B2B decision workspaces using the project design system.

The goal is not to reproduce one reference screen pixel-perfect.

The goal is to help GenAI generate a good screen from a human brief by using:

```txt
primitives
+ usage components
+ design principles
+ domain knowledge
+ component selection guidance
+ light guardrails
```

GenAI must act as an intent-guided design assistant, not as a rigid screen assembler.

---

## Core generation model

Before selecting UI components, follow this reasoning order:

```txt
1. Understand the human prompt.
2. Identify the primary user decision.
3. Identify the main domain object and context.
4. Identify evidence, trust and validation needs.
5. Select the right level of UI abstraction.
6. Compose the screen with approved design-system material.
7. Review the result against principles and guardrails.
```

The screen is an outcome of reasoning, not the starting point.

---

## Mandatory read order

Read in this order:

```txt
1. guidelines/Guidelines.md
2. guidelines/runtime/genai-reasoning-hierarchy.md
3. guidelines/source/principles/decision-first-proof-second.md
4. guidelines/source/principles/facts-before-interpretation.md
5. guidelines/source/principles/progressive-decision-disclosure.md
6. guidelines/source/principles/ai-usage-and-validation.md
```

Then read only what the task requires:

```txt
guidelines/source/knowledge/service-user-needs.md
  read when the prompt concerns service experience, support, renewal, value proof, user needs or role-specific workflows

guidelines/source/knowledge/service-design-implications.md
  read when reviewing generation quality or translating user needs into screen structure

guidelines/source/knowledge/industrial-electrical-system-basics.md
  read when the prompt concerns electrical assets, industrial power systems, asset health, service, maintenance, product passport, recommendations or documents

guidelines/source/knowledge/installed-base-domain-model.md
  read when the prompt concerns Installed Base workspaces, asset inventory, tab organization, cross-section links or how asset information is structured

guidelines/runtime/*
  operational generation and selection rules

guidelines/reference/*
  primitives, components, screen guidance and examples

contracts/*
  critical blockers only
```

Knowledge files are not strict screen contracts.

Use them to understand the domain and preserve meaning while respecting the user's prompt.

---

## Principle hierarchy

When rules conflict, use this hierarchy:

```txt
1. User prompt and task intent
2. Safety, evidence and trust guardrails
3. Domain or screen guidance when relevant
4. Design-system principles
5. Component selection guidance
6. Visual and density rules
7. Reference prototype examples
```

The reference prototype may inspire a screen.

It must not override the user prompt unless the prompt explicitly asks for reference reproduction or strict benchmark mode.

---

## Public source boundary for this repository

Generated or modified product code may import from:

```txt
src/design-system/primitives
src/design-system/components
src/design-system/foundations
```

Generated or modified product code must not import from:

```txt
src/app/components/ui/*
@radix-ui/*
third-party implementation packages
src/design-system/internal/*
```

Primitives may use Radix internally.

Screens should use the project design-system API.

---

## Selection shortcut

Use the right level of abstraction:

```txt
Primitive
  generic UI form or behavior
  examples: Button, Input, Checkbox, Select, Dialog, Popover, Tabs, Table

Usage component
  recommended composition for a recurring UI use
  examples: SearchField, FilterDropdown, CheckboxOption, StatusBadge, ScoreBar

Candidate pattern
  reusable practice or interaction structure under evaluation
  examples: list/detail workspace, filterable inventory, actionable insight panel

Reference screen component
  product-grounded example, not necessarily final vocabulary
  examples: InstalledBaseWorkspace, AssetInventoryRow, AssetDetailPanel
```

Do not start by assembling random components.

Start by understanding the user decision and the evidence needed to support it.

---

## Core principles summary

Always prefer:

```txt
decision-first, proof-second
facts before interpretation
Signal → Decision → Evidence
human validation when trust matters
component intent over component assembly
sober, white-first, operational UI
rows and tables over dashboard card grids for inventories
```

Never:

```txt
invent evidence, telemetry, sources or proof
use AI confidence as evidence strength
present expected outcomes as proven value
hide validation for sensitive decisions
replace an operational workspace with a generic dashboard
create local design-system clones
use color to make weak evidence look stronger
```

---

## Installed Base default interpretation

When the prompt asks for an Installed Base, asset inventory, service intelligence or asset monitoring screen, treat it as an operational decision workspace.

The user likely needs to understand:

```txt
which assets require attention
why they require attention
what action is recommended
what evidence supports the recommendation
what is still unknown or unvalidated
```

Do not default to a generic KPI dashboard.

---

## Repair instruction

When a generated screen feels weak:

```txt
1. Do not add more decoration.
2. Identify whether the problem is intent, evidence, hierarchy, component choice or trust.
3. Repair the smallest failing layer.
4. Keep the user prompt as the primary goal.
```

Common repairs:

```txt
generic dashboard → convert to decision workspace
all cards equal → introduce Signal → Decision → Evidence hierarchy
recommendation without proof → add evidence and validation status
too many custom elements → replace with DS primitives or usage components
hidden action ownership → expose owner, due date and priority
```
