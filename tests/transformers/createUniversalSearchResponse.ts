import createUniversalSearchResponse from '../../src/transformers/searchservice/createUniversalSearchResponse';
import liveApiResponse from '../fixtures/liveapiuniversalresponse.json';
import expectedCoreResponse from '../fixtures/expectedcoreuniversalresponse.json';

it('createUniversalSearchResponse', () => {
  const actualCoreResponse = createUniversalSearchResponse(liveApiResponse);

  expect(actualCoreResponse).toMatchObject(expectedCoreResponse);
});