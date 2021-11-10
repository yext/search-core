import { Filter } from '../searchservice/request/Filter';
import { SearchIntent } from '../searchservice/response/SearchIntent';
import { Result } from '../searchservice/response/Result';
import { ErrorType } from '../../models/searchservice/response/ErrorType';

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
    results: AutocompleteResult[];
  }[],
  /** Contains error information when one or more verticals fail to return results. */
  failedVerticals: {
    /** a key that uniquely identifies the vertical. */
    verticalConfigId: string,
    /** type of error causing the failure. */
    errorType: ErrorType,
    /** additional information related to the error. */
    details: {
      /** An HTTP response status code indicating the completion status of the request. */
      responseCode: number,
      /** Message explaining the error. */
      description: string
    },
    /** The duration of the query in milliseconds. */
    queryDurationMillis: number
  }[],
  /** ID of the account associated with this Answers experience */
  businessId?: string,
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
}
