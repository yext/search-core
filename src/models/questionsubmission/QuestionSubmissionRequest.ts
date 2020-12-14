/**
 * Options for a QuestionSubmission request
 */
export interface QuestionSubmissionRequest {
  email: string
  entityId: string
  name: string
  questionText: string
  questionDescription?: string
  sessionTrackingEnabled?: boolean
}

