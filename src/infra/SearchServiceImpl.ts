import createVerticalSearchResponse from '../transformers/searchservice/createVerticalSearchResponse';
import SearchService from '../services/SearchService';
import HttpRequester from '../http/HttpRequester';
import { BaseUrls, LiveApiEndpoints, defaultApiVersion } from '../constants';
import { QueryParams } from '../http/params';
import { QueryTrigger } from '../models/searchservice/request/QueryTrigger';
import UniversalSearchRequest from '../models/searchservice/request/UniversalSearchRequest';
import UniversalSearchResponse from '../models/searchservice/response/UniversalSearchResponse';
import createUniversalSearchResponse from '../transformers/searchservice/createUniversalSearchResponse';
import Config from '../models/core/Config';
import VerticalSearchRequest from '../models/searchservice/request/VerticalSearchRequest';
import VerticalSearchResponse from '../models/searchservice/response/VerticalSearchResponse';

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
 * Internal interface representing the query params which may be sent in a vertical search
 */
interface VerticalSearchQueryParams extends QueryParams {
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string,
  locale?: string,
  input: string,
  location?: string,
  verticalKey: string,
  limit?: number,
  offset?: number,
  retrieveFacets?: boolean,
  skipSpellCheck?: boolean,
  queryTrigger?: QueryTrigger,
  sessionTrackingEnabled?: boolean,
  sortBys?: string,
  context?: string,
  referrerPageUrl?: string,
  source?: string
}

/**
 * An implementation of SearchService which hits LiveAPI
 */
export default class SearchServiceImpl implements SearchService {
  private config: Config;
  private httpRequester: HttpRequester;
  private universalSearchUrl: string;
  private verticalSearchUrl: string;

  constructor(config: Config, httpRequester: HttpRequester) {
    this.config = config;
    this.httpRequester = httpRequester;

    this.universalSearchUrl = BaseUrls.LiveApi + LiveApiEndpoints.UniversalSearch;
    this.verticalSearchUrl = BaseUrls.LiveApi + LiveApiEndpoints.VerticalSearch;
  }

  async universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
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
    const rawUniversalSearchResponse = await this.httpRequester.get<any>(
      this.universalSearchUrl,
      queryParams);

    return createUniversalSearchResponse(rawUniversalSearchResponse);
  }

  async verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    this.injectToStringMethods(request);

    const queryParams: VerticalSearchQueryParams = {
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: this.config.apiVersion || defaultApiVersion,
      version: this.config.configurationLabel,
      locale: this.config.locale,
      input: request.query,
      location: request.coordinates?.toString(),
      verticalKey: request.verticalKey,
      limit: request.limit,
      offset: request.offset,
      retrieveFacets: request.retrieveFacets,
      skipSpellCheck: request.skipSpellCheck,
      queryTrigger: request.queryTrigger,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      sortBys: JSON.stringify(request.sortBys || []),
      context: request.context?.toString(),
      referrerPageUrl: request.referrerPageUrl,
      source: request.querySource
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await this.httpRequester.get<any>(this.verticalSearchUrl, queryParams);

    return createVerticalSearchResponse(response);
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
}