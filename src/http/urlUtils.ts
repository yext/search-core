export interface QueryParams {
  [key: string]: string | number | boolean | undefined
}

interface SanitizedQueryParams {
  [key: string]: string | number | boolean
}

/**
 * Updates a url with the given params.
 */
export function addParamsToURL (
  url: string,
  params: QueryParams
): string {
  const parsedUrl = new URL(url);
  const urlParams = new URLSearchParams(parsedUrl.search.substring(1));

  const sanitizedParams: SanitizedQueryParams = sanitizeQueryParams (params);

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

function sanitizeQueryParams (params: QueryParams) : SanitizedQueryParams {
  Object.keys(params).forEach(key => {
    if ( params[key] === undefined || params[key] === null ) {
      delete params[key];
    }
  });

  return params as SanitizedQueryParams;
}

