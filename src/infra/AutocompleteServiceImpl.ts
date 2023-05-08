import { createAutocompleteResponse, createFilterSearchResponse } from '../transformers/autocompleteservice/createAutocompleteResponse';
import {
  VerticalAutocompleteRequest,
  FilterSearchRequest,
  UniversalAutocompleteRequest
} from '../models/autocompleteservice/AutocompleteRequest';
import { AutocompleteResponse, FilterSearchResponse } from '../models/autocompleteservice/AutocompleteResponse';
import { defaultApiVersion } from '../provideEndpoints';
import { SearchConfigWithDefaulting } from '../models/core/SearchConfig';
import { HttpService } from '../services/HttpService';
import { AutocompleteQueryParams } from '../models/autocompleteservice/AutocompleteQueryParams';
import { AutocompleteService } from '../services/AutocompleteService';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/searchapi/ApiResponse';
import { getClientSdk } from '../utils/getClientSdk';
import { serializeExcludedFields, serializeSearchParameterFields } from '../serializers/serializeFilterSearch';

/**
 * Internal interface representing the query params which are sent for a vertical
 * autocomplete request.
 */
interface VerticalAutocompleteQueryParams extends AutocompleteQueryParams {
  verticalKey?: string
}

/**
 * Internal interface representing the query params which are sent for a filter
 * autocomplete request.
 */
interface FilterSearchQueryParams extends AutocompleteQueryParams {
  verticalKey?: string,
  search_parameters?: string,
  excluded?: string
}

/**
* A service that performs query suggestions.
*/
export class AutocompleteServiceImpl implements AutocompleteService {
  private config: SearchConfigWithDefaulting;
  private httpService: HttpService;
  private apiResponseValidator;
  private universalEndpoint: string;
  private verticalEndpoint: string;
  private filterEndpoint: string;

  constructor(
    config: SearchConfigWithDefaulting,
    httpRequester: HttpService,
    apiResponseValidator: ApiResponseValidator
  ) {
    this.config = config;
    this.httpService = httpRequester;
    this.apiResponseValidator = apiResponseValidator;
    this.universalEndpoint = this.config.endpoints.universalAutocomplete;
    this.verticalEndpoint = this.config.endpoints.verticalAutocomplete;
    this.filterEndpoint = this.config.endpoints.filterSearch;
  }

  async universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse> {
    const queryParams: AutocompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      visitorId: this.config.visitor?.id,
      visitorIdMethod: this.config.visitor?.idMethod,
      ...this.config?.additionalQueryParams
    };

    const response = 'token' in this.config
      ? await this.httpService.get<ApiResponse>(
        this.universalEndpoint,
        queryParams,
        getClientSdk(request.additionalHttpHeaders),
        this.config.token
      )
      : await this.httpService.get<ApiResponse>(
        this.universalEndpoint,
        queryParams,
        getClientSdk(request.additionalHttpHeaders)
      );

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createAutocompleteResponse(response);
  }

  async verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse> {
    const queryParams: VerticalAutocompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      verticalKey: request.verticalKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      visitorId: this.config.visitor?.id,
      visitorIdMethod: this.config.visitor?.idMethod,
      ...this.config?.additionalQueryParams
    };

    const response = 'token' in this.config
      ? await this.httpService.get<ApiResponse>(
        this.verticalEndpoint,
        queryParams,
        getClientSdk(request.additionalHttpHeaders),
        this.config.token
      )
      : await this.httpService.get<ApiResponse>(
        this.verticalEndpoint,
        queryParams,
        getClientSdk(request.additionalHttpHeaders)
      );

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createAutocompleteResponse(response);
  }

  async filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse> {
    const searchParams = {
      sectioned: request.sectioned,
      fields: serializeSearchParameterFields(request.fields)
    };
    const queryParams: FilterSearchQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      search_parameters: JSON.stringify(searchParams),
      verticalKey: request.verticalKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      visitorId: this.config.visitor?.id,
      visitorIdMethod: this.config.visitor?.idMethod,
      excluded: JSON.stringify(serializeExcludedFields(request.excluded)),
      ...this.config?.additionalQueryParams
    };

    const response = 'token' in this.config
      ? await this.httpService.get<ApiResponse>(
        this.filterEndpoint,
        queryParams,
        getClientSdk(request.additionalHttpHeaders),
        this.config.token
      )
      : await this.httpService.get<ApiResponse>(
        this.filterEndpoint,
        queryParams,
        getClientSdk(request.additionalHttpHeaders)
      );

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createFilterSearchResponse(response);
  }
}