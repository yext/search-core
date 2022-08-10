import { Result } from './Result';
import { DirectAnswerType } from './DirectAnswerType';

/**
 * A direct answer to a search.
 *
 * @public
 */
export interface DirectAnswer {
  /** The {@link DirectAnswerType}. */
  type: DirectAnswerType,
  /**
   * The result of the direct answer.
   *
   * @remarks
   * A value will not be present if the {@link DirectAnswer.fieldType} is 'rich_text'.
   */
  value?: string,
  /** The entity associated with the direct answer. */
  relatedResult: Result,
  /** The vertical key of the direct answer. */
  verticalKey: string,
  /** The field type of the direct answer. */
  fieldType: string
}