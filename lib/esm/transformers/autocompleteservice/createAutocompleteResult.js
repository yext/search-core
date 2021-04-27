import { Source } from '../../models/searchservice/response/Source';
import { createFilter } from '../core/createFilter';
import { ResultsFactory } from '../searchservice/ResultsFactory';
export function createAutocompleteResult(result) {
    var relatedItem = result.relatedItem
        ? ResultsFactory.create([result.relatedItem], Source.KnowledgeManager)[0]
        : result.relatedItem;
    return {
        filter: result.filter && createFilter(result.filter),
        key: result.key,
        matchedSubstrings: result.matchedSubstrings || [],
        value: result.value,
        relatedItem: relatedItem
    };
}
//# sourceMappingURL=createAutocompleteResult.js.map