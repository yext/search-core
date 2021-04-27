"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVerticalSearchResponse = void 0;
const createFacets_1 = require("./createFacets");
const createLocationBias_1 = require("./createLocationBias");
const createSpellCheck_1 = require("./createSpellCheck");
const createVerticalResults_1 = require("./createVerticalResults");
function createVerticalSearchResponse(data) {
    var _a;
    if (!data.response) {
        throw new Error('The search data does not contain a response property');
    }
    return {
        verticalResults: createVerticalResults_1.createVerticalResults(data.response),
        queryId: data.response.queryId,
        searchIntents: data.response.searchIntents,
        facets: createFacets_1.createFacets(data.response.facets),
        spellCheck: data.response.spellCheck && createSpellCheck_1.createSpellCheck(data.response.spellCheck),
        locationBias: data.response.locationBias && createLocationBias_1.createLocationBias(data.response.locationBias),
        allResultsForVertical: data.response.allResultsForVertical
            && createVerticalSearchResponse({ response: data.response.allResultsForVertical }),
        alternativeVerticals: data.response.alternativeVerticals && data.response.alternativeVerticals.modules
            && data.response.alternativeVerticals.modules.map(createVerticalResults_1.createVerticalResults),
        uuid: (_a = data.meta) === null || _a === void 0 ? void 0 : _a.uuid
    };
}
exports.createVerticalSearchResponse = createVerticalSearchResponse;
//# sourceMappingURL=createVerticalSearchResponse.js.map