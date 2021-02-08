import { Comparator } from '../common/Comparator';

/**
 * Represents dynamic filter options for the Answers API.
 *
 * @public
 */
export interface Facet {
  /** The associated fieldId. */
  fieldId: string;
  /**
   * An array of {@link FacetOption}
   *
   * @remarks
   * To indicate that a facet should be disabled, supply an empty array
   */
  options: FacetOption[];
}

/**
 * A filter associated with the facet.
 *
 * @public
 */
export interface FacetOption {
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