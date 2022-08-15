import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { DirectAnswer } from './directanswer/DirectAnswer';

/**
 * A interface for direct answers {@link DirectAnswer} with email values.
 *
 * @public
 */
export interface EmailDirectAnswer extends DirectAnswer<string[]> {
  fieldType: BuiltInFieldType.Email
}