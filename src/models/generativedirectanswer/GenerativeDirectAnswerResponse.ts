/**
 * A representation of a generative direct answer response.
 *
 * @public
 */
export interface GenerativeDirectAnswerResponse {
  /** The text of the final generated response. */
  directAnswer: string,
  /** A string representing whether there was a result found within the given invocation. */
  resultStatus: string,
  /** An array of uids from the relevant {@link Result.rawData} that were used to form the directAnswer. */
  citations: string[]
}
