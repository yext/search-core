import { Filter } from '../searchservice/request/Filter';
import { SearchIntent } from '../searchservice/response/SearchIntent';
import { Result } from '../searchservice/response/Result';

/**
 * The response of a universal or vertical autocomplete request.
 *
 * @public
 */
export interface AutocompleteResponse {
  /** An array of {@link AutocompleteResult}s. */
  results: AutocompleteResult[];
  /** {@inheritDoc SearchIntent} */
  inputIntents: SearchIntent[];
  /** The ID of the search query. */
  queryId?: string;
  /** A unique id which corresponds to the request. */
  uuid: string;
}

/**
 * The response of a filtersearch request.
 *
 * @public
 */
export interface FilterSearchResponse {
  /** Indicates that the results are separated by field in the sections property. */
  sectioned: boolean,
  /**
   * Represents autocomplete results separated by field.
   *
   * @remarks
   * This array will only be populated if sectioned is true.
   */
  sections: {
    /** A display label for the field. */
    label: string,
    /** An array of {@link AutocompleteResult}s. */
    results: AutocompleteResult[];
  }[],
  /**
   * An array of {@link AutocompleteResult}s.
   *
   * @remarks
   * This array will only be populated if sectioned is false.
   */
  results: AutocompleteResult[],
  /** {@inheritDoc SearchIntent} */
  inputIntents: SearchIntent[];
  /** {@inheritDoc AutocompleteResponse.queryId} */
  queryId?: string,
  /** A unique id which corresponds to the request. */
  uuid: string;
}

/**
 * An autocomplete suggestion.
 *
 * @public
 */
export interface AutocompleteResult {
  /** The value of an autocomplete suggestion. */
  value: string;
  /**
   * A filter applied to the autocomplete response.
   *
   * @remarks
   * This property is only defined for filtersearch.
   */
  filter?: Filter;
  /**
   * The fieldId which corresponds to the AutocompleteResult value.
   *
   * @remarks
   * This property is only defined for filtersearch.
   */
  key?: string;
  /**
   * An array of substrings which overlap with the autocomplete input.
   *
   * @remarks
   * Offset indicates the index of the match, and the length indicates the number of characters of the match.
   */
  matchedSubstrings?: {
    length: number,
    offset: number
  }[];
  /**
   * An entity that corresponds to the autocomplete result.
   *
   * @remarks
   * This property is only defined if the corresponding
   * {@link SearchParameterField.fetchEntities} field is true.
   */
  relatedItem?: Result
  /**
   * Any vertical keys associated with a prompt.
   * This only shows up on universal autocomplete requests.
   **/
  verticalKeys?: string[]
}
