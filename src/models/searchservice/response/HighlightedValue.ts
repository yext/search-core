/**
 * A field value and its substring matches as emphasized by the Search API.
 *
 * @public
 */
export interface HighlightedValue {
  /**
   * The value of the field which should be highlighted.
   *
   * @remarks
   * No formatting is applied to this value. This is simply the value that
   * the Search API determined should be highlighted.
   */
  value: string,
  /**
   * An array of substring matches which correspond to the highlighting.
   *
   * @remarks
   * Offset indicates the index of the match, and the length indicates the number of characters of the match.
   *
   * @example
   * A user may search for 'Yext', and the result may include the value
   * 'Yext is a search company'. The matched substrings would correspond
   * to 'Yext' and the matchedSubstrings array would be: `[{ length: 4, offset: 0 }]`
   */
  matchedSubstrings: {
    length: number,
    offset: number
  }[]
}
