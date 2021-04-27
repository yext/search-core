"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
/**
 * The direction of a sort.
 *
 * @public
 */
var Direction;
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
})(Direction = exports.Direction || (exports.Direction = {}));
//# sourceMappingURL=Direction.js.map