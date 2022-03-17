import fetch from 'cross-fetch';

import { HttpServiceImpl } from '../../src/infra/HttpServiceImpl';
import { getClientSdk } from '../../src/utils/getClientSdk';

jest.mock('cross-fetch');

describe('HttpServiceImpl', () => {
  const httpServiceImpl = new HttpServiceImpl();
  const clientSdk = {
    ANSWERS_CORE: '123'
  };
  fetch.mockResolvedValue({
    json: () => []
  });

  it('can make get requests', async () => {
    const queryParams = {
      aQuery: 'param'
    };
    await httpServiceImpl.get('http://yext.com', queryParams, clientSdk);
    const expectedReqInit = {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Client-SDK': 'ANSWERS_CORE=123'
      }
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });

  it('can make get requests with authToken', async () => {
    const queryParams = {
      aQuery: 'param'
    };
    const authToken = '123.456.789';

    await httpServiceImpl.get('http://yext.com', queryParams, clientSdk, authToken);
    const expectedReqInit = {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Client-SDK': 'ANSWERS_CORE=123',
        Authorization: `Bearer ${authToken}`
      }
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
    await httpServiceImpl.post('http://yext.com', queryParams, jsonBody, clientSdk);
    const expectedReqInit = {
      method: 'post',
      body: '{\"data\":\"123\"}',
      mode: 'cors',
      credentials: undefined,
      headers: {
        'Client-SDK': 'ANSWERS_CORE=123',
        'Content-Type': 'application/json'
      }
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });

  it('can make post requests with authToken', async () => {
    const jsonBody = {
      data: '123'
    };
    const queryParams = {
      aQuery: 'param'
    };
    const authToken = '123.456.789';

    await httpServiceImpl.post('http://yext.com', queryParams, jsonBody, clientSdk, authToken);
    const expectedReqInit = {
      method: 'post',
      body: '{\"data\":\"123\"}',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Client-SDK': 'ANSWERS_CORE=123',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
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
    await httpServiceImpl.get('http://yext.com', queryParams, clientSdk);
    windowSpy.mockRestore();

    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?nodeQuery=param', expect.anything());
  });


  it('makes request with custom client SDK, but only when not falsy', async () => {
    const queryParams = {
      aQuery: 'param'
    };
    const additionalHttpHeaders = {
      'Client-SDK': {
        ...clientSdk,
        UNDEFINED_AGENT: undefined,
        EMPTY_STRING: '',
        CUSTOM_TEST_SITE: 'test'
      }
    };
    await httpServiceImpl.get('http://yext.com', queryParams, getClientSdk(additionalHttpHeaders));
    const expectedReqInit = {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Client-SDK': 'ANSWERS_CORE=123, CUSTOM_TEST_SITE=test'
      }
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });
});