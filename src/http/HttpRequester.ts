import { fetch as  fetchPolyfill } from 'whatwg-fetch';

/**
 * Available HTTP request methods
 */
const RequestMethods: Record<string, string> = {
  GET: 'get',
  POST: 'post',
};

/**
* HttpRequester is a wrapper around the native implementation of AJAX
* related matters.
*/
export interface HttpRequester {
 /**
  * Perform a GET request
  */
 get(
   url: string,
   queryParams: Record<string, string | number | boolean>,
   options: RequestInit
 ): Promise<Response>;

 /**
  * Perform a POST HTTP request
  */
 post(
   url: string,
   queryParams: Record<string, string | number | boolean>,
   body: BodyInit,
   reqInit: RequestInit
 ): Promise<Response>;
}


/**
 * HttpRequester is a wrapper around the native implementation of AJAX
 * related matters.
 */
export class HttpRequesterImpl implements HttpRequester {
  /**
   * Perform a GET request
   */
  get(
    url: string,
    queryParams: Record<string, string|number|boolean>,
    options?: RequestInit,
  ): Promise<Response> {
    const reqInitWithMethod = {
      method: RequestMethods.GET,
      ...options
    };
    return this._fetch(url, queryParams, reqInitWithMethod);
  }

  /**
   * Perform a POST request
   */
  post(
    url: string,
    queryParams: Record<string, string|number|boolean>,
    body: BodyInit,
    reqInit: RequestInit
  ): Promise<Response> {
    const reqInitWithMethodAndBody = {
      method: RequestMethods.POST,
      body: JSON.stringify(body),
      ...reqInit
    };
    return this._fetch(url, queryParams, reqInitWithMethodAndBody);
  }

  /**
   * Perform a fetch, using the polyfill if needed.
   */
  _fetch(
    url: string,
    queryParams: Record<string, string|number|boolean>,
    reqInit: RequestInit
  ): Promise<Response> {
    const urlWithParams = this._addParamsToUrl(url, queryParams);
    if (!window.fetch) {
      return fetchPolyfill(urlWithParams, reqInit);
    }
    return fetch(urlWithParams, reqInit);
  }

  /**
   * Returns the request url updated with the given params.
   */
  _addParamsToUrl(url: string, params: Record<string, string|number|boolean>): string {
    let hasParam = url.indexOf('?') > -1;

    let searchQuery = '';
    for (const key in params) {
      if (!hasParam) {
        hasParam = true;
        searchQuery += '?';
      } else {
        searchQuery += '&';
      }

      searchQuery += key + '=' + encodeURIComponent(params[key]);
    }
    return url + searchQuery;
  }
}
