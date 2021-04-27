import { QuestionSubmissionService } from '../services/QuestionSubmissionService';
import { HttpService } from '../services/HttpService';
import { AnswersConfig } from '../models/core/AnswersConfig';
import { QuestionSubmissionRequest } from '../models/questionsubmission/QuestionSubmissionRequest';
import { QuestionSubmissionResponse } from '../models/questionsubmission/QuestionSubmissionResponse';
import { ApiResponseValidator } from '../validation/ApiResponseValidator';
/**
 * An implementation of QuestionSubmissionService which hits LiveAPI.
 *
 * @internal
 */
export declare class QuestionSubmissionServiceImpl implements QuestionSubmissionService {
    private config;
    private httpService;
    private apiResponseValidator;
    private endpoint;
    constructor(config: AnswersConfig, httpService: HttpService, apiResponseValidator: ApiResponseValidator);
    submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse>;
}
//# sourceMappingURL=QuestionSubmissionServiceImpl.d.ts.map