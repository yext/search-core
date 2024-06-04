import { HttpServiceMock } from '../mocks/HttpServiceMock';
import { SearchConfigWithDefaulting } from '../../src/models/core/SearchConfig';
import { GenerativeDirectAnswerRequest } from '../../src/models/generativedirectanswer/GenerativeDirectAnswerRequest';
import { Source } from '../../src/models/searchservice/response/Source';
import { HttpService } from '../../src/services/HttpService';
import { GenerativeDirectAnswerServiceImpl } from '../../src/infra/GenerativeDirectAnswerServiceImpl';
import mockApiResponse from '../fixtures/liveapigenerativedirectanswerresponse.json';
import mockCoreResponse from '../fixtures/coregenerativedirectanswerresponse.json';
import { defaultApiVersion, EndpointsFactory } from '../../src/provideEndpoints';
import { ApiResponseValidator } from '../../src/validation/ApiResponseValidator';
import { Endpoints } from '../../src/models/core/Endpoints';

const defaultEndpoints: Required<Endpoints> = new EndpointsFactory().getEndpoints();

const mockVerticalResults = {
  'appliedQueryFilters': [],
  'queryDurationMillis': 141,
  'results': [
    {
      'description': 'Welcome to our burger shop! Our delicious burgers are made with the finest ingredients and cooked to perfection. Each bite is a burst of flavor that will leave you craving for more. Come and experience the ultimate burger experience at [entity name]!',
      'distance': 608,
      'entityType': 'restaurant',
      'id': '3397989546397245794',
      'index': 1,
      'name': 'Bobert\'s Burgers',
      'rawData': {
        'address': {
          'city': 'Arlington',
          'countryCode': 'US',
          'line1': '1101 Wilson Blvd',
          'postalCode': '22201',
          'region': 'VA'
        },
        'id': '3397989546397245794',
        'name': 'Bobert\'s Burgers',
        's_snippet': 'Welcome to our burger shop! Our delicious burgers are made with the finest ingredients and cooked to perfection. Each bite is a burst of flavor that will leave you craving for more. Come and experience the ultimate burger experience at [entity name]!',
        'type': 'restaurant',
        'uid': '8147322'
      },
      'source': Source.KnowledgeManager
    },
    {
      'distance': 608,
      'entityType': 'restaurant',
      'id': '8875293274284117370',
      'index': 2,
      'name': 'Cow Burgers',
      'rawData': {
        'address': {
          'city': 'Arlington',
          'countryCode': 'US',
          'line1': '1101 Wilson Blvd',
          'postalCode': '22209',
          'region': 'VA'
        },
        'id': '8875293274284117370',
        'name': 'Cow Burgers',
        'timezone': 'America/New_York',
        'type': 'restaurant',
        'uid': '8279393'
      },
      'source': Source.KnowledgeManager
    }
  ],
  'resultsCount': 2,
  'source': Source.KnowledgeManager,
  'verticalKey': 'restaurants'
};

const mockUniversalResults = {'Verticals': [mockVerticalResults]}

const baseCoreConfig = {
  apiKey: 'testApiKey',
  experienceKey: 'testExperienceKey',
  locale: 'en',
  endpoints: defaultEndpoints
};

const gdaRequestVerticalResults: GenerativeDirectAnswerRequest = {
  searchId: 'testSeachId',
  searchTerm: 'testSearchTerm',
  results: mockVerticalResults
};

const gdaRequestUniversalResults: GenerativeDirectAnswerRequest = {
  searchId: 'testSeachId',
  searchTerm: 'testSearchTerm',
  results: mockVerticalResults
};

const apiResponseValidator = new ApiResponseValidator();

describe('Generative Direct Answer Vertical Results', () => {
  let mockHttp, qaService, response, mockCalls, actualHttpParams;

  beforeAll(async () => {
    mockHttp = new HttpServiceMock();
    mockHttp.post.mockResolvedValue(mockApiResponse);
    qaService = new GenerativeDirectAnswerServiceImpl(
      baseCoreConfig, mockHttp as HttpService, apiResponseValidator);
    response = await qaService.generateAnswer(gdaRequestVerticalResults);
    mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
  });

  it('uses the production endpoint by default', () => {
    const expectedUrl = defaultEndpoints.generativeDirectAnswer;
    const actualUrl = actualHttpParams[0];
    expect(expectedUrl).toEqual(actualUrl);
  });

  it('a custom endpoint may be supplied', async () => {
    const expectedUrl = 'https://custom.endpoint.com/api';
    const coreConfig: SearchConfigWithDefaulting = {
      ...baseCoreConfig,
      endpoints: {
        generativeDirectAnswer: 'https://custom.endpoint.com/api'
      }
    };

    qaService = new GenerativeDirectAnswerServiceImpl(coreConfig, mockHttp as HttpService, apiResponseValidator);
    response = await qaService.generateAnswer(gdaRequestVerticalResults);
    mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
    const actualUrl = actualHttpParams[0];

    expect(expectedUrl).toEqual(actualUrl);
  });

  it('passed the right query params', () => {
    const expectedQueryParams = {
      experienceKey: 'testExperienceKey',
      api_key: 'testApiKey',
      v: defaultApiVersion,
      locale: 'en'
    };
    const actualQueryParams = actualHttpParams[1];
    expect(actualQueryParams).toEqual(expectedQueryParams);
  });

  it('passed the right body params', () => {
    const expectedBodyParams = {
      searchId: 'testSeachId',
      searchTerm: 'testSearchTerm',
      results: mockVerticalResults,
    };
    const actualBodyParams = actualHttpParams[2];
    expect(expectedBodyParams).toEqual(actualBodyParams);
  });

  it('parses the response correctly', () => {
    expect(response).toMatchObject(mockCoreResponse);
  });
});

describe('Generative Direct Answer Universal Results', () => {
  let mockHttp, qaService, response, mockCalls, actualHttpParams;

  beforeAll(async () => {
    mockHttp = new HttpServiceMock();
    mockHttp.post.mockResolvedValue(mockApiResponse);
    qaService = new GenerativeDirectAnswerServiceImpl(
      baseCoreConfig, mockHttp as HttpService, apiResponseValidator);
    response = await qaService.generateAnswer(gdaRequestUniversalResults);
    mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
  });

  it('uses the production endpoint by default', () => {
    const expectedUrl = defaultEndpoints.generativeDirectAnswer;
    const actualUrl = actualHttpParams[0];
    expect(expectedUrl).toEqual(actualUrl);
  });

  it('a custom endpoint may be supplied', async () => {
    const expectedUrl = 'https://custom.endpoint.com/api';
    const coreConfig: SearchConfigWithDefaulting = {
      ...baseCoreConfig,
      endpoints: {
        generativeDirectAnswer: 'https://custom.endpoint.com/api'
      }
    };

    qaService = new GenerativeDirectAnswerServiceImpl(coreConfig, mockHttp as HttpService, apiResponseValidator);
    response = await qaService.generateAnswer(gdaRequestUniversalResults);
    mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
    const actualUrl = actualHttpParams[0];

    expect(expectedUrl).toEqual(actualUrl);
  });

  it('passed the right query params', () => {
    const expectedQueryParams = {
      experienceKey: 'testExperienceKey',
      api_key: 'testApiKey',
      v: defaultApiVersion,
      locale: 'en'
    };
    const actualQueryParams = actualHttpParams[1];
    expect(actualQueryParams).toEqual(expectedQueryParams);
  });

  it('passed the right body params', () => {
    const expectedBodyParams = {
      searchId: 'testSeachId',
      searchTerm: 'testSearchTerm',
      results: mockVerticalResults,
    };
    const actualBodyParams = actualHttpParams[2];
    expect(expectedBodyParams).toEqual(actualBodyParams);
  });

  it('parses the response correctly', () => {
    expect(response).toMatchObject(mockCoreResponse);
  });
});

it('additionalQueryParams are passed through', async () => {
  const coreConfig = {
    ...baseCoreConfig,
    additionalQueryParams: {
      jsLibVersion: 'LIB_VERSION'
    }
  };
  const mockHttp = new HttpServiceMock();
  mockHttp.post.mockResolvedValue(mockApiResponse);
  const qaService = new GenerativeDirectAnswerServiceImpl(
    coreConfig, mockHttp as HttpService, apiResponseValidator);
  await qaService.generateAnswer(gdaRequestVerticalResults);
  const mockCalls = mockHttp.post.mock.calls;
  const actualQueryParams = mockCalls[0][1];
  expect(actualQueryParams).toEqual(expect.objectContaining({
    jsLibVersion: 'LIB_VERSION'
  }));
});