# GenAI intent guidance model

## Status

Accepted

## Date

2026-06-13

## Context

The project is not trying to make GenAI reproduce a fixed screen pixel-perfect.

The goal is to help GenAI generate the best possible screen from a human brief by using:

```txt
Design-system primitives
+ usage components
+ domain knowledge
+ design principles
+ component selection guidance
+ light contracts
```

The Installed Base Intelligence prototype is a product reference and learning source. It is not the final generation target.

The previous repository contains useful principles, knowledge, runtime rules and contracts. These should be migrated as design intelligence, not copied as rigid execution rules.

---

## Decision

GenAI should be treated as an intent-guided design assistant, not as a rigid screen generator.

Its role is to:

```txt
understand the human prompt
identify the intended user decision
select the most appropriate level of UI abstraction
apply design-system principles
use domain knowledge responsibly
choose suitable primitives, components or candidate patterns
make evidence and limitations visible
avoid critical generation failures
```

The design system should guide GenAI toward better design decisions, not only toward valid component assembly.

---

## Core model

```txt
Prompt
→ intent interpretation
→ primary user decision
→ domain object and context
→ evidence and trust needs
→ component / primitive / candidate-pattern selection
→ generated screen
→ review against principles and guardrails
```

The screen is an outcome of reasoning, not the starting point.

---

## Principle hierarchy

Use this hierarchy when guidance conflicts:

```txt
1. User prompt and task intent
2. Safety, evidence and trust guardrails
3. Screen or domain guidance when relevant
4. Design-system principles
5. Component selection guidance
6. Visual and density rules
7. Reference prototype examples
```

A reference prototype may inspire a generation.

It must not override the user prompt unless the prompt explicitly asks to reproduce the reference screen or use a strict screen contract.

---

## Decision-first, proof-second

All operational decision screens should start from the decision the user needs to make.

The screen should help answer:

```txt
What requires attention?
What decision or action is proposed?
Why does it matter now?
What evidence supports it?
What limitation or validation is still needed?
Who owns the next action?
```

Proof, evidence and detail should support the decision. They should not flood the first view.

---

## AI usage principle

AI may support:

```txt
summarization
prioritization
signal detection
recommendation drafting
uncertainty flagging
next-action suggestion
```

AI must not be treated as:

```txt
evidence
source strength
proof readiness
verified fact
customer-ready validation
```

When AI contributes to a recommendation or interpretation, the generated screen should make the basis of that interpretation visible when trust matters.

---

## Component selection role

Component selection is not mechanical.

GenAI should choose components according to intent:

```txt
Primitive
  = generic UI form or behavior

Usage component
  = recommended composition for a recurring UI use

Candidate pattern
  = reusable practice or interaction structure under evaluation

Reference screen component
  = product-grounded example, not necessarily final public vocabulary
```

The component list is a vocabulary for reasoning, not a rigid menu to assemble blindly.

---

## Pattern caution

Do not call every reusable screen fragment a pattern.

A mature pattern should define:

```txt
problem it solves
when to use it
when not to use it
required content
interaction guidance
accessibility and content guidance
variants
common mistakes
examples
```

Until then, structures such as `InstalledBaseWorkspace`, `TabbedAssetDetail` or `ActionableInsightPanel` should be treated as:

```txt
candidate patterns
composition examples
or product-grounded screen structures
```

They should not become rigid rules for every generated screen.

---

## Contract philosophy

Contracts are guardrails, not the primary design intelligence.

Use contracts to block critical failures such as:

```txt
internal imports
local components/ui clones
direct @radix-ui imports in generated screens
invented evidence, telemetry, sources or proof
generic dashboards when an operational decision workspace is requested
misleading proof or value claims
hidden validation for sensitive decisions
accessibility-critical omissions
```

Do not use contracts to force:

```txt
pixel-perfect reproduction
exact screen anatomy for open-ended prompts
exact number of filters, tabs, columns or cards unless required
one fixed layout for every prompt
one fixed component sequence
```

Strict contracts are appropriate for benchmark or reference-replay mode.

Open guidance is appropriate for human-briefed generation.

---

## Relationship to existing docs

This decision should guide upcoming changes to:

```txt
docs/reboot/roadmap.md
docs/foundation-principles/*
guidelines/Guidelines.md
guidelines/runtime/*
guidelines/source/principles/*
guidelines/source/knowledge/*
contracts/*
```

The roadmap already states that the project moves from controlled generation to guided design generation. This decision makes that operating model explicit.

---

## Acceptance criteria

The reboot guidance is aligned when:

```txt
Guidelines start from intent, decision and trust before component selection.
Knowledge and principles are short, structured and directly usable by GenAI.
Component guidance teaches when and why to use components.
Contracts block critical failures without over-constraining creative generation.
Reference screens are used as examples and benchmarks, not mandatory outputs.
Generated screens may differ from the prototype while still respecting the prompt and DS principles.
```

---

## Practical implication

Before creating detailed guidelines, create or update the principle and knowledge sources that teach GenAI how to reason:

```txt
decision-first-proof-second
facts-before-interpretation
progressive-decision-disclosure
ai-usage-and-validation
component-intent-over-assembly
installed-base-domain-model
```

Then create runtime guidelines and only then light contracts.
