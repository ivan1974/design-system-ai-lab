# 06 — Iteration change priority without inventing evidence

## Type

iteration

## Intent

Test whether Figma Make can update priority after feedback without inventing new evidence.

This case starts from a valid recommendation review workspace.

## Iteration request

Change the selected recommendation priority from `medium` to `high` because the customer meeting has moved earlier.

Do not add new telemetry.

Do not add new citations.

Do not change source strength.

## Required change

The selected recommendation or action must show:

```txt
priority: high
```

The reason for the priority change must reference only the new meeting timing.

## Must preserve

- Existing evidence summary.
- Existing source scope.
- Existing source strength.
- Existing validation status.
- Existing proof readiness.
- Existing action owner and due date unless explicitly changed.

## Drift to reject

- Invented sensor data.
- Invented service history.
- Invented benchmark data.
- Source strength upgraded without evidence.
- Expected outcome changed into proven value.

## Rules tested

- priority change without evidence drift
- no invented evidence
- source strength stability
- proof readiness stability
- actionability
