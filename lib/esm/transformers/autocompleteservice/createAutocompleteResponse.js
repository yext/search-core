import { createAutocompleteResult } from './createAutocompleteResult';
export function createAutocompleteResponse(data) {
    if (!data.response) {
        throw new Error('The autocomplete data does not contain a response property');
    }
    if (!Object.keys(data.response).length) {
        throw new Error('The autocomplete response is empty');
    }
    var response = data.response;
    var responseResults = response.results.map(createAutocompleteResult);
    var inputIntents = response.input ? response.input.queryIntents : [];
    return {
        results: responseResults,
        queryId: response.queryId,
        inputIntents: inputIntents || [],
        uuid: data.meta.uuid
    };
}
export function createFilterSearchResponse(data) {
    if (!data.response) {
        throw new Error('The autocomplete data does not contain a response property');
    }
    if (!Object.keys(data.response).length) {
        throw new Error('The autocomplete response is empty');
    }
    var response = data.response;
    var isSectioned = false;
    var sections = [];
    var responseResults = [];
    // a filtersearch response may have a sections object
    if (response.sections) {
        isSectioned = true;
        sections = response.sections.map(function (section) { return ({
            label: section.label,
            results: section.results.map(createAutocompleteResult)
        }); });
    }
    else {
        responseResults = response.results.map(createAutocompleteResult);
    }
    var inputIntents = response.input ? response.input.queryIntents : [];
    return {
        sectioned: isSectioned,
        sections: sections,
        results: responseResults,
        queryId: response.queryId,
        inputIntents: inputIntents || [],
        uuid: data.meta.uuid
    };
}
//# sourceMappingURL=createAutocompleteResponse.js.map