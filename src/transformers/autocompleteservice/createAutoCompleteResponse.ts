import { AutoCompleteResponse, AutoCompleteResult } from '../../models/autocompleteservice/AutoCompleteResponse';
import { createAutoCompleteResult } from './createAutoCompleteResult';

export function createAutoCompleteResponse(data: any): Readonly<AutoCompleteResponse> {
  if (!data.response){
    throw new Error('The search data does not contain a response property');
  }

  const response = data.response;
  let responseResults: AutoCompleteResult[] = [];
  // the response may have its results nested in a sections object
  if (response.sections) {
    const sections = response.sections.map((section: any) => ({
      sectionResults: section.results.map(createAutoCompleteResult)
    }));
    sections.forEach((section: any) => {
      section.sectionResults.forEach((result: AutoCompleteResult) => {
        responseResults.push(result);
      });
    });
  } else {
    responseResults = response.results.map(createAutoCompleteResult);
  }
  const inputIntents = response.input ? response.input.queryIntents : [];
  return Object.freeze({
    results: responseResults,
    queryId: response.queryId,
    inputIntents: inputIntents || []
  });
}