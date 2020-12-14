/**
 * Represents field values or substrings of field values that the Answers API emphasized.
 *
 * @example
 * If a user searches for 'pet' and a description field in the results contains the value 'A pet store',
 * the API will likely match the word 'pet'.
 *
 * @public
 */
export default interface HighlightedValue {
  /** The field name of the highlighted value. */
  fieldName: string,
  /**
   * Represents the nested field structure of the highlighted value.
   *
   * @example
   * In the knowledge graph a field may be nested in a structure such as:
   * ```
   * {
   *   description: {
   *     featured: 'The offical answers engine'
   *   }
   * }
   * ```
   * The associated path would then be `['description', 'featured']`
   */
  path: string[],
  /**
   * The value of the field which should be highlighted.
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
