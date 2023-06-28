import { EnumOrLiteral } from '../../../../utils/EnumOrLiteral';
import { BuiltInFieldType } from '../BuiltInFieldType';
import { BaseFeaturedSnippetDirectAnswer } from '../FeaturedSnippetDirectAnswer';

/**
 * A {@link BaseFeaturedSnippetDirectAnswer} with 'markdown' field type.
 * "value" field is omitted for featured snippet direct answer of this field type.
 *
 * @public
 */
export interface MarkdownSnippetDirectAnswer extends Omit<BaseFeaturedSnippetDirectAnswer<string>, 'value'> {
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType.Markdown>
}
