/**
 * Data returned from the Search query rules system.
 *
 * @public
 */
export interface QueryRulesActionsData {
  /**
   * The unique identifier for this query rule.
   */
  key: string,
  /**
   * The data returned from the query rule.
   */
  data?: Record<string, unknown>,
  /**
   * Any errors returned from the query rule.
   */
  errors?: {
    /**
     * The unique identifier of the function invocation that resulted in this error.
     */
    uuid: string,
    /**
     * The type of the error.
     */
    type: string,
    /**
     * A message describing the error.
     */
    message?: string
  }[]
}