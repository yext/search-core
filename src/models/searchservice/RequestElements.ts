export enum QueryTrigger {
  Initialize = 'initialize',
  QueryParameter = 'query-parameter'
}

export interface Context {
  [property: string]: string | boolean;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}