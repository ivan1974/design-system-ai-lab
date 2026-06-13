# Knowledge and principles migration audit

## Status

```txt
REBOOT INPUT / KNOWLEDGE + PRINCIPLES / GENAI READABILITY
```

This audit defines how to migrate legacy knowledge and principles into the rebooted GenAI-ready design system.

The goal is not to make contracts stricter. The goal is to make GenAI a better design partner: able to preserve intent, choose components wisely, and generate a useful operational screen from a human brief.

---

## Core position

Contracts should be guardrails, not the main design intelligence.

The primary source of design intelligence should be:

```txt
principles
+ domain knowledge
+ component usage guidance
+ examples
+ repair rules
```

Contracts should only block critical failures:

```txt
unsafe import
missing stylesheet
invented evidence
generic dashboard when decision workspace is requested
local design system recreation
hidden validation for sensitive decision
```

Contracts should not force GenAI to reproduce one exact screen unless the task is an explicit benchmark or reference-replay task.

---

## What to preserve from legacy principles

The legacy runtime files contain strong principles that should become clearer source-level guidance.

### 1. Decision-first, proof-second

Reboot principle:

```txt
Start from the decision the user needs to make.
Then reveal the proof needed to trust that decision.
```

A generated screen should answer:

```txt
What requires attention?
What decision is needed?
What evidence supports the decision?
What action follows?
Who owns the action?
```

This principle should guide structure before component choice.

---

### 2. Facts before interpretation

Reboot principle:

```txt
Observed facts come before AI interpretation.
```

Preferred hierarchy:

```txt
observed facts
→ interpreted signal
→ evidence-aware recommendation
→ owned action
→ human validation when needed
```

This is not a visual style rule. It is a trust rule.

---

### 3. Progressive decision disclosure

Reboot principle:

```txt
Signal → Decision → Evidence
```

The first screen level should not expose all information equally.

It should show:

```txt
1 primary decision
2 to 4 key signals
1 clear action area when action is available
```

Evidence remains available, but secondary.

---

### 4. AI usage must be visible but not overclaiming

Reboot principle:

```txt
AI may support interpretation, prioritization and recommendation.
AI must not become the evidence itself.
```

Do not use:

```txt
AI confidence as source strength
AI wording as proof
AI interpretation as verified fact
expected outcome as proven value
```

When AI contributes to the screen, show what it is doing:

```txt
summarizing
prioritizing
recommending
flagging uncertainty
requesting validation
```

---

### 5. Human validation remains visible for sensitive decisions

Reboot principle:

```txt
Sensitive or customer-facing decisions need visible validation status.
```

Do not hide:

```txt
source scope
freshness
validation status
proof readiness
human validation requirement
```

---

## What to preserve from legacy knowledge

Legacy knowledge should be rewritten as reusable domain knowledge, not screen instructions.

For Installed Base, knowledge should explain:

```txt
Installed Base
Site
Building
Electrical Area
Room
Asset
Coverage
Connectivity
Health
Status
Digital Product Passport
Recommendation
Evidence
Action
```

It should help GenAI understand the meaning of the screen, not simply map labels to components.

---

## Recommended source structure

Create source files that GenAI can use as conceptual grounding:

```txt
guidelines/source/principles/
  decision-first-proof-second.md
  facts-before-interpretation.md
  progressive-decision-disclosure.md
  ai-usage-and-validation.md
  component-intent-over-assembly.md

guidelines/source/knowledge/
  installed-base-domain-model.md
  installed-base-signals.md
  service-recommendations-and-actions.md
  evidence-and-proof-readiness.md
```

These files should be short, explicit and reusable.

Each file should answer:

```txt
What is the principle or knowledge area?
Why it matters for generation.
How GenAI should apply it.
What mistakes to avoid.
Which components or primitives are relevant.
```

---

## Recommended runtime structure

Runtime files should translate principles into generation steps:

```txt
guidelines/runtime/generation-flow.md
  how GenAI reasons before composing

guidelines/runtime/component-selection.md
  how GenAI chooses primitive vs component vs candidate pattern

guidelines/runtime/trust-action-rules.md
  how GenAI handles evidence, proof, validation and action

guidelines/runtime/visual-rules.md
  how GenAI keeps the screen sober, operational and trust-aware
```

Runtime files should not be long knowledge essays.

They should be operational checklists.

---

## Contract philosophy for reboot

Use contracts to prevent critical failure, not to overfit the generated screen.

### Good contract scope

```txt
No direct @radix-ui imports in generated screens.
No src/app/components imports in generated screens.
No invented evidence, telemetry or proof.
No generic dashboard when user asks for an operational decision workspace.
No unsupported local design system.
Sensitive recommendations must expose validation status.
```

### Avoid over-constraining contracts

Avoid contracts that force:

```txt
exact screen layout for every prompt
exact component sequence in open-ended generation
exact labels unless the screen is a benchmark contract
exact number of tabs, filters or columns unless the user or contract requires it
pixel-perfect reproduction of the reference prototype
```

### Suggested split

```txt
hard blockers
  = critical failures to reject or repair

soft guidelines
  = preferred generation behavior

reference contracts
  = strict only for benchmark/reference reproduction
```

---

## Installed Base guidance should be open by default

For the reboot demo, Installed Base should not only exist as a closed screen contract.

It should have open guidance:

```txt
When a user asks for an Installed Base screen, generate an operational decision workspace that helps inspect assets, detect attention areas, understand evidence and decide next action.
```

A generated screen may differ from the reference prototype if it still respects:

```txt
decision-first
facts before interpretation
signal → decision → evidence
trust visibility
action ownership
sober operational UI
appropriate component selection
```

A strict contract should be used only when the prompt asks to reproduce the reference screen or when running a benchmark.

---

## GenAI usability rules for all principle/knowledge files

Each principle or knowledge file should be written for direct model use.

Use:

```txt
short sections
explicit do / do not rules
small decision tables
component selection hints
repair examples
one concept per file
```

Avoid:

```txt
long background essays
ambiguous vocabulary
screen-specific implementation hidden inside principles
component lists without intent
rules that conflict with open-ended generation
```

---

## Migration recommendation

Do not start with contracts.

Start with readable source principles and domain knowledge:

```txt
1. decision-first-proof-second.md
2. facts-before-interpretation.md
3. progressive-decision-disclosure.md
4. ai-usage-and-validation.md
5. installed-base-domain-model.md
```

Then create runtime guidelines:

```txt
1. generation-flow.md
2. component-selection.md
3. trust-action-rules.md
4. visual-rules.md
```

Then create light contracts:

```txt
generation-blockers.contract.md
component-imports.contract.md
installed-base-reference.contract.md only for strict benchmark mode
```

This keeps GenAI as a guardian of intent and design quality, not a rigid screen copier.
