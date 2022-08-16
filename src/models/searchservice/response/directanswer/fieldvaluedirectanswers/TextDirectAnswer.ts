import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BaseFieldValueDirectAnswer } from '../BaseFieldValueDirectAnswer';
import { BuiltInFieldType } from '../BuiltInFieldType';

/**
 * A direct answer whose source is a string or string list field in the knowledge graph.
 *
 * @public
 */
export interface TextDirectAnswer extends BaseFieldValueDirectAnswer<string | string[]> {
  fieldType: EnumOrLiteral<BuiltInFieldType.SingleLineText | BuiltInFieldType.MultiLineText>
}