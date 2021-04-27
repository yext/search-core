var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import fetch from 'cross-fetch';
import { addParamsToURL, sanitizeQueryParams } from '../utils/urlutils';
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
var HttpServiceImpl = /** @class */ (function () {
    function HttpServiceImpl() {
    }
    /**
     * Perform a GET request
     */
    HttpServiceImpl.prototype.get = function (url, queryParams, options) {
        var reqInitWithMethod = __assign({ method: RequestMethods.GET }, options);
        return this.fetch(url, queryParams, reqInitWithMethod)
            .then(function (res) { return res.json(); });
    };
    /**
     * Perform a POST request
     */
    HttpServiceImpl.prototype.post = function (url, queryParams, body, reqInit) {
        var sanitizedBodyParams = sanitizeQueryParams(body);
        var reqInitWithMethodAndBody = __assign({ method: RequestMethods.POST, body: JSON.stringify(sanitizedBodyParams) }, reqInit);
        return this.fetch(url, queryParams, reqInitWithMethodAndBody)
            .then(function (res) { return res.json(); });
    };
    /**
     * Perform a fetch, using the polyfill if needed.
     */
    HttpServiceImpl.prototype.fetch = function (url, queryParams, reqInit) {
        var urlWithParams = addParamsToURL(url, queryParams);
        return fetch(urlWithParams, reqInit);
    };
    return HttpServiceImpl;
}());
export { HttpServiceImpl };
//# sourceMappingURL=HttpServiceImpl.js.map