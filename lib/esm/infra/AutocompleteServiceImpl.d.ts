import { VerticalAutocompleteRequest, FilterSearchRequest, UniversalAutocompleteRequest } from '../models/autocompleteservice/AutocompleteRequest';
import { AutocompleteResponse, FilterSearchResponse } from '../models/autocompleteservice/AutocompleteResponse';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { HttpService } from '../services/HttpService';
import { AutocompleteService } from '../services/AutocompleteService';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
/**
* A service that performs query suggestions.
*/
export declare class AutocompleteServiceImpl implements AutocompleteService {
    private config;
    private httpService;
    private apiResponseValidator;
    private universalEndpoint;
    private verticalEndpoint;
    private filterEndpoint;
    constructor(config: AnswersConfig, httpRequester: HttpService, apiResponseValidator: ApiResponseValidator);
    /**
     * Retrieves query suggestions for universal.
     *
     * @param {AutocompleteRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse>;
    /**
     * Retrieves query suggestions for a vertical.
     *
     * @param {VerticalAutocompleteRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse>;
    /**
     * Retrieves query suggestions for filter search.
     *
     * @param {FilterSearchRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse>;
    private serializeSearchParameterFields;
}
//# sourceMappingURL=AutocompleteServiceImpl.d.ts.map