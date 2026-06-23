# Local agentic run

## Status

```txt
LOCAL AGENTIC PIPELINE / DETERMINISTIC V1
```

## Purpose

`ai-run` executes the local pipeline as named agent steps before any external orchestration.

The first version is deterministic, but the structure prepares future replacement by LLM calls or Symphony workers.

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

Until the npm script is exposed in `package.json`, run:

```bash
node scripts/ai-run.mjs "Create a screen for a CSM to prioritize risky assets"
```

When the script is exposed, the target command is:

```bash
pnpm ai:run "Create a screen for a CSM to prioritize risky assets"
```

## Output

The run creates the standard output artifacts in `outputs/<run-id>/` and adds:

```txt
00-agent-run.json
```

`00-agent-run.json` records the local agent steps and completion trace.

The command also runs deterministic validation after generating the artifacts.
