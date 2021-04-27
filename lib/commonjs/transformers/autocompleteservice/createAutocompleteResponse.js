"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFilterSearchResponse = exports.createAutocompleteResponse = void 0;
const createAutocompleteResult_1 = require("./createAutocompleteResult");
function createAutocompleteResponse(data) {
    if (!data.response) {
        throw new Error('The autocomplete data does not contain a response property');
    }
    if (!Object.keys(data.response).length) {
        throw new Error('The autocomplete response is empty');
    }
    const response = data.response;
    const responseResults = response.results.map(createAutocompleteResult_1.createAutocompleteResult);
    const inputIntents = response.input ? response.input.queryIntents : [];
    return {
        results: responseResults,
        queryId: response.queryId,
        inputIntents: inputIntents || [],
        uuid: data.meta.uuid
    };
}
exports.createAutocompleteResponse = createAutocompleteResponse;
function createFilterSearchResponse(data) {
    if (!data.response) {
        throw new Error('The autocomplete data does not contain a response property');
    }
    if (!Object.keys(data.response).length) {
        throw new Error('The autocomplete response is empty');
    }
    const response = data.response;
    let isSectioned = false;
    let sections = [];
    let responseResults = [];
    // a filtersearch response may have a sections object
    if (response.sections) {
        isSectioned = true;
        sections = response.sections.map((section) => ({
            label: section.label,
            results: section.results.map(createAutocompleteResult_1.createAutocompleteResult)
        }));
    }
    else {
        responseResults = response.results.map(createAutocompleteResult_1.createAutocompleteResult);
    }
    const inputIntents = response.input ? response.input.queryIntents : [];
    return {
        sectioned: isSectioned,
        sections: sections,
        results: responseResults,
        queryId: response.queryId,
        inputIntents: inputIntents || [],
        uuid: data.meta.uuid
    };
}
exports.createFilterSearchResponse = createFilterSearchResponse;
//# sourceMappingURL=createAutocompleteResponse.js.map