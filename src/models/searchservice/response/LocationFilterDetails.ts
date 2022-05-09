/**
 * Additional details relevant to the filter with "PLACE" for its {@link AppliedQueryFilterType}.
 *
 * @public
 */
export interface LocationFilterDetails {
  latitude: number,
  longitude: number,
  placeName: string,
  featureTypes: string[],
  boundingBox?: LocationBoundingBox
}

/**
 * Location boundaries for a filter with "Place" for its {@link AppliedQueryFilterType}.
 * (e.g. boundary for a locality or region specific location filter)
 *
 * @public
 */
export interface LocationBoundingBox {
  maxLatitude: number,
  maxLongitude: number,
  minLatitude: number,
  minLongitude: number
}
