import { BuiltInFieldType } from './BuiltInFieldType';
import { FieldValueDirectAnswer } from './FieldValueDirectAnswer';

/**
 * A direct answer whose source is a string or string list field in the knowledge graph.
 *
 * @public
 */
export interface StringValueDirectAnswer extends FieldValueDirectAnswer<string | string[]> {
  fieldType: BuiltInFieldType.SingleLineText | BuiltInFieldType.MultiLineText
}