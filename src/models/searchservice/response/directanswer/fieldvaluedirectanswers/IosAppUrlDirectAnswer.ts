import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for an iOS app url field.
 *
 * @public
 */
export interface IosAppUrlDirectAnswer extends BaseFieldValueDirectAnswer<string> {
  fieldType: EnumOrLiteral<BuiltInFieldType.IOSAppURL>
}
