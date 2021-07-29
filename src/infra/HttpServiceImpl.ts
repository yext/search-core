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
  ): Promise<T> {
    return this.fetch(url, queryParams, {
      method: RequestMethods.GET,
      credentials: 'include'
    }).then(res => res.json());
  }

  /**
   * Perform a POST request
   */
  post<T>(
    url: string,
    queryParams: QueryParams,
    body: QueryParams
  ): Promise<T> {
    const sanitizedBodyParams = sanitizeQueryParams(body);
    return this.fetch(url, queryParams, {
      method: RequestMethods.POST,
      body: JSON.stringify(sanitizedBodyParams),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
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
    if (window.fetch) {
      return window.fetch(urlWithParams, reqInit);
    }
    return crossFetch(urlWithParams, reqInit);
  }
}
