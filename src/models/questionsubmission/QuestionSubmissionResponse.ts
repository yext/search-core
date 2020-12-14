import { AnswersError } from '../core/AnswersError';

/**
 * A representation of a response from a question submission.
 *
 * @public
 */
export interface QuestionSubmissionResponse {
  /** A unique id which corresponds to the request. */
  uuid: string
  /** Any errors related to the question submission. If there are no errors, question submission was successful. */
  errors: AnswersError[]
}