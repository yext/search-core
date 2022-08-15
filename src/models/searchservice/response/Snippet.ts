/**
 * The section of text where a {@link FeaturedSnippetDirectAnswer} was found.
 *
 * @public
 */
export interface Snippet {
  /** The snippet's body of text */
  value: string,
  /** The locations in the document text of the {@link DirectAnswer.value} */
  matchedSubstrings: { offset: number, length: number }[]
}