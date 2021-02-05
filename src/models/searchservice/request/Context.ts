/**
 * Used to trigger Answers {@link https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/ | Query Rules}.
 *
 * @remarks
 * May be any valid JSON object
 *
 * @public
 */
export type Context =
  | { [property: string]: Context }
  | Context[]
  | string
  | number
  | boolean
  | null;