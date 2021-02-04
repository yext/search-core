/**
 * Used to trigger Answers {@link https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/ | Query Rules}.
 *
 * @remarks
 * Context may be any valid JSON object.
 *
 * @public
 */
export type Context =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Context; }
  | Context[];
