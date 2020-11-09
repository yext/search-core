export default class LocationBias {
  constructor(
    latitude: number,
    longitude: number,
    locationDisplayName: string,
    method: 'IP' | 'DEVICE' | 'UNKNOWN'
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