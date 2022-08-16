import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for a simple url field.
 *
 * @public
 */
export interface UrlDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.URL>
}
