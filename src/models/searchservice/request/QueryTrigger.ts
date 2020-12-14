/**
 * Indicates what triggered the query.
 *
 * @remarks
 * These values will likely change to be more relevant to the Answers Core.
 *
 * @alpha
 */
export enum QueryTrigger {
  /** Indicates that query was triggered by a default initial search. */
  Initialize = 'initialize',
  /** Indicates that the query was triggered by a search query in the URL params. */
  QueryParameter = 'query-parameter'
}