---
tracker:
  kind: linear
  project_slug: $LINEAR_PROJECT_SLUG

polling:
  interval_ms: 30000

workspace:
  root: $SYMPHONY_WORKSPACE_ROOT

agent:
  max_concurrent_agents: 1
  max_turns: 20

codex:
  command: codex --config shell_environment_policy.inherit=all app-server
  approval_policy: never
  thread_sandbox: workspace-write
---

# Agentic workflow

## Status

```txt
ROOT WORKFLOW / AGENTIC ORCHESTRATION / DESIGN SYSTEM AI LAB / SYMPHONY-READY
```

## Purpose

This file describes the end-to-end orchestration pipeline for agentic screen exploration.

It does not replace agent briefs, contracts or guidelines.

```txt
Guidelines define how to reason and design.
Contracts define what structured artifacts must contain.
Agent briefs define who does what.
This workflow defines the order of work, handoffs and stop conditions.
```

## Symphony execution context

When this file is executed by Symphony, use the issue as the orchestration request.

Issue context may be provided by the orchestrator through template variables such as:

```txt
Identifier: {{ issue.identifier }}
Title: {{ issue.title }}
State: {{ issue.state }}
Labels: {{ issue.labels }}
URL: {{ issue.url }}
```

Issue description:

```txt
{{ issue.description }}
```

Use the issue title and description as the designer prompt unless the issue explicitly points to another prompt artifact.

Do not duplicate issue-tracker state-management logic in this file.

Follow the orchestration pipeline below and produce the expected run artifacts for human review.

## Core rule

The workflow must preserve the original project intent:

```txt
Principles and relevant knowledge are mandatory.
Design-system material inspection is mandatory.
Using exported components and primitives is recommended when they fit the brief and layout.
Local composition is allowed when exported components do not fit.
Fictional package imports are never allowed.
Evidence, telemetry, source data and proof must not be invented.
```

## Source-of-truth references

Agents must read the relevant files instead of redefining their rules.

```txt
agents/README.md
contracts/README.md
guidelines/runtime/genai-reasoning-hierarchy.md
guidelines/reference/instruction-language.md
guidelines/reference/component-selection.md
guidelines/reference/design-system-vocabulary.md
guidelines/reference/component-usage-cards.md
guidelines/reference/package-usage.md
```

Use additional principle, domain, accessibility, AI validation or component usage files when the brief requires them.

---

## Pipeline overview

```txt
Designer prompt
  -> Brief Interpreter
  -> Rule Selector
  -> Information Architect
  -> Component Fit Reviewer
  -> Screen Explorer
  -> Trust Reviewer
  -> DS Evolution Reviewer
  -> Final run summary
```

The workflow is sequential by default.

An agent may request repair from an earlier step when a blocking issue is found.

---

## Run directory

Each orchestration run should produce a dedicated output directory.

```txt
outputs/<run-id>/
  01-screen-brief.json
  02-applicable-rules.json
  03-screen-architecture.json
  04-component-plan.json
  05-screen-proposal.json
  06-screen.tsx
  07-validation-report.json
  08-design-system-candidates.json
  09-final-summary.md
```

Some outputs are optional depending on the task.

For example, `screen.tsx` is required only when code generation is requested.

---

## Step 1 — Brief interpretation

Agent:

```txt
agents/brief-interpreter.md
```

Input:

```txt
Designer prompt
```

Output:

```txt
outputs/<run-id>/01-screen-brief.json
```

Contract:

```txt
contracts/screen-brief.schema.json
```

Gate:

```txt
The prompt intent is preserved.
The user role is identified.
The primary task or decision is identified.
The domain object is identified.
Evidence and trust needs are visible.
No evidence, telemetry, source data or proof is invented.
```

If the gate fails, repair this step before continuing.

---

## Step 2 — Rule selection

Agent:

```txt
agents/rule-selector.md
```

Input:

```txt
outputs/<run-id>/01-screen-brief.json
```

Output:

```txt
outputs/<run-id>/02-applicable-rules.json
```

Contract:

```txt
contracts/applicable-rules.schema.json
```

Gate:

```txt
Applicable MUST rules are selected from existing guidelines.
Applicable SHOULD rules are selected from existing guidelines.
Allowed MAY explorations are selected from existing guidelines.
Hard blockers are explicit.
Source guideline paths are included.
Instruction strength is not redefined or weakened.
```

If the gate fails, repair this step before continuing.

---

## Step 3 — Information architecture

Agent:

```txt
agents/information-architect.md
```

Input:

```txt
outputs/<run-id>/01-screen-brief.json
outputs/<run-id>/02-applicable-rules.json
```

Output:

```txt
outputs/<run-id>/03-screen-architecture.json
```

Gate:

```txt
The screen is organized around the primary decision, task or understanding.
The hierarchy does not start from component selection.
Evidence, uncertainty and proof needs are preserved when trust matters.
Facts, interpretation, recommendation and proof remain conceptually distinct.
The screen is simpler than the problem, not more complex.
```

If the gate fails, repair the brief or architecture before continuing.

---

## Step 4 — Component fit review

Agent:

```txt
agents/component-fit-reviewer.md
```

Input:

```txt
outputs/<run-id>/01-screen-brief.json
outputs/<run-id>/02-applicable-rules.json
outputs/<run-id>/03-screen-architecture.json
```

Output:

```txt
outputs/<run-id>/04-component-plan.json
```

Gate:

```txt
Available DS components, primitives and exports are inspected.
Component choice follows user intent and needed UI behavior.
Exported components and primitives are recommended when they fit.
Local composition is recommended only when exported material does not fit.
No fictional package import is proposed.
Package visual foundation is preserved.
```

If the gate fails, repair component fit before screen generation.

---

## Step 5 — Screen exploration

Agent:

```txt
agents/screen-explorer.md
```

Input:

```txt
outputs/<run-id>/01-screen-brief.json
outputs/<run-id>/02-applicable-rules.json
outputs/<run-id>/03-screen-architecture.json
outputs/<run-id>/04-component-plan.json
```

Output:

```txt
outputs/<run-id>/05-screen-proposal.json
outputs/<run-id>/06-screen.tsx
```

Contracts:

```txt
contracts/screen-proposal.schema.json
contracts/local-component.schema.json
```

Gate:

```txt
The proposal respects all selected MUST rules and hard blockers.
The proposal follows selected SHOULD rules or explains deviations.
MAY explorations are explicit.
Package imports are real.
Local components remain local and are classified.
Generated React code imports the package stylesheet when code is produced.
Mock data is clearly marked as mock data when used.
```

If the gate fails, repair the smallest failing layer first.

---

## Step 6 — Trust review

Agent:

```txt
agents/trust-reviewer.md
```

Input:

```txt
outputs/<run-id>/01-screen-brief.json
outputs/<run-id>/02-applicable-rules.json
outputs/<run-id>/05-screen-proposal.json
outputs/<run-id>/06-screen.tsx
```

Output:

```txt
outputs/<run-id>/07-validation-report.json
```

Contract:

```txt
contracts/validation-report.schema.json
```

Gate:

```txt
No invented evidence, telemetry, source data or proof.
AI interpretation is not presented as proof.
Expected value is not presented as proven value.
Critical decisions are not autonomously approved by AI.
Facts, interpretation, recommendation and proof are distinct enough.
Package imports are real.
Local components are clearly local.
Deviations from relevant SHOULD rules are explained.
```

If the validation status is `fail`, the run must not be finalized.

Repair should target the smallest failing layer.

---

## Step 7 — Design-system evolution review

Agent:

```txt
agents/ds-evolution-reviewer.md
```

Input:

```txt
outputs/<run-id>/05-screen-proposal.json
outputs/<run-id>/07-validation-report.json
```

Output:

```txt
outputs/<run-id>/08-design-system-candidates.json
```

Contract:

```txt
contracts/design-system-candidate.schema.json
```

Gate:

```txt
Local exploratory components are treated as signals, not official package components.
Candidates are grounded in a user need and evidence from the run.
Existing DS material is considered before proposing a candidate.
One-off local choices are not over-generalized.
Hard blockers are not reframed as design-system opportunities.
```

This step may produce an empty candidate list.

An empty candidate list is valid when the screen does not reveal a reusable DS evolution opportunity.

---

## Step 8 — Final run summary

Output:

```txt
outputs/<run-id>/09-final-summary.md
```

The summary should include:

```txt
Prompt summary
Generated artifacts
Validation status
Blocking issues, if any
Repairs made or recommended
Local components created
Design-system candidate signals
Known limitations
```

The summary must not hide failed validation.

---

## Repair loop

When an agent finds a blocking issue, repair the smallest failing layer.

```txt
Brief problem -> repair Step 1
Rule selection problem -> repair Step 2
Information hierarchy problem -> repair Step 3
Component fit problem -> repair Step 4
Screen implementation problem -> repair Step 5
Trust or evidence problem -> repair the earliest layer that caused it
DS evolution overreach -> repair Step 7
```

Do not add more UI to fix a reasoning problem.

Do not use local composition to bypass a hard blocker.

Do not use deviation reporting to justify invented proof, fictional imports or unsafe recommendations.

---

## Stop conditions

Stop the run when:

```txt
The prompt requires invented evidence, telemetry, source data or proof and cannot be reframed safely.
A fictional package import is required to satisfy the proposal.
A critical decision would be shown as autonomously approved by AI.
The proposal cannot preserve the package visual foundation.
The Trust Reviewer returns fail and no safe repair path is available.
```

When stopping, produce a final summary explaining the blocker and the safest next step.

---

## Completion criteria

A run is complete when:

```txt
All required artifacts exist.
Contracts are satisfied.
Trust validation passes or passes with warnings.
Warnings and known limitations are visible.
Local components, if any, are classified.
Design-system candidate signals, if any, are separated from official DS components.
The final summary is clear enough for human review.
```

---

## Human review

Human review is required before:

```txt
promoting a local component into the package
adding a new reusable DS pattern
using generated output in a production-like context
claiming business value, proof or validation
changing normative guidelines
```

The workflow supports exploration.

It does not replace design-system governance.
