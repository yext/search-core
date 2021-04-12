import { DirectAnswer } from './DirectAnswer';
import { DirectAnswerType } from './DirectAnswerType';
import { Result } from './Result';

/**
 * A direct answer where the answer came from a field from the knowledge graph.
 *
 * @public
 */
export interface FieldValueDirectAnswer extends DirectAnswer {
  /** {@link DirectAnswerType}.FieldValue. */
  type: DirectAnswerType.FieldValue;
  /** {@inheritDoc DirectAnswer.value} */
  value: string;
  /** {@inheritDoc DirectAnswer.relatedResult} */
  relatedResult: Result;
  /** {@inheritDoc DirectAnswer.verticalKey} */
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