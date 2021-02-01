import { SimpleFilter } from '../searchservice/request/SimpleFilter';
import { SearchIntent } from '../searchservice/response/SearchIntent';

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
 * The response of a filtersearch
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
  filter?: SimpleFilter;
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
   * This property is only defined if the corresponding {@link SearchParameterField.fetchEntities} field is true.
   */
  relatedItem?: {
    /** Entity data which is synonymous to {@link Result.rawData}. */
    data: Record<string, unknown>,
    /**
     * Represents field values or substrings of field values emphasized by the Answers API.
     *
     * @remarks
     * This property is similar to {@link HighlightedValue} except the data is shaped differently.
     *
     * @example
     * ```
     * {
     *   name: {
     *     value: "Virginia Beach",
     *     matchedSubstrings: [{offset: 0, length: 8}]
     *   }
     * }
     * ```
     */
    highlightedFields: Record<string, unknown>
  };
}
