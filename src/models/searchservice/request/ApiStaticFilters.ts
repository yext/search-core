import { NearFilterValue } from './FieldValueFilter';

/**
 * Represents static filters in the format that the Search API expects.
 *
 * @internal
 */
export interface ApiStaticFilters {
  [combinator: string]: (ApiStaticFilters | ApiFilter)[] | ApiFilter | ApiStaticFilters
}

/**
 * Represents a single filter in the format that the Search API expects.
 *
 * @internal
 */
export interface ApiFilter {
  [matcher: string]: string | number | boolean | NearFilterValue
}
