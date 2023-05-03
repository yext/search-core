import { HttpServiceMock } from '../mocks/HttpServiceMock';
import { SearchConfigWithDefaulting } from '../../src/models/core/SearchConfig';
import {
  UniversalAutocompleteRequest,
  VerticalAutocompleteRequest,
  FilterSearchRequest
} from '../../src/models/autocompleteservice/AutocompleteRequest';
import { HttpService } from '../../src/services/HttpService';
import { AutocompleteServiceImpl } from '../../src/infra/AutocompleteServiceImpl';
import mockAutocompleteResponse from '../fixtures/autocompleteresponse.json';
import mockAutocompleteResponseWithSections from '../fixtures/autocompleteresponsewithsections.json';
import mockAutocompleteResponseWithFailedVerticals from '../fixtures/autocompleteresponsewithfailedverticals.json';
import mockAutocompleteResponseWithVerticalKeys from '../fixtures/autocompleteresponsewithverticalkeys.json';
import { defaultApiVersion, provideEndpoints } from '../../src/provideEndpoints';
import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { ApiResponse } from '../../src/models/searchapi/ApiResponse';
import { SearchError } from '../../src/models/searchapi/SearchError';
import { getClientSdk } from '../../src/utils/getClientSdk';
import { Matcher } from '../../src/models/searchservice/common/Matcher';
import { Endpoints } from '../../src/models/core/Endpoints';

const defaultEndpoints: Required<Endpoints> = provideEndpoints();

describe('AutocompleteService', () => {
  const config: SearchConfigWithDefaulting = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
    visitor: {
      id: '123',
      idMethod: 'YEXT_AUTH'
    },
    endpoints: defaultEndpoints
  };

  const configWithToken: SearchConfigWithDefaulting = {
    token: 'testToken',
    experienceKey: 'testExperienceKey',
    locale: 'en',
    endpoints: defaultEndpoints
  };

  const mockHttpService = new HttpServiceMock();
  const apiResponseValidator = new ApiResponseValidator();
  function createMockAutocompleteService(params?: {
    response?: ApiResponse,
    searchConfig?: SearchConfigWithDefaulting
  }) {
    const {
      response = mockAutocompleteResponse,
      searchConfig = config
    } = params || {};
    mockHttpService.get.mockResolvedValue(response);
    return new AutocompleteServiceImpl(
      searchConfig,
      mockHttpService as HttpService,
      apiResponseValidator
    );
  }

  describe('Universal Autocomplete', () => {
    const expectedUniversalUrl = defaultEndpoints.universalAutocomplete;
    const request: UniversalAutocompleteRequest = {
      input: '',
      sessionTrackingEnabled: false
    };
    const expectedQueryParams = {
      input: '',
      experienceKey: 'testExperienceKey',
      api_key: 'testApiKey',
      v: defaultApiVersion,
      locale: 'en',
      sessionTrackingEnabled: false,
      visitorId: '123',
      visitorIdMethod: 'YEXT_AUTH'
    };

    it('query params are correct with apiKey', async () => {
      const request: UniversalAutocompleteRequest = {
        input: '',
        sessionTrackingEnabled: false
      };

      const autocompleteService = createMockAutocompleteService();
      await autocompleteService.universalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenLastCalledWith(
        expectedUniversalUrl, expectedQueryParams, getClientSdk());
    });

    it('query params are correct with token', async () => {
      const autocompleteService = createMockAutocompleteService({ searchConfig: configWithToken });
      const expectedQueryParams = {
        input: '',
        experienceKey: 'testExperienceKey',
        api_key: 'testApiKey',
        v: defaultApiVersion,
        locale: 'en',
        sessionTrackingEnabled: false
      };

      const { api_key: _, ...expectedParams } = expectedQueryParams;
      await autocompleteService.universalAutocomplete(request);
      expect(mockHttpService.get)
        .toHaveBeenLastCalledWith(expectedUniversalUrl, expectedParams, getClientSdk(), 'testToken');
    });

    it('passes verticalKeys to the results ', async () => {
      const autocompleteService = createMockAutocompleteService({
        response: mockAutocompleteResponseWithVerticalKeys
      });
      const res = await autocompleteService.universalAutocomplete(request);
      expect(res.results).toHaveLength(1);
      expect(res.results[0]).toEqual(expect.objectContaining({
        verticalKeys: ['vendors', 'partners']
      }));
    });

    it('passes custom client SDK', async () => {
      const additionalHttpHeaders = {
        'Client-SDK': {
          CUSTOM_TEST_SITE: 'test'
        }
      };
      const requestWithClient: UniversalAutocompleteRequest = {
        ...request,
        additionalHttpHeaders
      };
      const autocompleteService = createMockAutocompleteService();
      await autocompleteService.universalAutocomplete(requestWithClient);
      expect(mockHttpService.get).toHaveBeenLastCalledWith(
        expectedUniversalUrl, expectedQueryParams, expect.objectContaining(
          additionalHttpHeaders['Client-SDK']));
    });
  });

  describe('Vertical Autocomplete', () => {
    const expectedVerticalUrl = defaultEndpoints.verticalAutocomplete;
    const request: VerticalAutocompleteRequest = {
      input: 'salesforce',
      sessionTrackingEnabled: false,
      verticalKey: 'verticalKey'
    };
    const expectedQueryParams = {
      input: 'salesforce',
      experienceKey: 'testExperienceKey',
      api_key: 'testApiKey',
      v: defaultApiVersion,
      locale: 'en',
      sessionTrackingEnabled: false,
      verticalKey: 'verticalKey'
    };

    it('query params are correct with apiKey', async () => {
      const request: VerticalAutocompleteRequest = {
        input: 'salesforce',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey'
      };
      const expectedQueryParams = {
        input: 'salesforce',
        experienceKey: 'testExperienceKey',
        api_key: 'testApiKey',
        v: defaultApiVersion,
        locale: 'en',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey',
        visitorId: '123',
        visitorIdMethod: 'YEXT_AUTH'
      };
      const autocompleteService = createMockAutocompleteService();
      await autocompleteService.verticalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenLastCalledWith(
        expectedVerticalUrl, expectedQueryParams, getClientSdk());
    });

    it('query params are correct with token', async () => {
      const autocompleteService = createMockAutocompleteService({ searchConfig: configWithToken });

      const { api_key: _, ...expectedParams } = expectedQueryParams;
      await autocompleteService.verticalAutocomplete(request);
      expect(mockHttpService.get)
        .toHaveBeenLastCalledWith(expectedVerticalUrl, expectedParams, getClientSdk(), 'testToken');
    });
  });

  describe('FilterSearch', () => {
    const expectedFilterUrl = defaultEndpoints.filterSearch;
    it('query params are correct', async () => {
      const convertedSearchParams = {
        sectioned: false,
        fields: [{
          fieldId: 'field',
          entityTypeId: 'location',
          shouldFetchEntities: false
        }]
      };
      const convertedExcludedFields = [
        { someFieldId: { [Matcher.Equals]: 'Washington DC' } },
        { anotherFieldId: { [Matcher.Equals]: 'Seattle' } }
      ];
      const request: FilterSearchRequest = {
        input: 'salesforce',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey',
        sectioned: false,
        fields: [{
          fieldApiName: 'field',
          entityType: 'location',
          fetchEntities: false
        }],
        excluded: [
          {
            fieldId: 'someFieldId',
            value: 'Washington DC',
            matcher: Matcher.Equals
          },
          {
            fieldId: 'anotherFieldId',
            value: 'Seattle',
            matcher: Matcher.Equals
          }
        ]
      };
      const expectedQueryParams = {
        input: 'salesforce',
        experienceKey: 'testExperienceKey',
        api_key: 'testApiKey',
        v: defaultApiVersion,
        locale: 'en',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey',
        search_parameters: JSON.stringify(convertedSearchParams),
        excluded: JSON.stringify(convertedExcludedFields),
        visitorId: '123',
        visitorIdMethod: 'YEXT_AUTH'
      };
      const autocompleteService = createMockAutocompleteService({
        response: mockAutocompleteResponseWithSections
      });
      await autocompleteService.filterSearch(request);
      expect(mockHttpService.get).toHaveBeenLastCalledWith(
        expectedFilterUrl, expectedQueryParams, getClientSdk());
    });

    it('handle failed verticals in response', () => {
      const request: FilterSearchRequest = {
        input: 'salesforce',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey',
        sectioned: false,
        fields: [{
          fieldApiName: 'field',
          entityType: 'location',
          fetchEntities: false
        }]
      };
      const autocompleteService = createMockAutocompleteService({
        response: mockAutocompleteResponseWithFailedVerticals
      });
      expect(async () => await autocompleteService.filterSearch(request))
        .rejects.toThrow({
          message: 'Something went wrong.',
          code: 400,
          type: 'BACKEND_ERROR'
        } as SearchError);
    });
  });
});

describe('additionalQueryParams are passed through', () => {
  const config: SearchConfigWithDefaulting = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
    additionalQueryParams: {
      jsLibVersion: 'LIB_VERSION'
    },
    endpoints: defaultEndpoints
  };
  let mockHttpService, apiResponseValidator, autocompleteService;
  beforeEach(() => {
    mockHttpService = new HttpServiceMock();
    mockHttpService.get.mockResolvedValue(mockAutocompleteResponse);
    apiResponseValidator = new ApiResponseValidator();
    autocompleteService = new AutocompleteServiceImpl(
      config,
      mockHttpService as HttpService,
      apiResponseValidator
    );
  });

  it('Universal Autocomplete', async () => {
    const request: UniversalAutocompleteRequest = {
      input: 'salesforce'
    };
    await autocompleteService.universalAutocomplete(request);
    expect(mockHttpService.get).toHaveBeenCalledTimes(1);
    expect(mockHttpService.get.mock.calls[0][1]).toEqual(expect.objectContaining({
      jsLibVersion: 'LIB_VERSION'
    }));
  });

  it('Vertical Autocomplete', async () => {
    const request: VerticalAutocompleteRequest = {
      input: 'salesforce',
      verticalKey: 'verticalKey'
    };
    await autocompleteService.verticalAutocomplete(request);
    expect(mockHttpService.get).toHaveBeenCalledTimes(1);
    expect(mockHttpService.get.mock.calls[0][1]).toEqual(expect.objectContaining({
      jsLibVersion: 'LIB_VERSION'
    }));
  });

  it('FilterSearch', async () => {
    mockHttpService.get.mockResolvedValue(mockAutocompleteResponseWithSections);
    apiResponseValidator = new ApiResponseValidator();
    autocompleteService = new AutocompleteServiceImpl(
      config,
      mockHttpService as HttpService,
      apiResponseValidator
    );
    const request: FilterSearchRequest = {
      input: 'salesforce',
      verticalKey: 'verticalKey',
      sectioned: false,
      fields: []
    };
    await autocompleteService.filterSearch(request);
    expect(mockHttpService.get).toHaveBeenCalledTimes(1);
    expect(mockHttpService.get.mock.calls[0][1]).toEqual(expect.objectContaining({
      jsLibVersion: 'LIB_VERSION'
    }));
  });
});
