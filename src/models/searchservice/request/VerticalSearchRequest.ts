import { CombinedFilter } from './CombinedFilter';
import { SimpleFilter } from './SimpleFilter';
import { Context } from './Context';
import { LatLong } from './LatLong';
import { QueryTrigger } from './QueryTrigger';
import { SortBy } from './SortBy';
import { QuerySource } from './QuerySource';
import { Facet } from './Facet';

/**
 * Options which can be specified for a vertical search.
 *
 * @public
 */
export interface VerticalSearchRequest {
  /** The search query. */
  query: string,
  /** The key associated with the vertical. */
  verticalKey: string,
  /** {@inheritDoc Context} */
  context?: Context,
  /** The maximum number of results to include with a max of 50. */
  limit?: number,
  /** The result offset which allows for fetching more results with the same query. */
  offset?: number,
  /** Indicates that facets should be retrieved. */
  retrieveFacets?: boolean,
  /** The facet filters to apply to the search. */
  facets?: Facet[],
  /** Skips spell checking if true. */
  skipSpellCheck?: boolean,
  /** {@inheritDoc LatLong} */
  location?: LatLong,
  /** {@inheritDoc QueryTrigger} */
  queryTrigger?: QueryTrigger,
  /** Enables session tracking. */
  sessionTrackingEnabled?: boolean,
  /** The static filters to apply to the search. */
  staticFilters?: CombinedFilter | SimpleFilter,
  /** Determines how results are sorted. **/
  sortBys?: SortBy[],
  /** {@inheritdoc UniversalSearchRequest.referrerPageUrl} */
  referrerPageUrl?: string,
  /** {@inheritDoc QuerySource} */
  querySource?: QuerySource
}