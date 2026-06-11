# Installed Base domain model

## Status

v0.7.0 Sprint 1 domain source.

This file defines the controlled domain language for the Installed Base Intelligence screen contract.

Figma Make MUST NOT invent asset families, asset health values, coverage values, DPP values, connectivity labels, status labels or asset states outside this model.

## Purpose

The Installed Base domain model exists to support one strict screen:

```txt
Installed Base Intelligence
```

The model is intentionally narrower than the generic asset, site and component models because it is used to generate a closed product screen.

## Asset hierarchy

Installed Base assets are organized using exactly this hierarchy:

```txt
Building → Electrical Area → Room → Asset
```

No alternative grouping structure is allowed for the Installed Base Intelligence screen.

## Asset families

Allowed values:

- MV Switchgear
- LV Switchgear
- UPS
- Cooling
- Transformer
- Busway
- PDU
- Battery System

No other asset family is allowed.

## Asset states

Allowed values:

- connected-oem
- connected-oem-with-alert
- connected-oem-with-connectivity-issue
- non-connected-oem
- non-connected-oem-with-service-history
- third-party

These six states are mandatory for the reference dataset and the golden example.

## Connectivity display values

Allowed row display values:

- Connected
- Not connected
- Unknown

Rules:

- Reference company connected assets use Connected.
- Reference company non-connected assets use Not connected.
- Third-party assets always use Unknown.

## Connectivity filter values

Allowed filter values:

- Connected
- Non-connected

The All Filters Panel uses filter vocabulary. The row display uses row display vocabulary.

## Health values

Allowed values:

- Critical
- Poor
- Fair
- Good
- Excellent
- Unknown

No other health value is allowed.

## Coverage values

Allowed values:

- Premium Service Plan Advanced
- Premium Service Plan Essential
- Advanced Service Plan
- No Coverage

No other coverage value is allowed.

## DPP row display values

Allowed values:

- DPP Enabled
- No DPP

## DPP filter values

Allowed values:

- With Digital Product Passport
- Without Digital Product Passport

## Status labels

Allowed row display values:

- Live telemetry
- Active alert
- Connectivity issue
- Last service visit
- No record

No other status label is allowed.

## Status filter values

Allowed filter values:

- Live Telemetry
- Active Alert
- Last Service Visit
- No Record

The filter vocabulary intentionally excludes Connectivity issue because the source reference filter list does not include it. The row vocabulary includes Connectivity issue because the status column requires it.

## Status icon mapping

| Status | Icon |
| --- | --- |
| Live telemetry | ✓ |
| Active alert | ⚠ |
| Connectivity issue | ⚠ |
| Last service visit | ◷ |
| No record | — |

The icon color must match the label color.

## Age filter values

Allowed values:

- < 5 years
- 5–9 years
- 10+ years

## Third-party asset rule

Third-party asset values are mandatory and cannot be overridden.

| Field | Mandatory value |
| --- | --- |
| Connectivity | Unknown |
| Coverage | No Coverage |
| Health | Unknown |
| Status | No record |

No exception is allowed.

## Attention required rule

Assets with active alert or connectivity issue must be grouped at the top of the Installed Base List under:

```txt
Attention required
```

## Health / Intelligence separation

Health data is factual.

Allowed Health content:

- current measurements;
- observations;
- telemetry;
- condition facts;
- alert facts;
- freshness;
- source.

Intelligence data is interpretive and decision-oriented.

Allowed Intelligence content:

- diagnosis;
- interpretation;
- benchmarking;
- recommendation;
- expected outcome;
- proof readiness;
- source strength;
- validation;
- action plan;
- owner;
- due date;
- priority.

Health and Intelligence content must not be duplicated.

## Progressive decision disclosure

Installed Base decision content follows three levels:

1. Signal — what requires attention?
2. Decision — what should be done?
3. Evidence — why should the user trust it?

Default generation must reveal decision-critical information first, then expose evidence and explanation progressively.
