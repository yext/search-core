import createUniversalSearchResponse from '../../src/transformers/searchservice/createUniversalSearchResponse';
import liveApiResponse from '../fixtures/liveapiuniversalresponse.json';
import coreResponse from '../fixtures/coreuniversalresponse.json';

it('createUniversalSearchResponse', () => {
  const actualCoreResponse = createUniversalSearchResponse(liveApiResponse);

  expect(actualCoreResponse).toMatchObject(coreResponse);
});