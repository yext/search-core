import Context from './Context';
import Coordinates from './Coordinates';
import { QueryTrigger } from './QueryTrigger';

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