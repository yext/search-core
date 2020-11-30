import { getCachedLiveApiUrl } from '../utils/urlutils';
import { createAutoCompleteResponse } from '../transformers/autocompleteservice/createAutoCompleteResponse';
import { AutoCompleteRequest, VerticalAutoCompleteRequest, FilterAutoCompleteRequest }
  from '../models/autocompleteservice/AutoCompleteRequest';
import { AutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { defaultApiVersion, LiveApiEndpoints } from '../constants';
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
  private baseURL: string;

  constructor(config: Config, httpRequester: HttpServiceImpl) {
    this.config = config;
    this.httpService = httpRequester;

    this.baseURL = getCachedLiveApiUrl(this.config.environment);
  }
  /**
   * Retrieves query suggestions for universal.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteResponse>}
   */
  async autoCompleteForUniversal(request: AutoCompleteRequest): Promise<AutoCompleteResponse> {
    const queryParams: AutoCompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };
    const univeralAutoCompleteURL = this.baseURL + LiveApiEndpoints.UniversalAutoComplete;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawUniversalAutocompleteResponse = await this.httpService.get<any>(
      univeralAutoCompleteURL,
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
    const verticalAutoCompleteURL = this.baseURL + LiveApiEndpoints.VerticalAutoComplete;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawVerticalAutocompleteResponse = await this.httpService.get<any>(
      verticalAutoCompleteURL,
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
    const filterAutoCompleteURL = this.baseURL + LiveApiEndpoints.FilterAutoComplete;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawFilterAutocompleteResponse = await this.httpService.get<any>(
      filterAutoCompleteURL,
      queryParams);

    return createAutoCompleteResponse(rawFilterAutocompleteResponse);
  }
 }