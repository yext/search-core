import { BuiltInFieldType } from '../BuiltInFieldType';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';

/**
 * A {@link BaseFieldValueDirectAnswer} interface with 'email' field type.
 *
 * @public
 */
export interface EmailDirectAnswer extends BaseFieldValueDirectAnswer<string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.Email>
}