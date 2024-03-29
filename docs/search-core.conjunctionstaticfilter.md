<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [ConjunctionStaticFilter](./search-core.conjunctionstaticfilter.md)

## ConjunctionStaticFilter interface

A static filter composed by combining other static filters with the logical AND operator.

<b>Signature:</b>

```typescript
export interface ConjunctionStaticFilter 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [combinator](./search-core.conjunctionstaticfilter.combinator.md) | [FilterCombinator.AND](./search-core.filtercombinator.md) | Indicates that filters should be combined with a logical AND. |
|  [filters](./search-core.conjunctionstaticfilter.filters.md) | [StaticFilter](./search-core.staticfilter.md)<!-- -->\[\] | The filters to combine together. |
|  [kind](./search-core.conjunctionstaticfilter.kind.md) | 'conjunction' | The kind of static filter. |

