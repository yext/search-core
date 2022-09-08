import { StaticFilter } from './StaticFilter';
import { Context } from './Context';
import { LatLong } from './LatLong';
import { QueryTrigger } from './QueryTrigger';
import { SortBy } from './SortBy';
import { QuerySource } from './QuerySource';
import { Facet } from './Facet';
import { SearchRequest } from '../../core/SearchRequest';

/**
 * Options which can be specified for a vertical search.
 *
 * @public
 */
export interface VerticalSearchRequest extends SearchRequest {
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
  /** Used to track session state when cookies are blocked. */
  sessionId?: string,
  /** Enables session tracking. */
  sessionTrackingEnabled?: boolean,
  /** The static filter to apply to the search. */
  staticFilter?: StaticFilter,
  /** Determines how results are sorted. **/
  sortBys?: SortBy[],
  /** {@inheritdoc UniversalSearchRequest.referrerPageUrl} */
  referrerPageUrl?: string,
  /** {@inheritDoc QuerySource} */
  querySource?: QuerySource | string,
  /** The radius (in meters) to filter the vertical search by. */
  locationRadius?: number,
  /** The queryId for the query, if this is a repeat query. */
  queryId?: string
}