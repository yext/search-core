/**
 * Used to trigger Answers {@link https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/ | Query Rules}.
 *
 * @remarks
 * Context may be any object
 *
 * @privateRemarks
 * TODO: Update the type to make this a generic object
 *
 * @public
 */
export default interface Context {
  /** Context keys and values */
  [property: string]: string | boolean;
}
