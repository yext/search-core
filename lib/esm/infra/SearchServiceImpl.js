var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { createVerticalSearchResponse } from '../transformers/searchservice/createVerticalSearchResponse';
import { defaultApiVersion, defaultEndpoints } from '../constants';
import { QuerySource } from '../models/searchservice/request/QuerySource';
import { createUniversalSearchResponse } from '../transformers/searchservice/createUniversalSearchResponse';
import { serializeStaticFilters } from '../serializers/serializeStaticFilters';
import { serializeFacets } from '../serializers/serializeFacets';
/**
 * The implementation of SearchService which hits LiveAPI.
 *
 * @internal
 */
var SearchServiceImpl = /** @class */ (function () {
    function SearchServiceImpl(config, httpService, apiResponseValidator) {
        var _a, _b, _c, _d;
        this.config = config;
        this.httpService = httpService;
        this.apiResponseValidator = apiResponseValidator;
        this.universalSearchEndpoint = (_b = (_a = config.endpoints) === null || _a === void 0 ? void 0 : _a.universalSearch) !== null && _b !== void 0 ? _b : defaultEndpoints.universalSearch;
        this.verticalSearchEndpoint = (_d = (_c = config.endpoints) === null || _c === void 0 ? void 0 : _c.verticalSearch) !== null && _d !== void 0 ? _d : defaultEndpoints.verticalSearch;
    }
    SearchServiceImpl.prototype.universalSearch = function (request) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, response, validationResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.injectToStringMethods(request);
                        queryParams = {
                            input: request.query,
                            experienceKey: this.config.experienceKey,
                            api_key: this.config.apiKey,
                            v: defaultApiVersion,
                            version: this.config.experienceVersion,
                            location: (_a = request.location) === null || _a === void 0 ? void 0 : _a.toString(),
                            locale: this.config.locale,
                            skipSpellCheck: request.skipSpellCheck,
                            sessionTrackingEnabled: request.sessionTrackingEnabled,
                            queryTrigger: request.queryTrigger,
                            context: JSON.stringify(request.context || undefined),
                            referrerPageUrl: request.referrerPageUrl,
                            source: request.querySource || QuerySource.Standard
                        };
                        return [4 /*yield*/, this.httpService.get(this.universalSearchEndpoint, queryParams)];
                    case 1:
                        response = _b.sent();
                        validationResult = this.apiResponseValidator.validate(response);
                        if (validationResult instanceof Error) {
                            return [2 /*return*/, Promise.reject(validationResult)];
                        }
                        return [2 /*return*/, createUniversalSearchResponse(response)];
                }
            });
        });
    };
    SearchServiceImpl.prototype.verticalSearch = function (request) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, response, validationResult;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.injectToStringMethods(request);
                        queryParams = {
                            experienceKey: this.config.experienceKey,
                            api_key: this.config.apiKey,
                            v: defaultApiVersion,
                            version: this.config.experienceVersion,
                            locale: this.config.locale,
                            input: request.query,
                            location: (_a = request.location) === null || _a === void 0 ? void 0 : _a.toString(),
                            verticalKey: request.verticalKey,
                            filters: request.staticFilters && serializeStaticFilters(request.staticFilters),
                            limit: request.limit,
                            offset: request.offset,
                            retrieveFacets: request.retrieveFacets,
                            facetFilters: request.facets && serializeFacets(request.facets),
                            skipSpellCheck: request.skipSpellCheck,
                            queryTrigger: request.queryTrigger,
                            sessionTrackingEnabled: request.sessionTrackingEnabled,
                            sortBys: JSON.stringify(request.sortBys || []),
                            context: JSON.stringify(request.context || undefined),
                            referrerPageUrl: request.referrerPageUrl,
                            source: request.querySource || QuerySource.Standard,
                            locationRadius: (_b = request.locationRadius) === null || _b === void 0 ? void 0 : _b.toString(),
                            queryId: request.queryId
                        };
                        return [4 /*yield*/, this.httpService.get(this.verticalSearchEndpoint, queryParams)];
                    case 1:
                        response = _c.sent();
                        validationResult = this.apiResponseValidator.validate(response);
                        if (validationResult instanceof Error) {
                            return [2 /*return*/, Promise.reject(validationResult)];
                        }
                        return [2 /*return*/, createVerticalSearchResponse(response)];
                }
            });
        });
    };
    /**
     * Injects toString() methods into the request objects that require them
     */
    SearchServiceImpl.prototype.injectToStringMethods = function (request) {
        if (request.location) {
            request.location.toString = function () {
                return this.latitude + "," + this.longitude;
            };
        }
    };
    return SearchServiceImpl;
}());
export { SearchServiceImpl };
//# sourceMappingURL=SearchServiceImpl.js.map