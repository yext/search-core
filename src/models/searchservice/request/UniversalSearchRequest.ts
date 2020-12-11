import { Context } from './Context';
import { Coordinates } from './Coordinates';
import { QueryTrigger } from './QueryTrigger';
import { QuerySource } from './QuerySource';
/**
 * Options for constructing a universal search
 */
export interface UniversalSearchRequest {
  query: string;
  queryTrigger?: QueryTrigger;
  skipSpellCheck?: boolean;
  sessionTrackingEnabled?: boolean;
  coordinates?: Coordinates;
  context?: Context;
  referrerPageUrl?: string;
  querySource?: QuerySource;
}