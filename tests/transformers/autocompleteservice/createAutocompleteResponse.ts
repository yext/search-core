import { SearchIntent } from '../../../src/models/searchservice/response/SearchIntent';
import { createAutocompleteResponse, createFilterSearchResponse } from '../../../src/transformers/autocompleteservice/createAutocompleteResponse';
import mockAutocompleteResponse from '../../fixtures/autocompleteresponse.json';
import mockAutocompleteResponseWithSections from '../../fixtures/autocompleteresponsewithsections.json';
import mockAutocompleteResponseWithEntities from '../../fixtures/autocompleteresponsewithfetchedentities.json';

describe('AutocompleteResponse', () => {
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
    const actualResponse = createAutocompleteResponse(mockAutocompleteResponse);
    expect(actualResponse).toEqual(expectedResponse);
  });

  it('filtersearch response with sections is parsed correctly', () => {
    const expectedResponse = {
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
                matcher: '$eq',
                value: 'Virginia Beach',
                fieldId: 'name'
              },
              key: 'name'
            }
          ]
        }
      ],
      businessId: 2287528,
      failedVerticals: [],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540',
      uuid: '266f5720-2829-46f0-808f-651075879692'
    };
    const actualResponse = createFilterSearchResponse(mockAutocompleteResponseWithSections);
    expect(actualResponse).toEqual(expectedResponse);
  });

  it('filtersearch response with sections and entities fetched is parsed correctly', () => {
    const expectedResponse = {
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
                matcher: '$eq',
                value: 'Virginia Beach',
                fieldId: 'name'
              },
              key: 'name',
              relatedItem: {
                rawData: {
                  mock: 'data'
                },
                index: 1,
                source: 'KNOWLEDGE_MANAGER',
                highlightedFields: {
                  name: {
                    value: 'Virginia Beach',
                    matchedSubstrings: [
                      {
                        length: 8,
                        offset: 0
                      }
                    ]
                  }
                }
              }
            },
            {
              value: 'Virginia Beach2',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 8
                }
              ],
              filter: {
                matcher: '$eq',
                value: 'Virginia Beach2',
                fieldId: 'name2'
              },
              key: 'name',
              relatedItem: {
                rawData: {
                  mock: 'data2'
                },
                index: 1,
                source: 'KNOWLEDGE_MANAGER',
                highlightedFields: {
                  name2: {
                    value: 'Virginia Beach2',
                    matchedSubstrings: [
                      {
                        length: 8,
                        offset: 0
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      ],
      businessId: 2287528,
      failedVerticals: [],
      queryId: '42d5b709-3b9f-464a-b9b5-764467cbf540',
      uuid: '266f5720-2829-46f0-808f-651075879692'
    };
    const actualResponse = createFilterSearchResponse(mockAutocompleteResponseWithEntities);
    expect(actualResponse).toEqual(expectedResponse);
  });

  it('autocomplete response with no response property throws error', () => {
    const dataWithNoResponse = {
      noResponse: {
        results: []
      }
    };
    expect(() => {
      createAutocompleteResponse(dataWithNoResponse);
    }).toThrow('The autocomplete data does not contain a response property');
  });

  it('filtersearch response with no response property throws error', () => {
    const dataWithNoResponse = {
      noResponse: {
        results: []
      }
    };
    expect(() => {
      createFilterSearchResponse(dataWithNoResponse);
    }).toThrow('The autocomplete data does not contain a response property');
  });

  it('autocomplete response with empty response property throws error', () => {
    const dataWithEmptyResponse = {
      response: {}
    };
    expect(() => {
      createAutocompleteResponse(dataWithEmptyResponse);
    }).toThrow('The autocomplete response is empty');
  });

  it('filtersearch response with empty response property throws error', () => {
    const dataWithEmptyResponse = {
      response: {}
    };
    expect(() => {
      createFilterSearchResponse(dataWithEmptyResponse);
    }).toThrow('The autocomplete response is empty');
  });
});