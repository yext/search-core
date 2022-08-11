import { FieldValueFilter } from '../request/FieldValueFilter';
import { AppliedQueryFilterType } from './AppliedQueryFilterType';
import { LocationFilterDetails } from './LocationFilterDetails';

/**
 * A filter that the Search API applied to the search.
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
  displayKey: string,
  /**
   * The value used in the filter.
   *
   * @example
   * 'Sales'
   */
  displayValue: string,
  /** The filter applied to the query results. */
  filter: FieldValueFilter,
  /** {@inheritDoc AppliedQueryFilterType} */
  type: AppliedQueryFilterType,
  /** {@inheritDoc LocationFilterDetails} */
  details?: LocationFilterDetails
}