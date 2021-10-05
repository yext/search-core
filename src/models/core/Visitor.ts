/**
 * Information used to associate requests with a particular user.
 *
 * @remarks
 * Visitor information is included with every request with the exception of the
 * {@link AnswersCore.questionSubmission} requests.
 *
 * @public
 */
export interface Visitor {
  /** The ID associated with the user */
  id: string,
  /** The type of visitor
   *
   * @example 'YEXT_USER' for Yext Auth
   */
  idMethod: string
}