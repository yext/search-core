import { defaultApiVersion, defaultEndpoints } from '../constants';
import { QuestionSubmissionService } from '../services/QuestionSubmissionService';
import { HttpService } from '../services/HttpService';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { QuestionSubmissionRequest } from '../models/questionsubmission/QuestionSubmissionRequest';
import { QuestionSubmissionResponse } from '../models/questionsubmission/QuestionSubmissionResponse';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/answersapi/ApiResponse';
import { getSdkClients } from '../utils/getSdkClients';

/**
 * An implementation of QuestionSubmissionService which hits LiveAPI.
 *
 * @internal
 */
export class QuestionSubmissionServiceImpl implements QuestionSubmissionService {
  private config: AnswersConfig;
  private httpService: HttpService;
  private apiResponseValidator: ApiResponseValidator;
  private endpoint: string;

  constructor(
    config: AnswersConfig,
    httpService: HttpService,
    apiResponseValidator: ApiResponseValidator
  ) {
    this.config = config;
    this.httpService = httpService;
    this.apiResponseValidator = apiResponseValidator;
    this.endpoint = this.config.endpoints?.questionSubmission
      ?? defaultEndpoints.questionSubmission;
  }

  async submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse> {
    const queryParams = {
      v: defaultApiVersion,
      ...('apiKey' in this.config && { api_key: this.config.apiKey }),
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      ...this.config?.additionalQueryParams
    };

    const body = {
      email: request.email,
      entityId: request.entityId,
      name: request.name,
      questionDescription: request.questionDescription,
      questionLanguage: this.config.locale,
      questionText: request.questionText,
      site: 'FIRSTPARTY'
    };

    const response = 'token' in this.config
      ? await this.httpService.post<ApiResponse>(
        this.endpoint,
        queryParams,
        body,
        getSdkClients(request.customSdkClients),
        this.config.token
      )
      : await this.httpService.post<ApiResponse>(
        this.endpoint,
        queryParams,
        body,
        getSdkClients(request.customSdkClients)
      );

    const validationResult = this.apiResponseValidator.validate(response);
    if (validationResult instanceof Error) {
      return Promise.reject(validationResult);
    }

    return {
      uuid: response.meta.uuid
    };
  }
}
