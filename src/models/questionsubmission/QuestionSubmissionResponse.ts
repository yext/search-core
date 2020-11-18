import AnswersError from '../core/AnswersError';

/**
 * Shape of the QuestionSubmission api response
 */
export default interface QuestionSubmissionResponse {
  uuid: string
  errors: AnswersError[]
}