import { DirectAnswer } from './DirectAnswer';
import { DirectAnswerType } from './DirectAnswerType';

/**
 * A direct answer where the answer came from a field from the knowledge graph.
 *
 * @public
 */
export interface BaseFieldValueDirectAnswer<T = unknown> extends DirectAnswer<T> {
  /** {@inheritDoc DirectAnswerType.FieldValue} */
  type: DirectAnswerType.FieldValue,
  /** The result of the direct answer. */
  value: T,
  /** The name of the entity that direct answer came from. */
  entityName: string,
  /** The field name of the direct answer. */
  fieldName: string,
  /** The field api name of the direct answer. */
  fieldApiName: string
}
