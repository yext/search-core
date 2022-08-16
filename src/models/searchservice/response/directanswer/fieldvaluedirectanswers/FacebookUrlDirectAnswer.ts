import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for a facebook url field.
 *
 * @public
 */
export interface FacebookUrlDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.FacebookURL>
}
