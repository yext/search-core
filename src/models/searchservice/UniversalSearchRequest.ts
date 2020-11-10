/**
 * Options for constructing a universal search
 */
export default interface UniversalSearchRequest {
  query: string,
  queryTrigger?: 'initialize' | 'query-parameter' | string,
  spellCheckEnabled?: boolean,
  sessionTrackingEnabled?: boolean,
  geolocation?: Geolocation
}

interface Geolocation {
  lat: string;
  lng: string;
}