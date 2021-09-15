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
    await httpServiceImpl.get('http://yext.com', queryParams);
    const expectedReqInit = {
      method: 'get',
      credentials: 'include'
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
    await httpServiceImpl.post('http://yext.com', queryParams, jsonBody);
    const expectedReqInit = {
      method: 'post',
      body: '{\"data\":\"123\"}',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });

  it('is compatible with node', async () => {
    // Simulate a node environment where the window is undefined
    const windowSpy = jest.spyOn(window, 'window', 'get');
    windowSpy.mockImplementation(() => undefined);

    const queryParams = {
      nodeQuery: 'param'
    };
    await httpServiceImpl.get('http://yext.com', queryParams);
    windowSpy.mockRestore();

    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?nodeQuery=param', expect.anything());
  });
});