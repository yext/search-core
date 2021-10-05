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
import { defaultEndpoints } from '../../src/constants';
import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';

describe('AutocompleteService', () => {
  const config: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
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
      search_parameters: JSON.stringify(convertedSearchParams)
    };

    it('query params are correct', async () => {
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponseWithSections);
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.filterSearch(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams, undefined);
    });

    it('query params are correct', async () => {
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponseWithSections);
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.filterSearch(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams, undefined);
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