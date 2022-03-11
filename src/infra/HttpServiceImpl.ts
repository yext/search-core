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
    sdkClients: Record<string, string>,
    authToken?: string,
  ): Promise<T> {
    return fetch(url, queryParams, {
      method: RequestMethods.GET,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'SDK-Client': formatAsHttpHeader(sdkClients),
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      }
    }).then(res => res.json());
  }

  /**
   * Perform a POST request
   */
  post<T>(
    url: string,
    queryParams: QueryParams,
    body: QueryParams,
    sdkClients: Record<string, string>,
    authToken?: string
  ): Promise<T> {
    const sanitizedBodyParams = sanitizeQueryParams(body);
    return fetch(url, queryParams, {
      method: RequestMethods.POST,
      body: JSON.stringify(sanitizedBodyParams),
      mode: 'cors',
      ...(authToken && { credentials: 'include' }),
      headers: {
        'SDK-Client': formatAsHttpHeader(sdkClients),
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}`}),
      }
    })
      .then(res => res.json());
  }
}

/**
 * Perform a fetch, using the polyfill if needed.
 */
function fetch(
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

function formatAsHttpHeader(jsonHeader: Record<string, string>) {
  return Object.keys(jsonHeader).reduce((combinedHeader, currentKey) => {
    const httpFormattedHeader = `${currentKey}=${jsonHeader[currentKey]}`;
    return combinedHeader ? `${combinedHeader}, ${httpFormattedHeader}` : httpFormattedHeader;
  }, '');
}