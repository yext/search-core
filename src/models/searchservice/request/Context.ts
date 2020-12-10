/**
 * Used to trigger Answers {@link https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/ | Query Rules}.
 *
 * @public
 */
export default interface Context {
  /** Context keys and values */
  [property: string]: string | boolean;
}
