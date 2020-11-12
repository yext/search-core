/**
 * A spellcheck response from a search query
 */
export default interface SpellCheck {
  originalQuery: string;
  correctedQuery: string;
  type: SpellCheckType;
}

export enum SpellCheckType {
  Suggest = 'SUGGEST',
  AutoCorrect = 'AUTOCORRECT',
  Combine = 'COMBINE'
}
