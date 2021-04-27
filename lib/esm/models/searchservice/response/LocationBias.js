/**
 * The method used to determine the location.
 *
 * @public
 */
export var LocationBiasMethod;
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
})(LocationBiasMethod || (LocationBiasMethod = {}));
//# sourceMappingURL=LocationBias.js.map