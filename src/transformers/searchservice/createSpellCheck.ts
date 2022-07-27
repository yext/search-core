import { SpellCheck } from '../../models/searchservice/response/SpellCheck';

export function createSpellCheck(data: any): SpellCheck {
  return {
    originalQuery: data.originalQuery,
    correctedQuery: data.correctedQuery.value,
    type: data.type,
    matchedSubstrings: data.correctedQuery.matchedSubstrings
  };
}