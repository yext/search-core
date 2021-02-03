/**
 * Indicates what triggered the search.
 *
 * @remarks
 * Used for search analytics. If a user initiated a search, do not supply a QueryTrigger.
 *
 * @example
 * An answers site may be configured to perform a search for 'What services do you offer?' when the page
 * loads. Because the query is a default query rather than a user-suppied query, the Initialize QueryTrigger
 * should be supplied in the request. If a user were to manually type a query, then a QueryTrigger should not
 * be supplied in the request.
 *
 * @public
 */
export enum QueryTrigger {
  /** Indicates that the query was triggered by a default initial search. */
  Initialize = 'initialize'
}