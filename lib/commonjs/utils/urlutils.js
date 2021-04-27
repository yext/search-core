"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeQueryParams = exports.addParamsToURL = void 0;
/**
 * Updates a url with the given params.
 */
function addParamsToURL(url, params) {
    const parsedUrl = new URL(url);
    const urlParams = new URLSearchParams(parsedUrl.search.substring(1));
    const sanitizedParams = sanitizeQueryParams(params);
    for (const key in sanitizedParams) {
        urlParams.append(key, sanitizedParams[key].toString());
    }
    let updatedUrl = parsedUrl.origin + parsedUrl.pathname;
    const paramsString = urlParams.toString();
    if (paramsString) {
        updatedUrl += '?' + paramsString;
    }
    return updatedUrl;
}
exports.addParamsToURL = addParamsToURL;
function sanitizeQueryParams(params) {
    Object.keys(params).forEach(key => {
        if (params[key] === undefined || params[key] === null) {
            delete params[key];
        }
    });
    return params;
}
exports.sanitizeQueryParams = sanitizeQueryParams;
//# sourceMappingURL=urlutils.js.map