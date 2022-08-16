import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for a rich text field.
 *
 * @public
 */
export interface RichTextDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.RichText>
}
