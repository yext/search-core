<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [AutocompleteResponse](./search-core.autocompleteresponse.md)

## AutocompleteResponse interface

The response of a universal or vertical autocomplete request.

**Signature:**

```typescript
export interface AutocompleteResponse 
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[inputIntents](./search-core.autocompleteresponse.inputintents.md)


</td><td>


</td><td>

[SearchIntent](./search-core.searchintent.md)<!-- -->\[\]


</td><td>

Represents intents from the Search API.


</td></tr>
<tr><td>

[queryId?](./search-core.autocompleteresponse.queryid.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ The ID of the search query.


</td></tr>
<tr><td>

[results](./search-core.autocompleteresponse.results.md)


</td><td>


</td><td>

[AutocompleteResult](./search-core.autocompleteresult.md)<!-- -->\[\]


</td><td>

An array of [AutocompleteResult](./search-core.autocompleteresult.md)<!-- -->s.


</td></tr>
<tr><td>

[uuid](./search-core.autocompleteresponse.uuid.md)


</td><td>


</td><td>

string


</td><td>

A unique id which corresponds to the request.


</td></tr>
</tbody></table>
