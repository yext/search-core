/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { QueryParams } from '../../src/models/http/params';

let mockResponse: any = Object.create(null);

const HttpServiceMock = jest.fn(() => ({
  get: jest.fn(
    function get<T>(url: string, queryParams: QueryParams, options?: RequestInit): Promise<T> {
      return Promise.resolve(mockResponse);
    }
  ),
  post: jest.fn(
    function post<T>(url: string, queryParams: QueryParams, body: BodyInit, reqInit: RequestInit): Promise<T> {
      return Promise.resolve(mockResponse);
    }
  ),
  setMockResponse(mockResponseParam: any): void {
    mockResponse = mockResponseParam;
  }
}));

export default HttpServiceMock;