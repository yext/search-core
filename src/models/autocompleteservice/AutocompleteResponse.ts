import { FieldValueFilter } from '../searchservice/request/FieldValueFilter';
import { SearchIntent } from '../searchservice/response/SearchIntent';
import { Result } from '../searchservice/response/Result';

/**
 * The response of a universal or vertical autocomplete request.
 *
 * @public
 */
export interface AutocompleteResponse {
  /** An array of {@link AutocompleteResult}s. */
  results: AutocompleteResult[],
  /** {@inheritDoc SearchIntent} */
  inputIntents: SearchIntent[],
  /** The ID of the search query. */
  queryId?: string,
  /** A unique id which corresponds to the request. */
  uuid: string
}

/**
 * The response of a filtersearch request.
 *
 * @public
 */
export interface FilterSearchResponse {
  /**
   * Represents autocomplete results separated by field.
   *
   * @remarks
   * If sectioned is true, the matching filters will be returned in a separate section per field.
   * By default, they are all returned in the same section.
   */
  sections: {
    /** A display label for the field.
     *
     * @remarks
     * When sectioned is false, there's no label since all filters wil be returned in same section.
     */
    label?: string,
    /** An array of {@link AutocompleteResult}s. */
    results: AutocompleteResult[]
  }[],
  /** ID of the account associated with this Search experience. */
  businessId?: string,
  /** {@inheritDoc AutocompleteResponse.queryId} */
  queryId?: string,
  /** A unique id which corresponds to the request. */
  uuid: string
}

/**
 * An autocomplete suggestion.
 *
 * @public
 */
export interface AutocompleteResult {
  /** The value of an autocomplete suggestion. */
  value: string,
  /**
   * A filter applied to the autocomplete response.
   *
   * @remarks
   * This property is only defined for filtersearch.
   */
  filter?: FieldValueFilter,
  /**
   * The fieldId which corresponds to the AutocompleteResult value.
   *
   * @remarks
   * This property is only defined for filtersearch.
   */
  key?: string,
  /**
   * An array of substrings which overlap with the autocomplete input.
   *
   * @remarks
   * Offset indicates the index of the match, and the length indicates the number of characters of the match.
   */
  matchedSubstrings?: {
    length: number,
    offset: number
  }[],
  /**
   * An entity that corresponds to the autocomplete result.
   *
   * @remarks
   * This property is only defined if the corresponding
   * {@link SearchParameterField.fetchEntities} field is true.
   */
  relatedItem?: Result,
  /**
   * Any vertical keys associated with a prompt.
   * This only shows up on universal autocomplete requests.
   **/
  verticalKeys?: string[],
  /**
   * {@link SearchIntent}s corresponding to the autocomplete result.
   */
  inputIntents: SearchIntent[]
}
