import QuestionSubmissionServiceImpl from '../../src/infra/QuestionSubmissionServiceImpl';
import HttpServiceMock from '../mocks/HttpServiceMock';
import HttpService from '../../src/services/HttpService';
import AnswersConfig from '../../src/models/core/AnswersConfig';

const baseCoreConfig = {
  apiKey: 'anApiKey',
  experienceKey: 'anExperienceKey',
  locale: 'fr',
  experienceVersion: 'STAGING'
};

const qaRequest = {
  email: 'tom@myspace.com',
  entityId: '1234569',
  name: 'mori calliope',
  questionText: 'an exciting question',
  sessionTrackingEnabled: true
};

const mockHttp = new HttpServiceMock();
mockHttp.post.mockResolvedValue({
  meta: {
    uuid: 'aUUID',
    errors: [
      {
        code: 2246,
        type: 'FATAL_ERROR',
        message: 'Entity not found: 1234569'
      }
    ]
  },
  response: {}
});

describe('Question submission', () => {
  let qaService;
  let response;
  let mockCalls;
  let actualHttpParams;

  beforeAll(async () => {
    qaService = new QuestionSubmissionServiceImpl(baseCoreConfig, mockHttp as HttpService);
    response = await qaService.submitQuestion(qaRequest);
    mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
  });

  it('uses the production endpoint by default', () => {
    const expectedUrl = 'https://api.yext.com/v2/accounts/me/createQuestion';
    const actualUrl = actualHttpParams[0];
    expect(expectedUrl).toEqual(actualUrl);
  });

  it('a custom endpoint may be supplied', async () => {
    const expectedUrl = 'https://custom.endpoint.com/api';
    const coreConfig: AnswersConfig = {
      ...baseCoreConfig,
      endpoints: {
        questionSubmission: 'https://custom.endpoint.com/api'
      }
    };

    qaService = new QuestionSubmissionServiceImpl(coreConfig, mockHttp as HttpService);
    response = await qaService.submitQuestion(qaRequest);
    mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
    const actualUrl = actualHttpParams[0];

    expect(expectedUrl).toEqual(actualUrl);
  });

  it('passed the right query params', () => {
    const expectedQueryParams = {
      api_key: 'anApiKey',
      sessionTrackingEnabled: true,
      v: 20190101
    };
    const actualQueryParams = actualHttpParams[1];
    expect(expectedQueryParams).toEqual(actualQueryParams);
  });

  it('passed the right body params', () => {
    const expectedBodyParams = {
      email: 'tom@myspace.com',
      entityId: '1234569',
      name: 'mori calliope',
      site: 'FIRSTPARTY',
      questionDescription: undefined,
      questionText: 'an exciting question',
      questionLanguage: 'fr'
    };
    const actualBodyParams = actualHttpParams[2];
    expect(expectedBodyParams).toEqual(actualBodyParams);
  });

  it('passed the right req init', () => {
    const expectedReqInit = {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    };
    const actualReqInit = actualHttpParams[3];
    expect(actualReqInit).toEqual(expectedReqInit);
  });

  it('parses the response correctly', () => {
    expect(response).toMatchObject({
      uuid: 'aUUID',
      errors: [{
        code: 2246,
        message: 'Entity not found: 1234569'
      }]
    });
  });
});
