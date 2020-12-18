import { createAutoCompleteResult } from '../../../src/transformers/autocompleteservice/createAutoCompleteResult';


describe('AutoCompleteResult', () => {
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
    const expectedResult = resultWithNoFilter;
    const actualResult = createAutoCompleteResult(resultWithNoFilter);
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
        highlightedFields: {
          mock: 'field'
        }
      }
    };
    const expectedResult = {
      value: 'Virginia Beach',
      matchedSubstrings: [],
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
    };
    const actualResult = createAutoCompleteResult(resultWithNoMatchedSubstrings);
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
        comparator: '$eq',
        comparedValue: 'Virginia Beach',
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
    const actualResult = createAutoCompleteResult(resultWithNoRelatedItem);
    expect(actualResult).toEqual(expectedResult);
  });
});