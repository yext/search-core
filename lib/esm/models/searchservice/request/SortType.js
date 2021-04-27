/**
 * The method of sorting.
 *
 * @public
 */
export var SortType;
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
})(SortType || (SortType = {}));
//# sourceMappingURL=SortType.js.map