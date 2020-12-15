import { AnswersError } from '../core/AnswersError';

/**
 * Shape of the QuestionSubmission api response
 *
 * @public
 */
export interface QuestionSubmissionResponse {
  uuid: string
  errors: AnswersError[]
}