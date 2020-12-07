import { AutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { UniversalAutoCompleteRequest, FilterAutoCompleteRequest, VerticalAutoCompleteRequest } from '../models/autocompleteservice/AutoCompleteRequest';

/**
* An interface for a service that performs query suggestions.
*
*/
export interface AutoCompleteService {
  /**
   * Retrieves query suggestions for universal.
   *
   * @param {UniversalAutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  autoCompleteForUniversal(request: UniversalAutoCompleteRequest): Promise<AutoCompleteResponse>;

  /**
   * Retrieves query suggestions for a vertical.
   *
   * @param {VerticalAutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  autoCompleteForVertical(request: VerticalAutoCompleteRequest): Promise<AutoCompleteResponse>;

  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {FilterAutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  autoCompleteForFilter(request: FilterAutoCompleteRequest): Promise<AutoCompleteResponse>;
 }