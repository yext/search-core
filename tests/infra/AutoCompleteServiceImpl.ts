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
import mockAutocompleteResponseWithFailedVerticals from '../fixtures/autocompleteresponsewithfailedverticals.json';
import { defaultEndpoints } from '../../src/constants';
import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { AnswersError } from '../../src/models/answersapi/AnswersError';

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
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponse);
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
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.universalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expectedQueryParams, undefined);
    });

    it('query params are correct with token', async () => {
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponse);
      const autocompleteService = new AutocompleteServiceImpl(
        configWithToken,
        mockHttpService as HttpService,
        apiResponseValidator
      );

      const { ...expectedParams } = expectedQueryParams;
      delete expectedParams.api_key;
      await autocompleteService.universalAutocomplete(request);
      expect(mockHttpService.get)
        .toHaveBeenCalledWith(expectedUniversalUrl, expectedParams, 'testToken');
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
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponse);
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
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.verticalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams, undefined);
    });

    it('query params are correct with token', async () => {
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponse);
      const autocompleteService = new AutocompleteServiceImpl(
        configWithToken,
        mockHttpService as HttpService,
        apiResponseValidator
      );

      const { ...expectedParams } = expectedQueryParams;
      delete expectedParams.api_key;
      await autocompleteService.verticalAutocomplete(request);
      expect(mockHttpService.get)
        .toHaveBeenCalledWith(expectedVerticalUrl, expectedParams, 'testToken');
    });
  });

  describe('FilterSearch', () => {
    const expectedFilterUrl = defaultEndpoints.filterSearch;
    it('query params are correct', async () => {
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponseWithSections);
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
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.filterSearch(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams, undefined);
    });

    it('handle failed verticals in response', () => {
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponseWithFailedVerticals);
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
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      expect(async () => await autocompleteService.filterSearch(request))
        .rejects.toThrow({
          message: 'Something went wrong.',
          code: 400,
          type: 'BACKEND_ERROR'
        } as AnswersError);
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