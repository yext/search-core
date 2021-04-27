"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTrigger = void 0;
/**
 * Describes the ways a search can be executed besides user input.
 *
 * @remarks
 * Used for search analytics. If a user supplied the search query, do not include a QueryTrigger.
 *
 * @example
 * An answers site may be configured to perform a search for 'What services do you offer?' when the page
 * loads. Because that query is a default query rather than a user-supplied query, the Initialize QueryTrigger
 * should be included in the request.
 *
 * @public
 */
var QueryTrigger;
(function (QueryTrigger) {
    /** Indicates that the query was triggered by a default initial search. */
    QueryTrigger["Initialize"] = "initialize";
    /** Indicates that the query was suggested by a {@link SpellCheck} response. */
    QueryTrigger["Suggest"] = "suggest";
})(QueryTrigger = exports.QueryTrigger || (exports.QueryTrigger = {}));
//# sourceMappingURL=QueryTrigger.js.map