/**
 * Represents a filter which compares values to a single field.
 *
 * @public
 */
export default interface SimpleFilter {
  /**
   * The fieldId to apply the filter against.
   *
   * @example
   * 'c_jobCategory'
   */
  fieldId: string;
  /**
   * The filter comparator.
   *
   * @example
   * '$eq'
   */
  comparator: string;
  /**
   * The value to compare.
   *
   * @example
   * 'Sales'
   */
  comparedValue: string | number | boolean;
}