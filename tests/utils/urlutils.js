import { addParamsToURL } from '../../src/utils/urlutils';

describe('Url Utils', () => {
  describe('addParamsToUrl', () => {
    it('adds params to a url', () => {
      const baseUrl = 'http://yext.com';
      const params = {
        aKey: 'aValue',
      };
      const urlWithParams = addParamsToURL(baseUrl, params);
      const expectedUrl = 'http://yext.com/?aKey=aValue';
      expect(urlWithParams).toEqual(expectedUrl);
    });

    it('does not duplicate ending slashes', () => {
      const baseUrl = 'http://yext.com/';
      const params = {
        aKey: 'aValue',
      };
      const urlWithParams = addParamsToURL(baseUrl, params);
      const expectedUrl = 'http://yext.com/?aKey=aValue';
      expect(urlWithParams).toEqual(expectedUrl);
    });

    it('works with no new params', () => {
      const baseUrl = 'http://yext.com/?origKey=origValue';
      const params = {};
      const urlWithParams = addParamsToURL(baseUrl, params);
      const expectedUrl = 'http://yext.com/?origKey=origValue';
      expect(urlWithParams).toEqual(expectedUrl);
    });

    it('combines params', () => {
      const baseUrl = 'http://yext.com/?origKey=origValue';
      const params = {
        aKey: 'aValue',
      };
      const urlWithParams = addParamsToURL(baseUrl, params);
      const expectedUrl = 'http://yext.com/?origKey=origValue&aKey=aValue';
      expect(urlWithParams).toEqual(expectedUrl);
    });

    it('encodes params correctly', () => {
      const baseUrl = 'http://yext.com/?';
      const params = {
        sortBys: '[{"type":"RELEVANCE"}]',
      };
      const urlWithParams = addParamsToURL(baseUrl, params);
      const expectedUrl = 'http://yext.com/?sortBys=%5B%7B%22type%22%3A%22RELEVANCE%22%7D%5D';
      expect(urlWithParams).toEqual(expectedUrl);
    });
  });
});