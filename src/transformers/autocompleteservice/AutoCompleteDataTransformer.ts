import { AutoCompleteResponse, AutoCompleteResponseResult } from '../../models/autocompleteservice/AutoCompleteResponse';

export default class AutoCompleteDataTransformer {
  static from(response: any): Readonly<AutoCompleteResponse> {
    response = response.json();
    let sections;
    if (response.sections) {
      sections = response.sections.map((s: any) => ({
        label: s.label,
        results: createAutoCompleteResponseResult(s.results),
        resultsCount: s.results.length
      }));
    } else {
      sections = [{
        results: createAutoCompleteResponseResult(response.results),
        resultsCount: response.results.length
      }];
    }
    const inputIntents = response.input ? response.input.queryIntents : [];
    return Object.freeze({
      sections: sections || [],
      queryId: response.queryId || '',
      inputIntents: inputIntents || []
    });
  }
}

function createAutoCompleteResponseResult(results: any): AutoCompleteResponseResult {
  return Object.freeze({
    filter: results.filter || {},
    key: results.key || '',
    matchedSubstrings: results.matchedSubstrings || [],
    value: results.value || '',
    shortValue: results.shortValue || results.value || '',
    intents: results.queryIntents || []
  });
}
