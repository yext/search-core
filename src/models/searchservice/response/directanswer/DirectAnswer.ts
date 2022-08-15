import { Result } from '../Result';
import { DirectAnswerType } from './DirectAnswerType';
import { BuiltInFieldType } from './BuiltInFieldType';
import { EnumOrLiteral } from '../../../utils/EnumOrLiteral';

/**
 * A direct answer to a search.
 *
 * @public
 */
export interface DirectAnswer<T = unknown> {
  /** The {@link DirectAnswerType}. */
  type: DirectAnswerType,
  /**
   * The value of the direct answer.
   *
   * @remarks
   * A value will not be present if the {@link DirectAnswer."type"} is 'FEATURED_SNIPPET'
   * and {@link DirectAnswer.fieldType} is 'rich_text'.
   */
  value?: T,
  /** The entity associated with the direct answer. */
  relatedResult: Result,
  /** The vertical key of the direct answer. */
  verticalKey: string,
  /** The field type of the direct answer. */
  fieldType: EnumOrLiteral<BuiltInFieldType> | 'unknown'
}
