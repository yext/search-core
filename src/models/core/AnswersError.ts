/**
 * An error from the Answers Backend
 */
export default interface AnswersError {
  code: number,
  type: ErrorType,
  message: string
}

export enum ErrorType {
  FATAL_ERROR = 'FATAL_ERROR'
}