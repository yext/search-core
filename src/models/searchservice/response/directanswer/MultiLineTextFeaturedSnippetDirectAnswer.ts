import { BuiltInFieldType } from './BuiltInFieldType';
import { BaseFeaturedSnippetDirectAnswer } from './BaseFeaturedSnippetDirectAnswer';
import { EnumOrLiteral } from '../../../utils/EnumOrLiteral';

/**
 * A {@link BaseFeaturedSnippetDirectAnswer} with 'multi_line_text' field type
 *
 * @public
 */
export interface MultiLineTextFeaturedSnippetDirectAnswer extends BaseFeaturedSnippetDirectAnswer<string> {
  /** The value of the direct answer. */
  value: string,
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType.MultiLineText>
}
