"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUniversalSearchResponse = void 0;
const createVerticalResults_1 = require("./createVerticalResults");
const createDirectAnswer_1 = require("./createDirectAnswer");
const createSpellCheck_1 = require("./createSpellCheck");
const createLocationBias_1 = require("./createLocationBias");
function createUniversalSearchResponse(data) {
    const verticalResults = Array.isArray(data.response.modules)
        ? data.response.modules.map(createVerticalResults_1.createVerticalResults)
        : [];
    return {
        verticalResults: verticalResults,
        queryId: data.response.queryId,
        directAnswer: data.response.directAnswer && createDirectAnswer_1.createDirectAnswer(data.response.directAnswer),
        searchIntents: data.response.searchIntents,
        spellCheck: data.response.spellCheck && createSpellCheck_1.createSpellCheck(data.response.spellCheck),
        locationBias: data.response.locationBias && createLocationBias_1.createLocationBias(data.response.locationBias),
        uuid: data.meta.uuid
    };
}
exports.createUniversalSearchResponse = createUniversalSearchResponse;
//# sourceMappingURL=createUniversalSearchResponse.js.map