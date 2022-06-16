/**
 * Identifier for the type of error causing the failure.
 *
 * @public
 */
export enum ErrorType {
  /** A timeout error from the server. */
  Timeout = 'TIMEOUT',
  /** An internal error from the API backend. */
  BackendError = 'BACKEND_ERROR',
  /** An invalid config from the request. */
  InvalidConfig = 'INVALID_CONFIG',
  /** An invalid query from the request. */
  InvalidQuery = 'INVALID_QUERY'
}
