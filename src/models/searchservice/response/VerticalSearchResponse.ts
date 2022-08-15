import { VerticalResults } from './VerticalResults';
import { SearchIntent } from './SearchIntent';
import { FeaturedSnippetDirectAnswer } from './directanswer/FeaturedSnippetDirectAnswer';
import { FieldValueDirectAnswer } from './directanswer/FieldValueDirectAnswer';
import { DisplayableFacet } from './DisplayableFacet';
import { LocationBias } from './LocationBias';
import { SpellCheck } from './SpellCheck';
import { QueryRulesActionsData } from './QueryRulesActionsData';

/**
 * A representation of a response from a vertical search.
 *
 * @public
 */
export interface VerticalSearchResponse {
  /** {@inheritDoc VerticalResults} */
  verticalResults: VerticalResults,
  /** The ID of the query. */
  queryId: string,
  /** {@inheritDoc DirectAnswer} */
  directAnswer?: FeaturedSnippetDirectAnswer | FieldValueDirectAnswer,
  /** An array of {@link SearchIntent}s. */
  searchIntents?: SearchIntent[],
  /** An array of {@link Facet}s associated with the search results. */
  facets?: DisplayableFacet[],
  /** {@inheritDoc SpellCheck} */
  spellCheck?: SpellCheck,
  /** {@inheritDoc LocationBias} */
  locationBias?: LocationBias,
  /** {@inheritDoc VerticalSearchResponse} */
  allResultsForVertical?: VerticalSearchResponse,
  /** The {@link VerticalResults} for each search vertical. */
  alternativeVerticals?: VerticalResults[],
  /** A unique id which corresponds to the request. */
  uuid: string,
  /** {@inheritDoc QueryRulesActionsData} */
  queryRulesActionsData?: QueryRulesActionsData[]
}
