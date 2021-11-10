/**
 * Identifier for the type of error causing the failure.
 *
 * @public
 */
export enum ErrorType {
  /** timeout error from server */
  Timeout = 'TIMEOUT',
  /** internal error from api backend */
  BackendError = 'BACKEND_ERROR',
  /** invalid config from request */
  InvalidConfig = 'INVALID_CONFIG',
  /** invalid query from request */
  InvalidQuery = 'INVALID_QUERY'
}