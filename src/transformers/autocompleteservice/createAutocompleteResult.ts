import { AutocompleteResult } from '../../models/autocompleteservice/AutocompleteResponse';
import { Result } from '../../models/searchservice/response/Result';
import { createSimpleFilter } from '../core/createSimpleFilter';
import { HighlightedValueFactory } from '../searchservice/HighlightedValueFactory';

export function createAutocompleteResult(result: any): AutocompleteResult {
  return Object.freeze({
    filter: result.filter && createSimpleFilter(result.filter),
    key: result.key,
    matchedSubstrings: result.matchedSubstrings || [],
    value: result.value,
    relatedItem: result.relatedItem ? createRelatedItem(result.relatedItem) : result.relatedItem
  });
}

function createRelatedItem(relatedItem: { data: any, highlightedFields: any }): Result {
  return {
    rawData: relatedItem.data,
    highlightedValues: HighlightedValueFactory.create(relatedItem.highlightedFields)
  };
}
