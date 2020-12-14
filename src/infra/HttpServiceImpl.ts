import { fetch as fetchPolyfill } from 'whatwg-fetch';
import { addParamsToURL, sanitizeQueryParams } from '../utils/urlutils';
import { QueryParams } from '../models/http/params';
import { HttpService } from '../services/HttpService';

/**
 * Available HTTP request methods
 */
enum RequestMethods {
  GET = 'get',
  POST = 'post',
}

/**
 * HttpServiceImpl is a wrapper around the native implementation of AJAX
 * related matters.
 */
export class HttpServiceImpl implements HttpService {
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
    body: QueryParams,
    reqInit: RequestInit
  ): Promise<T> {
    const sanitizedBodyParams = sanitizeQueryParams(body);
    const reqInitWithMethodAndBody = {
      method: RequestMethods.POST,
      body: JSON.stringify(sanitizedBodyParams),
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
