import { getCachedLiveApiUrl } from '../utils/urlutils';
import AutoCompleteDataTransformer from '../transformers/autocompleteservice/AutoCompleteDataTransformer';
import { AutoCompleteRequest, SearchParameters } from '../models/autocompleteservice/AutoCompleteRequest';
import { AutoCompleteResponse } from '../models/autocompleteservice/AutoCompleteResponse';
import { defaultApiVersion, LiveApiEndpoints } from '../constants';
import Config from '../models/core/Config';
import HttpServiceImpl from './HttpServiceImpl';
import { AutoCompleteQueryParams } from '../models/http/params';
import { AutoCompleteService } from '../services/AutoCompleteService';


/**
 * Internal interface representing the query params which are sent for a universal
 * autocomplete request.
 */
interface UniversalAutoCompleteQueryParams extends AutoCompleteQueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string | number,
  locale?: string,
  sessionTrackingEnabled?: boolean
}

/**
 * Internal interface representing the query params which are sent for a vertical
 * autocomplete request.
 */
interface VerticalAutoCompleteQueryParams extends AutoCompleteQueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  verticalKey?: string,
  version?: string | number,
  locale?: string,
  sessionTrackingEnabled?: boolean
}

/**
 * Internal interface representing the query params which are sent for a filter
 * autocomplete request.
 */
interface FilterAutoCompleteQueryParams extends AutoCompleteQueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  verticalKey?: string,
  version?: string | number,
  locale?: string,
  sessionTrackingEnabled?: boolean,
  search_parameters?: SearchParameters
}

/**
* A service that performs query suggestions.
*/
export default class AutoCompleteServiceImpl implements AutoCompleteService {
  private config: Config;
  private httpRequester: HttpServiceImpl;
  private baseURL: string;

  constructor(config: Config, httpRequester: HttpServiceImpl) {
    this.config = config;
    this.httpRequester = httpRequester;

    this.baseURL = getCachedLiveApiUrl(this.config.environment);
  }
  /**
   * Retrieves query suggestions for universal.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteData>}
   */
  async autoCompleteForUniversal(request: AutoCompleteRequest): Promise<AutoCompleteResponse> {
    const queryParams: UniversalAutoCompleteQueryParams = {
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
    const rawUniversalAutocompleteResponse = await this.httpRequester.get<any>(
      univeralAutoCompleteURL,
      queryParams);

    return AutoCompleteDataTransformer.from(rawUniversalAutocompleteResponse);
  }

  /**
   * Retrieves query suggestions for a vertical.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteData>}
   */
  async autoCompleteForVertical(request: AutoCompleteRequest): Promise<AutoCompleteResponse> {
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
    const rawVerticalAutocompleteResponse = await this.httpRequester.get<any>(
      verticalAutoCompleteURL,
      queryParams);

    return AutoCompleteDataTransformer.from(rawVerticalAutocompleteResponse);
  }

  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteData>}
   */
  async autoCompleteForFilter(request: AutoCompleteRequest): Promise<AutoCompleteResponse> {
    const queryParams: FilterAutoCompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      search_parameters: request.searchParameters,
      verticalKey: request.verticalKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };
    const filterAutoCompleteURL = this.baseURL + LiveApiEndpoints.FilterAutoComplete;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawFilterAutocompleteResponse = await this.httpRequester.get<any>(
      filterAutoCompleteURL,
      queryParams);

    return AutoCompleteDataTransformer.from(rawFilterAutocompleteResponse);
  }
 }