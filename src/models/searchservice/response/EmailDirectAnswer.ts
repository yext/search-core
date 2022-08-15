import { FieldValueDirectAnswer } from './FieldValueDirectAnswer';
import { BuiltInFieldType } from './BuiltInFieldType';

/**
 * A interface for direct answers {@link FieldValueDirectAnswer} with email values.
 *
 * @public
 */
export interface EmailDirectAnswer extends FieldValueDirectAnswer<Email> {
  fieldType: BuiltInFieldType.Email
}

/**
 * A type to use in email direct answer's value {@link FieldValueDirectAnswer.value}.
 *
 * @public
 */
export type Email = string[];