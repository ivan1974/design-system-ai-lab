# Action domain model

## Definition

An action is an owned next step created to resolve a risk, progress a
recommendation, close a proof gap or prepare a customer interaction.

## Required fields

```txt
title
owner
dueDate
priority
status
```

## Optional fields

```txt
assetContext
customerContext
sourceContext
validationStatus
proofContext
handoffContext
```

## Relationships

```txt
Action may come from Recommendation.
Action may mitigate Risk.
Action may close Proof gap.
Action may relate to Customer, Site, Asset or Component.
Action may require handoff between teams.
```

## Status states

```txt
todo
in_progress
blocked
done
```

## Priority states

```txt
high
medium
low
```

## UI representation

Use:

```txt
ActionCard
ActionList
ActionRow
CreateActionDialog
StickyActionBar
```

## Rules

```txt
Every action must have owner, due date and priority.
Do not generate vague actions.
Do not create actions without context when follow-through depends on asset, site or customer scope.
```

## Make mistakes to avoid

```txt
action without owner
action without due date
action without priority
action disconnected from risk or recommendation
multiple primary actions competing in one area
raw form instead of CreateActionDialog
```
