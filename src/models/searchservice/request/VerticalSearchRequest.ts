import Coordinates from './Coordinates';
import { QueryTrigger } from './QueryTrigger';
import SortBy from './SortBy';

/**
 * VerticalSearchRequest represents the options available when constructing a vertical
 * search request
 */
export default interface VerticalSearchRequest {
  query: string,
  queryId: string,
  verticalKey: string,
  limit: number,
  offset: number,
  retrieveFacets: boolean,
  skipSpellCheck: boolean,
  geolocation: Coordinates,
  queryTrigger: QueryTrigger,
  sessionTrackingEnabled: boolean,
  sortBys: SortBy[],
  context: string,
  referrerPageUrl: string,
  querySource: string,
}