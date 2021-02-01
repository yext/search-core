import { createAutocompleteResponse, createFilterAutocompleteResponse } from '../transformers/autocompleteservice/createAutocompleteResponse';
import { VerticalAutocompleteRequest, FilterAutocompleteRequest,
  UniversalAutocompleteRequest, SearchParameters, SearchParameterField }
  from '../models/autocompleteservice/AutocompleteRequest';
import { AutocompleteResponse, FilterAutocompleteResponse } from '../models/autocompleteservice/AutocompleteResponse';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { HttpService }from '../services/HttpService';
import { AutocompleteQueryParams } from '../models/autocompleteservice/AutocompleteQueryParams';
import { AutocompleteService } from '../services/AutocompleteService';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/answersapi/ApiResponse';

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
interface FilterAutocompleteQueryParams extends AutocompleteQueryParams {
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
    this.filterEndpoint = this.config.endpoints?.filterAutocomplete
      ?? defaultEndpoints.filterAutocomplete;
  }

  /**
   * Retrieves query suggestions for universal.
   *
   * @param {AutocompleteRequest} request
   * @returns {Promise<AutocompleteResponse>}
   */
  async universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse> {
    const queryParams: AutocompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };

    const response = await this.httpService.get<ApiResponse>(
      this.universalEndpoint,
      queryParams);

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createAutocompleteResponse(response);
  }

  /**
   * Retrieves query suggestions for a vertical.
   *
   * @param {VerticalAutocompleteRequest} request
   * @returns {Promise<AutocompleteResponse>}
   */
  async verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse> {
    const queryParams: VerticalAutocompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      verticalKey: request.verticalKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };

    const response = await this.httpService.get<ApiResponse>(
      this.verticalEndpoint,
      queryParams);

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createAutocompleteResponse(response);
  }

  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {FilterAutocompleteRequest} request
   * @returns {Promise<AutocompleteResponse>}
   */
  async filterAutocomplete(request: FilterAutocompleteRequest): Promise<FilterAutocompleteResponse> {
    const searchParams = this.getFilterSearchParams(request.searchParameters);
    const queryParams: FilterAutocompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      search_parameters: JSON.stringify(searchParams),
      verticalKey: request.verticalKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };

    const response = await this.httpService.get<ApiResponse>(
      this.filterEndpoint,
      queryParams);

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createFilterAutocompleteResponse(response);
  }

  private getFilterSearchParams(searchParams: SearchParameters) {
    const convertedFields = searchParams.fields.map((field: SearchParameterField) => (
      {
        fieldId: field.fieldApiName,
        entityTypeId: field.entityType,
        shouldFetchEntities: field.fetchEntities
      }
    ));
    const convertedSearchParams = {
      sectioned: searchParams.sectioned,
      fields: convertedFields
    };
    return convertedSearchParams;
  }
 }