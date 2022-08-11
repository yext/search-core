import { SearchRequest } from '../core/SearchRequest';
import { FieldValueFilter } from '../searchservice/request/FieldValueFilter';

/**
 * Options for a universal autocomplete request.
 *
 * @public
 */
export interface UniversalAutocompleteRequest extends SearchRequest {
  /** The input string for autocomplete. */
  input: string,
  /** Enables session tracking. */
  sessionTrackingEnabled?: boolean
}

/**
 * Options for a vertial autocomplete request.
 *
 * @public
 */
export interface VerticalAutocompleteRequest extends SearchRequest {
  /** {@inheritDoc UniversalAutocompleteRequest.input} */
  input: string,
  /** {@inheritDoc UniversalAutocompleteRequest.sessionTrackingEnabled} */
  sessionTrackingEnabled?: boolean,
  /** The key for the vertical to get autocomplete suggestions from. */
  verticalKey: string
}

/**
 * Options for a filtersearch request.
 *
 * @public
 */
export interface FilterSearchRequest extends SearchRequest {
  /** {@inheritDoc UniversalAutocompleteRequest.input} */
  input: string,
  /** {@inheritDoc UniversalAutocompleteRequest.sessionTrackingEnabled} */
  sessionTrackingEnabled?: boolean,
  /** {@inheritDoc VerticalAutocompleteRequest.verticalKey} */
  verticalKey: string,
  /** Determines whether or not the results of the {@link FilterSearchResponse} are separated by field. */
  sectioned: boolean,
  /** An array of {@link SearchParameterField}. */
  fields: SearchParameterField[],
  /** An array of field value filters that should be excluded from filter search results. */
  excluded?: FieldValueFilter[]
}

/**
 * Indicates which entity field to perform the autocomplete request on.
 *
 * @public
 */
export interface SearchParameterField {
  /** The fieldApiName to perform the autocomplete on. */
  fieldApiName: string,
  /** The entityType to perform the autocomplete on. */
  entityType: string,
  /**
   * Indicates whether or not to return the {@link AutocompleteResult.relatedItem}
   * associated with the autocomplete result.
   */
  fetchEntities: boolean
}
