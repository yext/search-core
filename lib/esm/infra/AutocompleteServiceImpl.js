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
import { createAutocompleteResponse, createFilterSearchResponse } from '../transformers/autocompleteservice/createAutocompleteResponse';
import { defaultApiVersion, defaultEndpoints } from '../constants';
/**
* A service that performs query suggestions.
*/
var AutocompleteServiceImpl = /** @class */ (function () {
    function AutocompleteServiceImpl(config, httpRequester, apiResponseValidator) {
        var _a, _b, _c, _d, _e, _f;
        this.config = config;
        this.httpService = httpRequester;
        this.apiResponseValidator = apiResponseValidator;
        this.universalEndpoint = (_b = (_a = this.config.endpoints) === null || _a === void 0 ? void 0 : _a.universalAutocomplete) !== null && _b !== void 0 ? _b : defaultEndpoints.universalAutocomplete;
        this.verticalEndpoint = (_d = (_c = this.config.endpoints) === null || _c === void 0 ? void 0 : _c.verticalAutocomplete) !== null && _d !== void 0 ? _d : defaultEndpoints.verticalAutocomplete;
        this.filterEndpoint = (_f = (_e = this.config.endpoints) === null || _e === void 0 ? void 0 : _e.filterSearch) !== null && _f !== void 0 ? _f : defaultEndpoints.filterSearch;
    }
    /**
     * Retrieves query suggestions for universal.
     *
     * @param {AutocompleteRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    AutocompleteServiceImpl.prototype.universalAutocomplete = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, response, validationResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = {
                            input: request.input,
                            experienceKey: this.config.experienceKey,
                            api_key: this.config.apiKey,
                            v: defaultApiVersion,
                            version: this.config.experienceVersion,
                            locale: this.config.locale,
                            sessionTrackingEnabled: request.sessionTrackingEnabled
                        };
                        return [4 /*yield*/, this.httpService.get(this.universalEndpoint, queryParams)];
                    case 1:
                        response = _a.sent();
                        validationResult = this.apiResponseValidator.validate(response);
                        if (validationResult instanceof Error) {
                            return [2 /*return*/, Promise.reject(validationResult)];
                        }
                        return [2 /*return*/, createAutocompleteResponse(response)];
                }
            });
        });
    };
    /**
     * Retrieves query suggestions for a vertical.
     *
     * @param {VerticalAutocompleteRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    AutocompleteServiceImpl.prototype.verticalAutocomplete = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParams, response, validationResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParams = {
                            input: request.input,
                            experienceKey: this.config.experienceKey,
                            api_key: this.config.apiKey,
                            v: defaultApiVersion,
                            version: this.config.experienceVersion,
                            locale: this.config.locale,
                            verticalKey: request.verticalKey,
                            sessionTrackingEnabled: request.sessionTrackingEnabled
                        };
                        return [4 /*yield*/, this.httpService.get(this.verticalEndpoint, queryParams)];
                    case 1:
                        response = _a.sent();
                        validationResult = this.apiResponseValidator.validate(response);
                        if (validationResult instanceof Error) {
                            return [2 /*return*/, Promise.reject(validationResult)];
                        }
                        return [2 /*return*/, createAutocompleteResponse(response)];
                }
            });
        });
    };
    /**
     * Retrieves query suggestions for filter search.
     *
     * @param {FilterSearchRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    AutocompleteServiceImpl.prototype.filterSearch = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var searchParams, queryParams, response, validationResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchParams = {
                            sectioned: request.sectioned,
                            fields: this.serializeSearchParameterFields(request.fields)
                        };
                        queryParams = {
                            input: request.input,
                            experienceKey: this.config.experienceKey,
                            api_key: this.config.apiKey,
                            v: defaultApiVersion,
                            version: this.config.experienceVersion,
                            locale: this.config.locale,
                            search_parameters: JSON.stringify(searchParams),
                            verticalKey: request.verticalKey,
                            sessionTrackingEnabled: request.sessionTrackingEnabled
                        };
                        return [4 /*yield*/, this.httpService.get(this.filterEndpoint, queryParams)];
                    case 1:
                        response = _a.sent();
                        validationResult = this.apiResponseValidator.validate(response);
                        if (validationResult instanceof Error) {
                            return [2 /*return*/, Promise.reject(validationResult)];
                        }
                        return [2 /*return*/, createFilterSearchResponse(response)];
                }
            });
        });
    };
    AutocompleteServiceImpl.prototype.serializeSearchParameterFields = function (fields) {
        return fields.map(function (_a) {
            var fieldApiName = _a.fieldApiName, entityType = _a.entityType, fetchEntities = _a.fetchEntities;
            return ({
                fieldId: fieldApiName,
                entityTypeId: entityType,
                shouldFetchEntities: fetchEntities
            });
        });
    };
    return AutocompleteServiceImpl;
}());
export { AutocompleteServiceImpl };
//# sourceMappingURL=AutocompleteServiceImpl.js.map