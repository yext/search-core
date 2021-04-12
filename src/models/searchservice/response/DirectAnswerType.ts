/**
 * Represents the type of direct answer.
 *
 * @public
 */
export enum DirectAnswerType {
  /** Indicates that the DirectAnswer is a {@link FeaturedSnippetDirectAnswer}. */
  FeaturedSnippet = 'FEATURED_SNIPPET',
  /** Indicates that the DirectAnswer is a {@link FieldValueDirectAnswer}. */
  FieldValue = 'FIELD_VALUE'
}