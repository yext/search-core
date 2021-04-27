import { createFilter } from '../core/createFilter';
export function createAppliedQueryFilter(data) {
    return {
        displayKey: data.displayKey,
        displayValue: data.displayValue,
        filter: createFilter(data.filter),
        details: data.details
    };
}
//# sourceMappingURL=createAppliedQueryFilter.js.map