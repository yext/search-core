<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [UniversalSearchRequest](./search-core.universalsearchrequest.md)

## UniversalSearchRequest interface

Options which can be specified for a universal search.

**Signature:**

```typescript
export interface UniversalSearchRequest extends SearchRequest 
```
**Extends:** [SearchRequest](./search-core.searchrequest.md)

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

[context?](./search-core.universalsearchrequest.context.md)


</td><td>


</td><td>

[Context](./search-core.context.md)


</td><td>

_(Optional)_ Used to trigger Search [Query Rules](https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/)<!-- -->.


</td></tr>
<tr><td>

[limit?](./search-core.universalsearchrequest.limit.md)


</td><td>


</td><td>

[UniversalLimit](./search-core.universallimit.md)


</td><td>

_(Optional)_ The maximum limit of results per vertical. Each limit can be set from 1-50, inclusive.


</td></tr>
<tr><td>

[location?](./search-core.universalsearchrequest.location.md)


</td><td>


</td><td>

[LatLong](./search-core.latlong.md)


</td><td>

_(Optional)_ The latitude and longitude of the user making the request. Used to bias the results.


</td></tr>
<tr><td>

[query](./search-core.universalsearchrequest.query.md)


</td><td>


</td><td>

string


</td><td>

The search query.


</td></tr>
<tr><td>

[querySource?](./search-core.universalsearchrequest.querysource.md)


</td><td>


</td><td>

[QuerySource](./search-core.querysource.md) \| string


</td><td>

_(Optional)_ The source of the search request.


</td></tr>
<tr><td>

[queryTrigger?](./search-core.universalsearchrequest.querytrigger.md)


</td><td>


</td><td>

[QueryTrigger](./search-core.querytrigger.md)


</td><td>

_(Optional)_ Describes the ways a search can be executed besides user input.


</td></tr>
<tr><td>

[referrerPageUrl?](./search-core.universalsearchrequest.referrerpageurl.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ The URl of the page which referred the user to the current page.


</td></tr>
<tr><td>

[restrictVerticals?](./search-core.universalsearchrequest.restrictverticals.md)


</td><td>


</td><td>

string\[\]


</td><td>

_(Optional)_ If included, the response will only include these verticals.


</td></tr>
<tr><td>

[sessionId?](./search-core.universalsearchrequest.sessionid.md)


</td><td>


</td><td>

string


</td><td>

_(Optional)_ Used to track session state when cookies are blocked.


</td></tr>
<tr><td>

[sessionTrackingEnabled?](./search-core.universalsearchrequest.sessiontrackingenabled.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Enables session tracking.


</td></tr>
<tr><td>

[skipSpellCheck?](./search-core.universalsearchrequest.skipspellcheck.md)


</td><td>


</td><td>

boolean


</td><td>

_(Optional)_ Disables spellcheck if true.


</td></tr>
</tbody></table>
