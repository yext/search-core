import { defaultApiVersion } from '../provideEndpoints';
import { HttpService } from '../services/HttpService';
import { SearchConfigWithDefaulting } from '../models/core/SearchConfig';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/searchapi/ApiResponse';
import { getClientSdk } from '../utils/getClientSdk';
import { GenerativeDirectAnswerRequest } from '../models/generativedirectanswer/GenerativeDirectAnswerRequest';
import { GenerativeDirectAnswerResponse } from '../models/generativedirectanswer/GenerativeDirectAnswerResponse';
import { GenerativeDirectAnswerService } from '../services/GenerativeDirectAnswerService';
import { createGenerativeDirectAnswerResponse } from '../transformers/generativedirectanswerservice/createGenerativeDirectAnswerResponse';

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
    const queryParams = {
      v: defaultApiVersion,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      ...this.config?.additionalQueryParams
    };
    const body = {
      searchId: request.searchId,
      searchTerm: request.searchTerm,
      results: request.results
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