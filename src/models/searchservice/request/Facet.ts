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