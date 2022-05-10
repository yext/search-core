import { AutocompleteResponse, FilterSearchResponse } from '../models/autocompleteservice/AutocompleteResponse';
import { UniversalAutocompleteRequest, FilterSearchRequest, VerticalAutocompleteRequest } from '../models/autocompleteservice/AutocompleteRequest';

/**
 * A service for autocomplete requests.
 *
 * @public
 */
export interface AutocompleteService {
  /**
   * Retrieves query suggestions for universal.
   */
  universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse>,

  /**
   * Retrieves query suggestions for a vertical.
   */
  verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse>,

  /**
   * Retrieves query suggestions for filter search.
   */
  filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse>
}