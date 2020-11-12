import LocationBias from '../../models/searchservice/response/LocationBias';

export default function createLocationBias(data: any): Readonly<LocationBias> {
  return Object.freeze({
    latitude: data.latitude,
    longitude: data.longitude,
    displayName: data.locationDisplayName,
    method: data.accuracy
  });
}