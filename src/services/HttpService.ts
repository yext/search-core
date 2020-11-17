import { QueryParams } from '../models/http/params';

/**
 * A service for HTTP Requests
 */
export default interface HttpService {
  get<T>(url: string, queryParams: QueryParams, options?: RequestInit): Promise<T>;
  post<T>(url: string, queryParams: QueryParams, body: BodyInit, reqInit: RequestInit): Promise<T>;
}