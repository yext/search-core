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
exports.AutocompleteServiceImpl = void 0;
const createAutocompleteResponse_1 = require("../transformers/autocompleteservice/createAutocompleteResponse");
const constants_1 = require("../constants");
/**
* A service that performs query suggestions.
*/
class AutocompleteServiceImpl {
    constructor(config, httpRequester, apiResponseValidator) {
        var _a, _b, _c, _d, _e, _f;
        this.config = config;
        this.httpService = httpRequester;
        this.apiResponseValidator = apiResponseValidator;
        this.universalEndpoint = (_b = (_a = this.config.endpoints) === null || _a === void 0 ? void 0 : _a.universalAutocomplete) !== null && _b !== void 0 ? _b : constants_1.defaultEndpoints.universalAutocomplete;
        this.verticalEndpoint = (_d = (_c = this.config.endpoints) === null || _c === void 0 ? void 0 : _c.verticalAutocomplete) !== null && _d !== void 0 ? _d : constants_1.defaultEndpoints.verticalAutocomplete;
        this.filterEndpoint = (_f = (_e = this.config.endpoints) === null || _e === void 0 ? void 0 : _e.filterSearch) !== null && _f !== void 0 ? _f : constants_1.defaultEndpoints.filterSearch;
    }
    /**
     * Retrieves query suggestions for universal.
     *
     * @param {AutocompleteRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    universalAutocomplete(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = {
                input: request.input,
                experienceKey: this.config.experienceKey,
                api_key: this.config.apiKey,
                v: constants_1.defaultApiVersion,
                version: this.config.experienceVersion,
                locale: this.config.locale,
                sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            const response = yield this.httpService.get(this.universalEndpoint, queryParams);
            const validationResult = this.apiResponseValidator.validate(response);
            if (validationResult instanceof Error) {
                return Promise.reject(validationResult);
            }
            return createAutocompleteResponse_1.createAutocompleteResponse(response);
        });
    }
    /**
     * Retrieves query suggestions for a vertical.
     *
     * @param {VerticalAutocompleteRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    verticalAutocomplete(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = {
                input: request.input,
                experienceKey: this.config.experienceKey,
                api_key: this.config.apiKey,
                v: constants_1.defaultApiVersion,
                version: this.config.experienceVersion,
                locale: this.config.locale,
                verticalKey: request.verticalKey,
                sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            const response = yield this.httpService.get(this.verticalEndpoint, queryParams);
            const validationResult = this.apiResponseValidator.validate(response);
            if (validationResult instanceof Error) {
                return Promise.reject(validationResult);
            }
            return createAutocompleteResponse_1.createAutocompleteResponse(response);
        });
    }
    /**
     * Retrieves query suggestions for filter search.
     *
     * @param {FilterSearchRequest} request
     * @returns {Promise<AutocompleteResponse>}
     */
    filterSearch(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = {
                sectioned: request.sectioned,
                fields: this.serializeSearchParameterFields(request.fields)
            };
            const queryParams = {
                input: request.input,
                experienceKey: this.config.experienceKey,
                api_key: this.config.apiKey,
                v: constants_1.defaultApiVersion,
                version: this.config.experienceVersion,
                locale: this.config.locale,
                search_parameters: JSON.stringify(searchParams),
                verticalKey: request.verticalKey,
                sessionTrackingEnabled: request.sessionTrackingEnabled
            };
            const response = yield this.httpService.get(this.filterEndpoint, queryParams);
            const validationResult = this.apiResponseValidator.validate(response);
            if (validationResult instanceof Error) {
                return Promise.reject(validationResult);
            }
            return createAutocompleteResponse_1.createFilterSearchResponse(response);
        });
    }
    serializeSearchParameterFields(fields) {
        return fields.map(({ fieldApiName, entityType, fetchEntities }) => ({
            fieldId: fieldApiName,
            entityTypeId: entityType,
            shouldFetchEntities: fetchEntities
        }));
    }
}
exports.AutocompleteServiceImpl = AutocompleteServiceImpl;
//# sourceMappingURL=AutocompleteServiceImpl.js.map