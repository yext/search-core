/**
 * Describes the ways a search can be executed besides user input.
 *
 * @remarks
 * Used for search analytics. If a user supplied the search query, do not include a QueryTrigger.
 *
 * @example
 * A Search site may be configured to perform a search for 'What services do you offer?' when the page
 * loads. Because that query is a default query rather than a user-supplied query, the Initialize QueryTrigger
 * should be included in the request.
 *
 * @public
 */
export enum QueryTrigger {
  /** Indicates that the query was triggered by a default initial search. */
  Initialize = 'initialize',
  /** Indicates that the query was suggested by a {@link SpellCheck} response. */
  Suggest = 'suggest'
}