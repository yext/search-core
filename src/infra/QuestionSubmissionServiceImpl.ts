import { defaultApiVersion, defaultEndpoints } from '../constants';
import { QuestionSubmissionService } from '../services/QuestionSubmissionService';
import { HttpService } from '../services/HttpService';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { QuestionSubmissionRequest } from '../models/questionsubmission/QuestionSubmissionRequest';
import { QuestionSubmissionResponse } from '../models/questionsubmission/QuestionSubmissionResponse';
import { createAnswersError }from '../transformers/core/createAnswersError';

/**
 * An implementation of QuestionSubmissionService which hits LiveAPI
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
    const data = await this.httpService.post<any>(
      this.endpoint,
      queryParams,
      body,
      requestInit
    );

    if (!data.meta) {
      throw new Error('The question submission data does not contain a meta property');
    }
    return {
      uuid: data.meta.uuid,
      errors: data.meta.errors && data.meta.errors.map(createAnswersError)
    };
  }
}