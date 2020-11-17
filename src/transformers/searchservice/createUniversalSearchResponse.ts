import UniversalSearchResponse from '../../models/searchservice/response/UniversalSearchResponse';
import createVerticalResults from './createVerticalResults';
import createDirectAnswer from './createDirectAnswer';
import createSpellCheck from './createSpellCheck';
import createLocationBias from './createLocationBias';
import createAnswersError from '../core/AnswersError';

export default function createUniversalSearchResponse(data: any): Readonly<UniversalSearchResponse> {
  if (!data.response){
    throw new Error('The search data does not contain a response property');
  }

  if (!data.meta){
    throw new Error('The search data does not contain a meta property');
  }

  const verticalResults = Array.isArray(data.response.modules)
    ? data.response.modules.map(createVerticalResults)
    : [];

  return Object.freeze({
    verticalResults: verticalResults,
    queryId: data.response.queryId,
    directAnswer: data.response.directAnswer && createDirectAnswer(data.response.directAnswer),
    searchIntents: data.response.searchIntents,
    spellCheck: data.response.spellCheck && createSpellCheck(data.response.spellCheck),
    locationBias: data.response.locationBias && createLocationBias(data.response.locationBias),
    errors: data.meta.errors && data.meta.errors.map(createAnswersError)
  });
}