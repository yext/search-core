import createVerticalSearchResponse from '../transformers/searchservice/createVerticalSearchResponse';
import SearchService from '../services/SearchService';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import { QueryParams } from '../models/http/params';
import { QueryTrigger } from '../models/searchservice/request/QueryTrigger';
import { QuerySource } from '../models/searchservice/request/QuerySource';
import UniversalSearchRequest from '../models/searchservice/request/UniversalSearchRequest';
import UniversalSearchResponse from '../models/searchservice/response/UniversalSearchResponse';
import createUniversalSearchResponse from '../transformers/searchservice/createUniversalSearchResponse';
import HttpService from '../services/HttpService';
import Config from '../models/core/Config';
import VerticalSearchRequest from '../models/searchservice/request/VerticalSearchRequest';
import VerticalSearchResponse from '../models/searchservice/response/VerticalSearchResponse';
import serializeStaticFilters from '../serializers/serializeStaticFilters';
import serializeFacetFilters from '../serializers/serializeFacetFilters';

/**
 * Internal interface representing the query params which may be sent in a universal search
 */
interface UniversalSearchQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string | number,
  location?: string,
  locale?: string,
  skipSpellCheck?: boolean,
  sessionTrackingEnabled?: boolean
  queryTrigger?: QueryTrigger,
  context?: string;
  referrerPageUrl?: string,
  source?: QuerySource
}

/**
 * Internal interface representing the query params which may be sent in a vertical search
 */
interface VerticalSearchQueryParams extends QueryParams {
  experienceKey: string,
  api_key: string,
  v: number,
  version?: string | number,
  locale?: string,
  input: string,
  location?: string,
  verticalKey: string,
  filters?: string,
  limit?: number,
  offset?: number,
  retrieveFacets?: boolean,
  facetFilters?: string,
  skipSpellCheck?: boolean,
  queryTrigger?: QueryTrigger,
  sessionTrackingEnabled?: boolean,
  sortBys?: string,
  context?: string,
  referrerPageUrl?: string,
  source?: QuerySource
}

/**
 * An implementation of SearchService which hits LiveAPI
 */
export default class SearchServiceImpl implements SearchService {
  private config: Config;
  private httpService: HttpService;
  private verticalSearchEndpoint: string;
  private universalSearchEndpoint: string;

  constructor(config: Config, httpService: HttpService) {
    this.config = config;
    this.httpService = httpService;
    this.universalSearchEndpoint = config.endpoints?.universalSearch
      ?? defaultEndpoints.universalSearch;
    this.verticalSearchEndpoint = config.endpoints?.verticalSearch
      ?? defaultEndpoints.verticalSearch;
  }

  async universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    this.injectToStringMethods(request);

    const queryParams: UniversalSearchQueryParams = {
      input: request.query,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      location: request.coordinates?.toString(),
      locale: this.config.locale,
      skipSpellCheck: request.skipSpellCheck,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      queryTrigger: request.queryTrigger,
      context: request.context?.toString(),
      referrerPageUrl: request.referrerPageUrl,
      source: request.querySource || QuerySource.Standard
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await this.httpService.get<any>(this.universalSearchEndpoint, queryParams);

    return createUniversalSearchResponse(response);
  }

  async verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    this.injectToStringMethods(request);

    const queryParams: VerticalSearchQueryParams = {
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      input: request.query,
      location: request.coordinates?.toString(),
      verticalKey: request.verticalKey,
      filters: request.staticFilters && serializeStaticFilters(request.staticFilters),
      limit: request.limit,
      offset: request.offset,
      retrieveFacets: request.retrieveFacets,
      facetFilters: request.facetFilters && serializeFacetFilters(request.facetFilters),
      skipSpellCheck: request.skipSpellCheck,
      queryTrigger: request.queryTrigger,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      sortBys: JSON.stringify(request.sortBys || []),
      context: request.context?.toString(),
      referrerPageUrl: request.referrerPageUrl,
      source: request.querySource || QuerySource.Standard
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await this.httpService.get<any>(this.verticalSearchEndpoint, queryParams);

    return createVerticalSearchResponse(response);
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