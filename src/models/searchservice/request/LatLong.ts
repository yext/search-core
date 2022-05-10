/**
 * The latitude and longitude of the user making the request.
 * Used to bias the results.
 *
 * @remarks
 * If omitted from a request, Yext will attempt to determine the location.
 *
 * @public
 */
export interface LatLong {
  /**
   * Latitude formatted as a decimal degree number.
   *
   * @example
   * `40.741895`
   */
  latitude: number,
  /**
   * Longitude formatted as a decimal degree number.
   *
   * @example
   * `-73.989308`
   */
  longitude: number
}