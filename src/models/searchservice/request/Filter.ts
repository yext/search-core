import { Matcher } from '../common/Matcher';

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
  /** {@inheritDoc Matcher} */
  matcher: Matcher;
  /**
   * The value to compare.
   *
   * @example
   * 'Sales'
   */
  value: string | number | boolean;
}