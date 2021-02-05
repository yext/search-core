import { Facet, FacetOption } from '../request/Facet';
import { Comparator } from '../common/Comparator';

/**
 * A {@link Facet} which contains extra fields meant to be displayed to the end user.
 *
 * @public
 */
export interface DisplayableFacet extends Facet {
  /** {@inheritDoc Facet.fieldId} */
  fieldId: string;
  /** An array of {@link DisplayableFacetOption} */
  options: DisplayableFacetOption[];
  /** The name of the facet which is meant to be displayed to the user. */
  displayName: string;
}

/**
 * A {@link FacetOption} with extra data meant to be displayed to the end user.
 *
 * @public
 */
export interface DisplayableFacetOption extends FacetOption {
  /** {@inheritDoc Comparator} */
  comparator: Comparator;
  /** {@inheritDoc FacetOption.comparedValue} */
  comparedValue: string | number | boolean;
  /** The name of the facet option which is meant  to be displayed to the end user. */
  displayName: string;
  /** The number of results associated with this facet option. */
  count: number;
  /** Whether or not the filter is selected in the search results. */
  selected: boolean;
}