import { AutoCompleteResponse } from '../../models/autocompleteservice/AutoCompleteResponse';
import { createAutoCompleteResult } from './createAutoCompleteResult';

export function createAutoCompleteResponse(response: any): Readonly<AutoCompleteResponse> {
  response = response.json();
  let results;
  if (response.sections) {
    results = response.sections.results.map((result: any) =>
      createAutoCompleteResult(result));
  } else {
    results = response.results.map((result: any) =>
      createAutoCompleteResult(result));
  }
  const inputIntents = response.input ? response.input.queryIntents : [];
  return Object.freeze({
    results: results,
    queryId: response.queryId || '',
    inputIntents: inputIntents || []
  });
}