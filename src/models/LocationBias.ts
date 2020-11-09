export default class LocationBias {
  constructor(
    readonly latitude: number,
    readonly longitude: number,
    readonly locationDisplayName: string,
    readonly method: 'IP' | 'DEVICE' | 'UNKNOWN'
  ){}

  static from(data: any): LocationBias {
    return new LocationBias(
      data.latitude,
      data.longitude,
      data.locationDisplayName,
      data.accuracy
    );
  }
}