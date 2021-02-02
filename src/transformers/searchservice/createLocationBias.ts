import { LocationBias } from '../../models/searchservice/response/LocationBias';

export function createLocationBias(data: any): LocationBias {
  return {
    latitude: data.latitude,
    longitude: data.longitude,
    displayName: data.locationDisplayName,
    method: data.accuracy
  };
}