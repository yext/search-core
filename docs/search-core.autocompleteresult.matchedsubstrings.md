<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@yext/search-core](./search-core.md) &gt; [AutocompleteResult](./search-core.autocompleteresult.md) &gt; [matchedSubstrings](./search-core.autocompleteresult.matchedsubstrings.md)

## AutocompleteResult.matchedSubstrings property

An array of substrings which overlap with the autocomplete input.

**Signature:**

```typescript
matchedSubstrings?: {
        length: number;
        offset: number;
    }[];
```

## Remarks

Offset indicates the index of the match, and the length indicates the number of characters of the match.

