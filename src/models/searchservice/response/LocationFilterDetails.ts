/**
 * Additional details relevant to the filter with "PLACE" for its {@link AppliedQueryFilterType}.
 *
 * @public
 */
export interface LocationFilterDetails {
  /** The location's latitude. */
  latitude: number,
  /** The location's longitude. */
  longitude: number,
  /** The location's name. */
  placeName: string,
  /** The location's classification (e.g. locality, region, address). */
  featureTypes: string[],
  /** The location's coordinate boundaries. */
  boundingBox?: LocationBoundingBox
}

/**
 * Location boundaries for a filter with "Place" for its {@link AppliedQueryFilterType}.
 * (e.g. boundary for a locality or region specific location filter)
 *
 * @public
 */
export interface LocationBoundingBox {
  /** The location's highest latitude degree. */
  maxLatitude: number,
  /** The location's highest longitude degree. */
  maxLongitude: number,
  /** The location's lowest latitude degree. */
  minLatitude: number,
  /** The location's lowest longitude degree. */
  minLongitude: number
}
