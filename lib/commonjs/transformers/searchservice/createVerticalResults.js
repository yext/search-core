"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVerticalResults = void 0;
const ResultsFactory_1 = require("./ResultsFactory");
const createAppliedQueryFilter_1 = require("./createAppliedQueryFilter");
function createVerticalResults(data) {
    const appliedQueryFilters = data.appliedQueryFilters
        ? data.appliedQueryFilters.map(createAppliedQueryFilter_1.createAppliedQueryFilter)
        : [];
    return {
        appliedQueryFilters: appliedQueryFilters,
        queryDurationMillis: data.queryDurationMillis,
        results: ResultsFactory_1.ResultsFactory.create(data.results, data.source),
        resultsCount: data.resultsCount,
        source: data.source,
        verticalKey: data.verticalConfigId,
    };
}
exports.createVerticalResults = createVerticalResults;
//# sourceMappingURL=createVerticalResults.js.map