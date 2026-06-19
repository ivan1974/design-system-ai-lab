# Run outputs

## Status

```txt
RUN OUTPUTS / AGENTIC PIPELINE / TRACEABILITY
```

## Purpose

This directory defines the expected structure for agentic screen exploration runs.

Each run should create a dedicated directory:

```txt
outputs/<run-id>/
```

The run directory contains the artifacts produced by each agent in the orchestration pipeline.

## Source-of-truth rule

```txt
WORKFLOW.md defines the pipeline.
Agents define responsibilities.
Contracts define structured artifact shapes.
Guidelines define reasoning and design rules.
Outputs record one run.
```

Do not use output templates as normative guidance.

## Standard run structure

```txt
outputs/<run-id>/
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

## Machine-readable and human-readable artifacts

Structured JSON files are used for validation and orchestration.

Markdown files are used for human review.

When both exist, the JSON artifact is the machine-readable source and the Markdown artifact is a readable summary.

## Template

Use `outputs/_template/` as a starting point for a new run.

Replace placeholder values before using the run output as evidence of work.
