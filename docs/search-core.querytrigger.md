<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [QueryTrigger](./search-core.querytrigger.md)

## QueryTrigger enum

Describes the ways a search can be executed besides user input.

<b>Signature:</b>

```typescript
export declare enum QueryTrigger 
```

## Enumeration Members

|  Member | Value | Description |
|  --- | --- | --- |
|  Initialize | <code>&quot;initialize&quot;</code> | Indicates that the query was triggered by a default initial search. |
|  Suggest | <code>&quot;suggest&quot;</code> | Indicates that the query was suggested by a [SpellCheck](./search-core.spellcheck.md) response. |

## Remarks

Used for search analytics. If a user supplied the search query, do not include a QueryTrigger.

## Example

A Search site may be configured to perform a search for 'What services do you offer?' when the page loads. Because that query is a default query rather than a user-supplied query, the Initialize QueryTrigger should be included in the request.

