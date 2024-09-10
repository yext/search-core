import { createGenerativeDirectAnswerResponse } from '../../src/transformers/generativedirectanswerservice/createGenerativeDirectAnswerResponse';
import liveApiResponse from '../fixtures/liveapigenerativedirectanswerresponse.json';
import coreResponse from '../fixtures/coregenerativedirectanswerresponse.json';

it('createGenerativeDirectAnswerResponse', () => {
  const actualCoreResponse = createGenerativeDirectAnswerResponse(liveApiResponse);

  expect(actualCoreResponse).toMatchObject(coreResponse);
});
