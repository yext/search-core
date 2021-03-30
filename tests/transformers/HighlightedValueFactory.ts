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

it('Highlighted fields with arrays', () => {
  const liveApiData = {
    languages: [
      {
        value: 'English',
        matchedSubstrings: []
      },
      {
        value: 'Spanish',
        matchedSubstrings: [
          {
            offset: 0,
            length: 7
          }
        ]
      }
    ]
  };

  const expectedHighlightedValues = [
    {
      fieldName: 'languages',
      value: 'English',
      path: ['languages'],
      matchedSubstrings: []
    },
    {
      fieldName: 'languages',
      value: 'Spanish',
      path: ['languages'],
      matchedSubstrings: [
        {
          offset: 0,
          length: 7
        }
      ]
    }
  ];

  const actualHighlightedValues = HighlightedValueFactory.create(liveApiData);
  expect(actualHighlightedValues).toMatchObject(expectedHighlightedValues);
});

it('Highlighted fields with arbitrarily placed arrays', () => {
  const liveApiData = {
    featured: {
      pie: [
        {
          value: 'apple',
          matchedSubstrings: [
            {
              offset: 0,
              length: 7
            }
          ]
        },
        {
          value: 'cherry',
          matchedSubstrings: [
            {
              offset: 1,
              length: 2
            }
          ]
        }
      ],
      languages: {
        superDuper: [
          {
            value: 'super',
            matchedSubstrings: []
          },
          {
            value: 'deeduper',
            matchedSubstrings: []
          }
        ],
      }
    }
  };

  const expectedHighlightedValues = [
    {
      fieldName: 'pie',
      value: 'apple',
      path: ['featured', 'pie'],
      matchedSubstrings: [
        {
          offset: 0,
          length: 7
        }
      ]
    },
    {
      fieldName: 'pie',
      value: 'cherry',
      path: ['featured', 'pie'],
      matchedSubstrings: [
        {
          offset: 1,
          length: 2
        }
      ]
    },
    {
      fieldName: 'superDuper',
      value: 'super',
      path: ['featured', 'languages', 'superDuper'],
      matchedSubstrings: []
    },
    {
      fieldName: 'superDuper',
      value: 'deeduper',
      path: ['featured', 'languages', 'superDuper'],
      matchedSubstrings: []
    }
  ];
  const actualHighlightedValues = HighlightedValueFactory.create(liveApiData);
  expect(actualHighlightedValues).toMatchObject(expectedHighlightedValues);
});
