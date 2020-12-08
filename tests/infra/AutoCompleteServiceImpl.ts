import HttpServiceMock from '../mocks/HttpServiceMock';
import AnswersConfig from '../../src/models/core/AnswersConfig';
import { UniversalAutoCompleteRequest, VerticalAutoCompleteRequest, FilterAutoCompleteRequest, SearchParameters} from '../../src/models/autocompleteservice/AutoCompleteRequest';
import HttpService from '../../src/services/HttpService';
import AutoCompleteServiceImpl from '../../src/infra/AutoCompleteServiceImpl';
import mockAutoCompleteResponse from '../fixtures/autocompleteresponse.json';
import mockAutoCompleteResponseWithSections from '../fixtures/autocompleteresponsewithsections.json';
import { createAutoCompleteResponse, createFilterAutoCompleteResponse } from '../../src/transformers/autocompleteservice/createAutoCompleteResponse';
import { defaultEndpoints } from '../../src/constants';
import { SearchIntent } from '../../src/models/searchservice/response/SearchIntent';

describe('AutoCompleteService', () => {
  const config: AnswersConfig = {
    apiKey: 'testApiKey',
    experienceKey: 'testExperienceKey',
    locale: 'en',
  };

  const mockHttpService = new HttpServiceMock();

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
        mockHttpService as HttpService
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
        mockHttpService as HttpService
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
        mockHttpService as HttpService
      );
      await autocompleteService.filterAutoComplete(request);
      expect(mockHttpService.get).toHaveBeenCalledWith(expectedFilterUrl, expectedQueryParams);
    });
  });

  describe('AutoCompleteResponse', () => {
    it('response without sections is parsed correctly', () => {
      const expectedResponse = {
        inputIntents: [SearchIntent.NearMe],
        results: [
          {
            value: 'salesforce',
            matchedSubstrings: [
              {
                offset: 0,
                length: 10
              }
            ]
          }
        ]
      };
      const actualResponse = createAutoCompleteResponse(mockAutoCompleteResponse);
      expect(actualResponse).toEqual(expectedResponse);
    });

    it('response with sections is parsed correctly', () => {
      const expectedResponse = {
        sectioned: true,
        sections: [
          {
            label: 'Name',
            results: [
              {
                value: 'Virginia Beach',
                matchedSubstrings: [
                  {
                    offset: 0,
                    length: 8
                  }
                ],
                filter: {
                  comparator: '$eq',
                  comparedValue: 'Virginia Beach',
                  fieldId: 'name'
                },
                key: 'name'
              }
            ]
          }
        ],
        results: [],
        inputIntents: [],
        queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540',
      };
      const actualResponse = createFilterAutoCompleteResponse(mockAutoCompleteResponseWithSections);
      expect(actualResponse).toEqual(expectedResponse);
    });
  });
});