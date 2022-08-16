import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer for an integer field.
 *
 * @remarks
 * `IntegerDirectAnswer`s are only used for built in number fields.
 * Custom number fields use {@link DecimalDirectAnswer} instead.
 *
 * @public
 */
export interface IntegerDirectAnswer extends BaseFieldValueDirectAnswer<number> {
  fieldType: EnumOrLiteral<BuiltInFieldType.Integer>
}
