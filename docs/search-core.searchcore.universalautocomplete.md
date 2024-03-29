<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [SearchCore](./search-core.searchcore.md) &gt; [universalAutocomplete](./search-core.searchcore.universalautocomplete.md)

## SearchCore.universalAutocomplete() method

Performs an autocomplete request across all verticals.

<b>Signature:</b>

```typescript
universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [UniversalAutocompleteRequest](./search-core.universalautocompleterequest.md) | Universal autocomplete request options |

<b>Returns:</b>

Promise&lt;[AutocompleteResponse](./search-core.autocompleteresponse.md)<!-- -->&gt;

## Remarks

If rejected, the reason will be an [SearchError](./search-core.searcherror.md)<!-- -->.

