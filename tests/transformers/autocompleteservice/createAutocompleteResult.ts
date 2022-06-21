import { createAutocompleteResult } from '../../../src/transformers/autocompleteservice/createAutocompleteResult';

describe('AutocompleteResult', () => {
  it('result with no filter is parsed correctly', () => {
    const resultWithNoFilter = {
      key: 'key',
      value: 'salesforce',
      matchedSubstrings: [
        {
          offset: 0,
          length: 10
        }
      ],
      relatedItem: {
        data: {
          some: 'data'
        },
        highlightedFields: {
          some: 'field'
        }
      }
    };
    const expectedResult = {
      key: 'key',
      value: 'salesforce',
      matchedSubstrings: [
        {
          offset: 0,
          length: 10
        }
      ],
      relatedItem: {
        rawData: {
          some: 'data'
        },
        index: 1,
        source: 'KNOWLEDGE_MANAGER',
        highlightedFields: {
          some: 'field'
        }
      }
    };
    const actualResult = createAutocompleteResult(resultWithNoFilter);
    expect(actualResult).toEqual(expectedResult);
  });

  it('result with no matched substrings is parsed correctly', () => {
    const resultWithNoMatchedSubstrings = {
      key: 'name',
      value: 'Virginia Beach',
      filter: {
        name: {
          $eq: 'Virginia Beach'
        }
      },
      relatedItem: {
        data: {
          mock: 'data'
        },
        highlightedFields: {}
      }
    };
    const expectedResult = {
      value: 'Virginia Beach',
      matchedSubstrings: [],
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
        highlightedFields: {}
      }
    };
    const actualResult = createAutocompleteResult(resultWithNoMatchedSubstrings);
    expect(actualResult).toEqual(expectedResult);
  });

  it('result with no relatedItem property is parsed correctly', () => {
    const resultWithNoRelatedItem = {
      key: 'name',
      value: 'Virginia Beach',
      filter: {
        name: {
          $eq: 'Virginia Beach'
        }
      },
      matchedSubstrings: [
        {
          offset: 0,
          length: 8
        }
      ],
    };
    const expectedResult = {
      value: 'Virginia Beach',
      filter: {
        matcher: '$eq',
        value: 'Virginia Beach',
        fieldId: 'name'
      },
      key: 'name',
      matchedSubstrings: [
        {
          offset: 0,
          length: 8
        }
      ]
    };
    const actualResult = createAutocompleteResult(resultWithNoRelatedItem);
    expect(actualResult).toEqual(expectedResult);
  });
});