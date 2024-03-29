<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [SearchCore](./search-core.searchcore.md) &gt; [filterSearch](./search-core.searchcore.filtersearch.md)

## SearchCore.filterSearch() method

Performs a filtersearch request against specified fields within a single vertical.

<b>Signature:</b>

```typescript
filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [FilterSearchRequest](./search-core.filtersearchrequest.md) | filtersearch request options |

<b>Returns:</b>

Promise&lt;[FilterSearchResponse](./search-core.filtersearchresponse.md)<!-- -->&gt;

## Remarks

This differs from the vertical autocomplete because the vertical autocomplete operates on all entity fields whereas filtersearch operates only on specified fields. If rejected, the reason will be an [SearchError](./search-core.searcherror.md)<!-- -->.

## Example

A site has a 'products' vertical and would like a way to allow the user to narrow down the results by the product name. The site can add a second search bar powered by filtersearch which will include only product names as search suggestions.

