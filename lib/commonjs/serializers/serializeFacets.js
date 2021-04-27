"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFacets = void 0;
const serializeStaticFilters_1 = require("./serializeStaticFilters");
function serializeFacets(filters) {
    return JSON.stringify(filters.reduce((obj, facet) => {
        const fieldId = facet.fieldId;
        const shapedFacets = shapeFacetOptionArrayForApi(facet.options, fieldId);
        obj[fieldId] = shapedFacets;
        return obj;
    }, {}));
}
exports.serializeFacets = serializeFacets;
function shapeFacetOptionArrayForApi(options, fieldId) {
    return options.map((option) => {
        return serializeStaticFilters_1.shapeFilterForApi(Object.assign(Object.assign({}, option), { fieldId: fieldId }));
    });
}
//# sourceMappingURL=serializeFacets.js.map