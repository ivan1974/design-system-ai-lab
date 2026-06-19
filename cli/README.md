# Local AI CLI

## Status

```txt
LOCAL CLI / PIPELINE SCAFFOLD / PRE-ORCHESTRATION
```

## Purpose

The local CLI provides a lightweight way to test the agentic pipeline before connecting Figma Make, Symphony or another orchestrator.

It creates run artifacts in `outputs/<run-id>/` and reuses the deterministic validator.

This is not a full LLM-powered generation system.

It is a local scaffold for testing contracts, outputs and validation.

## Commands

```bash
pnpm ai:brief "Create a screen for a CSM to prioritize risky assets"
pnpm ai:explore "Create a screen for a CSM to prioritize risky assets"
pnpm ai:validate outputs/<run-id>
pnpm ai:report outputs/<run-id>
```

## Command behavior

### ai:brief

Creates only:

```txt
01-screen-brief.json
```

Use this to test prompt interpretation as a structured artifact.

### ai:explore

Creates a complete scaffolded run:

```txt
01-screen-brief.json
02-applicable-rules.json
03-screen-architecture.json
04-component-plan.json
05-screen-proposal.json
05-screen-proposal.md
06-screen.tsx
07-trust-validation-report.json
08-design-system-candidates.json
08-design-system-candidates.md
09-final-summary.md
```

### ai:validate

Runs the deterministic validator on an existing run directory.

### ai:report

Prints the final run summary.

## Intended use

Use the CLI to stabilize:

```txt
contracts
output structure
validator behavior
run traceability
```

Do not connect a heavier orchestrator before these pieces are stable.

## Current limitation

The CLI generates deterministic scaffolds.

It does not replace human review, Figma Make, Symphony or an LLM-powered Screen Explorer.
