export function createLocationBias(data) {
    return {
        latitude: data.latitude,
        longitude: data.longitude,
        displayName: data.locationDisplayName,
        method: data.accuracy
    };
}
//# sourceMappingURL=createLocationBias.js.map