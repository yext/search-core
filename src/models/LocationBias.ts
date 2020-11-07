export default class LocationBias {
  latitude: number;
  longitude: number;
  locationDisplayName: string;
  method: 'IP' | 'DEVICE' | 'UNKNOWN';

  constructor (props: LocationBias){
    this.latitude = props.latitude;
    this.longitude = props.longitude;
    this.locationDisplayName = props.locationDisplayName;
    this.method = props.method;
  }

  static from (data: any) {
    return new LocationBias({
      latitude: data.latitude,
      longitude: data.longitude,
      locationDisplayName: data.locationDisplayName,
      method: data.accuracy
    });
  }
}