import { AutoCompleteResponse } from '../../models/autocompleteservice/AutoCompleteResponse';
import { createAutoCompleteResult } from './createAutoCompleteResult';

export function createAutoCompleteResponse(response: any): Readonly<AutoCompleteResponse> {
  response = response.json();
  let results;
  // the response may have its results nested in a sections object
  if (response.sections) {
    results = response.sections.results.map(createAutoCompleteResult);
  } else {
    results = response.results.map(createAutoCompleteResult);
  }
  const inputIntents = response.input ? response.input.queryIntents : [];
  return Object.freeze({
    results: results,
    queryId: response.queryId || '',
    inputIntents: inputIntents || []
  });
}