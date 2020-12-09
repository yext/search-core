import { AutoCompleteResponse, FilterAutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { UniversalAutoCompleteRequest, FilterAutoCompleteRequest, VerticalAutoCompleteRequest } from '../models/autocompleteservice/AutoCompleteRequest';

/**
* An interface for a service that performs query suggestions.
*
*/
export interface AutoCompleteService {
  /**
   * Retrieves query suggestions for universal.
   */
  universalAutoComplete(request: UniversalAutoCompleteRequest): Promise<AutoCompleteResponse>;

  /**
   * Retrieves query suggestions for a vertical.
   */
  verticalAutoComplete(request: VerticalAutoCompleteRequest): Promise<AutoCompleteResponse>;

  /**
   * Retrieves query suggestions for filter search.
   */
  filterAutoComplete(request: FilterAutoCompleteRequest): Promise<FilterAutoCompleteResponse>;
 }