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