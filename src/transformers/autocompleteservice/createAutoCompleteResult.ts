import { AutoCompleteResult } from '../../models/autocompleteservice/AutoCompleteResponse';
import createSimpleFilter from '../core/createSimpleFilter';

export function createAutoCompleteResult(results: any): AutoCompleteResult {
  return Object.freeze({
    filter: createSimpleFilter(results.filter),
    key: results.key || '',
    matchedSubstrings: results.matchedSubstrings || [],
    inputValue: results.value || '',
    shortValue: results.shortValue || results.value || ''
  });
}