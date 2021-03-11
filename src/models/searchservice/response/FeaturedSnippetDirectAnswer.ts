import { Result } from './Result';
import { DirectAnswerType } from './DirectAnswerType';

/**
 * A featured snipped direct answer.
 *
 * @public
 */
export interface FeaturedSnippetDirectAnswer {
  /** The type of direct answer. */
  type: DirectAnswerType.FeaturedSnippet;
  /** The result of the direct answer. */
  value: string;
  /** The entity associated with the direct answer. */
  relatedResult: Result;
  /** The vertical key of the direct answer. */
  verticalKey: string;
  /** The document text which the direct answer came from. */
  documentText: string;
  /** The locations in the document text of the direct answer. */
  matchedSubstrings: {offset: number, length: number}[];
}
