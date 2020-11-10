import { fetch as fetchPolyfill } from 'whatwg-fetch';
import { addParamsToURL } from '../http/url-utils';
import { QueryParams } from './params';

/**
 * Available HTTP request methods
 */
enum RequestMethods {
  GET = 'get',
  POST = 'post',
}

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
    queryParams: QueryParams,
    options?: RequestInit,
  ): Promise<T> {
    const reqInitWithMethod = {
      method: RequestMethods.GET,
      ...options
    };
    return this.fetch(url, queryParams, reqInitWithMethod)
      .then(res => res.json());
  }

  /**
   * Perform a POST request
   */
  post<T>(
    url: string,
    queryParams: QueryParams,
    body: BodyInit,
    reqInit: RequestInit
  ): Promise<T> {
    const reqInitWithMethodAndBody = {
      method: RequestMethods.POST,
      body: JSON.stringify(body),
      ...reqInit
    };
    return this.fetch(url, queryParams, reqInitWithMethodAndBody)
      .then(res => res.json());
  }

  /**
   * Perform a fetch, using the polyfill if needed.
   */
  private fetch(
    url: string,
    queryParams: QueryParams,
    reqInit: RequestInit
  ): Promise<Response> {
    const urlWithParams = addParamsToURL(url, queryParams);
    if (!window.fetch) {
      return fetchPolyfill(urlWithParams, reqInit);
    }
    return fetch(urlWithParams, reqInit);
  }
}
