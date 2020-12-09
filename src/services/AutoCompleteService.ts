import { AutoCompleteResponse, FilterAutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
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
  universalAutoComplete(request: UniversalAutoCompleteRequest): Promise<AutoCompleteResponse>;

  /**
   * Retrieves query suggestions for a vertical.
   *
   * @param {VerticalAutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  verticalAutoComplete(request: VerticalAutoCompleteRequest): Promise<AutoCompleteResponse>;

  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {FilterAutoCompleteRequest} request
   * @returns {Promise<FilterAutoCompleteResponse>}
   */
  filterAutoComplete(request: FilterAutoCompleteRequest): Promise<FilterAutoCompleteResponse>;
 }