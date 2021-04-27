"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterCombinator = void 0;
/**
 * Indicates how the filters in a {@link CombinedFilter} should be combined.
 *
 * @public
 */
var FilterCombinator;
(function (FilterCombinator) {
    /** Indicates that filters should be combined with a logical AND. */
    FilterCombinator["AND"] = "$and";
    /** Indicates that filters should be combined with a logical OR. */
    FilterCombinator["OR"] = "$or";
})(FilterCombinator = exports.FilterCombinator || (exports.FilterCombinator = {}));
//# sourceMappingURL=CombinedFilter.js.map