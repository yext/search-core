import { BuiltInFieldType } from './BuiltInFieldType';
import { BaseFeaturedSnippetDirectAnswer } from './BaseFeaturedSnippetDirectAnswer';
import { EnumOrLiteral } from '../../../utils/EnumOrLiteral';

/**
 * A {@link BaseFeaturedSnippetDirectAnswer} with 'rich_text' field type.
 * "value" field is omitted for featured snippet direct answer of this field type.
 *
 * @public
 */
export interface RichTextFeaturedSnippetDirectAnswer extends Omit<BaseFeaturedSnippetDirectAnswer<string>, 'value'> {
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType.RichText>
}
