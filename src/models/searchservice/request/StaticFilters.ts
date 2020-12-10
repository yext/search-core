/**
 * Represents static filters in the format that the Answers API expects
 *
 * @internal
 */
export default interface StaticFilters {
  [combinator: string]: (StaticFilters | Filter)[] | Filter | StaticFilters;
}

/**
 * Represents a single filter
 *
 * @internal
 */
export interface Filter {
  [comparator: string]: string | number | boolean
}