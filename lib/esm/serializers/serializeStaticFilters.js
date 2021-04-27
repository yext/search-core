export function serializeStaticFilters(filter) {
    if (isCombinedFilter(filter)) {
        return JSON.stringify(shapeCombinedFilterForApi(filter));
    }
    return JSON.stringify(shapeFilterForApi(filter));
}
function shapeCombinedFilterForApi(combinedFilter) {
    var _a;
    var shapedFilters = [];
    for (var _i = 0, _b = combinedFilter.filters; _i < _b.length; _i++) {
        var filter = _b[_i];
        if (isCombinedFilter(filter)) {
            shapedFilters.push(shapeCombinedFilterForApi(filter));
        }
        else {
            shapedFilters.push(shapeFilterForApi(filter));
        }
    }
    return shapedFilters.length === 1
        ? shapedFilters[0]
        : (_a = {}, _a[combinedFilter.combinator] = shapedFilters, _a);
}
export function shapeFilterForApi(filter) {
    var _a, _b;
    return _a = {},
        _a[filter.fieldId] = (_b = {},
            _b[filter.matcher] = filter.value,
            _b),
        _a;
}
function isCombinedFilter(filter) {
    return (filter.filters !== undefined)
        && (filter.combinator !== undefined);
}
//# sourceMappingURL=serializeStaticFilters.js.map