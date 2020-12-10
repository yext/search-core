/**
 * The coordinates of the user making the request.
 *
 * If omitted from a request, Yext will attempt to determine the location
 *
 * @public
 */
export default interface Coordinates {
  /**
   * Latitude formatted as a decimal degree number
   *
   * @example
   * `"40.741895"`
   */
  latitude: string;
  /**
   * Longitude formatted as a decimal degree number
   *
   * @example
   * `"-73.989308"`
   */
  longitude: string;
}