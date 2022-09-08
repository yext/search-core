import { FieldValueFilter, NearFilterValue } from './FieldValueFilter';

/**
 * Represents dynamic filter options for the Search API.
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
export interface FacetOption extends Omit<FieldValueFilter, 'fieldId'> {
  /**
   * The value to compare.
   *
   * @example
   * 'Sales'
   */
  value: Exclude<FieldValueFilter['value'], NearFilterValue>
}
