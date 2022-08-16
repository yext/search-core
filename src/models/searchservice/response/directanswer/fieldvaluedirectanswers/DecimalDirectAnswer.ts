import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for a decimal field, which is a number represented using a string.
 *
 * @public
 */
export interface DecimalDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.Decimal>
}