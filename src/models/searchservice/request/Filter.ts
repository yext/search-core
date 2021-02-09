import { Comparator } from '../common/Comparator';

/**
 * Represents a filter which compares values to a single field.
 *
 * @public
 */
export interface Filter {
  /**
   * The fieldId to apply the filter against.
   *
   * @example
   * 'c_jobCategory'
   */
  fieldId: string;
  /** {@inheritDoc Comparator} */
  comparator: Comparator;
  /**
   * The value to compare.
   *
   * @example
   * 'Sales'
   */
  comparedValue: string | number | boolean;
}