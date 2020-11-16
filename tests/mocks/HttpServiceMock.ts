/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { QueryParams } from '../../src/models/http/params';

const HttpServiceMock = jest.fn(() => ({
  get: jest.fn(
    function get<T>(url: string, queryParams: QueryParams, options?: RequestInit): Promise<T> {
      return Promise.resolve(null);
    }
  ),
  post: jest.fn(
    function post<T>(url: string, queryParams: QueryParams, body: BodyInit, reqInit: RequestInit): Promise<T> {
      return Promise.resolve(null);
    }
  )
}));

export default HttpServiceMock;