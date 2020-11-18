import QuestionSubmissionServiceImpl from '../../src/infra/QuestionSubmissionServiceImpl';
import { Environments } from '../../src/constants';
import HttpServiceMock from '../mocks/HttpServiceMock';
import HttpService from '../../src/services/HttpService';

const baseCoreConfig = {
  apiKey: 'anApiKey',
  experienceKey: 'anExperienceKey',
  environment: Environments.Production,
  locale: 'fr',
  configurationLabel: 'STAGING'
};

const qaRequest = {
  email: 'tom@myspace.com',
  entityId: 1234569,
  name: 'mori calliope',
  questionText: 'an exciting question',
  sessionTrackingEnabled: true
};

const mockHttp = new HttpServiceMock();
mockHttp.post.mockResolvedValue({
  meta: {
    uuid: 'aUUID',
    errors: []
  },
  response: {}
});

describe('it passes request params correctly', () => {
  let actualHttpParams;
  beforeAll(async () => {
    const qaService = new QuestionSubmissionServiceImpl(baseCoreConfig, mockHttp as HttpService);
    await qaService.submitQuestion(qaRequest);
    const mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
  });

  it('used the right url', () => {
    const expectedUrl = 'https://api.yext.com/v2/accounts/me/createQuestion';
    const actualUrl = actualHttpParams[0];
    expect(expectedUrl).toEqual(actualUrl);
  });

  it('used the right query params', () => {
    const expectedQueryParams = {
      api_key: 'anApiKey',
      sessionTrackingEnabled: true,
      v: 20190101
    };
    const actualQueryParams = actualHttpParams[1];
    expect(expectedQueryParams).toEqual(actualQueryParams);
  });

  it('used the right body params', () => {
    const expectedBodyParams = {
      email: 'tom@myspace.com',
      entityId: 1234569,
      name: 'mori calliope',
      site: 'FIRSTPARTY',
      questionDescription: undefined,
      questionText: 'an exciting question',
      questionLanguage: 'fr'
    };
    const actualBodyParams = actualHttpParams[2];
    expect(expectedBodyParams).toEqual(actualBodyParams);
  });

  it('used the right req init', () => {
    const expectedReqInit = {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    };
    const actualReqInit = actualHttpParams[3];
    expect(actualReqInit).toEqual(expectedReqInit);
  });
});

it('uses the sandbox url when the environment is sandbox', async () => {
  const coreConfig = {
    ...baseCoreConfig,
    environment: Environments.Sandbox
  };
  const qaService = new QuestionSubmissionServiceImpl(coreConfig, mockHttp as HttpService);
  await qaService.submitQuestion(qaRequest);
  const mockCalls = mockHttp.post.mock.calls;
  const expectedUrl = 'https://api-sandbox.yext.com/v2/accounts/me/createQuestion';
  const actualUrl = mockCalls[mockCalls.length - 1][0];
  expect(expectedUrl).toEqual(actualUrl);
});
