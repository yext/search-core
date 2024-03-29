<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [AutocompleteResponse](./search-core.autocompleteresponse.md)

## AutocompleteResponse interface

The response of a universal or vertical autocomplete request.

<b>Signature:</b>

```typescript
export interface AutocompleteResponse 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [inputIntents](./search-core.autocompleteresponse.inputintents.md) | [SearchIntent](./search-core.searchintent.md)<!-- -->\[\] | Represents intents from the Search API. |
|  [queryId?](./search-core.autocompleteresponse.queryid.md) | string | <i>(Optional)</i> The ID of the search query. |
|  [results](./search-core.autocompleteresponse.results.md) | [AutocompleteResult](./search-core.autocompleteresult.md)<!-- -->\[\] | An array of [AutocompleteResult](./search-core.autocompleteresult.md)<!-- -->s. |
|  [uuid](./search-core.autocompleteresponse.uuid.md) | string | A unique id which corresponds to the request. |

