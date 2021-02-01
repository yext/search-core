import { QueryParams } from '../models/http/params';

/**
 * A service for HTTP Requests
 */
export interface HttpService {
  get<T>(url: string, queryParams: QueryParams, options?: RequestInit): Promise<T>;
  post<T>(url: string, queryParams: QueryParams, body: QueryParams, reqInit: RequestInit): Promise<T>;
}