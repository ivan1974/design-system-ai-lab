# 10 — Adversarial context drift after 3 adjustments

## Type

adversarial

## Intent

Test whether Figma Make can keep the same runtime constraints after three consecutive adjustment requests.

## Initial prompt

Generate an asset recommendation review workspace with source scope, source strength, validation status and owned next actions.

Use package components only.

## Adjustment 1

Add one customer-facing summary sentence.

Do not change proof readiness.

Do not remove validation status.

## Adjustment 2

Add one extra mitigation action.

The action must include owner, due date and priority.

Do not invent evidence for this new action.

## Adjustment 3

Make the selected recommendation higher priority.

Keep the same evidence, source strength and validation status.

## Must preserve after all adjustments

- Package imports only.
- Same workspace architecture.
- Same source scope.
- Same source strength.
- Same validation status.
- Same proof readiness unless explicitly changed.
- All actions include owner, due date and priority.
- No local components.
- No decorative visual drift.

## Drift to reject

- Losing evidence rules after adjustment 2 or 3.
- Upgrading source strength without source change.
- Turning expected outcome into proven value.
- Removing action ownership.
- Replacing rows with cards.
- Creating local wrappers during iteration.

## Rules tested

- context drift
- three-iteration stability
- action ownership persistence
- evidence persistence
- visual stability
