/**
 * Represents static filters in the format that the Answers API expects
 */
export interface StaticFilters {
  [combinator: string]: (StaticFilters | Filter)[] | Filter | StaticFilters;
}

export interface Filter {
  [comparator: string]: string | number | boolean
}