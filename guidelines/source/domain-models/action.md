# Action domain model

## Definition

An action is an owned next step created to resolve a risk, progress a recommendation, close a proof gap or prepare a customer interaction.

An action is not valid for GenAI output unless ownership, due date and priority are visible.

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

## Controlled values

### Priority

Canonical values:

```txt
low
medium
high
critical
```

Do not invent values such as:

```txt
urgent
major
minor
normal
p1
p2
```

### Status

Canonical values:

```txt
todo
in-progress
blocked
done
```

Deprecated alias accepted by TypeScript for compatibility:

```txt
in_progress
```

Use `in-progress` in new documentation and generated screens.

## Relationships

```txt
Action may come from Recommendation.
Action may mitigate Risk.
Action may close Proof gap.
Action may relate to Customer, Site, Asset or Component.
Action may require handoff between teams.
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

Prefer `ActionRow` for dense repeated action lists.

Use `ActionCard` for one emphasized action.

## GenAI generation rules

```txt
Every action must have owner, due date and priority.
Do not generate vague actions.
Do not invent owner, due date or priority.
Do not create actions without context when follow-through depends on asset, site or customer scope.
Do not use action status as value proof.
```

## Make mistakes to avoid

```txt
action without owner
action without due date
action without priority
unsupported critical priority
action disconnected from risk or recommendation
done status used as proven customer value
multiple primary actions competing in one area
raw form instead of CreateActionDialog
```

## Related contracts

```txt
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```
