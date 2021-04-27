"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocationBias = void 0;
function createLocationBias(data) {
    return {
        latitude: data.latitude,
        longitude: data.longitude,
        displayName: data.locationDisplayName,
        method: data.accuracy
    };
}
exports.createLocationBias = createLocationBias;
//# sourceMappingURL=createLocationBias.js.map