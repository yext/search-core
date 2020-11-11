import SearchService from '../services/SearchService';
import HttpRequester from '../http/HttpRequester';
import { BaseUrls, LiveApiEndpoints, defaultApiVersion } from '../constants';
import { QueryParams } from '../http/params';
import { default as UniversalSearchRequest, QueryTrigger }
  from '../models/searchservice/UniversalSearchRequest';
//import VerticalSearchRequest from '../models/VerticalSearchResponse';
import UniversalSearchResponse from '../models/searchservice/UniversalSearchResponse';
//import VerticalSearchResponse from '../models/VerticalSearchResponse';

/**
 * Internal interface representing the universal search query params
 */
export interface UniversalSearchQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number, // The backend requires this field, but it currently does not do anything
  version?: string,
  location?: string,
  locale?: string,
  skipSpellCheck?: boolean,
  sessionTrackingEnabled?: boolean
  queryTrigger?: QueryTrigger,
  /* (cea2aj) Does it make sense for the core to send these params? */
  // context?: string,
  // referrerPageUrl?: string
}

export default class SearchServiceImpl implements SearchService {
  constructor(
    private config: Config,
    private httpRequester: HttpRequester
  ) {}

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawUniversalSearchResponse = await this.httpRequester.get<any>(requestUrl, queryParams);

    return UniversalSearchResponse.from(rawUniversalSearchResponse);
  }

  /*async verticalSearch(): Promise<VerticalSearchResponse> {

  }*/
}