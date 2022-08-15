import { BuiltInFieldType } from './directanswer/BuiltInFieldType';
import { DirectAnswer } from './directanswer/DirectAnswer';

/**
 * A direct answer {@link DirectAnswer} interface with email value.
 *
 * @public
 */
export interface EmailDirectAnswer extends DirectAnswer<string[]> {
  fieldType: BuiltInFieldType.Email
}