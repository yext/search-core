import { UniversalSearchResponse } from '../../models/searchservice/response/UniversalSearchResponse';
import { createVerticalResults } from './createVerticalResults';
import { createDirectAnswer } from './createDirectAnswer';
import { createSpellCheck } from './createSpellCheck';
import { createLocationBias } from './createLocationBias';
import { createFailedVertical } from './createFailedVertical';

export function createUniversalSearchResponse(data: any): UniversalSearchResponse {
  const verticalResults = Array.isArray(data.response.modules)
    ? data.response.modules.map(createVerticalResults)
    : [];

  return {
    verticalResults: verticalResults,
    queryId: data.response.queryId,
    directAnswer: data.response.directAnswer && createDirectAnswer(data.response.directAnswer),
    searchIntents: data.response.searchIntents,
    spellCheck: data.response.spellCheck && createSpellCheck(data.response.spellCheck),
    locationBias: data.response.locationBias && createLocationBias(data.response.locationBias),
    uuid: data.meta.uuid,
    queryRulesActionsData: data.response.queryRulesActionsData,
    failedVerticals: data.response.failedVerticals?.map(createFailedVertical)
  };
}