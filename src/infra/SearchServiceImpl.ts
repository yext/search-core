import SearchService from '../services/SearchService';
import { BaseUrls, LiveApiEndpoints, defaultApiVersion } from '../constants';
import { QueryParams } from '../models/http/params';
import { QueryTrigger } from '../models/searchservice/request/QueryTrigger';
import UniversalSearchRequest from '../models/searchservice/request/UniversalSearchRequest';
import UniversalSearchResponse from '../models/searchservice/response/UniversalSearchResponse';
import createUniversalSearchResponse from '../transformers/searchservice/createUniversalSearchResponse';
import HttpService from '../services/HttpService';
import Config from '../models/core/Config';
import { JsonObject } from '../models/core/JsonObject';

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
  private config: Config;
  private httpService: HttpService;
  private universalSearchUrl: string;

  constructor(config: Config, httpService: HttpService) {
    this.config = config;
    this.httpService = httpService;

    this.universalSearchUrl = BaseUrls.LiveApi + LiveApiEndpoints.UniversalSearch;
  }

  async universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    this.injectToStringMethods(request);

    const queryParams: UniversalSearchQueryParams = {
      input: request.query,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.configurationLabel,
      location: request.coordinates?.toString(),
      locale: this.config.locale,
      skipSpellCheck: !request.spellCheckEnabled,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      queryTrigger: request.queryTrigger,
      context: request.context?.toString(),
      referrerPageUrl: request.referrerPageUrl,
    };

    const rawUniversalSearchResponse = await this.httpService.get<JsonObject>(this.universalSearchUrl, queryParams);

    return createUniversalSearchResponse(rawUniversalSearchResponse);
  }

  /**
   * Injects toString() methods into the request objects that require them
   */
  private injectToStringMethods(request: UniversalSearchRequest): void {
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
}