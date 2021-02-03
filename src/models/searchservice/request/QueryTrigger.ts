/**
 * Indicates what triggered the search.
 *
 * @remarks
 * Used for search analytics. If a user typed the search, do not supply a QueryTrigger.
 *
 * @example
 * An answers site may be configured to perform a search for 'What services do you offer?' when the page
 * loads. Because that query is a default query rather than a user-suppied query, the Initialize QueryTrigger
 * should be supplied in the request.
 *
 * @public
 */
export enum QueryTrigger {
  /** Indicates that the query was triggered by a default initial search. */
  Initialize = 'initialize',
  /** Indicates that the query was suggested by a {@link SpellCheck} response. */
  Suggest = 'suggest'
}