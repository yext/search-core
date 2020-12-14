/**
 * An error from the Answers Backend.
 *
 * @public
 */
export interface AnswersError {
  /** The error code. */
  code: number,
  /** The error message. */
  message: string
}