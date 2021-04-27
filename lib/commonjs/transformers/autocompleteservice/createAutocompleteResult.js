"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAutocompleteResult = void 0;
const Source_1 = require("../../models/searchservice/response/Source");
const createFilter_1 = require("../core/createFilter");
const ResultsFactory_1 = require("../searchservice/ResultsFactory");
function createAutocompleteResult(result) {
    const relatedItem = result.relatedItem
        ? ResultsFactory_1.ResultsFactory.create([result.relatedItem], Source_1.Source.KnowledgeManager)[0]
        : result.relatedItem;
    return {
        filter: result.filter && createFilter_1.createFilter(result.filter),
        key: result.key,
        matchedSubstrings: result.matchedSubstrings || [],
        value: result.value,
        relatedItem: relatedItem
    };
}
exports.createAutocompleteResult = createAutocompleteResult;
//# sourceMappingURL=createAutocompleteResult.js.map