/**
 * Updates a url with the given params.
 */
export function addParamsToURL(
  url: string,
  params: Record<string, string|number|boolean>
): string {
  const parsedUrl = new URL(url);
  const urlParams = new URLSearchParams(parsedUrl.search.substring(1));

  for (const key in params) {
    urlParams.append(key, params[key].toString());
  }
  let updatedUrl = parsedUrl.origin + parsedUrl.pathname;
  const paramsString = urlParams.toString();
  if (paramsString) {
    updatedUrl += '?' + paramsString;
  }
  return updatedUrl;
}