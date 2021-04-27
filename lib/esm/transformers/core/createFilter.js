export function createFilter(filter) {
    var fieldId = Object.keys(filter)[0];
    var matcher = Object.keys(filter[fieldId])[0];
    return {
        fieldId: fieldId,
        matcher: matcher,
        value: filter[fieldId][matcher]
    };
}
//# sourceMappingURL=createFilter.js.map