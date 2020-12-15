/**
 * Options for a universal autocomplete request.
 *
 * @public
 */
export interface UniversalAutoCompleteRequest {
  /** The input string for autocomplete. */
  input: string,
  /** Enables session tracking. */
  sessionTrackingEnabled?: boolean,
}

/**
 * Options for a vertial autocomplete request.
 *
 * @public
 */
export interface VerticalAutoCompleteRequest {
  /** {@inheritDoc UniversalAutoCompleteRequest.input} */
  input: string,
  /** {@inheritDoc UniversalAutoCompleteRequest.sessionTrackingEnabled} */
  sessionTrackingEnabled?: boolean,
  /** Limits autocomplete suggestions to a single vertical. */
  verticalKey: string,
}

/**
 * Options for a filter autocomplete request.
 *
 * @public
 */
export interface FilterAutoCompleteRequest {
  /** {@inheritDoc UniversalAutoCompleteRequest.input} */
  input: string,
  /** {@inheritDoc UniversalAutoCompleteRequest.sessionTrackingEnabled} */
  sessionTrackingEnabled?: boolean,
  /** {@inheritDoc VerticalAutoCompleteRequest.verticalKey} */
  verticalKey: string,
  /** {@inheritDoc SearchParameters} */
  searchParameters: SearchParameters
}

/**
 * Options for a filter autocomplete request.
 *
 * @privateRemarks
 * We may be able to remove this model and instead put these options in FilterAutcompleteRequest.
 *
 * @public
 */
export interface SearchParameters {
  /**
   * Determines whether or not the results of the {@link FilterAutoCompleteResponse} are separated by field.
   */
  sectioned: boolean,
  /** An array of {@link SearchParameterField} */
  fields: SearchParameterField[];
}

/**
 * Indicates which entity field to perform the autocomplete request on.
 *
 * @public
 */
export interface SearchParameterField {
  /** The field to perform the autocomplete on. */
  fieldApiName: string,
  /** The entityType to perform the autocomplete on. */
  entityType: string,
  /**
   * Indicates whether or not to return the {@link AutoCompleteResult.relatedItem} associated with the autcomplete result.
   */
  fetchEntities: boolean
}


