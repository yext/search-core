import { AnswersError } from '../core/AnswersError';

/**
 * A representation of a response from a question submission.
 *
 * @public
 */
export interface QuestionSubmissionResponse {
  /** A unique id which corresponds to the request. */
  uuid: string
  /** Errors that occurred during question submission. If there are no errors, question submission was successful. */
  errors: AnswersError[]
}