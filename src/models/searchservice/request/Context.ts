/**
 * Used to trigger Answers {@link https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/ | Query Rules}.
 *
 * @public
 */
export default interface Context {
  /**
   * Arbitrary context values
   */
  [property: string]: string | boolean;
}
