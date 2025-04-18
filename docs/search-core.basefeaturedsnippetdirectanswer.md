<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [BaseFeaturedSnippetDirectAnswer](./search-core.basefeaturedsnippetdirectanswer.md)

## BaseFeaturedSnippetDirectAnswer interface

A direct answer which was found within a document.

**Signature:**

```typescript
export interface BaseFeaturedSnippetDirectAnswer<T = unknown> extends DirectAnswer<T> 
```
**Extends:** [DirectAnswer](./search-core.directanswer.md)<!-- -->&lt;T&gt;

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

[fieldType](./search-core.basefeaturedsnippetdirectanswer.fieldtype.md)


</td><td>


</td><td>

[EnumOrLiteral](./search-core.enumorliteral.md)<!-- -->&lt;[BuiltInFieldType.MultiLineText](./search-core.builtinfieldtype.md) \| [BuiltInFieldType.RichText](./search-core.builtinfieldtype.md) \| [BuiltInFieldType.RichText\_v2](./search-core.builtinfieldtype.md) \| [BuiltInFieldType.Html](./search-core.builtinfieldtype.md) \| [BuiltInFieldType.Markdown](./search-core.builtinfieldtype.md)<!-- -->&gt;


</td><td>

The field type of the direct answer.


</td></tr>
<tr><td>

[snippet](./search-core.basefeaturedsnippetdirectanswer.snippet.md)


</td><td>


</td><td>

[Snippet](./search-core.snippet.md)


</td><td>

The snippet where the direct answer was found.


</td></tr>
<tr><td>

[type](./search-core.basefeaturedsnippetdirectanswer.type.md)


</td><td>


</td><td>

[DirectAnswerType.FeaturedSnippet](./search-core.directanswertype.md)


</td><td>

Indicates that the DirectAnswer is a [FeaturedSnippetDirectAnswer](./search-core.featuredsnippetdirectanswer.md)<!-- -->.


</td></tr>
</tbody></table>
