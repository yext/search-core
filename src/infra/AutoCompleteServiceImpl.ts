import { createAutoCompleteResponse } from '../transformers/autocompleteservice/createAutoCompleteResponse';
import { VerticalAutoCompleteRequest, FilterAutoCompleteRequest,
  UniversalAutoCompleteRequest, SearchParameters, SearchParameterField }
  from '../models/autocompleteservice/AutoCompleteRequest';
import { AutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import AnswersConfig from '../models/core/AnswersConfig';
import HttpService from '../services/HttpService';
import { AutoCompleteQueryParams } from '../models/autocompleteservice/autocompleteparams';
import { AutoCompleteService } from '../services/AutoCompleteService';

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
export default class AutoCompleteServiceImpl implements AutoCompleteService {
  private config: AnswersConfig;
  private httpService: HttpService;
  private universalEndpoint: string;
  private verticalEndpoint: string;
  private filterEndpoint: string;

  constructor(config: AnswersConfig, httpRequester: HttpService) {
    this.config = config;
    this.httpService = httpRequester;
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawUniversalAutocompleteResponse = await this.httpService.get<any>(
      this.universalEndpoint,
      queryParams);

    return createAutoCompleteResponse(rawUniversalAutocompleteResponse);
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawVerticalAutocompleteResponse = await this.httpService.get<any>(
      this.verticalEndpoint,
      queryParams);

    return createAutoCompleteResponse(rawVerticalAutocompleteResponse);
  }

  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {FilterAutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  async filterAutoComplete(request: FilterAutoCompleteRequest): Promise<AutoCompleteResponse> {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawFilterAutocompleteResponse = await this.httpService.get<any>(
      this.filterEndpoint,
      queryParams);

    return createAutoCompleteResponse(rawFilterAutocompleteResponse);
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