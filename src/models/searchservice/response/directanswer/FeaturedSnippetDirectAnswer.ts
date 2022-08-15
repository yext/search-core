import { MultiLineTextFeaturedSnippetDirectAnswer } from './MultiLineTextFeaturedSnippetDirectAnswer';
import { RichTextFeaturedSnippetDirectAnswer } from './RichTextFeaturedSnippetDirectAnswer';
/**
 * Possible built-in {@link BaseFeaturedSnippetDirectAnswer} interfaces
 *
 * @public
 */
export type FeaturedSnippetDirectAnswer =
  MultiLineTextFeaturedSnippetDirectAnswer | RichTextFeaturedSnippetDirectAnswer;
