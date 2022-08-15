import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { BaseFieldValueDirectAnswer } from './directanswer/BaseFieldValueDirectAnswer';

/**
 * A {@link BaseFieldValueDirectAnswer} interface with phone value.
 *
 * @public
 */
export interface PhoneFieldValueDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: BuiltInFieldType.Phone
}