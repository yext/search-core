import { SpellCheck } from '../../models/searchservice/response/SpellCheck';

export function createSpellCheck(data: any): Readonly<SpellCheck> {
  return Object.freeze({
    originalQuery: data.originalQuery,
    correctedQuery: data.correctedQuery.value,
    type: data.type,
  });
}