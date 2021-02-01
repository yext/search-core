import { AutocompleteResponse, FilterAutocompleteResponse } from '../models/autocompleteservice/AutocompleteResponse';
import { UniversalAutocompleteRequest, FilterAutocompleteRequest, VerticalAutocompleteRequest } from '../models/autocompleteservice/AutocompleteRequest';

/**
 * A service for autocomplete requests.
 */
export interface AutocompleteService {
  universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse>;
  verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse>;
  filterAutocomplete(request: FilterAutocompleteRequest): Promise<FilterAutocompleteResponse>;
 }