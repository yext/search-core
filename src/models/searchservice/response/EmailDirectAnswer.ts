import { FieldValueDirectAnswer } from './FieldValueDirectAnswer';
import { BuiltInFieldType } from './BuiltInFieldType';

/**
 * A interface for direct answers {@link FieldValueDirectAnswer} with email values.
 *
 * @public
 */
export interface EmailDirectAnswer extends FieldValueDirectAnswer<string[]> {
  fieldType: BuiltInFieldType.Email
}