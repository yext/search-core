interface LocationBiasProps {
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

/**
 * Location information including how it was obtained
 */
export default class LocationBias {
  private constructor(private props: LocationBiasProps) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static from(data: any): LocationBias {
    return new LocationBias({
      latitude: data.latitude,
      longitude: data.longitude,
      displayName: data.locationDisplayName,
      method: data.accuracy
    });
  }

  get latitude(): number {
    return this.props.latitude;
  }

  get longitude(): number {
    return this.props.longitude;
  }

  get displayName(): string {
    return this.props.displayName;
  }

  get method(): LocationBiasMethod {
    return this.props.method;
  }
}