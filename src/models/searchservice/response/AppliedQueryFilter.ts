import { Filter } from '../request/Filter';

/**
 * A filter that the Answers API applied to the search.
 *
 * @public
 */
export interface AppliedQueryFilter {
  /**
   * The display name of the filter key.
   *
   * @example
   * 'Job Category'
   */
  displayKey: string;
  /**
   * The value used in the filter.
   *
   * @example
   * 'Sales'
   */
  displayValue: string;
  /** The filter applied to the query results. */
  filter: Filter;
}