import { AutocompleteResult } from '../../models/autocompleteservice/AutocompleteResponse';
import { Source } from '../../models/searchservice/response/Source';
import { createSimpleFilter } from '../core/createSimpleFilter';
import { ResultsFactory } from '../searchservice/ResultsFactory';

export function createAutocompleteResult(result: any): AutocompleteResult {
  const relatedItem = result.relatedItem
    ? ResultsFactory.create([result.relatedItem], Source.KnowledgeManager)[0]
    : result.relatedItem;
  return Object.freeze({
    filter: result.filter && createSimpleFilter(result.filter),
    key: result.key,
    matchedSubstrings: result.matchedSubstrings || [],
    value: result.value,
    relatedItem: relatedItem
  });
}
