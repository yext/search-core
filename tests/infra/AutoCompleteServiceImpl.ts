import { HttpServiceMock } from '../mocks/HttpServiceMock';
import { AnswersConfig } from '../../src/models/core/AnswersConfig';
import { UniversalAutocompleteRequest, VerticalAutocompleteRequest, FilterAutocompleteRequest, SearchParameters} from '../../src/models/autocompleteservice/AutocompleteRequest';
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

  const mockHttpService = new HttpServiceMock();

  const apiResponseValidator = new ApiResponseValidator();

  describe('Universal Autocomplete', () => {
    const expectedUniversalUrl = defaultEndpoints.universalAutocomplete;
    it('query params are correct', async () => {
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
        sessionTrackingEnabled: false
      };
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.universalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expectedQueryParams);
    });
  });

  describe('Vertical Autocomplete', () => {
    const expectedVerticalUrl = defaultEndpoints.verticalAutocomplete;
    it('query params are correct', async () => {
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
        verticalKey: 'verticalKey'
      };
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.verticalAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams);
    });
  });

  describe('Filter Autocomplete', () => {
    const expectedFilterUrl = defaultEndpoints.filterAutocomplete;
    it('query params are correct', async () => {
      mockHttpService.get.mockResolvedValue(mockAutocompleteResponseWithSections);
      const searchParams: SearchParameters = {
        sectioned: false,
          fields: [{
            fieldApiName: 'field',
            entityType: 'location',
            fetchEntities: false
          }]
      };
      const convertedSearchParams = {
        sectioned: false,
          fields: [{
            fieldId: 'field',
            entityTypeId: 'location',
            shouldFetchEntities: false
          }]
      };
      const request: FilterAutocompleteRequest = {
        input: 'salesforce',
        sessionTrackingEnabled: false,
        verticalKey: 'verticalKey',
        searchParameters: searchParams
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
      const autocompleteService = new AutocompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.filterAutocomplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams);
    });
  });
});