import { getCachedLiveApiUrl } from '../utils/urlutils';
import AutoCompleteDataTransformer from './AutoCompleteDataTransformer';
import AutoCompleteRequest from '../models/autocompleteservice/AutoCompleteRequest';
import AutoCompleteData from '../models/autocompleteservice/AutoCompleteData';
import { defaultApiVersion } from '../constants';
import Config from '../models/core/Config';
import HttpServiceImpl from './HttpServiceImpl';
import { QueryParams } from '../models/http/params';
import { AnswersEndpointError } from '../errors/errors';
import { AutoCompleteService } from '../services/AutoCompleteService';


/**
 * Internal interface representing the query params which are sent for a universal
 * autocomplete request.
 */
interface UniversalAutocompleteQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string,
  locale?: string,
  sessionTrackingEnabled?: boolean
}

/**
 * Internal interface representing the query params which are sent for a vertical
 * autocomplete request.
 */
interface VerticalAutocompleteQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  verticalKey?: string,
  version?: string,
  locale?: string,
  sessionTrackingEnabled?: boolean
}

/**
 * Internal interface representing the query params which are sent for a filter
 * autocomplete request.
 */
interface FilterAutocompleteQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  verticalKey?: string,
  version?: string,
  locale?: string,
  sessionTrackingEnabled?: boolean,
  search_parameters: any
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
  async autoCompleteForUniversal(request: AutoCompleteRequest): Promise<AutoCompleteData> {
    const queryParams: UniversalAutocompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };
    const univeralAutoCompleteURL = this.baseURL + '/v2/accounts/me/answers/autocomplete';

    const rawUniversalAutocompleteResponse = await this.httpRequester.get<any>(
      univeralAutoCompleteURL,
      queryParams);

    return rawUniversalAutocompleteResponse.json()
    .then((response: { response: any; }) => AutoCompleteDataTransformer.universal(response.response))
    .catch((error: any) => {
      throw new AnswersEndpointError('Universal search request failed', 'AutoComplete', error);
    });
  }

  /**
   * Retrieves query suggestions for a vertical.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteData>}
   */
  async autoCompleteForVertical(request: AutoCompleteRequest): Promise<AutoCompleteData> {
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
    const verticalAutoCompleteURL = this.baseURL + '/v2/accounts/me/answers/vertical/autocomplete';

    const rawVerticalAutocompleteResponse = await this.httpRequester.get<any>(
      verticalAutoCompleteURL,
      queryParams);

    return rawVerticalAutocompleteResponse.json()
    .then((response: { response: any; }) => AutoCompleteDataTransformer.vertical(response.response))
    .catch((error: any) => {
      throw new AnswersEndpointError('Vertical search request failed', 'AutoComplete', error);
    });
  }

  /**
   * Retrieves query suggestions for filter search.
   *
   * @param {AutoCompleteRequest} request
   * @returns {Promise<AutoCompleteData>}
   */
  async autoCompleteForFilter(request: AutoCompleteRequest): Promise<AutoCompleteData> {
    const queryParams: FilterAutocompleteQueryParams = {
      input: request.input,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      search_parameters: this.config.searchParameters,
      verticalKey: request.verticalKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled
    };
    const filterAutoCompleteURL = this.baseURL + '/v2/accounts/me/answers/vertical/autocomplete';

    const rawFilterAutocompleteResponse = await this.httpRequester.get<any>(
      filterAutoCompleteURL,
      queryParams);

    return rawFilterAutocompleteResponse.json()
    .then((response: { response: any; }) => AutoCompleteDataTransformer.filter(response.response))
    .catch((error: any) => {
      throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
    });
  }
 }