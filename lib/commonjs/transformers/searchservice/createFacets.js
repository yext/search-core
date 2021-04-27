"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFacets = void 0;
const createFilter_1 = require("../core/createFilter");
function createFacets(facets) {
    if (!facets) {
        return [];
    }
    return facets.map((facet) => ({
        fieldId: facet.fieldId,
        displayName: facet.displayName,
        options: createFacetOptions(facet.options)
    }));
}
exports.createFacets = createFacets;
function createFacetOptions(options) {
    return options.map((option) => {
        const filter = createFilter_1.createFilter(option.filter);
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