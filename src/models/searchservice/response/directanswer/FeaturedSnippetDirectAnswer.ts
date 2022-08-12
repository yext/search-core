import { DirectAnswer } from './DirectAnswer';
import { DirectAnswerType } from './DirectAnswerType';
import { BuiltInFieldType } from './BuiltInFieldType';
import { Result } from '../Result';
import { Snippet } from '../Snippet';
import { EnumOrLiteral } from '../../../utils/EnumOrLiteral';

/**
 * A direct answer which was found within a document.
 *
 * @public
 */
export interface FeaturedSnippetDirectAnswer<T = unknown> extends DirectAnswer<T> {
  /** {@link DirectAnswerType}.FeaturedSnippet. */
  type: DirectAnswerType.FeaturedSnippet,
  /** {@inheritDoc DirectAnswer.value} */
  value?: T,
  /** {@inheritDoc DirectAnswer.relatedResult} */
  relatedResult: Result,
  /** {@inheritDoc DirectAnswer.verticalKey} */
  verticalKey: string,
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType> | 'unknown',
  /** The snippet where the direct answer was found. */
  snippet: Snippet
}