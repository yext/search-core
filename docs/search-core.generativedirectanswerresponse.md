<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [GenerativeDirectAnswerResponse](./search-core.generativedirectanswerresponse.md)

## GenerativeDirectAnswerResponse interface

A representation of a generative direct answer response.

**Signature:**

```typescript
export interface GenerativeDirectAnswerResponse 
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

[citations](./search-core.generativedirectanswerresponse.citations.md)


</td><td>


</td><td>

string\[\]


</td><td>

An array of uids from the relevant [Result.rawData](./search-core.result.rawdata.md) that were used to form the directAnswer.


</td></tr>
<tr><td>

[directAnswer](./search-core.generativedirectanswerresponse.directanswer.md)


</td><td>


</td><td>

string


</td><td>

The text of the final generated response.


</td></tr>
<tr><td>

[resultStatus](./search-core.generativedirectanswerresponse.resultstatus.md)


</td><td>


</td><td>

string


</td><td>

A string representing whether there was a result found within the given invocation.


</td></tr>
</tbody></table>