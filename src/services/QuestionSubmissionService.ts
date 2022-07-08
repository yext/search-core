import { QuestionSubmissionResponse } from '../models/questionsubmission/QuestionSubmissionResponse';
import { QuestionSubmissionRequest } from '../models/questionsubmission/QuestionSubmissionRequest';

/**
 * Submits a custom question to the Search API.
 *
 * @public
 */
export interface QuestionSubmissionService {
  /**
   * Submits a question to be answered.
   *
   * @param request - The question, as well as the contact info of the submitter.
   */
  submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse>
}