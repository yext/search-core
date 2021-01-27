import { SearchIntent } from '../../../src/models/searchservice/response/SearchIntent';
import { createAutoCompleteResponse, createFilterAutoCompleteResponse } from '../../../src/transformers/autocompleteservice/createAutoCompleteResponse';
import mockAutoCompleteResponse from '../../fixtures/autocompleteresponse.json';
import mockAutoCompleteResponseWithSections from '../../fixtures/autocompleteresponsewithsections.json';
import mockAutoCompleteResponseWithEntities from '../../fixtures/autocompleteresponsewithfetchedentities.json';

describe('AutoCompleteResponse', () => {
  it('autocomplete response without sections is parsed correctly', () => {
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
      ],
      uuid: '266f5720-2829-46f0-808f-651075879692'
    };
    const actualResponse = createAutoCompleteResponse(mockAutoCompleteResponse);
    expect(actualResponse).toEqual(expectedResponse);
  });

  it('filter autocomplete response with sections is parsed correctly', () => {
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
      uuid: '266f5720-2829-46f0-808f-651075879692'
    };
    const actualResponse = createFilterAutoCompleteResponse(mockAutoCompleteResponseWithSections);
    expect(actualResponse).toEqual(expectedResponse);
  });

  it ('filter autocomplete response with sections and entities fetched is parsed correctly', () => {
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
              key: 'name',
              relatedItem: {
                data: {
                  mock: 'data'
                },
                highlightedFields: {
                  mock: 'field'
                }
              }
            },
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
              key: 'name',
              relatedItem: {
                data: {
                  mock: 'data2'
                },
                highlightedFields: {
                  mock: 'field2'
                }
              }
            }
          ]
        }
      ],
      results: [],
      inputIntents: [],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540',
      uuid: '266f5720-2829-46f0-808f-651075879692'
    };
    const actualResponse = createFilterAutoCompleteResponse(mockAutoCompleteResponseWithEntities);
    expect(actualResponse).toEqual(expectedResponse);
  });

  it('autocomplete response with no response property throws error', () => {
    const dataWithNoResponse = {
      noResponse: {
        results: []
      }
    };
    expect(() => {
      createAutoCompleteResponse(dataWithNoResponse);
    }).toThrow('The autocomplete data does not contain a response property');
  });

  it('filter autocomplete response with no response property throws error', () => {
    const dataWithNoResponse = {
      noResponse: {
        results: []
      }
    };
    expect(() => {
      createFilterAutoCompleteResponse(dataWithNoResponse);
    }).toThrow('The autocomplete data does not contain a response property');
  });

  it('autocomplete response with empty response property throws error', () => {
    const dataWithEmptyResponse = {
      response: {}
    };
    expect(() => {
      createAutoCompleteResponse(dataWithEmptyResponse);
    }).toThrow('The autocomplete response is empty');
  });

  it('filter autocomplete response with empty response property throws error', () => {
    const dataWithEmptyResponse = {
      response: {}
    };
    expect(() => {
      createFilterAutoCompleteResponse(dataWithEmptyResponse);
    }).toThrow('The autocomplete response is empty');
  });
});