import VerticalSearchResponse from '../../models/searchservice/response/VerticalSearchResponse';
import createFacets from './createFacets';
import createLocationBias from './createLocationBias';
import createSpellCheck from './createSpellCheck';
import createVerticalResults from './createVerticalResults';

export default function createVerticalSearchResponse(data: any): Readonly<VerticalSearchResponse> {
  if (!data.response){
    throw new Error('The search data does not contain a response property');
  }

  return Object.freeze({
    verticalResults: createVerticalResults(data.response),
    queryId: data.response.queryId,
    searchIntents: data.response.searchIntents,
    facets: createFacets(data.response.facets),
    spellCheck: data.response.spellCheck && createSpellCheck(data.response.spellCheck),
    locationBias: data.response.locationBias && createLocationBias(data.response.locationBias),
    allResultsForVertical: data.response.allResultsForVertical
      && createVerticalSearchResponse({ response: data.response.allResultsForVertical }),
  });
}