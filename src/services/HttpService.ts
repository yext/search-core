import { QueryParams } from '../models/http/params';

/**
 * A service for HTTP Requests
 */
export interface HttpService {
  get<T>(url: string, queryParams: QueryParams, authToken?: string): Promise<T>;
  post<T>(url: string, queryParams: QueryParams, body: QueryParams, authToken?: string): Promise<T>;
}