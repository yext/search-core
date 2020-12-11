import SimpleFilter from '../request/SimpleFilter';

/**
 * Represents dyamic filter options from the Answers API
 *
 * @public
 */
export default interface Facet {
  /** The associated fieldId */
  fieldId: string;
  /** The name of the facet which is meant to be displayed to the user */
  displayName: string;
  /** {@inheritDoc FacetOption} */
  options: FacetOption[];
}

/**
 * A filter associated with the facet
 *
 * @public
 */
export interface FacetOption {
  /** The name of the facet option */
  displayName: string;
  /** The number of results associated with this facet option */
  count: number;
  /** Whether or not the filter is selected in the search results */
  selected: boolean;
  /** The filter associated with this facet option */
  filter: SimpleFilter;
}