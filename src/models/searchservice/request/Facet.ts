import { Matcher } from '../common/Matcher';
import { NumberRangeValue } from '../common/NumberRangeValue';

/**
 * Represents dynamic filter options for the Answers API.
 *
 * @public
 */
export interface Facet {
  /** The associated fieldId. */
  fieldId: string,
  /**
   * An array of {@link FacetOption}
   *
   * @remarks
   * To indicate that a facet should be disabled, supply an empty array
   */
  options: FacetOption[]
}

/**
 * A filter associated with the facet.
 *
 * @public
 */
export interface FacetOption {
  /** {@inheritDoc Matcher} */
  matcher: Matcher,
  /**
   * The value to compare.
   *
   * @example
   * 'Sales'
   */
  value: string | number | boolean | NumberRangeValue
}
