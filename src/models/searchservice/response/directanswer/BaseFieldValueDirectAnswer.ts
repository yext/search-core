import { DirectAnswer } from './DirectAnswer';
import { DirectAnswerType } from './DirectAnswerType';
import { BuiltInFieldType } from './BuiltInFieldType';
import { Result } from '../Result';
import { EnumOrLiteral } from '../../../utils/EnumOrLiteral';

/**
 * A direct answer where the answer came from a field from the knowledge graph.
 *
 * @public
 */
export interface BaseFieldValueDirectAnswer<T = unknown> extends DirectAnswer<T> {
  /** {@link DirectAnswerType}.FieldValue. */
  type: DirectAnswerType.FieldValue,
  /** {@inheritDoc DirectAnswer.value} */
  value: T,
  /** {@inheritDoc DirectAnswer.relatedResult} */
  relatedResult: Result,
  /** {@inheritDoc DirectAnswer.verticalKey} */
  verticalKey: string,
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType> | 'unknown',
  /** The name of the entity that direct answer came from. */
  entityName: string,
  /** The field name of the direct answer. */
  fieldName: string,
  /** The field api name of the direct answer. */
  fieldApiName: string
}
