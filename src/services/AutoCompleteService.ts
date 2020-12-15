import { AutoCompleteResponse, FilterAutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { UniversalAutoCompleteRequest, FilterAutoCompleteRequest, VerticalAutoCompleteRequest } from '../models/autocompleteservice/AutoCompleteRequest';

/**
 * A service for autocomplete requests.
 */
export interface AutoCompleteService {
  universalAutoComplete(request: UniversalAutoCompleteRequest): Promise<AutoCompleteResponse>;
  verticalAutoComplete(request: VerticalAutoCompleteRequest): Promise<AutoCompleteResponse>;
  filterAutoComplete(request: FilterAutoCompleteRequest): Promise<FilterAutoCompleteResponse>;
 }