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

export enum QueryTrigger {
  Initialize = 'initialize',
  QueryParameter = 'query-parameter'
}

export interface Geolocation {
  lat: string;
  lng: string;
}