import HttpRequester from '../../src/http/HttpRequester';

describe('HttpRequester', () => {
  it('can make get requests', async () => {
    fetch.mockResponseOnce('{}');
    const queryParams = {
      aQuery: 'param'
    };
    const reqInit = {
      credentials: 'omit'
    };
    await HttpRequester.get('http://yext.com', queryParams, reqInit);
    const expectedReqInit = {
      method: 'get',
      credentials: 'omit'
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });

  it('can make post requests', async () => {
    fetch.mockResponseOnce('{}');
    const jsonBody = {
      data: '123'
    };
    const queryParams = {
      aQuery: 'param'
    };
    const reqInit = {
      credentials: 'include'
    };
    await HttpRequester.post('http://yext.com', queryParams, jsonBody, reqInit);
    const expectedReqInit = {
      method: 'post',
      body: '{\"data\":\"123\"}',
      credentials: 'include'
    };
    expect(fetch).toHaveBeenLastCalledWith('http://yext.com/?aQuery=param', expectedReqInit);
  });
});