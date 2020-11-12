/**
 * Location information including how it was obtained
 */

export default interface LocationBias {
  latitude: number;
  longitude: number;
  displayName: string;
  method: LocationBiasMethod;
}

enum LocationBiasMethod {
  Ip = 'IP',
  Device = 'DEVICE',
  Unknown = 'UNKNOWN'
}