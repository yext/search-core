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
  type: SpellCheckType,
  /**
   * An array of substring matches which correspond to the highlighting.
   * Offset indicates the index of the match, and the length indicates the number of characters of the match.
  */
  matchedSubstrings: {
    length: number,
    offset: number
  }[]
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
