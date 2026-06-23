# Local agentic run

## Status

```txt
LOCAL AGENTIC PIPELINE / RUNNER-READY V1
```

## Purpose

`ai-run` executes the local pipeline as named agent steps before any external orchestration.

The first enabled runner is deterministic, but the command now accepts a runner mode so that future LLM or Symphony execution can be added without changing output artifacts.

## Agent steps

```txt
Brief Interpreter
Rule Selector
Information Architect
Component Fit Reviewer
Screen Explorer
Trust Reviewer
DS Evolution Reviewer
```

## Command

```bash
pnpm ai:run "Create a screen for a CSM to prioritize risky assets"
pnpm ai:run "Create a screen for a CSM to prioritize risky assets" --runner deterministic
```

Registered but not yet enabled:

```bash
pnpm ai:run "Create a screen for a CSM to prioritize risky assets" --runner llm
pnpm ai:run "Create a screen for a CSM to prioritize risky assets" --runner symphony
```

## Output

The run creates the standard output artifacts in `outputs/<run-id>/` and adds:

```txt
00-agent-run.json
```

`00-agent-run.json` records the runner, local agent steps and completion trace.

The command also runs deterministic validation after generating the artifacts.
