import crossFetch from 'cross-fetch';
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
    authToken?: string,
  ): Promise<T> {
    return this.fetch(url, queryParams, {
      method: RequestMethods.GET,
      mode: 'cors',
      credentials: 'include',
      ...(authToken && { headers: { Authorization: `Bearer ${authToken}` }}),
    }).then(res => res.json());
  }

  /**
   * Perform a POST request
   */
  post<T>(
    url: string,
    queryParams: QueryParams,
    body: QueryParams,
    authToken?: string
  ): Promise<T> {
    const sanitizedBodyParams = sanitizeQueryParams(body);
    return this.fetch(url, queryParams, {
      method: RequestMethods.POST,
      body: JSON.stringify(sanitizedBodyParams),
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}`}),
      }
    })
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
    if (typeof(window) !== 'undefined' && window.fetch) {
      return window.fetch(urlWithParams, reqInit);
    }
    return crossFetch(urlWithParams, reqInit);
  }
}
