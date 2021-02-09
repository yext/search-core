/**
 * Represents static filters in the format that the Answers API expects.
 *
 * @internal
 */
export interface StaticFilters {
  [combinator: string]: (StaticFilters | Filter)[] | Filter | StaticFilters;
}

/**
 * Represents a single filter.
 *
 * @internal
 */
export interface Filter {
  [matcher: string]: string | number | boolean
}