/**
 * Represents the source of a {@link Result}.
 *
 * @public
 */
export var Source;
(function (Source) {
    /** The result is from an Answers Knowledge Graph. */
    Source["KnowledgeManager"] = "KNOWLEDGE_MANAGER";
    /** The result is from Google Custom Search Engine. */
    Source["Google"] = "GOOGLE_CSE";
    /** The result is from Bing Search Engine. */
    Source["Bing"] = "BING_CSE";
    /** The result is from Zendesk. */
    Source["Zendesk"] = "ZENDESK";
    /** The result is from Algolia. */
    Source["Algolia"] = "ALGOLIA";
    /** The result was from a generic source. */
    Source["Generic"] = "GENERIC";
})(Source || (Source = {}));
//# sourceMappingURL=Source.js.map