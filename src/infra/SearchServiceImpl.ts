import SearchService from '../services/SearchService';
import HttpRequester from '../http/HttpRequester';
import { BaseUrls, LiveApiEndpoints, defaultApiVersion } from '../constants';
import { QueryParams } from '../http/params';
import { QueryTrigger } from '../models/searchservice/RequestElements';
import UniversalSearchRequest from '../models/searchservice/UniversalSearchRequest';
//import VerticalSearchRequest from '../models/VerticalSearchResponse';
import UniversalSearchResponse from '../models/searchservice/UniversalSearchResponse';
//import VerticalSearchResponse from '../models/VerticalSearchResponse';

/**
 * Internal interface representing the query params which may be sent in a universal search
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
  queryTrigger?: QueryTrigger,
  context?: string;
  referrerPageUrl?: string
}

/**
 * An implementation of SearchService which hits LiveAPI
 */
export default class SearchServiceImpl implements SearchService {
  constructor(
    private config: Config,
    private httpRequester: HttpRequester
  ) {}

  async universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    const requestUrl: string = BaseUrls.LiveApi + LiveApiEndpoints.UniversalSearch;

    this.injectToStringMethods(request);

    const queryParams: UniversalSearchQueryParams = {
      input: request.query,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: this.config.apiVersion || defaultApiVersion,
      version: this.config.configurationLabel,
      location: request.coordinates?.toString(),
      locale: this.config.locale,
      skipSpellCheck: !request.spellCheckEnabled,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      queryTrigger: request.queryTrigger,
      context: request.context?.toString(),
      referrerPageUrl: request.referrerPageUrl,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawUniversalSearchResponse = await this.httpRequester.get<any>(requestUrl, queryParams);

    return UniversalSearchResponse.from(rawUniversalSearchResponse);
  }

  /**
   * Injects toString() methods into the request objects that require them
   */
  injectToStringMethods(request: UniversalSearchRequest): void {
    if (request.coordinates) {
      request.coordinates.toString = function() {
        return `${this.latitude},${this.longitude}`;
      };
    }
    if (request.context) {
      request.context.toString = function() {
        return JSON.stringify(this);
      };
    }
  }

  /*async verticalSearch(): Promise<VerticalSearchResponse> {

  }*/
}