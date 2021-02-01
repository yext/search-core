import { AutocompleteResponse, AutocompleteResult, FilterAutocompleteResponse } from '../../models/autocompleteservice/AutocompleteResponse';
import { createAutocompleteResult } from './createAutocompleteResult';

export function createAutocompleteResponse(data: any): Readonly<AutocompleteResponse> {
  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }
  if (!Object.keys(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  const response = data.response;
  const responseResults = response.results.map(createAutocompleteResult);
  const inputIntents = response.input ? response.input.queryIntents : [];
  return Object.freeze({
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || [],
    uuid: data.meta.uuid
  });
}

export function createFilterAutocompleteResponse(data: any): Readonly<FilterAutocompleteResponse> {
  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }
  if (!Object.keys(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  const response = data.response;
  let isSectioned = false;
  let sections = [];
  let responseResults: AutocompleteResult[] = [];
  // a filter autocomplete response may have a sections object
  if (response.sections) {
    isSectioned = true;
    sections = response.sections.map((section: any) => ({
      label: section.label,
      results: section.results.map(createAutocompleteResult)
    }));
  } else {
    responseResults = response.results.map(createAutocompleteResult);
  }
  const inputIntents = response.input ? response.input.queryIntents : [];
  return Object.freeze({
    sectioned: isSectioned,
    sections: sections,
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || [],
    uuid: data.meta.uuid
  });
}