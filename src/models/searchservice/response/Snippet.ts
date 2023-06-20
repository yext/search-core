/**
 * The section of text where a {@link FeaturedSnippetDirectAnswer} was found.
 *
 * @public
 */
export interface Snippet {
  /** The raw snippet value, or HTML if
   *    - entity is of type HTML
   *    - the conversion to HTML is enabled in search configuration
   * */
  value: string,
  /** The locations in the document text of the {@link DirectAnswer.value} */
  matchedSubstrings: { offset: number, length: number }[]
}