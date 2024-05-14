/**
 * A representation of a generative direct answer response.
 *
 * @public
 */
export interface GenerativeDirectAnswerResponse {
  directAnswer: string,
  resultStatus: string,
  citations: string[]
}
