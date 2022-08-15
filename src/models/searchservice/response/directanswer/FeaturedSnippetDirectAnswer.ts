import { DirectAnswer } from './DirectAnswer';
import { DirectAnswerType } from './DirectAnswerType';
import { Snippet } from '../Snippet';
import { BuiltInFieldType } from './BuiltInFieldType';
import { EnumOrLiteral } from '../../../utils/EnumOrLiteral';

/**
 * A direct answer which was found within a document.
 *
 * @public
 */
export interface BaseFeaturedSnippetDirectAnswer<T = unknown> extends DirectAnswer<T> {
  /** {@inheritDoc DirectAnswerType.FeaturedSnippet} */
  type: DirectAnswerType.FeaturedSnippet,
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType.MultiLineText | BuiltInFieldType.RichText>,
  /** The snippet where the direct answer was found. */
  snippet: Snippet
}

/**
 * A {@link BaseFeaturedSnippetDirectAnswer} with 'multi_line_text' field type.
 *
 * @public
 */
export interface MultiLineTextFeaturedSnippetDirectAnswer extends BaseFeaturedSnippetDirectAnswer<string> {
  /** The value of the direct answer. */
  value: string,
  /** {@inheritDoc DirectAnswer.fieldType} */
  fieldType: EnumOrLiteral<BuiltInFieldType.MultiLineText>
}

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

/**
 * All possible built-in {@link BaseFeaturedSnippetDirectAnswer} interfaces.
 *
 * @public
 */
export type FeaturedSnippetDirectAnswer =
  MultiLineTextFeaturedSnippetDirectAnswer | RichTextFeaturedSnippetDirectAnswer;
