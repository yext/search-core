import { defaultApiVersion, defaultEndpoints } from '../constants';
import { QuestionSubmissionService } from '../services/QuestionSubmissionService';
import { HttpService } from '../services/HttpService';
import { AnswersConfig, AnswersConfigWithToken } from '../models/core/AnswersConfig';
import { QuestionSubmissionRequest } from '../models/questionsubmission/QuestionSubmissionRequest';
import { QuestionSubmissionResponse } from '../models/questionsubmission/QuestionSubmissionResponse';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
import { ApiResponse } from '../models/answersapi/ApiResponse';

/**
 * An implementation of QuestionSubmissionService which hits LiveAPI.
 *
 * @internal
 */
export class QuestionSubmissionServiceImpl implements QuestionSubmissionService {
  private config: AnswersConfig | AnswersConfigWithToken;
  private httpService: HttpService;
  private apiResponseValidator: ApiResponseValidator;
  private endpoint: string;

  constructor(
    config: AnswersConfig | AnswersConfigWithToken,
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
      api_key: this.config.apiKey,
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

    const response = await this.httpService.post<ApiResponse>(
      this.endpoint,
      queryParams,
      body,
      this.config.token
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
