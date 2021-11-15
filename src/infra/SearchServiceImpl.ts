import { createVerticalSearchResponse } from '../transformers/searchservice/createVerticalSearchResponse';
import { SearchService } from '../services/SearchService';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import { QueryParams } from '../models/http/params';
import { QueryTrigger } from '../models/searchservice/request/QueryTrigger';
import { QuerySource } from '../models/searchservice/request/QuerySource';
import { UniversalSearchRequest } from '../models/searchservice/request/UniversalSearchRequest';
import { UniversalSearchResponse } from '../models/searchservice/response/UniversalSearchResponse';
import { createUniversalSearchResponse } from '../transformers/searchservice/createUniversalSearchResponse';
import { HttpService } from '../services/HttpService';
import { AnswersConfig, AnswersConfigWithToken } from '../models/core/AnswersConfig';
import { VerticalSearchRequest } from '../models/searchservice/request/VerticalSearchRequest';
import { VerticalSearchResponse } from '../models/searchservice/response/VerticalSearchResponse';
import { serializeStaticFilters } from '../serializers/serializeStaticFilters';
import { serializeFacets } from '../serializers/serializeFacets';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/answersapi/ApiResponse';
import { LatLong } from '../models/searchservice/request/LatLong';

/**
 * Represents the query params which may be sent in a universal search.
 *
 * @internal
 */
interface UniversalSearchQueryParams extends QueryParams {
  input: string,
  experienceKey: string,
  api_key?: string,
  v: number,
  version?: string | number,
  location?: string,
  locale?: string,
  skipSpellCheck?: boolean,
  sessionTrackingEnabled?: boolean
  queryTrigger?: QueryTrigger,
  context?: string;
  referrerPageUrl?: string,
  source?: QuerySource | string,
  visitor?: string
}

/**
 * Represents the query params which may be sent in a vertical search.
 *
 * @internal
 */
interface VerticalSearchQueryParams extends QueryParams {
  experienceKey: string,
  api_key?: string,
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
  source?: QuerySource | string,
  locationRadius?: string,
  queryId?: string,
  visitor?: string
}

/**
 * The implementation of SearchService which hits LiveAPI.
 *
 * @internal
 */
export class SearchServiceImpl implements SearchService {
  private config: AnswersConfig | AnswersConfigWithToken;
  private httpService: HttpService;
  private apiResponseValidator: ApiResponseValidator;
  private verticalSearchEndpoint: string;
  private universalSearchEndpoint: string;

  constructor(
    config: AnswersConfig | AnswersConfigWithToken,
    httpService: HttpService,
    apiResponseValidator: ApiResponseValidator
  ) {
    this.config = config;
    this.httpService = httpService;
    this.apiResponseValidator = apiResponseValidator;
    this.universalSearchEndpoint = config.endpoints?.universalSearch
      ?? defaultEndpoints.universalSearch;
    this.verticalSearchEndpoint = config.endpoints?.verticalSearch
      ?? defaultEndpoints.verticalSearch;
  }

  async universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    const queryParams: UniversalSearchQueryParams = {
      input: request.query,
      experienceKey: this.config.experienceKey,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      limit: JSON.stringify(request.limit),
      location: this.stringifyLatLong(request.location),
      locale: this.config.locale,
      skipSpellCheck: request.skipSpellCheck,
      session_id: request.sessionId,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      queryTrigger: request.queryTrigger,
      context: JSON.stringify(request.context),
      referrerPageUrl: request.referrerPageUrl,
      source: request.querySource || QuerySource.Standard,
      visitor: JSON.stringify(this.config.visitor),
      ...this.config?.additionalQueryParams
    };

    //TODO: check why does didn't pass token before. do we have test for that

    const response = 'token' in this.config
      ? await this.httpService.get<ApiResponse>(this.universalSearchEndpoint, queryParams, this.config.token)
      : await this.httpService.get<ApiResponse>(this.universalSearchEndpoint, queryParams);

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createUniversalSearchResponse(response);
  }

  async verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    const queryParams: VerticalSearchQueryParams = {
      experienceKey: this.config.experienceKey,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      input: request.query,
      location: this.stringifyLatLong(request.location),
      verticalKey: request.verticalKey,
      filters: request.staticFilters && serializeStaticFilters(request.staticFilters),
      limit: request.limit,
      offset: request.offset,
      retrieveFacets: request.retrieveFacets,
      facetFilters: request.facets && serializeFacets(request.facets),
      skipSpellCheck: request.skipSpellCheck,
      queryTrigger: request.queryTrigger,
      session_id: request.sessionId,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      sortBys: JSON.stringify(request.sortBys || []),
      context: JSON.stringify(request.context),
      referrerPageUrl: request.referrerPageUrl,
      source: request.querySource || QuerySource.Standard,
      locationRadius: request.locationRadius?.toString(),
      queryId: request.queryId,
      visitor: JSON.stringify(this.config.visitor),
      ...this.config?.additionalQueryParams
    };

    const response = 'token' in this.config
      ? await this.httpService.get<ApiResponse>(this.verticalSearchEndpoint, queryParams, this.config.token)
      : await this.httpService.get<ApiResponse>(this.verticalSearchEndpoint, queryParams);

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createVerticalSearchResponse(response);
  }

  /**
   * Converts a {@link LatLong} into the format the Answers API expects.
   */
  private stringifyLatLong(latLong: LatLong | undefined): string | undefined {
    if (!latLong) {
      return undefined;
    }
    return `${latLong.latitude},${latLong.longitude}`;
  }
}