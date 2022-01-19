import { createVerticalSearchResponse } from '../../../src/transformers/searchservice/createVerticalSearchResponse';

it('can handle allResultsForVertical', () => {
  const rawResponse = {
    response: {
      allResultsForVertical: {
        resultsCount: 1,
        source: 'KNOWLEDGE_MANAGER',
        results: [
          {
            data: 'mockdata',
          }
        ]
      }
    }
  };
  const transformedResponse = createVerticalSearchResponse(rawResponse);
  expect(transformedResponse).toMatchObject({
    allResultsForVertical: {
      verticalResults: {
        appliedQueryFilters: [],
        results: [
          {
            index: 1,
            rawData: 'mockdata',
            source: 'KNOWLEDGE_MANAGER'
          },
        ]
      }
    }
  });
});

it('handle direct answers in vertical search', () => {
  const rawResponse = {
    response: {
      allResultsForVertical: {
        resultsCount: 1,
        source: 'KNOWLEDGE_MANAGER',
        results: [
          {
            data: 'mockdata',
          }
        ],
        directAnswer: {
          type: 'FEATURED_SNIPPET',
          answer: {
            snippet: {
              value: 'Lorem ipsum dolor sit amet.\n consectetur adipiscing elit.',
              matchedSubstrings: [
                {
                  offset: 0,
                  length: 10
                }
              ]
            },
            fieldType: 'multi_line_text'
          },
          relatedItem: {
            verticalConfigId: 'help_articles',
            data: 'mockdata'
          }
        }
      }
    }
  };
  const transformedResponse = createVerticalSearchResponse(rawResponse);
  expect(transformedResponse).toMatchObject({
    allResultsForVertical: {
      verticalResults: {
        appliedQueryFilters: [],
        results: [
          {
            index: 1,
            rawData: 'mockdata',
            source: 'KNOWLEDGE_MANAGER'
          },
        ]
      },
      directAnswer: {
        type: 'FEATURED_SNIPPET',
        relatedResult: {
          rawData: {},
          source: 'KNOWLEDGE_MANAGER'
        },
        verticalKey: 'help_articles',
        snippet: {
          value: 'Lorem ipsum dolor sit amet.\n consectetur adipiscing elit.',
          matchedSubstrings: [
            {
              offset: 0,
              length: 10
            }
          ]
        }
      }
    }
  });
});

it('can handle queryRulesActionsData', () => {
  const actions = [
    {
      key: 'TRACKING_INFO',
      data: {
        apiUrl: 'http://www.test.com'
      }
    },
    {
      key: 'CUSTOM_DATA',
      error: 'Failed to retrieve data'
    }
  ];
  const rawResponse = {
    response: {
      queryRulesActionsData: actions
    }
  };
  const transformedResponse = createVerticalSearchResponse(rawResponse);
  expect(transformedResponse).toMatchObject({
    queryRulesActionsData: actions
  });
});
