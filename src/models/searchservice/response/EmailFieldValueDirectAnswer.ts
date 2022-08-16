import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { BaseFieldValueDirectAnswer } from './directanswer/BaseFieldValueDirectAnswer';
import { EnumOrLiteral } from '../../utils/EnumOrLiteral';

/**
 * A {@link BaseFieldValueDirectAnswer} interface with 'email' field type.
 *
 * @public
 */
export interface EmailFieldValueDirectAnswer extends BaseFieldValueDirectAnswer<string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.Email>
}