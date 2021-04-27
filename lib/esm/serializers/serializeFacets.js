var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { shapeFilterForApi } from './serializeStaticFilters';
export function serializeFacets(filters) {
    return JSON.stringify(filters.reduce(function (obj, facet) {
        var fieldId = facet.fieldId;
        var shapedFacets = shapeFacetOptionArrayForApi(facet.options, fieldId);
        obj[fieldId] = shapedFacets;
        return obj;
    }, {}));
}
function shapeFacetOptionArrayForApi(options, fieldId) {
    return options.map(function (option) {
        return shapeFilterForApi(__assign(__assign({}, option), { fieldId: fieldId }));
    });
}
//# sourceMappingURL=serializeFacets.js.map