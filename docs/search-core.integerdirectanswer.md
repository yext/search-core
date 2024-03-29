<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [IntegerDirectAnswer](./search-core.integerdirectanswer.md)

## IntegerDirectAnswer interface

A direct answer for an integer field.

<b>Signature:</b>

```typescript
export interface IntegerDirectAnswer extends BaseFieldValueDirectAnswer<number> 
```
<b>Extends:</b> [BaseFieldValueDirectAnswer](./search-core.basefieldvaluedirectanswer.md)<!-- -->&lt;number&gt;

## Remarks

`IntegerDirectAnswer`<!-- -->s are only used for built in number fields. Custom number fields use [DecimalDirectAnswer](./search-core.decimaldirectanswer.md) instead.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [fieldType](./search-core.integerdirectanswer.fieldtype.md) | [EnumOrLiteral](./search-core.enumorliteral.md)<!-- -->&lt;[BuiltInFieldType.Integer](./search-core.builtinfieldtype.md)<!-- -->&gt; |  |

