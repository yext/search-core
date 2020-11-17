/**
 * Options for a QuestionSubmission createQuestion request
 */
export default interface QuestionSubmissionRequest {
  email: string
  entityId: number
  name: string
  questionText: string

  /**
   * The publisher of the question e.g 'FIRSTPARTY'
   */
  site: string
  questionDescription?: string
  sessionTrackingEnabled?: boolean
}

