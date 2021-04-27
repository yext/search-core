/**
 * Indicates how the filters in a {@link CombinedFilter} should be combined.
 *
 * @public
 */
export var FilterCombinator;
(function (FilterCombinator) {
    /** Indicates that filters should be combined with a logical AND. */
    FilterCombinator["AND"] = "$and";
    /** Indicates that filters should be combined with a logical OR. */
    FilterCombinator["OR"] = "$or";
})(FilterCombinator || (FilterCombinator = {}));
//# sourceMappingURL=CombinedFilter.js.map