# Repair Prompt — Actions Without Ownership

## Use when

Use this repair prompt when actions look actionable but lack accountability.

Typical symptoms:

- action without owner
- action without due date
- action without priority
- vague action labels such as `Follow up`, `Review later` or `Check issue`
- actions disconnected from risks, proof gaps or recommendations

---

## Repair instruction

```txt
Revise the screen so every action is owned and concrete.

Use ActionRow or ActionCard for assigned actions.
Every ActionRow or ActionCard must include owner, dueDate and priority.
Use priority values: low, medium, high or critical.
Action titles must describe concrete work.
Connect each action to a risk, proof gap, recommendation or user decision.
Do not use vague notes as actions.
Do not hide actions in generic cards.
```

---

## Acceptance checks

- Every action has owner.
- Every action has due date.
- Every action has priority.
- Action titles describe concrete work.
- Actions support the main decision.
