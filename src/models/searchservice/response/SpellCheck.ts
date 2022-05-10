/**
 * A spellcheck response from a search query.
 *
 * @public
 */
export interface SpellCheck {
  /** The query that was input into the spell checker. */
  originalQuery: string,
  /** The corrected version of the originalQuery. */
  correctedQuery: string,
  /** The type of spell check. */
  type: SpellCheckType
}

/**
 * Represents the type of spell check performed.
 *
 * @public
 */
export enum SpellCheckType {
  /** The API is suggesting an alternative query. */
  Suggest = 'SUGGEST',
  /** The API is autocorrecting the original query. */
  AutoCorrect = 'AUTOCORRECT',
  /** The API may be doing some combination of suggesting or autocorrecting. */
  Combine = 'COMBINE'
}
