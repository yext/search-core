import { fetch as fetchPolyfill } from 'whatwg-fetch';
import { addParamsToURL } from '../utils/urlutils';

/**
 * Available HTTP request methods
 */
enum RequestMethods {
  GET = 'get',
  POST = 'post',
}

type UrlParams = Record<string, string|number|boolean>;

/**
 * HttpRequester is a wrapper around the native implementation of AJAX
 * related matters.
 */
export default class HttpRequester {
  /**
   * Perform a GET request
   */
  get<T>(
    url: string,
    queryParams: UrlParams,
    options?: RequestInit,
  ): Promise<T> {
    const reqInitWithMethod = {
      method: RequestMethods.GET,
      ...options
    };
    return this._fetch(url, queryParams, reqInitWithMethod)
      .then(res => res.json());
  }

  /**
   * Perform a POST request
   */
  post<T>(
    url: string,
    queryParams: UrlParams,
    body: BodyInit,
    reqInit: RequestInit
  ): Promise<T> {
    const reqInitWithMethodAndBody = {
      method: RequestMethods.POST,
      body: JSON.stringify(body),
      ...reqInit
    };
    return this._fetch(url, queryParams, reqInitWithMethodAndBody)
      .then(res => res.json());
  }

  /**
   * Perform a fetch, using the polyfill if needed.
   */
  _fetch(
    url: string,
    queryParams: UrlParams,
    reqInit: RequestInit
  ): Promise<Response> {
    const urlWithParams = addParamsToURL(url, queryParams);
    if (!window.fetch) {
      return fetchPolyfill(urlWithParams, reqInit);
    }
    return fetch(urlWithParams, reqInit);
  }
}
