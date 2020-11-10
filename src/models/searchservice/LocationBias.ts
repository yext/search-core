/**
 * Location information including how it was obtained
 */
export default class LocationBias {
  private constructor(
    private latitude: number,
    private longitude: number,
    private locationDisplayName: string,
    private method: 'IP' | 'DEVICE' | 'UNKNOWN'
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): LocationBias {
    return new LocationBias(
      data.latitude,
      data.longitude,
      data.locationDisplayName,
      data.accuracy
    );
  }
}