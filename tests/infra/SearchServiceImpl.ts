import { HttpServiceMock } from '../mocks/HttpServiceMock';
import mockUniversalResponse from '../fixtures/liveapiuniversalresponse.json';
import { SearchServiceImpl } from '../../src/infra/SearchServiceImpl';
import { AnswersConfig } from '../../src/models/core/AnswersConfig';
import { UniversalSearchRequest } from '../../src/models/searchservice/request/UniversalSearchRequest';
import { HttpService } from '../../src/services/HttpService';
import { QueryTrigger } from '../../src/models/searchservice/request/QueryTrigger';
import { QuerySource } from '../../src/models/searchservice/request/QuerySource';
import { VerticalSearchRequest } from '../../src/models/searchservice/request/VerticalSearchRequest';

describe('SearchService', () => {
  const configWithRequiredParams: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en'
  };

  describe('Universal Search', () => {
    const mockHttpService = new HttpServiceMock();
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
      const configWithAllParams: AnswersConfig = {
        apiKey: 'testApiKey',
        experienceKey: 'testExperienceKey',
        locale: 'es',
        experienceVersion: 'PRODUCTION'
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

    it('A custom universal search service endpoint may be supplied', async () => {
      const config: AnswersConfig = {
        ...configWithRequiredParams,
        endpoints: {
          universalSearch: 'http://custom.endpoint.com/api'
        }
      };
      const searchService: SearchServiceImpl = new SearchServiceImpl(
        config,
        mockHttpService as HttpService
      );
      await searchService.universalSearch({query: 'test'});
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expect.anything());
    });
  });

  describe('Vertical Search', ()=> {
    const mockHttpService = new HttpServiceMock();
    mockHttpService.get.mockResolvedValue({
      response: {},
      meta: {},
    });
    const expectedVerticalUrl = 'https://liveapi.yext.com/v2/accounts/me/answers/vertical/query';

    it('Query params are correct when only required params are supplied', async () => {
      const requestWithRequiredParams: VerticalSearchRequest = {
        query: 'testQuery',
        verticalKey: 'verticalKey'
      };
      const expectedQueryParams = {
        api_key: 'testApiKey',
        experienceKey: 'testExperienceKey',
        verticalKey: 'verticalKey',
        input: 'testQuery',
        locale: 'en',
        v: 20190101,
        source: 'STANDARD',
        sortBys: '[]',
      };
      const searchService = new SearchServiceImpl(
        configWithRequiredParams,
        mockHttpService as HttpService
      );
      await searchService.verticalSearch(requestWithRequiredParams);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams);
    });
  });
});
