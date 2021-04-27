import { AutocompleteResponse, FilterSearchResponse } from '../models/autocompleteservice/AutocompleteResponse';
import { UniversalAutocompleteRequest, FilterSearchRequest, VerticalAutocompleteRequest } from '../models/autocompleteservice/AutocompleteRequest';
/**
 * A service for autocomplete requests.
 */
export interface AutocompleteService {
    universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse>;
    verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse>;
    filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse>;
}
//# sourceMappingURL=AutocompleteService.d.ts.map