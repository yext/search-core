import { NearFilterValue } from './Filter';

/**
 * Represents static filters in the format that the Answers API expects.
 *
 * @internal
 */
export interface ApiStaticFilters {
  [combinator: string]: (ApiStaticFilters | ApiFilter)[] | ApiFilter | ApiStaticFilters;
}

/**
 * Represents a single filter.
 *
 * @internal
 */
export interface ApiFilter {
  [matcher: string]: string | number | boolean | NearFilterValue
}
