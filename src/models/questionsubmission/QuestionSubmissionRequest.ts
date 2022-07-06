import { SearchRequest } from '../core/SearchRequest';

/**
 * Options for a QuestionSubmission request.
 *
 * @public
 */
export interface QuestionSubmissionRequest extends SearchRequest {
  /** The email of the user that is submitting the question. */
  email: string,
  /** The ID of the entity to associate with the question. */
  entityId: string,
  /** The name of the user. */
  name: string,
  /** The question. */
  questionText: string,
  /** Additional information about the question. */
  questionDescription?: string,
  /** Enables session tracking. */
  sessionTrackingEnabled?: boolean
}

