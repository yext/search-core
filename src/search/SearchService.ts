import HttpRequester from '../http/HttpRequester';
import { QueryParams } from '../http/urlUtils';
import { BaseUrls, defaultApiVersion } from '../constants';
import UniversalSearchResponse from '../models/UniversalSearchResponse';
//import VerticalSearchResponse from '../models/VerticalSearchResponse';

/**
 * Public interface for constructing a universal search
 */
export interface UniversalSearchRequest {
  query: string,
  // These query trigger values were in the SDK. Do we want to enforce these values?
  // Does the backend expect them?
  queryTrigger?: 'initialize' | 'query-parameter',
  spellCheckEnabled?: boolean,
  sessionTrackingEnabled?: boolean,
  geolocation?: Geolocation
}

/**
 * Internal interface representing the universal search query params
 */
interface UniversalSearchQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string,
  location?: string,
  locale?: string,
  skipSpellCheck?: boolean,
  sessionTrackingEnabled?: boolean
  queryTrigger?: string,
  /* (cea2aj) Does it make sense for the core to send these params? */
  // context?: string,
  // referrerPageUrl?: string
}

const enum LiveApiEndpoints {
  UniversalSearch = '/v2/accounts/me/answers/query',
  VerticalSearch = '/v2/accounts/me/answers/vertical/query'
}

export default class SearchService {
  readonly config: CoreConfig;

  constructor(config: CoreConfig) {
    this.config = config;
  }

  async universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    const requestUrl: string = BaseUrls.LiveApi + LiveApiEndpoints.UniversalSearch;

    const queryParams: UniversalSearchQueryParams = {
      input: request.query,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: this.config.apiVersion || defaultApiVersion,
      version: this.config.configurationLabel,
      location: request.geolocation && `${request.geolocation.lat},${request.geolocation.lng}`,
      locale: this.config.locale,
      skipSpellCheck: !request.spellCheckEnabled,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      queryTrigger: request.queryTrigger,
    };

    const rawUniversalSearchResponse = await HttpRequester.get<unknown>(requestUrl, queryParams);

    console.log('Raw Universal Response:');
    console.log(rawUniversalSearchResponse);

    return UniversalSearchResponse.from(rawUniversalSearchResponse);
  }

  /*async verticalSearch(): Promise<VerticalSearchResponse> {

  }*/
}