import UniversalSearchResponse from '../../models/searchservice/response/UniversalSearchResponse';
import createVerticalResults from './createVerticalResults';
import createDirectAnswer from './createDirectAnswer';
import createSpellCheck from './createSpellCheck';

export default function createUniversalSearchResponse(data: any): Readonly<UniversalSearchResponse> {
  if (!data.response){
    throw new Error('The search data does not contain a response property');
  }

  const verticalResults = Array.isArray(data.response.modules)
    ? data.response.modules.map((vertical: any) => createVerticalResults(vertical))
    : [];

  return Object.freeze({
    verticalResults: verticalResults,
    queryId: data.response.queryId,
    directAnswer: data.response.directAnswer && createDirectAnswer(data.response.directAnswer),
    searchIntents: data.response.searchIntents,
    spellCheck: data.response.spellCheck && createSpellCheck(data.response.spellCheck)
  });
}