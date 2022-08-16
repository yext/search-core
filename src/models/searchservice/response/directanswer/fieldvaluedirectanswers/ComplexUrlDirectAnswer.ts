import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for a complex url field.
 *
 * @public
 */
export interface ComplexUrlDirectAnswer extends BaseFieldValueDirectAnswer<ComplexURL> {
  fieldType: EnumOrLiteral<BuiltInFieldType.ComplexURL>
}

/**
 * The shape of a {@link BuiltInFieldType.ComplexURL} DirectAnswer value
 *
 * @public
 */
export interface ComplexURL {
  url: string,
  displayUrl?: string,
  preferDisplayUrl: boolean
}