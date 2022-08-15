import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { BaseFieldValueDirectAnswer } from './directanswer/BaseFieldValueDirectAnswer';

/**
 * A {@link BaseFieldValueDirectAnswer} interface with email value.
 *
 * @public
 */
export interface EmailFieldValueDirectAnswer extends BaseFieldValueDirectAnswer<string[]> {
  fieldType: BuiltInFieldType.Email
}