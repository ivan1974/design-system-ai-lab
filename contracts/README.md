# Agentic contracts

## Status

```txt
TECHNICAL CONTRACTS / AGENTIC WORKFLOWS
```

## Purpose

This directory contains machine-readable contracts for agentic workflows.

Contracts define the shape of generated artifacts.

They do not define design-system guidance, instruction vocabulary, component usage rules, visual language or domain principles.

For normative guidance, agents must read the relevant files in `guidelines/`.

## Source-of-truth rule

```txt
Guidelines explain how to reason and design.
Contracts define what structured artifacts must contain.
```

If a contract appears to duplicate or conflict with a guideline, the guideline is the source of truth and the contract should be simplified.

## Initial contracts

```txt
screen-brief.schema.json
applicable-rules.schema.json
screen-proposal.schema.json
local-component.schema.json
validation-report.schema.json
design-system-candidate.schema.json
```

These contracts support traceability for AI-generated screen explorations.
