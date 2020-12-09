import { AutoCompleteResult } from '../../models/autocompleteservice/AutoCompleteResponse';
import createSimpleFilter from '../core/createSimpleFilter';

export function createAutoCompleteResult(results: any): AutoCompleteResult {
  return Object.freeze({
    filter: results.filter && createSimpleFilter(results.filter),
    key: results.key,
    matchedSubstrings: results.matchedSubstrings || [],
    value: results.value,
    shortValue: results.shortValue,
    relatedItem: results.relatedItem
  });
}
