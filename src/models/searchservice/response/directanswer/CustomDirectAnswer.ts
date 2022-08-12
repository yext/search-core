import { BaseFieldValueDirectAnswer } from './BaseFieldValueDirectAnswer';

/**
 * A {@link BaseFieldValueDirectAnswer} with a field type outside of {@link BuiltInFieldType}.
 *
 * @public
 */
export interface CustomDirectAnswer<T = unknown> extends BaseFieldValueDirectAnswer<T>{
  fieldType: 'unknown'
}
