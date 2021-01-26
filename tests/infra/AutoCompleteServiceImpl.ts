import { HttpServiceMock } from '../mocks/HttpServiceMock';
import { AnswersConfig } from '../../src/models/core/AnswersConfig';
import { UniversalAutoCompleteRequest, VerticalAutoCompleteRequest, FilterAutoCompleteRequest, SearchParameters} from '../../src/models/autocompleteservice/AutoCompleteRequest';
import { HttpService } from '../../src/services/HttpService';
import { AutoCompleteServiceImpl } from '../../src/infra/AutoCompleteServiceImpl';
import mockAutoCompleteResponse from '../fixtures/autocompleteresponse.json';
import mockAutoCompleteResponseWithSections from '../fixtures/autocompleteresponsewithsections.json';
import { defaultEndpoints } from '../../src/constants';
import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';

describe('AutoCompleteService', () => {
  const config: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
  };

  const mockHttpService = new HttpServiceMock();

  const apiResponseValidator = new ApiResponseValidator();

  describe('Universal AutoComplete', () => {
    const expectedUniversalUrl = defaultEndpoints.universalAutoComplete;
    it('query params are correct', async () => {
      mockHttpService.get.mockResolvedValue(mockAutoCompleteResponse);
      const request: UniversalAutoCompleteRequest = {
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
      const autocompleteService = new AutoCompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.universalAutoComplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expectedQueryParams);
    });
  });

  describe('Vertical AutoComplete', () => {
    const expectedVerticalUrl = defaultEndpoints.verticalAutoComplete;
    it('query params are correct', async () => {
      mockHttpService.get.mockResolvedValue(mockAutoCompleteResponse);
      const request: VerticalAutoCompleteRequest = {
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
      const autocompleteService = new AutoCompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.verticalAutoComplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams);
    });
  });

  describe('Filter AutoComplete', () => {
    const expectedFilterUrl = defaultEndpoints.filterAutoComplete;
    it('query params are correct', async () => {
      mockHttpService.get.mockResolvedValue(mockAutoCompleteResponseWithSections);
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
      const request: FilterAutoCompleteRequest = {
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
      const autocompleteService = new AutoCompleteServiceImpl(
        config,
        mockHttpService as HttpService,
        apiResponseValidator
      );
      await autocompleteService.filterAutoComplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams);
    });
  });
});