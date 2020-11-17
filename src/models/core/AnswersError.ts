/**
 * An error from the Answers Backend
 */
export default interface AnswersError {
  code: number,
  type: string,
  message: string
}