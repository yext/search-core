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
    clientSdk: Record<string, string>,
    authToken?: string,
  ): Promise<T> {
    return fetch(url, queryParams, {
      method: RequestMethods.GET,
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Client-SDK': formatAsHttpHeader(clientSdk),
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
    clientSdk: Record<string, string>,
    authToken?: string
  ): Promise<T> {
    const sanitizedBodyParams = sanitizeQueryParams(body);
    return fetch(url, queryParams, {
      method: RequestMethods.POST,
      body: JSON.stringify(sanitizedBodyParams),
      mode: 'cors',
      ...(authToken && { credentials: 'include' }),
      headers: {
        'Client-SDK': formatAsHttpHeader(clientSdk),
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
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

/**
 * Converts the JSON representing the Client-SDK agents into the expected HTTP header format.
 *
 * @example
 * Input clientSdk:
 * \{
 *   ANSWERS_CORE: '123',
 *   CUSTOM_AGENT: '456'
 * \}
 *
 * Output HTTP header:
 * 'ANSWERS_CORE=123, CUSTOM_AGENT=456'
 */
function formatAsHttpHeader(clientSdk: Record<string, string>) {
  return Object.keys(clientSdk).reduce((combinedHeader, currentKey) => {
    const httpFormattedHeader = `${currentKey}=${clientSdk[currentKey]}`;
    return combinedHeader ? `${combinedHeader}, ${httpFormattedHeader}` : httpFormattedHeader;
  }, '');
}