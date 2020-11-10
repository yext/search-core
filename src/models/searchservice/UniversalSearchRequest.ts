import { QueryTrigger } from '../../constants';

/**
 * Options for constructing a universal search
 */
export default interface UniversalSearchRequest {
  query: string,
  queryTrigger?: QueryTrigger,
  spellCheckEnabled?: boolean,
  sessionTrackingEnabled?: boolean,
  geolocation?: Geolocation
}

interface Geolocation {
  lat: string;
  lng: string;
}