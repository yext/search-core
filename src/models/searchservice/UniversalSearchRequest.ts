import { QueryTrigger, Context, Coordinates } from './RequestElements';

/**
 * Options for constructing a universal search
 */
export default interface UniversalSearchRequest {
  query: string;
  queryTrigger?: QueryTrigger;
  spellCheckEnabled?: boolean;
  sessionTrackingEnabled?: boolean;
  coordinates?: Coordinates;
  context: Context
  referrerPageUrl?: string
}