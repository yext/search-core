import { JsonObject } from './JsonObject';

/**
 * Used to trigger Answers {@link https://hitchhikers.yext.com/tracks/answers-advanced/ans302-query-rules/ | Query Rules}.
 *
 * @remarks
 * Must be a valid JSON object.
 *
 * @public
 */
export interface Context {
  [property: string]: string | number | boolean | null | JsonObject | JsonObject[];
}