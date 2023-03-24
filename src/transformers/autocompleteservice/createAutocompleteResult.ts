import { AutocompleteResult } from '../../models/autocompleteservice/AutocompleteResponse';
import { Source } from '../../models/searchservice/response/Source';
import { createFieldValueFilter } from '../core/createFieldValueFilter';
import { ResultsFactory } from '../searchservice/ResultsFactory';

export function createAutocompleteResult(result: any): AutocompleteResult {
  const relatedItem = result.relatedItem
    ? ResultsFactory.create([result.relatedItem], Source.KnowledgeManager)[0]
    : result.relatedItem;
  return {
    filter: result.filter && createFieldValueFilter(result.filter),
    key: result.key,
    matchedSubstrings: result.matchedSubstrings || [],
    value: result.value,
    relatedItem: relatedItem,
    verticalKeys: result.verticalKeys,
    inputIntents: result.queryIntents ?? []
  };
}
