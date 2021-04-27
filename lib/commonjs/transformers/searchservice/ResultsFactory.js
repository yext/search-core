"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsFactory = void 0;
const Source_1 = require("../../models/searchservice/response/Source");
/**
 * A factory which creates results from different sources
 */
class ResultsFactory {
    static create(results, source) {
        if (!results) {
            return [];
        }
        return results.map((result, index) => {
            const resultIndex = index + 1;
            switch (source) {
                case Source_1.Source.KnowledgeManager:
                    return this.fromKnowledgeManager(result, resultIndex);
                case Source_1.Source.Google:
                    return this.fromGoogleCustomSearchEngine(result, resultIndex);
                case Source_1.Source.Bing:
                    return this.fromBingCustomSearchEngine(result, resultIndex);
                case Source_1.Source.Zendesk:
                    return this.fromZendeskSearchEngine(result, resultIndex);
                case Source_1.Source.Algolia:
                    return this.fromAlgoliaSearchEngine(result, resultIndex);
                default:
                    return this.fromGeneric(result, resultIndex);
            }
        });
    }
    static fromKnowledgeManager(result, index) {
        var _a;
        const rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source_1.Source.KnowledgeManager,
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
    }
    static fromGoogleCustomSearchEngine(result, index) {
        var _a;
        const rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source_1.Source.Google,
            index: index,
            name: rawData.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
            description: rawData.htmlSnippet,
            link: rawData.link
        };
    }
    static fromBingCustomSearchEngine(result, index) {
        var _a;
        const rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source_1.Source.Bing,
            index: index,
            name: rawData.name,
            description: rawData.snippet,
            link: rawData.url
        };
    }
    static fromZendeskSearchEngine(result, index) {
        var _a;
        const rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source_1.Source.Zendesk,
            index: index,
            name: rawData.title,
            description: rawData.snippet,
            link: rawData.html_url
        };
    }
    static fromAlgoliaSearchEngine(result, index) {
        var _a;
        const rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source_1.Source.Algolia,
            index: index,
            name: rawData.name,
            id: rawData.objectID
        };
    }
    static fromGeneric(result, index) {
        var _a;
        const rawData = (_a = result.data) !== null && _a !== void 0 ? _a : result;
        return {
            rawData: rawData,
            source: Source_1.Source.Generic,
            index: index,
            name: rawData.name,
            description: rawData.description,
            link: rawData.website,
            id: rawData.id
        };
    }
    static fromDirectAnswer(result) {
        var _a;
        const rawData = (_a = result.fieldValues) !== null && _a !== void 0 ? _a : {};
        return {
            rawData: rawData,
            source: Source_1.Source.KnowledgeManager,
            name: rawData.name,
            description: rawData.description,
            link: result.website,
            id: result.id,
            entityType: result.type,
        };
    }
}
exports.ResultsFactory = ResultsFactory;
//# sourceMappingURL=ResultsFactory.js.map