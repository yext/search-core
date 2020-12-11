import SimpleFilter from '../request/SimpleFilter';

/**
 * A filter that the Answers API determined should be applied to the search
 *
 * @public
 */
export default interface AppliedQueryFilter {
  /**
   * The key used in the filter
   *
   * @example
   * 'Job Category'
   */
  displayKey: string;
  /**
   * The value used in the filter
   *
   * @example
   * 'Sales'
   */
  displayValue: string;
  /** The filter applied to the query results */
  filter: SimpleFilter;
}