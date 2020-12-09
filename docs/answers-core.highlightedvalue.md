<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/answers-core](./answers-core.md) &gt; [HighlightedValue](./answers-core.highlightedvalue.md)

## HighlightedValue interface

Represents field values or substrings of field values that the answers API emphasized

For example, if a user searches for 'pet' and a description field in the results contains the value 'A pet store', the API will likely match the word 'pet'

<b>Signature:</b>

```typescript
export default interface HighlightedValue 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [fieldName](./answers-core.highlightedvalue.fieldname.md) | string |  |
|  [matchedSubstrings](./answers-core.highlightedvalue.matchedsubstrings.md) | { length: number; offset: number; }\[\] |  |
|  [path](./answers-core.highlightedvalue.path.md) | string\[\] |  |
|  [value](./answers-core.highlightedvalue.value.md) | string |  |
