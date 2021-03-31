/**
 * A HighlightedFieldLeaf represents a field value marked as highlighted by the Answers API.
 *
 * @public
 */
 export interface HighlightedFieldLeaf {
  /**
   * The value of the highlighted field.
   *
   * @remarks
   * No formatting is applied to this value. This is simply the value that the Answers API determined should be highlighted.
   */
  value: string,
  /**
   * An array of substring matches which correspond to the highlighting.
   *
   * @remarks
   * Offset indicates the index of the match, and the length indicates the number of characters of the match.
   *
   * @example
   * A user may search for 'Yext', and the result may include the value 'Yext is a search company'. The matched substrings
   * would correspond to 'Yext' and the matchedSubstrings array would be: `[{ length: 4, offset: 0 }]`
   */
  matchedSubstrings: {
    length: number,
    offset: number
  }[]
}
