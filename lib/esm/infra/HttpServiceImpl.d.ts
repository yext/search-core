import { QueryParams } from '../models/http/params';
import { HttpService } from '../services/HttpService';
/**
 * HttpServiceImpl is a wrapper around the native implementation of AJAX
 * related matters.
 */
export declare class HttpServiceImpl implements HttpService {
    /**
     * Perform a GET request
     */
    get<T>(url: string, queryParams: QueryParams, options?: RequestInit): Promise<T>;
    /**
     * Perform a POST request
     */
    post<T>(url: string, queryParams: QueryParams, body: QueryParams, reqInit: RequestInit): Promise<T>;
    /**
     * Perform a fetch, using the polyfill if needed.
     */
    private fetch;
}
//# sourceMappingURL=HttpServiceImpl.d.ts.map