import { ResultsFactory } from './ResultsFactory';
import { createAppliedQueryFilter } from './createAppliedQueryFilter';
export function createVerticalResults(data) {
    var appliedQueryFilters = data.appliedQueryFilters
        ? data.appliedQueryFilters.map(createAppliedQueryFilter)
        : [];
    return {
        appliedQueryFilters: appliedQueryFilters,
        queryDurationMillis: data.queryDurationMillis,
        results: ResultsFactory.create(data.results, data.source),
        resultsCount: data.resultsCount,
        source: data.source,
        verticalKey: data.verticalConfigId,
    };
}
//# sourceMappingURL=createVerticalResults.js.map