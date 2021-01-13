import fetch from 'cross-fetch';

import { HttpServiceImpl } from '../../src/infra/HttpServiceImpl';

jest.mock('cross-fetch');

describe('HttpServiceImpl', () => {
  const httpServiceImpl = new HttpServiceImpl();
  fetch.mockResolvedValue({
    json: () => []
  });

  it('can make get requests', async () => {
    const queryParams = {
      aQuery: 'param'
    };
    const reqInit = {
      credentials: 'omit'
    };
    await httpServiceImpl.get('http://yext.com', queryParams, reqInit);
    const expectedReqInit = {
      method: 'get',
      credentials: 'omit'
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });

  it('can make post requests', async () => {
    const jsonBody = {
      data: '123'
    };
    const queryParams = {
      aQuery: 'param'
    };
    const reqInit = {
      credentials: 'include'
    };
    await httpServiceImpl.post('http://yext.com', queryParams, jsonBody, reqInit);
    const expectedReqInit = {
      method: 'post',
      body: '{\"data\":\"123\"}',
      credentials: 'include'
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });
});