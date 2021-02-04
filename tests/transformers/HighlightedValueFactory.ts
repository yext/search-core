import { HighlightedValueFactory } from '../../src/transformers/searchservice/HighlightedValueFactory';

it('Non-nested highlighted fields', () => {
  const liveApiData = {
    name: {
      value:'Bob loves FAQs',
      matchedSubstrings: [
        {
          offset: 0,
          length: 3
        },
        {
          offset: 10,
          length: 4
        }
      ]
    }
  };
  const expectedHighlightedValues = [{
    fieldName: 'name',
    value: 'Bob loves FAQs',
    path: [
      'name'
    ],
    matchedSubstrings: [
      {
        offset: 0,
        length: 3
      },
      {
        offset: 10,
        length: 4
      }
    ]
  }];
  const actualHighlightedValues = HighlightedValueFactory.create(liveApiData);

  expect(actualHighlightedValues).toMatchObject(expectedHighlightedValues);
});


it('Nested highlighted fields', () => {
  const liveApiData = {
    featured: {
      name: {
        value:'Bob loves FAQs',
        matchedSubstrings: [
          {
            offset: 0,
            length: 3
          }
        ]
      },
      first: {
        name: {
          value: 'Bob',
          matchedSubstrings: []
        }
      }
    }
  };
  const expectedHighlightedValues = [{
    fieldName: 'name',
    value: 'Bob loves FAQs',
    path: [
      'featured',
      'name'
    ],
    matchedSubstrings: [
      {
        offset: 0,
        length: 3
      }
    ]
  },
  {
    fieldName: 'name',
    value: 'Bob',
    path: [
      'featured',
      'first',
      'name'
    ],
    matchedSubstrings: []
  }];
  const actualHighlightedValues = HighlightedValueFactory.create(liveApiData);

  expect(actualHighlightedValues).toMatchObject(expectedHighlightedValues);
});