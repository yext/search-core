import { DirectAnswer } from './DirectAnswer';
import { DirectAnswerType } from './DirectAnswerType';
import { Snippet } from '../Snippet';

/**
 * A direct answer which was found within a document.
 *
 * @public
 */
export interface FeaturedSnippetDirectAnswer<T = unknown> extends DirectAnswer<T> {
  /** {@link DirectAnswerType}.FeaturedSnippet. */
  type: DirectAnswerType.FeaturedSnippet,
  /** The snippet where the direct answer was found. */
  snippet: Snippet
}
