/**
 * Information about the user's location.
 *
 * @public
 */
export interface LocationBias {
  /** The location's latitude. */
  latitude: number,
  /** The location's longitude. */
  longitude: number,
  /**
   * The name of the location.
   *
   * @example
   * Arlington, Virginia.
   */
  displayName: string,
  /** {@inheritDoc LocationBiasMethod} */
  method: LocationBiasMethod
}

/**
 * The method used to determine the location.
 *
 * @public
 */
export enum LocationBiasMethod {
  /** Location was determined by IP address. */
  Ip = 'IP',
  /**
   * Location was supplied by the user's device.
   *
   * @remarks
   * This location bias method is set when a location is supplied in search requests.
   * */
  Device = 'DEVICE',
  /**
   * Location is unknown.
   */
  Unknown = 'UNKNOWN'
}
