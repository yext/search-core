/**
 * Data returned from the Answers query rules system.
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
  errors?: string
}