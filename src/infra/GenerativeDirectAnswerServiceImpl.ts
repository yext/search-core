import { defaultApiVersion } from '../provideEndpoints';
import { QueryParams } from '../models/http/params';
import { HttpService } from '../services/HttpService';
import { SearchConfigWithDefaulting } from '../models/core/SearchConfig';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/searchapi/ApiResponse';
import { getClientSdk } from '../utils/getClientSdk';
import { GenerativeDirectAnswerRequest } from '../models/generativedirectanswer/GenerativeDirectAnswerRequest';
import { GenerativeDirectAnswerResponse } from '../models/generativedirectanswer/GenerativeDirectAnswerResponse';
import { GenerativeDirectAnswerService } from '../services/GenerativeDirectAnswerService';
import { createGenerativeDirectAnswerResponse } from '../transformers/generativedirectanswerservice/createGenerativeDirectAnswerResponse';

/**
 * Represents the query params which may be sent in a generative direct answer.
 *
 * @internal
 */
interface GenerativeDirectAnswerQueryParams extends QueryParams {
  experienceKey: string,
  api_key?: string,
  v: number,
  version?: string | number,
  locale?: string
}

export class GenerativeDirectAnswerServiceImpl implements GenerativeDirectAnswerService {
  private config: SearchConfigWithDefaulting;
  private httpService: HttpService;
  private apiResponseValidator: ApiResponseValidator;
  private endpoint: string;

  constructor(
    config: SearchConfigWithDefaulting,
    httpService: HttpService,
    apiResponseValidator: ApiResponseValidator
  ) {
    this.config = config;
    this.httpService = httpService;
    this.apiResponseValidator = apiResponseValidator;
    this.endpoint = this.config.endpoints.generativeDirectAnswer;
  }

  async generateAnswer(request: GenerativeDirectAnswerRequest): Promise<GenerativeDirectAnswerResponse> {
    const queryParams: GenerativeDirectAnswerQueryParams = {
      experienceKey: this.config.experienceKey,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      v: defaultApiVersion,
      version: this.config.experienceVersion,
      locale: this.config.locale,
      visitorId: this.config.visitor?.id,
      visitorIdMethod: this.config.visitor?.idMethod,
      ...this.config?.additionalQueryParams
    };
    let results = {};
    if (request.results.length === 1) {
      results = request.results[0];
    } else if (request.results.length > 1) {
      results = { verticals: request.results };
    }
    const body = {
      searchId: request.searchId,
      searchTerm: request.searchTerm,
      results: results
    };
    const response = 'token' in this.config
      ? await this.httpService.post<ApiResponse>(
        this.endpoint,
        queryParams,
        body,
        getClientSdk(request.additionalHttpHeaders),
        this.config.token
      )
      : await this.httpService.post<ApiResponse>(
        this.endpoint,
        queryParams,
        body,
        getClientSdk(request.additionalHttpHeaders)
      );

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return createGenerativeDirectAnswerResponse(response);
  }
}