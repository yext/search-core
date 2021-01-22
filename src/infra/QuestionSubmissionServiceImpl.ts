import { defaultApiVersion, defaultEndpoints } from '../constants';
import { QuestionSubmissionService } from '../services/QuestionSubmissionService';
import { HttpService } from '../services/HttpService';
import { AnswersConfig } from '../models/core/AnswersConfig';
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
  private endpoint: string;
  constructor(private config: AnswersConfig, private httpService: HttpService) {
    this.endpoint = this.config.endpoints?.questionSubmission
      ?? defaultEndpoints.questionSubmission;
  }

  async submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse> {
    const queryParams = {
      v: defaultApiVersion,
      api_key: this.config.apiKey,
      sessionTrackingEnabled: request.sessionTrackingEnabled
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

    const requestInit = {
      mode: 'cors' as RequestMode,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await this.httpService.post<ApiResponse>(
      this.endpoint,
      queryParams,
      body,
      requestInit
    );
    new ApiResponseValidator(response).validate();

    return {
      uuid: response.meta.uuid
    };
  }
}
