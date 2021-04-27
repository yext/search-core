"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilter = void 0;
function createFilter(filter) {
    const fieldId = Object.keys(filter)[0];
    const matcher = Object.keys(filter[fieldId])[0];
    return {
        fieldId: fieldId,
        matcher: matcher,
        value: filter[fieldId][matcher]
    };
}
exports.createFilter = createFilter;
//# sourceMappingURL=createFilter.js.map