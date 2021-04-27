"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationBiasMethod = void 0;
/**
 * The method used to determine the location.
 *
 * @public
 */
var LocationBiasMethod;
(function (LocationBiasMethod) {
    /** Location was determined by IP address. */
    LocationBiasMethod["Ip"] = "IP";
    /**
     * Location was supplied by the user's device.
     *
     * @remarks
     * This location bias method is set when a location is supplied in search requests.
     * */
    LocationBiasMethod["Device"] = "DEVICE";
    /**
     * Location is unknown.
     */
    LocationBiasMethod["Unknown"] = "UNKNOWN";
})(LocationBiasMethod = exports.LocationBiasMethod || (exports.LocationBiasMethod = {}));
//# sourceMappingURL=LocationBias.js.map