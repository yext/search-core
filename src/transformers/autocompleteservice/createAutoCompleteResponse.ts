import { AutoCompleteResponse, AutoCompleteResult, FilterAutoCompleteResponse } from '../../models/autocompleteservice/AutoCompleteResponse';
import { createAutoCompleteResult } from './createAutoCompleteResult';

export function createAutoCompleteResponse(data: any): Readonly<AutoCompleteResponse> {
  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }
  if (!Object.keys(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  const response = data.response;
  const responseResults = response.results.map(createAutoCompleteResult);
  const inputIntents = response.input ? response.input.queryIntents : [];
  return Object.freeze({
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || []
  });
}

export function createFilterAutoCompleteResponse(data: any): Readonly<FilterAutoCompleteResponse> {
  if (!data.response) {
    throw new Error('The autocomplete data does not contain a response property');
  }
  if (!Object.keys(data.response).length) {
    throw new Error('The autocomplete response is empty');
  }

  const response = data.response;
  let isSectioned = false;
  let sections = [];
  let responseResults: AutoCompleteResult[] = [];
  // a filter autocomplete response may have a sections object
  if (response.sections) {
    isSectioned = true;
    sections = response.sections.map((section: any) => ({
      label: section.label,
      results: section.results.map(createAutoCompleteResult)
    }));
  } else {
    responseResults = response.results.map(createAutoCompleteResult);
  }
  const inputIntents = response.input ? response.input.queryIntents : [];
  return Object.freeze({
    sectioned: isSectioned,
    sections: sections,
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || []
  });
}