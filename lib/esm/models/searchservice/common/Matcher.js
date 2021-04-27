/**
 * A Matcher is a filtering operation.
 *
 * @public
 */
export var Matcher;
(function (Matcher) {
    /**
     * An equals comparison.
     *
     * @remarks
     * Compatible with all field types.
     */
    Matcher["Equals"] = "$eq";
    /**
     * A not equals comparison.
     *
     * @remarks
     * Compatible with all field types.
     */
    Matcher["NotEquals"] = "!$eq";
    /**
     * A less than comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    Matcher["LessThan"] = "$lt";
    /**
     * A less than or equal to comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    Matcher["LessThanOrEqualTo"] = "$le";
    /**
     * A greater than comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    Matcher["GreaterThan"] = "$gt";
    /**
     * A greater than or equal to comparison.
     *
     * @remarks
     * Compatible with integer, float, date, datetime, and time fields.
     */
    Matcher["GreaterThanOrEqualTo"] = "$ge";
    /**
     * A comparison of whether an entity is within a certain radius of a certain location.
     *
     * @remarks
     * Only compatible with the builtin.location field.
     */
    Matcher["Near"] = "$near";
})(Matcher || (Matcher = {}));
//# sourceMappingURL=Matcher.js.map