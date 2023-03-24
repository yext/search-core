import { SearchError } from '../../models/searchapi/SearchError';
import { AutocompleteResponse, FilterSearchResponse } from '../../models/autocompleteservice/AutocompleteResponse';
import { createAutocompleteResult } from './createAutocompleteResult';

export function createAutocompleteResponse(data: any): AutocompleteResponse {
  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }
  if (!Object.keys(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  const response = data.response;
  const responseResults = response.results.map(createAutocompleteResult);
  const inputIntents = response.input?.queryIntents ?? [];

  return {
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || [],
    uuid: data.meta.uuid
  };
}

export function createFilterSearchResponse(data: any): FilterSearchResponse {
  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }
  if (!Object.keys(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  const response = data.response;
  if (response.failedVerticals && response.failedVerticals.length != 0) {
    const error = response.failedVerticals[0];
    throw new SearchError(error.details.description, error.details.responseCode, error.errorType);
  }
  const sections = response.sections.map((section: any) => ({
    label: section.label,
    results: section.results.map(createAutocompleteResult)
  }));

  return {
    sections: sections,
    queryId: response.queryId,
    businessId: response.businessId,
    uuid: data.meta.uuid
  };
}
