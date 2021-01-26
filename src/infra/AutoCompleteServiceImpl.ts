import { createAutoCompleteResponse, createFilterAutoCompleteResponse } from '../transformers/autocompleteservice/createAutoCompleteResponse';
import { VerticalAutoCompleteRequest, FilterAutoCompleteRequest,
  UniversalAutoCompleteRequest, SearchParameters, SearchParameterField }
  from '../models/autocompleteservice/AutoCompleteRequest';
import { AutoCompleteResponse, FilterAutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { HttpService }from '../services/HttpService';
import { AutoCompleteQueryParams } from '../models/autocompleteservice/autocompleteparams';
import { AutoCompleteService } from '../services/AutoCompleteService';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/answersapi/ApiResponse';

/**
 * Internal interface representing the query params which are sent for a vertical
 * autocomplete request.
 */
interface VerticalAutoCompleteQueryParams extends AutoCompleteQueryParams {
  verticalKey?: string,
}

/**
 * Internal interface representing the query params which are sent for a filter
 * autocomplete request.
 */
interface FilterAutoCompleteQueryParams extends AutoCompleteQueryParams {
  verticalKey?: string,
  search_parameters?: string
}

/**
* A service that performs query suggestions.
*/
export class AutoCompleteServiceImpl implements AutoCompleteService {
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
    this.universalEndpoint = this.config.endpoints?.universalAutoComplete
      ?? defaultEndpoints.universalAutoComplete;
    this.verticalEndpoint = this.config.endpoints?.verticalAutoComplete
      ?? defaultEndpoints.verticalAutoComplete;
    this.filterEndpoint = this.config.endpoints?.filterAutoComplete
      ?? defaultEndpoints.filterAutoComplete;
  }

  /**
   * Retrieves query suggestions for universal.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  async universalAutoComplete(request: UniversalAutoCompleteRequest): Promise<AutoCompleteResponse> {
    const queryParams: AutoCompleteQueryParams = {
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

    return createAutoCompleteResponse(response);
  }

  /**
   * Retrieves query suggestions for a vertical.
   *
   * @param {VerticalAutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  async verticalAutoComplete(request: VerticalAutoCompleteRequest): Promise<AutoCompleteResponse> {
    const queryParams: VerticalAutoCompleteQueryParams = {
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

    return createAutoCompleteResponse(response);
  }

  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {FilterAutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  async filterAutoComplete(request: FilterAutoCompleteRequest): Promise<FilterAutoCompleteResponse> {
    const searchParams = this.getFilterSearchParams(request.searchParameters);
    const queryParams: FilterAutoCompleteQueryParams = {
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

    return createFilterAutoCompleteResponse(response);
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