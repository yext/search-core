/**
 * The direction of a sort.
 *
 * @public
 */
export var Direction;
(function (Direction) {
    /**
     *  An ascending sort
     *
     * @remarks
     * For numbers this sort is low to high. For text it is alphabetical. For dates it is chronological order.
     */
    Direction["Ascending"] = "ASC";
    /**
     * A descending soft
     *
     * @remarks
     * For numbers this sort is high to low. For text it is reverse alphabetical. For dates it is reverse
     * chronological order.
     */
    Direction["Descending"] = "DESC";
})(Direction || (Direction = {}));
//# sourceMappingURL=Direction.js.map