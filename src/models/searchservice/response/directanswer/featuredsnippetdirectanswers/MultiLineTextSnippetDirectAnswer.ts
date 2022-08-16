import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BuiltInFieldType } from '../BuiltInFieldType';
import { BaseFeaturedSnippetDirectAnswer } from '../FeaturedSnippetDirectAnswer';

/**
 * A {@link BaseFeaturedSnippetDirectAnswer} with 'multi_line_text' field type.
 *
 * @public
 */
export interface MultiLineTextSnippetDirectAnswer extends BaseFeaturedSnippetDirectAnswer<string> {
  /** The value of the direct answer. */
  value: string,
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType.MultiLineText>
}