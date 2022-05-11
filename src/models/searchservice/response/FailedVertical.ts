/**
 * Error information from when a vertical fails to return results.
 *
 * @public
 */
export interface FailedVertical {
  /** The vertical key associated with the failed vertical. */
  verticalKey: string,
  /**
   * The type of error causing the failure. Possible options are
   * "TIMEOUT", "BACKEND_ERROR", "INVALID_CONFIG", and "INVALID_QUERY".
   */
  errorType: string,
  /** The duration of the query in milliseconds. */
  queryDurationMillis: number,
  /** Detailed information about the error. */
  details: {
    /**
     * An HTTP response status code indicating the completion status of
     * the request.
     */
    responseCode: number,
    /** A message explaining the error. */
    description: string
  }
}