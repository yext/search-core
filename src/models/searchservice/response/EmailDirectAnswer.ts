import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { DirectAnswer } from './directanswer/DirectAnswer';

/**
 * An interface for direct answers {@link DirectAnswer} with email values.
 *
 * @public
 */
export interface EmailDirectAnswer extends DirectAnswer<string[]> {
  fieldType: BuiltInFieldType.Email
}