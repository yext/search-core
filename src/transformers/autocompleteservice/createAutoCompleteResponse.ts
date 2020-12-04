import { AutoCompleteResponse } from '../../models/autocompleteservice/AutoCompleteResponse';
import { createAutoCompleteResult } from './createAutoCompleteResult';

export function createAutoCompleteResponse(data: any): Readonly<AutoCompleteResponse> {
  if (!data.response){
    throw new Error('The search data does not contain a response property');
  }

  const response = data.response;
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
    queryId: response.queryId,
    inputIntents: inputIntents || []
  });
}