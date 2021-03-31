import { HighlightedValueFactory } from '../../src/transformers/searchservice/HighlightedValueFactory';

it('Non-nested highlighted fields', () => {
  const liveApiData = {
    name: {
      value: 'Bob loves FAQs',
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
        value: 'Bob loves FAQs',
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

it('Highlighted fields with arbitrarily nested arrays', () => {
  const liveApiData = {
    c_nestedTextLists: [
      {
        fruits: [
          {
            value: 'apple',
            matchedSubstrings: [
              {
                offset: 0,
                length: 4
              }
            ]
          },
          {
            value: 'pear',
            matchedSubstrings: []
          }
        ],
        struct: {
          pastas: [
            {
              value: 'spaghetti',
              matchedSubstrings: []
            },
            {
              value: 'linguini',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 4
                }
              ]
            }
          ],
          sandwiches: [
            {
              value: 'sub',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 4
                }
              ]
            },
            {
              value: 'borger',
              matchedSubstrings: []
            },
            {
              value: 'america dog',
              matchedSubstrings: []
            }
          ]
        }
      },
      {
        vegetables: [
          {
            value: 'carrot',
            matchedSubstrings: []
          },
          {
            value: 'celery',
            matchedSubstrings: []
          }
        ]
      }
    ]
  };

  const expectedHighlightedValues = [
    {
      fieldName: 'fruits',
      value: 'apple',
      path: ['c_nestedTextLists', 0, 'fruits', 0],
      matchedSubstrings: [
        {
          offset: 0,
          length: 4
        }
      ]
    },
    {
      fieldName: 'fruits',
      value: 'pear',
      path: ['c_nestedTextLists', 0, 'fruits', 1],
      matchedSubstrings: []
    },
    {
      fieldName: 'pastas',
      value: 'spaghetti',
      path: ['c_nestedTextLists', 0, 'struct', 'pastas', 0],
      matchedSubstrings: []
    },
    {
      fieldName: 'pastas',
      value: 'linguini',
      path: ['c_nestedTextLists', 0, 'struct', 'pastas', 1],
      matchedSubstrings: [
        {
          offset: 0,
          length: 4
        }
      ]
    },
    {
      fieldName: 'sandwiches',
      value: 'sub',
      path: ['c_nestedTextLists', 0, 'struct', 'sandwiches', 0],
      matchedSubstrings: [
        {
          offset: 0,
          length: 4
        }
      ]
    },
    {
      fieldName: 'sandwiches',
      value: 'borger',
      path: ['c_nestedTextLists', 0, 'struct', 'sandwiches', 1],
      matchedSubstrings: []
    },
    {
      fieldName: 'sandwiches',
      value: 'america dog',
      path: ['c_nestedTextLists', 0, 'struct', 'sandwiches', 2],
      matchedSubstrings: []
    },
    {
      fieldName: 'vegetables',
      value: 'carrot',
      path: ['c_nestedTextLists', 1, 'vegetables', 0],
      matchedSubstrings: []
    },
    {
      fieldName: 'vegetables',
      value: 'celery',
      path: ['c_nestedTextLists', 1, 'vegetables', 1],
      matchedSubstrings: []
    }
  ];
  const actualHighlightedValues = HighlightedValueFactory.create(liveApiData);
  expect(actualHighlightedValues).toMatchObject(expectedHighlightedValues);
});
