import { HttpServiceMock } from '../mocks/HttpServiceMock';
import { AnswersConfig } from '../../src/models/core/AnswersConfig';
import {
  UniversalAutocompleteRequest,
  VerticalAutocompleteRequest,
  FilterSearchRequest
} from '../../src/models/autocompleteservice/AutocompleteRequest';
import { HttpService } from '../../src/services/HttpService';
import { AutocompleteServiceImpl } from '../../src/infra/AutocompleteServiceImpl';
import mockAutocompleteResponse from '../fixtures/autocompleteresponse.json';
import mockAutocompleteResponseWithSections from '../fixtures/autocompleteresponsewithsections.json';
import mockAutocompleteResponseWithVerticalKeys from '../fixtures/autocompleteresponsewithverticalkeys.json';
import { defaultEndpoints } from '../../src/constants';
import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { ApiResponse } from '../../src/models/answersapi/ApiResponse';

describe('AutocompleteService', () => {
  const config: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
    visitor: {
      id: '123',
      idMethod: 'YEXT_AUTH'
    }
  };

  const configWithToken: AnswersConfig = {
    token: 'testToken',
    experienceKey: 'testExperienceKey',
    locale: 'en',
  };

  const mockHttpService = new HttpServiceMock();
  const apiResponseValidator = new ApiResponseValidator();
  function createMockAutocompleteService(params?: { response?: ApiResponse, answersConfig?: AnswersConfig }) {
    const {
      response = mockAutocompleteResponse,
      answersConfig = config
    } = params || {};
    mockHttpService.get.mockResolvedValue(response);
    return new AutocompleteServiceImpl(
      answersConfig,
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
      v: 20190101,
      locale: 'en',
      sessionTrackingEnabled: false
    };

    it('query params are correct with apiKey', async () => {
      const request: UniversalAutocompleteRequest = {
        input: '',
        sessionTrackingEnabled: false
      };
      const expectedQueryParams = {
        input: '',
        experienceKey: 'testExperienceKey',
        api_key: 'testApiKey',
        v: 20190101,
        locale: 'en',
        sessionTrackingEnabled: false,
        visitorId: '123',
        visitorIdMethod: 'YEXT_AUTH'
      };
      const autocompleteService = createMockAutocompleteService();
      await autocompleteService.universalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expectedQueryParams);
    });

    it('query params are correct with token', async () => {
      const autocompleteService = createMockAutocompleteService({ answersConfig: configWithToken });

      const { api_key: _, ...expectedParams } = expectedQueryParams;
      await autocompleteService.universalAutocomplete(request);
      expect(mockHttpService.get)
        .toHaveBeenCalledWith(expectedUniversalUrl, expectedParams, 'testToken');
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
      v: 20190101,
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
        v: 20190101,
        locale: 'en',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey',
        visitorId: '123',
        visitorIdMethod: 'YEXT_AUTH'
      };
      const autocompleteService = createMockAutocompleteService();
      await autocompleteService.verticalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams);
    });

    it('query params are correct with token', async () => {
      const autocompleteService = createMockAutocompleteService({ answersConfig: configWithToken });

      const { api_key: _, ...expectedParams } = expectedQueryParams;
      await autocompleteService.verticalAutocomplete(request);
      expect(mockHttpService.get)
        .toHaveBeenCalledWith(expectedVerticalUrl, expectedParams, 'testToken');
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
      const expectedQueryParams = {
        input: 'salesforce',
        experienceKey: 'testExperienceKey',
        api_key: 'testApiKey',
        v: 20190101,
        locale: 'en',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey',
        search_parameters: JSON.stringify(convertedSearchParams),
        visitorId: '123',
        visitorIdMethod: 'YEXT_AUTH'
      };
      const autocompleteService = createMockAutocompleteService({
        response: mockAutocompleteResponseWithSections
      });
      await autocompleteService.filterSearch(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams);
    });
  });
});

describe('additionalQueryParams are passed through', () => {
  const config: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
    additionalQueryParams: {
      jsLibVersion: 'LIB_VERSION'
    }
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