# Agent runners

## Status

```txt
RUNNER ABSTRACTION / PRE-LLM / PRE-SYMPHONY
```

## Purpose

Agent runners define how the agentic pipeline is executed.

They must not change the output contract.

Whatever runner is used, the run must still produce the same artifacts under `outputs/<run-id>/`.

## Supported runner names

```txt
deterministic
llm
symphony
```

## Current behavior

### deterministic

Enabled.

Runs the local deterministic pipeline.

```bash
pnpm ai:run "Create a screen for a CSM to prioritize risky assets" --runner deterministic
```

### llm

Registered but not enabled.

Future use: call an LLM for one or more agent steps while preserving contracts and validators.

### symphony

Registered but not enabled.

Future use: delegate agent execution to Symphony while preserving the same output directory and validation flow.

## Stable output contract

All runners must produce:

```txt
00-agent-run.json
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
10-validation-result.json
```

## Rule

Runners may change execution.

Runners must not change governance, validation or artifact shape.
