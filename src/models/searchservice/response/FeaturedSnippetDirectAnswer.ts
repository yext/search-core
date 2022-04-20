import { DirectAnswer } from './DirectAnswer';
import { DirectAnswerType } from './DirectAnswerType';
import { Result } from './Result';
import { Snippet } from './Snippet';

/**
 * A direct answer which was found within a document.
 *
 * @public
 */
export interface FeaturedSnippetDirectAnswer extends DirectAnswer {
  /** {@link DirectAnswerType}.FeaturedSnippet. */
  type: DirectAnswerType.FeaturedSnippet,
  /** {@inheritDoc DirectAnswer.value} */
  value?: string,
  /** {@inheritDoc DirectAnswer.relatedResult} */
  relatedResult: Result,
  /** {@inheritDoc DirectAnswer.verticalKey} */
  verticalKey: string,
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: string,
  /** The snippet where the direct answer was found. */
  snippet: Snippet
}