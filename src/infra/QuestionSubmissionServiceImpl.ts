import { BaseUrls, KnowledgeApiEndpoints, defaultApiVersion, Environments } from '../constants';
import QuestionSubmissionService from '../services/QuestionSubmissionService';
import HttpService from '../services/HttpService';
import Config from '../models/core/Config';
import QuestionSubmissionRequest from '../models/questionsubmission/QuestionSubmissionRequest';
import QuestionSubmissionResponse from '../models/questionsubmission/QuestionSubmissionResponse';
import createAnswersError from '../transformers/core/createAnswersError';

interface RawQuestionSubmissionResponse {
  meta: {
    uuid: string,
    errors: {
      code: number,
      type: string,
      message: string
    }[]
  }
}

/**
 * An implementation of QuestionSubmissionService which hits LiveAPI
 */
export default class QuestionSubmissionServiceImpl implements QuestionSubmissionService {
  private requestUrl;
  constructor(private config: Config, private httpService: HttpService) {
    const isStaging = config.environment === Environments.Sandbox;
    const baseUrl = isStaging ? BaseUrls.KnowledgeApiSandbox : BaseUrls.KnowledgeApi;
    this.requestUrl = baseUrl + KnowledgeApiEndpoints.CreateQuestion;
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

    const data = await this.httpService.post<RawQuestionSubmissionResponse>(
      this.requestUrl,
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