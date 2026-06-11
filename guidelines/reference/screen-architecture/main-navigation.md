# MainNavigation

## Status

v0.7.0 Installed Base Intelligence screen layer.

## Purpose

Use `MainNavigation` as the global top navigation for the Installed Base Intelligence screen.

It is screen-contract led and must contain exactly the global product/navigation elements allowed by the screen contract.

## Required elements

```txt
Reference Company Logo
Product Name
Global Search
Help
User Menu
```

## Required default text

```txt
Product Name: Installed Base Intelligence
Global Search placeholder: Search assets, sites, documents
User Menu: User Avatar User Name
```

## Do not include

```txt
Site information
Customer information
Campus information
Portfolio information
Asset information
Filters
View selectors
KPIs
Marketing navigation
Public website navigation
```

## Composition

`MainNavigation` reuses DS primitives:

```txt
Input
Button
```

Do not create local navigation primitives or `components/ui` files.

## Generation rule

Keep `MainNavigation` global. Do not put screen-specific context, filters, KPIs or asset details in it.
