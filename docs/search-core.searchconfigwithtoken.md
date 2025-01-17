<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [SearchConfigWithToken](./search-core.searchconfigwithtoken.md)

## SearchConfigWithToken interface

Configuration options for [SearchCore](./search-core.searchcore.md)<!-- -->, which includes the options from [BaseSearchConfig](./search-core.basesearchconfig.md)<!-- -->, but requires token.

**Signature:**

```typescript
export interface SearchConfigWithToken extends BaseSearchConfig 
```
**Extends:** [BaseSearchConfig](./search-core.basesearchconfig.md)

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

[apiKey?](./search-core.searchconfigwithtoken.apikey.md)


</td><td>


</td><td>

never


</td><td>

_(Optional)_ apiKey should NOT be provided along with token.


</td></tr>
<tr><td>

[token](./search-core.searchconfigwithtoken.token.md)


</td><td>


</td><td>

string


</td><td>

The authentication token of the search experience which will be passed in the Auth header as a Bearer token.


</td></tr>
</tbody></table>
