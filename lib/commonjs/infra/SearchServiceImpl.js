"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchServiceImpl = void 0;
const createVerticalSearchResponse_1 = require("../transformers/searchservice/createVerticalSearchResponse");
const constants_1 = require("../constants");
const QuerySource_1 = require("../models/searchservice/request/QuerySource");
const createUniversalSearchResponse_1 = require("../transformers/searchservice/createUniversalSearchResponse");
const serializeStaticFilters_1 = require("../serializers/serializeStaticFilters");
const serializeFacets_1 = require("../serializers/serializeFacets");
/**
 * The implementation of SearchService which hits LiveAPI.
 *
 * @internal
 */
class SearchServiceImpl {
    constructor(config, httpService, apiResponseValidator) {
        var _a, _b, _c, _d;
        this.config = config;
        this.httpService = httpService;
        this.apiResponseValidator = apiResponseValidator;
        this.universalSearchEndpoint = (_b = (_a = config.endpoints) === null || _a === void 0 ? void 0 : _a.universalSearch) !== null && _b !== void 0 ? _b : constants_1.defaultEndpoints.universalSearch;
        this.verticalSearchEndpoint = (_d = (_c = config.endpoints) === null || _c === void 0 ? void 0 : _c.verticalSearch) !== null && _d !== void 0 ? _d : constants_1.defaultEndpoints.verticalSearch;
    }
    universalSearch(request) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.injectToStringMethods(request);
            const queryParams = {
                input: request.query,
                experienceKey: this.config.experienceKey,
                api_key: this.config.apiKey,
                v: constants_1.defaultApiVersion,
                version: this.config.experienceVersion,
                location: (_a = request.location) === null || _a === void 0 ? void 0 : _a.toString(),
                locale: this.config.locale,
                skipSpellCheck: request.skipSpellCheck,
                sessionTrackingEnabled: request.sessionTrackingEnabled,
                queryTrigger: request.queryTrigger,
                context: JSON.stringify(request.context || undefined),
                referrerPageUrl: request.referrerPageUrl,
                source: request.querySource || QuerySource_1.QuerySource.Standard
            };
            const response = yield this.httpService.get(this.universalSearchEndpoint, queryParams);
            const validationResult = this.apiResponseValidator.validate(response);
            if (validationResult instanceof Error) {
                return Promise.reject(validationResult);
            }
            return createUniversalSearchResponse_1.createUniversalSearchResponse(response);
        });
    }
    verticalSearch(request) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this.injectToStringMethods(request);
            const queryParams = {
                experienceKey: this.config.experienceKey,
                api_key: this.config.apiKey,
                v: constants_1.defaultApiVersion,
                version: this.config.experienceVersion,
                locale: this.config.locale,
                input: request.query,
                location: (_a = request.location) === null || _a === void 0 ? void 0 : _a.toString(),
                verticalKey: request.verticalKey,
                filters: request.staticFilters && serializeStaticFilters_1.serializeStaticFilters(request.staticFilters),
                limit: request.limit,
                offset: request.offset,
                retrieveFacets: request.retrieveFacets,
                facetFilters: request.facets && serializeFacets_1.serializeFacets(request.facets),
                skipSpellCheck: request.skipSpellCheck,
                queryTrigger: request.queryTrigger,
                sessionTrackingEnabled: request.sessionTrackingEnabled,
                sortBys: JSON.stringify(request.sortBys || []),
                context: JSON.stringify(request.context || undefined),
                referrerPageUrl: request.referrerPageUrl,
                source: request.querySource || QuerySource_1.QuerySource.Standard,
                locationRadius: (_b = request.locationRadius) === null || _b === void 0 ? void 0 : _b.toString(),
                queryId: request.queryId
            };
            const response = yield this.httpService.get(this.verticalSearchEndpoint, queryParams);
            const validationResult = this.apiResponseValidator.validate(response);
            if (validationResult instanceof Error) {
                return Promise.reject(validationResult);
            }
            return createVerticalSearchResponse_1.createVerticalSearchResponse(response);
        });
    }
    /**
     * Injects toString() methods into the request objects that require them
     */
    injectToStringMethods(request) {
        if (request.location) {
            request.location.toString = function () {
                return `${this.latitude},${this.longitude}`;
            };
        }
    }
}
exports.SearchServiceImpl = SearchServiceImpl;
//# sourceMappingURL=SearchServiceImpl.js.map