"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpServiceImpl = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const urlutils_1 = require("../utils/urlutils");
/**
 * Available HTTP request methods
 */
var RequestMethods;
(function (RequestMethods) {
    RequestMethods["GET"] = "get";
    RequestMethods["POST"] = "post";
})(RequestMethods || (RequestMethods = {}));
/**
 * HttpServiceImpl is a wrapper around the native implementation of AJAX
 * related matters.
 */
class HttpServiceImpl {
    /**
     * Perform a GET request
     */
    get(url, queryParams, options) {
        const reqInitWithMethod = Object.assign({ method: RequestMethods.GET }, options);
        return this.fetch(url, queryParams, reqInitWithMethod)
            .then(res => res.json());
    }
    /**
     * Perform a POST request
     */
    post(url, queryParams, body, reqInit) {
        const sanitizedBodyParams = urlutils_1.sanitizeQueryParams(body);
        const reqInitWithMethodAndBody = Object.assign({ method: RequestMethods.POST, body: JSON.stringify(sanitizedBodyParams) }, reqInit);
        return this.fetch(url, queryParams, reqInitWithMethodAndBody)
            .then(res => res.json());
    }
    /**
     * Perform a fetch, using the polyfill if needed.
     */
    fetch(url, queryParams, reqInit) {
        const urlWithParams = urlutils_1.addParamsToURL(url, queryParams);
        return cross_fetch_1.default(urlWithParams, reqInit);
    }
}
exports.HttpServiceImpl = HttpServiceImpl;
//# sourceMappingURL=HttpServiceImpl.js.map