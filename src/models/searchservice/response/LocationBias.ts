/**
 * Information about the location bias applied to an Answers search
 *
 * @public
 */
export default interface LocationBias {
  /** The location's latitude */
  latitude: number;
  /** The location's longitude */
  longitude: number;
  /**
   * The name of the location
   *
   * @example
   * Arlington, Virginia
   */
  displayName: string;
  /** {@inheritDoc LocationBiasMethod} */
  method: LocationBiasMethod;
}

/**
 * The method used to determine the location
 *
 * @public
 */
export enum LocationBiasMethod {
  /** Location was determined by IP */
  Ip = 'IP',
  /**
   * Location was determined by Device
   *
   * @privateRemarks
   * Do we have any more info on this that we can include?
   * */
  Device = 'DEVICE',
  /**
   * Unknown location bias method
   *
   * @privateRemarks
   * Does this instead meant that the user's location is unknown?
   */
  Unknown = 'UNKNOWN'
}