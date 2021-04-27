import { createFacets } from './createFacets';
import { createLocationBias } from './createLocationBias';
import { createSpellCheck } from './createSpellCheck';
import { createVerticalResults } from './createVerticalResults';
export function createVerticalSearchResponse(data) {
    var _a;
    if (!data.response) {
        throw new Error('The search data does not contain a response property');
    }
    return {
        verticalResults: createVerticalResults(data.response),
        queryId: data.response.queryId,
        searchIntents: data.response.searchIntents,
        facets: createFacets(data.response.facets),
        spellCheck: data.response.spellCheck && createSpellCheck(data.response.spellCheck),
        locationBias: data.response.locationBias && createLocationBias(data.response.locationBias),
        allResultsForVertical: data.response.allResultsForVertical
            && createVerticalSearchResponse({ response: data.response.allResultsForVertical }),
        alternativeVerticals: data.response.alternativeVerticals && data.response.alternativeVerticals.modules
            && data.response.alternativeVerticals.modules.map(createVerticalResults),
        uuid: (_a = data.meta) === null || _a === void 0 ? void 0 : _a.uuid
    };
}
//# sourceMappingURL=createVerticalSearchResponse.js.map