/**
 * Updates a url with the given params.
 */
export function addParamsToURL(url, params) {
    var parsedUrl = new URL(url);
    var urlParams = new URLSearchParams(parsedUrl.search.substring(1));
    var sanitizedParams = sanitizeQueryParams(params);
    for (var key in sanitizedParams) {
        urlParams.append(key, sanitizedParams[key].toString());
    }
    var updatedUrl = parsedUrl.origin + parsedUrl.pathname;
    var paramsString = urlParams.toString();
    if (paramsString) {
        updatedUrl += '?' + paramsString;
    }
    return updatedUrl;
}
export function sanitizeQueryParams(params) {
    Object.keys(params).forEach(function (key) {
        if (params[key] === undefined || params[key] === null) {
            delete params[key];
        }
    });
    return params;
}
//# sourceMappingURL=urlutils.js.map