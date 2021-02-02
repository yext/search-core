import { AutoCompleteResult } from '../../models/autocompleteservice/AutoCompleteResponse';
import { createSimpleFilter } from '../core/createSimpleFilter';

export function createAutoCompleteResult(result: any): AutoCompleteResult {
  return {
    filter: result.filter && createSimpleFilter(result.filter),
    key: result.key,
    matchedSubstrings: result.matchedSubstrings || [],
    value: result.value,
    relatedItem: result.relatedItem
  };
}
