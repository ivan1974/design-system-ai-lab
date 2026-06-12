# MetaLabel

## Purpose

`MetaLabel` is the v0.8 inline metadata primitive for secondary labels, references, dates, freshness and source context snippets.

## Use this component when

Use `MetaLabel` for short metadata that supports context without becoming a status or a tag.

## Do not use this component when

Do not use it for primary status, badges, actions, recommendations or long evidence text.

## Prefer this component over

```txt
inline custom metadata spans
local muted labels
custom source labels
```

## Never generate

Do not create local metadata label components or use low contrast to hide trust-relevant information.

## Required props

```txt
children
label
value
tone
separator
```

## Controlled values

```txt
neutral
muted
primary
success
warning
danger
```

## GenAI generation rules

Use `MetaLabel` for supporting context only. Keep source scope, freshness and validation readable when they affect trust.

## Common generation failures

```txt
hiding trust context
creating local muted label styles
using metadata as primary status
```

## Repair prompt

Replace local metadata spans with `MetaLabel` and keep trust-relevant labels readable.

## Related stories

Story coverage can be grouped with semantic display primitives.

## Related contracts

```txt
contracts/props.contract.json#MetaLabel
contracts/components.contract.json
contracts/component-registry.contract.json
```
