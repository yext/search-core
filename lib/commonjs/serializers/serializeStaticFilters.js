"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shapeFilterForApi = exports.serializeStaticFilters = void 0;
function serializeStaticFilters(filter) {
    if (isCombinedFilter(filter)) {
        return JSON.stringify(shapeCombinedFilterForApi(filter));
    }
    return JSON.stringify(shapeFilterForApi(filter));
}
exports.serializeStaticFilters = serializeStaticFilters;
function shapeCombinedFilterForApi(combinedFilter) {
    const shapedFilters = [];
    for (const filter of combinedFilter.filters) {
        if (isCombinedFilter(filter)) {
            shapedFilters.push(shapeCombinedFilterForApi(filter));
        }
        else {
            shapedFilters.push(shapeFilterForApi(filter));
        }
    }
    return shapedFilters.length === 1
        ? shapedFilters[0]
        : { [combinedFilter.combinator]: shapedFilters };
}
function shapeFilterForApi(filter) {
    return {
        [filter.fieldId]: {
            [filter.matcher]: filter.value
        }
    };
}
exports.shapeFilterForApi = shapeFilterForApi;
function isCombinedFilter(filter) {
    return (filter.filters !== undefined)
        && (filter.combinator !== undefined);
}
//# sourceMappingURL=serializeStaticFilters.js.map