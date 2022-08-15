import { VerticalResults } from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import { FeaturedSnippetDirectAnswer } from './directanswer/FeaturedSnippetDirectAnswer';
import { FieldValueDirectAnswer } from './directanswer/FieldValueDirectAnswer';
import { SpellCheck } from './SpellCheck';
import { LocationBias } from './LocationBias';
import { QueryRulesActionsData } from './QueryRulesActionsData';
import { FailedVertical } from './FailedVertical';

/**
 * A representation of a response from a universal search.
 *
 * @public
 */
export interface UniversalSearchResponse {
  /** An array of {@link VerticalResults} which represent the results for each vertical. */
  verticalResults: VerticalResults[],
  /** The ID of the search query. */
  queryId?: string,
  /** {@inheritDoc DirectAnswer} */
  directAnswer?: FeaturedSnippetDirectAnswer | FieldValueDirectAnswer,
  /** An array of {@link SearchIntent}s which represents requests from the API. */
  searchIntents?: SearchIntent[],
  /** {@inheritDoc SpellCheck} */
  spellCheck?: SpellCheck,
  /** {@inheritDoc LocationBias} */
  locationBias?: LocationBias,
  /** A unique id which corresponds to the request. */
  uuid: string,
  /** {@inheritDoc QueryRulesActionsData} */
  queryRulesActionsData?: QueryRulesActionsData[],
  /** {@inheritDoc FailedVertical} */
  failedVerticals?: FailedVertical[]
}