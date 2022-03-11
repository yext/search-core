import { SdkClients } from '../models/core/SdkClients';
import { QueryParams } from '../models/http/params';

/**
 * A service for HTTP Requests
 */
export interface HttpService {
  get<T>(
    url: string,
    queryParams: QueryParams,
    sdkClients: SdkClients,
    authToken?: string
  ): Promise<T>;

  post<T>(
    url: string,
    queryParams: QueryParams,
    body: QueryParams,
    sdkClients: SdkClients,
    authToken?: string
  ): Promise<T>;
}