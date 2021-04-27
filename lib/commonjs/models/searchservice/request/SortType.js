"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortType = void 0;
/**
 * The method of sorting.
 *
 * @public
 */
var SortType;
(function (SortType) {
    /**
     * Sorts based on a field with the direction specified.
     */
    SortType["Field"] = "FIELD";
    /**
     * Sorts based on entity distance alone.
     */
    SortType["EntityDistance"] = "ENTITY_DISTANCE";
    /**
     * Sorts based on relevance according to the algorithm and, when relevant, location bias.
     */
    SortType["Relevance"] = "RELEVANCE";
})(SortType = exports.SortType || (exports.SortType = {}));
//# sourceMappingURL=SortType.js.map