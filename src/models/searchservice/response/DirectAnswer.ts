import { Result } from './Result';
import { DirectAnswerType } from './DirectAnswerType';

/**
 * A direct answer to a search.
 *
 * @public
 */
export interface DirectAnswer {
  /** The {@link DirectAnswerType}. */
  type: DirectAnswerType;
  /** The result of the direct answer. */
  value: string;
  /** The entity associated with the direct answer. */
  relatedResult: Result;
  /** The vertical key of the direct answer. */
  verticalKey: string;
  /** The name of the entity that direct answer came from. */
  entityName: string;
  /** The field name of the direct answer. */
  fieldName: string;
  /** The field api name of the direct answer. */
  fieldApiName: string;
  /** The field type of the direct answer. */
  fieldType: string;
}