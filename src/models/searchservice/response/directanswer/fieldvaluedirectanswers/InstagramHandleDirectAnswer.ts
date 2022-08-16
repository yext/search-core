import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for an instagram handle field.
 *
 * @public
 */
export interface InstagramHandleDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.InstagramHandle>
}
