import { LocationBiasMethod } from '../../constants';

/**
 * Location information including how it was obtained
 */
export default class LocationBias {
  private constructor(
    private latitude: number,
    private longitude: number,
    private locationDisplayName: string,
    private method: LocationBiasMethod
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

  getLatitude(): number {
    return this.latitude;
  }

  getLongitude(): number {
    return this.longitude;
  }

  getLocationDisplayName(): string {
    return this.locationDisplayName;
  }

  getMethod(): LocationBiasMethod {
    return this.method;
  }
}