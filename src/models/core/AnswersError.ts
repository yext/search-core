/**
 * An error from the Answers API
 *
 * @public
 */
export default interface AnswersError {
  /** The error code. */
  code: number,
  /** The error message. */
  message: string
}