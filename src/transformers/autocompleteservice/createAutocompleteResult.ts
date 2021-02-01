import { AutocompleteResult } from '../../models/autocompleteservice/AutocompleteResponse';
import { createSimpleFilter } from '../core/createSimpleFilter';

export function createAutocompleteResult(result: any): AutocompleteResult {
  return Object.freeze({
    filter: result.filter && createSimpleFilter(result.filter),
    key: result.key,
    matchedSubstrings: result.matchedSubstrings || [],
    value: result.value,
    relatedItem: result.relatedItem
  });
}
