import { HttpServiceMock } from '../mocks/HttpServiceMock';
import mockUniversalResponse from '../fixtures/liveapiuniversalresponse.json';
import { SearchServiceImpl } from '../../src/infra/SearchServiceImpl';
import { AnswersConfig } from '../../src/models/core/AnswersConfig';
import { UniversalSearchRequest } from '../../src/models/searchservice/request/UniversalSearchRequest';
import { HttpService } from '../../src/services/HttpService';
import { QueryTrigger } from '../../src/models/searchservice/request/QueryTrigger';
import { QuerySource } from '../../src/models/searchservice/request/QuerySource';
import { VerticalSearchRequest } from '../../src/models/searchservice/request/VerticalSearchRequest';
import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { Matcher } from '../../src/models/searchservice/common/Matcher';
import { Direction } from '../../src/models/searchservice/request/Direction';
import { SortType } from '../../src/models/searchservice/request/SortType';

describe('SearchService', () => {
  const configWithRequiredParams: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en'
  };

  const configWithAllParams: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'es',
    experienceVersion: 'PRODUCTION'
  };

  const apiResponseValidator = new ApiResponseValidator();

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
        mockHttpService as HttpService,
        apiResponseValidator
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
        location: {
          latitude: 40,
          longitude: 40
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
        mockHttpService as HttpService,
        apiResponseValidator
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
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await searchService.universalSearch({query: 'test'});
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expect.anything());
    });
  });

  describe('Vertical Search', ()=> {
    let mockHttpService;
    beforeEach(() => {
      mockHttpService = new HttpServiceMock();
      mockHttpService.get.mockResolvedValue({
        response: {},
        meta: {},
      });
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
      mockHttpService as HttpService,
        apiResponseValidator
      );
      await searchService.verticalSearch(requestWithRequiredParams);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams);
    });

    it('Query params are correct when all required params are supplied', async () => {
      const requestWithAllParams: VerticalSearchRequest = {
        context: {
          key: 'value'
        },
        facets: [{
          fieldId: 'c_awards',
          options: [{
            matcher: Matcher.Equals,
            value: 'Impact Award'
          }]
        }],
        limit: 10,
        location: {
          latitude: 40,
          longitude: 40
        },
        locationRadius: 100,
        offset: 10,
        query: 'testQuery',
        querySource: QuerySource.Standard,
        queryTrigger: QueryTrigger.Initialize,
        referrerPageUrl: 'yext.com',
        retrieveFacets: true,
        sessionTrackingEnabled: true,
        skipSpellCheck: true,
        sortBys: [{
          direction: Direction.Ascending,
          field: 'name',
          type: SortType.Field
        }],
        staticFilters: {
            fieldId: 'city',
            matcher: Matcher.NotEquals,
            value: 'Arlington'
        },
        verticalKey: 'verticalKey'
      };
      const expectedQueryParams = {
        api_key: 'testApiKey',
        context: '{\"key\":\"value\"}',
        experienceKey: 'testExperienceKey',
        facetFilters: '{\"c_awards\":[{\"c_awards\":{\"$eq\":\"Impact Award\"}}]}',
        filters: '{\"city\":{\"!$eq\":\"Arlington\"}}',
        input: 'testQuery',
        limit: 10,
        locale: 'es',
        location: '40,40',
        locationRadius: '100',
        offset: 10,
        queryTrigger: 'initialize',
        referrerPageUrl: 'yext.com',
        retrieveFacets: true,
        sessionTrackingEnabled: true,
        skipSpellCheck: true,
        sortBys: '[{\"direction\":\"ASC\",\"field\":\"name\",\"type\":\"FIELD\"}]',
        source: 'STANDARD',
        v: 20190101,
        version: 'PRODUCTION',
        verticalKey: 'verticalKey',
      };
      const searchService = new SearchServiceImpl(
        configWithAllParams,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await searchService.verticalSearch(requestWithAllParams);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams);
    });

    it('Passes locationRadius = 0 correctly, despite it being a falsy value', async () => {
      const request = {
        query: 'testQuery',
        verticalKey: 'verticalKey',
        locationRadius: 0.0
      };
      const searchService = new SearchServiceImpl(
        configWithRequiredParams,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await searchService.verticalSearch(request);
      const actualQueryParams = mockHttpService.get.mock.calls[0][1];
      const actualLocationRadius = (actualQueryParams as { locationRadius: string }).locationRadius;
      expect(actualLocationRadius).toEqual('0');
    });

    it('Passes locationRadius with decimal correctly', async () => {
      const request = {
        query: 'testQuery',
        verticalKey: 'verticalKey',
        locationRadius: 1.23
      };
      const searchService = new SearchServiceImpl(
        configWithRequiredParams,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await searchService.verticalSearch(request);
      const actualQueryParams = mockHttpService.get.mock.calls[0][1];
      const actualLocationRadius = (actualQueryParams as { locationRadius: string }).locationRadius;
      expect(actualLocationRadius).toEqual('1.23');
    });
  });
});
