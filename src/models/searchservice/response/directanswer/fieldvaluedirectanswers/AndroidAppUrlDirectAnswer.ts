import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for an android app url field.
 *
 * @public
 */
export interface AndroidAppUrlDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.AndroidAppURL>
}