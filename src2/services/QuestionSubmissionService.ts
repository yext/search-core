import { QuestionSubmissionResponse } from '../models/questionsubmission/QuestionSubmissionResponse';
import { QuestionSubmissionRequest } from '../models/questionsubmission/QuestionSubmissionRequest';

/**
 * Submits a custom question to the Answers API.
 *
 * @internal
 */
export interface QuestionSubmissionService {
  submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse>
}