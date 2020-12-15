/**
 * Options for a QuestionSubmission request
 *
 * @public
 */
export interface QuestionSubmissionRequest {
  email: string
  entityId: string
  name: string
  questionText: string
  questionDescription?: string
  sessionTrackingEnabled?: boolean
}

