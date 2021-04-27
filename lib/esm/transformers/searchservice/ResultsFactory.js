import { Source } from '../../models/searchservice/response/Source';
/**
 * A factory which creates results from different sources
 */
var ResultsFactory = /** @class */ (function () {
    function ResultsFactory() {
    }
    ResultsFactory.create = function (results, source) {
        var _this = this;
        if (!results) {
            return [];
        }
        return results.map(function (result, index) {
            var resultIndex = index + 1;
            switch (source) {
                case Source.KnowledgeManager:
                    return _this.fromKnowledgeManager(result, resultIndex);
                case Source.Google:
                    return _this.fromGoogleCustomSearchEngine(result, resultIndex);
                case Source.Bing:
                    return _this.fromBingCustomSearchEngine(result, resultIndex);
                case Source.Zendesk:
                    return _this.fromZendeskSearchEngine(result, resultIndex);
                case Source.Algolia:
                    return _this.fromAlgoliaSearchEngine(result, resultIndex);
                default:
                    return _this.fromGeneric(result, resultIndex);
            }
        });
    };
    ResultsFactory.fromKnowledgeManager = function (result, index) {
        var _a;
        var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source.KnowledgeManager,
            index: index,
            name: rawData.name,
            description: rawData.description,
            link: rawData.website,
            id: rawData.id,
            distance: result.distance,
            distanceFromFilter: result.distanceFromFilter,
            highlightedFields: result.highlightedFields,
            entityType: rawData.type
        };
    };
    ResultsFactory.fromGoogleCustomSearchEngine = function (result, index) {
        var _a;
        var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source.Google,
            index: index,
            name: rawData.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
            description: rawData.htmlSnippet,
            link: rawData.link
        };
    };
    ResultsFactory.fromBingCustomSearchEngine = function (result, index) {
        var _a;
        var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source.Bing,
            index: index,
            name: rawData.name,
            description: rawData.snippet,
            link: rawData.url
        };
    };
    ResultsFactory.fromZendeskSearchEngine = function (result, index) {
        var _a;
        var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source.Zendesk,
            index: index,
            name: rawData.title,
            description: rawData.snippet,
            link: rawData.html_url
        };
    };
    ResultsFactory.fromAlgoliaSearchEngine = function (result, index) {
        var _a;
        var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source.Algolia,
            index: index,
            name: rawData.name,
            id: rawData.objectID
        };
    };
    ResultsFactory.fromGeneric = function (result, index) {
        var _a;
        var rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source.Generic,
            index: index,
            name: rawData.name,
            description: rawData.description,
            link: rawData.website,
            id: rawData.id
        };
    };
    ResultsFactory.fromDirectAnswer = function (result) {
        var _a;
        var rawData = (_a = result.fieldValues) !== null && _a !== void 0 ? _a : {};
        return {
            rawData: rawData,
            source: Source.KnowledgeManager,
            name: rawData.name,
            description: rawData.description,
            link: result.website,
            id: result.id,
            entityType: result.type,
        };
    };
    return ResultsFactory;
}());
export { ResultsFactory };
//# sourceMappingURL=ResultsFactory.js.map