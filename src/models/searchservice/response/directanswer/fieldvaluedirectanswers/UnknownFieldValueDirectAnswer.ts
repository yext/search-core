import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';

/**
 * A {@link BaseFieldValueDirectAnswer} with a field type outside of {@link BuiltInFieldType}.
 *
 * @public
 */
export interface UnknownFieldValueDirectAnswer<T = unknown> extends BaseFieldValueDirectAnswer<T>{
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: 'unknown'
}
