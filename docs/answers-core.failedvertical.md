<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/answers-core](./answers-core.md) &gt; [FailedVertical](./answers-core.failedvertical.md)

## FailedVertical interface

Error information from when a vertical fails to return results.

<b>Signature:</b>

```typescript
export interface FailedVertical 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [details](./answers-core.failedvertical.details.md) | { responseCode: number; description: string; } | Detailed information about the error. |
|  [errorType](./answers-core.failedvertical.errortype.md) | [ErrorType](./answers-core.errortype.md) | Identifier for the type of error causing the failure. |
|  [queryDurationMillis](./answers-core.failedvertical.querydurationmillis.md) | number | The duration of the query in milliseconds. |
|  [verticalKey](./answers-core.failedvertical.verticalkey.md) | string | The vertical key associated with the failed vertical. |
