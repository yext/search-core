/**
 * Identifier for the type of error causing the failure.
 *
 * @public
 */
export enum ErrorType {
  Timeout = 'TIMEOUT',
  BackendError = 'BACKEND_ERROR',
  InvalidConfig = 'INVALID_CONFIG',
  InvalidQuery = 'INVALID_QUERY'
}