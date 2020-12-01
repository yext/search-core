import HttpServiceMock from '../mocks/HttpServiceMock';
import mockUniversalResponse from '../fixtures/liveapiuniversalresponse.json';
import SearchServiceImpl from '../../src/infra/SearchServiceImpl';
import Config from '../../src/models/core/Config';
import UniversalSearchRequest from '../../src/models/searchservice/request/UniversalSearchRequest';
import HttpService from '../../src/services/HttpService';
import { QueryTrigger } from '../../src/models/searchservice/request/QueryTrigger';
import { QuerySource } from '../../src/constants';

describe('SearchService', () => {
  const configWithRequiredParams: Config = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en'
  };

  const configWithAllParams: Config = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'es',
    experienceVersion: 'PRODUCTION'
  };

  const mockHttpService = new HttpServiceMock();

  describe('Universal Search', () => {
    mockHttpService.get.mockResolvedValue(mockUniversalResponse);
    const expectedUniversalUrl = 'https://liveapi.yext.com/v2/accounts/me/answers/query';
    it('Query params are correct when only required params are supplied', async () => {
      const requestWithRequiredParams: UniversalSearchRequest = {
        query: 'testQuery'
      };
      const expectedQueryParams = {
        api_key: 'testApiKey',
        experienceKey: 'testExperienceKey',
        input: 'testQuery',
        locale: 'en',
        v: 20190101,
        source: 'STANDARD'
      };
      const searchService = new SearchServiceImpl(
        configWithRequiredParams,
        mockHttpService as HttpService
      );
      await searchService.universalSearch(requestWithRequiredParams);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expectedQueryParams);
    });

    it('Query params are correct when all possible params are supplied', async () => {
      const requestWithAllParams: UniversalSearchRequest = {
        query: 'testQuery',
        queryTrigger: QueryTrigger.Initialize,
        skipSpellCheck: true,
        sessionTrackingEnabled: true,
        coordinates: {
          latitude: '40',
          longitude: '40'
        },
        context: {
          key: 'value'
        },
        referrerPageUrl: 'yext.com',
        querySource: QuerySource.Standard
      };
      const expectedQueryParams = {
        api_key: 'testApiKey',
        context: '{\"key\":\"value\"}',
        experienceKey: 'testExperienceKey',
        input: 'testQuery',
        locale: 'es',
        location: '40,40',
        queryTrigger: 'initialize',
        referrerPageUrl: 'yext.com',
        sessionTrackingEnabled: true,
        skipSpellCheck: true,
        v: 20190101,
        version: 'PRODUCTION',
        source: 'STANDARD'
      };
      const searchService: SearchServiceImpl = new SearchServiceImpl(
        configWithAllParams,
        mockHttpService as HttpService
      );
      await searchService.universalSearch(requestWithAllParams);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expectedQueryParams);
    });
  });
});
