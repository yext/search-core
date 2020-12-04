import HttpServiceMock from '../mocks/HttpServiceMock';
import Config from '../../src/models/core/Config';
import { AutoCompleteRequest, VerticalAutoCompleteRequest, FilterAutoCompleteRequest, SearchParameters} from '../../src/models/autocompleteservice/AutoCompleteRequest';
import HttpService from '../../src/services/HttpService';
import AutoCompleteServiceImpl from '../../src/infra/AutoCompleteServiceImpl';
import mockAutoCompleteResponse from '../fixtures/autocompleteresponse.json';

describe('AutoCompleteService', () => {
  const config: Config = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
  };

  const mockHttpService = new HttpServiceMock();
  mockHttpService.get.mockResolvedValue(mockAutoCompleteResponse);

  describe('Universal AutoComplete', () => {
    const expectedUniversalUrl = 'https://liveapi-cached.yext.com/v2/accounts/me/answers/autocomplete';
    it('query params are correct', async () => {
        const request: AutoCompleteRequest = {
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
          mockHttpService as HttpService
        );
        await autocompleteService.autoCompleteForUniversal(request);
        expect(mockHttpService.get).toHaveBeenCalledWith(expectedUniversalUrl, expectedQueryParams);
      });
  });

  describe('Vertical AutoComplete', () => {
    const expectedVerticalUrl = 'https://liveapi-cached.yext.com/v2/accounts/me/answers/vertical/autocomplete';
      it('query params are correct', async () => {
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
          mockHttpService as HttpService
        );
        await autocompleteService.autoCompleteForVertical(request);
        expect(mockHttpService.get).toHaveBeenCalledWith(expectedVerticalUrl, expectedQueryParams);
      });
  });

  describe('Filter AutoComplete', () => {
    const expectedFilterUrl = 'https://liveapi-cached.yext.com/v2/accounts/me/answers/filtersearch';
      it('query params are correct', async () => {
        const searchParam: SearchParameters = {
          sectioned: false,
            fields: [{
              fieldApiName: 'field',
              entityType: 'location',
              fetchEntities: false
            }]
        };
        const request: FilterAutoCompleteRequest = {
          input: 'salesforce',
          sessionTrackingEnabled: false,
          verticalKey: 'verticalKey',
          searchParameters: searchParam
        };
        const expectedQueryParams = {
          input: 'salesforce',
          experienceKey: 'testExperienceKey',
          api_key: 'testApiKey',
          v: 20190101,
          locale: 'en',
          sessionTrackingEnabled: false,
          verticalKey: 'verticalKey',
          search_parameters: JSON.stringify(searchParam)
        };
        const autocompleteService = new AutoCompleteServiceImpl(
          config,
          mockHttpService as HttpService
        );
        await autocompleteService.autoCompleteForFilter(request);
        expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams);
      });
  });
});