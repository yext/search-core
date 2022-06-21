import { VerticalSearchResponse } from '../../models/searchservice/response/VerticalSearchResponse';
import { createDirectAnswer } from './createDirectAnswer';
import { createFacets } from './createFacets';
import { createLocationBias } from './createLocationBias';
import { createSpellCheck } from './createSpellCheck';
import { createVerticalResults } from './createVerticalResults';

export function createVerticalSearchResponse(data: any): VerticalSearchResponse {
  return {
    verticalResults: createVerticalResults(data.response),
    queryId: data.response.queryId,
    directAnswer: data.response.directAnswer && createDirectAnswer(data.response.directAnswer),
    searchIntents: data.response.searchIntents,
    facets: createFacets(data.response.facets),
    spellCheck: data.response.spellCheck && createSpellCheck(data.response.spellCheck),
    locationBias: data.response.locationBias && createLocationBias(data.response.locationBias),
    allResultsForVertical: data.response.allResultsForVertical
      && createVerticalSearchResponse({ response: data.response.allResultsForVertical }),
    alternativeVerticals: data.response.alternativeVerticals?.modules?.map(createVerticalResults),
    uuid: data.meta?.uuid,
    queryRulesActionsData: data.response.queryRulesActionsData
  };
}