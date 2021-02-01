/**
 * The basic structure of a response from the Answers API
 *
 * @internal
 */
export interface ApiResponse {
  response: unknown,
  meta: {
    uuid: string,
    errors: {
      message: string,
      code: number,
      type: string
    }[]
  }
}