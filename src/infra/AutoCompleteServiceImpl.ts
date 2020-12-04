import { createAutoCompleteResponse } from '../transformers/autocompleteservice/createAutoCompleteResponse';
import { AutoCompleteRequest, VerticalAutoCompleteRequest, FilterAutoCompleteRequest, UniversalAutoCompleteRequest }
  from '../models/autocompleteservice/AutoCompleteRequest';
import { AutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import Config from '../models/core/Config';
import HttpServiceImpl from './HttpServiceImpl';
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
  private config: Config;
  private httpService: HttpServiceImpl;
  private universalEndpoint: string;
  private verticalEndpoint: string;
  private filterEndpoint: string;

  constructor(config: Config, httpRequester: HttpServiceImpl) {
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
   * Performs an auto complete request based on the type of request
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  async autoComplete(request: AutoCompleteRequest): Promise<AutoCompleteResponse> {
    if (this.isFilterAutoCompleteRequest(request)) {
      return await this.autoCompleteForFilter(request);
    } else if (this.isVerticalAutoCompleteRequest(request)) {
      return await this.autoCompleteForVertical(request);
    } else {
      return await this.autoCompleteForUniversal(request);
    }
  }

  isFilterAutoCompleteRequest(request: AutoCompleteRequest): request is FilterAutoCompleteRequest {
    const searchParameters = (request as FilterAutoCompleteRequest).searchParameters;

    return this.isVerticalAutoCompleteRequest && searchParameters !== undefined;
  }

  isVerticalAutoCompleteRequest(request: AutoCompleteRequest): request is VerticalAutoCompleteRequest {
    const verticalKey = (request as VerticalAutoCompleteRequest).verticalKey;

    return this.isUniversalAutoCompleteRequest && verticalKey !== undefined;
  }

  isUniversalAutoCompleteRequest(request: AutoCompleteRequest): request is UniversalAutoCompleteRequest {
    return request.input !== undefined;
  }


  /**
   * Retrieves query suggestions for universal.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  async autoCompleteForUniversal(request: UniversalAutoCompleteRequest): Promise<AutoCompleteResponse> {
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
  async autoCompleteForVertical(request: VerticalAutoCompleteRequest): Promise<AutoCompleteResponse> {
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
  async autoCompleteForFilter(request: FilterAutoCompleteRequest): Promise<AutoCompleteResponse> {
    const queryParams: FilterAutoCompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      search_parameters: JSON.stringify(request.searchParameters),
      verticalKey: request.verticalKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawFilterAutocompleteResponse = await this.httpService.get<any>(
      this.filterEndpoint,
      queryParams);

    return createAutoCompleteResponse(rawFilterAutocompleteResponse);
  }
 }