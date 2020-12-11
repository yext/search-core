/**
 * Location information including how it was obtained
 */
export interface LocationBias {
  latitude: number;
  longitude: number;
  displayName: string;
  method: LocationBiasMethod;
}

export enum LocationBiasMethod {
  Ip = 'IP',
  Device = 'DEVICE',
  Unknown = 'UNKNOWN'
}