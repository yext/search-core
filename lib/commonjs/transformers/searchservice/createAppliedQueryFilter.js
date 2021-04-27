"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppliedQueryFilter = void 0;
const createFilter_1 = require("../core/createFilter");
function createAppliedQueryFilter(data) {
    return {
        displayKey: data.displayKey,
        displayValue: data.displayValue,
        filter: createFilter_1.createFilter(data.filter),
        details: data.details
    };
}
exports.createAppliedQueryFilter = createAppliedQueryFilter;
//# sourceMappingURL=createAppliedQueryFilter.js.map