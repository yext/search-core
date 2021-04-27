/**
 * Represents the type of spell check performed.
 *
 * @public
 */
export var SpellCheckType;
(function (SpellCheckType) {
    /** The API is suggesting an alternative query. */
    SpellCheckType["Suggest"] = "SUGGEST";
    /** The API is autocorrecting the original query. */
    SpellCheckType["AutoCorrect"] = "AUTOCORRECT";
    /** The API may be doing some combination of suggesting or autocorrecting. */
    SpellCheckType["Combine"] = "COMBINE";
})(SpellCheckType || (SpellCheckType = {}));
//# sourceMappingURL=SpellCheck.js.map