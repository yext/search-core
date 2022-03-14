import { createAutocompleteResponse, createFilterSearchResponse } from '../transformers/autocompleteservice/createAutocompleteResponse';
import { VerticalAutocompleteRequest, FilterSearchRequest,
  UniversalAutocompleteRequest, SearchParameterField }
  from '../models/autocompleteservice/AutocompleteRequest';
import { AutocompleteResponse, FilterSearchResponse } from '../models/autocompleteservice/AutocompleteResponse';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { HttpService }from '../services/HttpService';
import { AutocompleteQueryParams } from '../models/autocompleteservice/AutocompleteQueryParams';
import { AutocompleteService } from '../services/AutocompleteService';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/answersapi/ApiResponse';
import { getClientSdk } from '../utils/getClientSdk';

/**
 * Internal interface representing the query params which are sent for a vertical
 * autocomplete request.
 */
interface VerticalAutocompleteQueryParams extends AutocompleteQueryParams {
  verticalKey?: string,
}

/**
 * Internal interface representing the query params which are sent for a filter
 * autocomplete request.
 */
interface FilterSearchQueryParams extends AutocompleteQueryParams {
  verticalKey?: string,
  search_parameters?: string
}

/**
* A service that performs query suggestions.
*/
export class AutocompleteServiceImpl implements AutocompleteService {
  private config: AnswersConfig;
  private httpService: HttpService;
  private apiResponseValidator;
  private universalEndpoint: string;
  private verticalEndpoint: string;
  private filterEndpoint: string;

  constructor(
    config: AnswersConfig,
    httpRequester: HttpService,
    apiResponseValidator: ApiResponseValidator
  ) {
    this.config = config;
    this.httpService = httpRequester;
    this.apiResponseValidator = apiResponseValidator;
    this.universalEndpoint = this.config.endpoints?.universalAutocomplete
      ?? defaultEndpoints.universalAutocomplete;
    this.verticalEndpoint = this.config.endpoints?.verticalAutocomplete
      ?? defaultEndpoints.verticalAutocomplete;
    this.filterEndpoint = this.config.endpoints?.filterSearch
      ?? defaultEndpoints.filterSearch;
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
        getClientSdk(request.customClientSdk),
        this.config.token
      )
      : await this.httpService.get<ApiResponse>(
        this.universalEndpoint,
        queryParams,
        getClientSdk(request.customClientSdk)
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
        getClientSdk(request.customClientSdk),
        this.config.token
      )
      : await this.httpService.get<ApiResponse>(
        this.verticalEndpoint,
        queryParams,
        getClientSdk(request.customClientSdk)
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
      fields: this.serializeSearchParameterFields(request.fields)
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
      ...this.config?.additionalQueryParams
    };

    const response = 'token' in this.config
      ? await this.httpService.get<ApiResponse>(
        this.filterEndpoint,
        queryParams,
        getClientSdk(request.customClientSdk),
        this.config.token
      )
      : await this.httpService.get<ApiResponse>(
        this.filterEndpoint,
        queryParams,
        getClientSdk(request.customClientSdk)
      );

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createFilterSearchResponse(response);
  }

  private serializeSearchParameterFields(fields: SearchParameterField[]) {
    return fields.map(({ fieldApiName, entityType, fetchEntities}) => (
      {
        fieldId: fieldApiName,
        entityTypeId: entityType,
        shouldFetchEntities: fetchEntities
      }
    ));
  }
}