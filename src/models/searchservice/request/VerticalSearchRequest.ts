import CombinedFilter from './CombinedFilter';
import SimpleFilter from './SimpleFilter';
import Context from './Context';
import Coordinates from './Coordinates';
import { QueryTrigger } from './QueryTrigger';
import SortBy from './SortBy';
import { QuerySource } from './QuerySource';

/**
 * VerticalSearchRequest represents the options available when constructing a vertical
 * search request
 */
export default interface VerticalSearchRequest {
  query: string,
  verticalKey: string,
  context: Context,
  limit?: number,
  offset?: number,
  retrieveFacets?: boolean,
  facetFilters?: SimpleFilter[],
  skipSpellCheck?: boolean,
  coordinates?: Coordinates,
  queryTrigger?: QueryTrigger,
  sessionTrackingEnabled?: boolean,
  staticFilters?: CombinedFilter | SimpleFilter,
  sortBys?: SortBy[],
  referrerPageUrl?: string,
  querySource?: QuerySource
}