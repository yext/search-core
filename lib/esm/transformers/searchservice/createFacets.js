import { createFilter } from '../core/createFilter';
export function createFacets(facets) {
    if (!facets) {
        return [];
    }
    return facets.map(function (facet) { return ({
        fieldId: facet.fieldId,
        displayName: facet.displayName,
        options: createFacetOptions(facet.options)
    }); });
}
function createFacetOptions(options) {
    return options.map(function (option) {
        var filter = createFilter(option.filter);
        return {
            displayName: option.displayName,
            count: option.count,
            selected: option.selected,
            matcher: filter.matcher,
            value: filter.value
        };
    });
}
//# sourceMappingURL=createFacets.js.map