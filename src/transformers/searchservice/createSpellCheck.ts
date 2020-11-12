/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import SpellCheck from '../../models/searchservice/response/SpellCheck';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function createSpellCheck(data: any): Readonly<SpellCheck> {
  return Object.freeze({
    originalQuery: data.originalQuery,
    correctedQuery: data.correctedQuery.value,
    type: data.spellCheckType,
  });
}