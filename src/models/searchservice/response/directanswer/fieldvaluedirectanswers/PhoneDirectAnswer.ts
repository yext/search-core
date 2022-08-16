import { BuiltInFieldType } from '../BuiltInFieldType';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';

/**
 * A {@link BaseFieldValueDirectAnswer} interface with phone value.
 *
 * @public
 */
export interface PhoneDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: BuiltInFieldType.Phone
}