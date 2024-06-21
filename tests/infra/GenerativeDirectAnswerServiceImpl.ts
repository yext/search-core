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

const mockVerticalResults = [{
  'appliedQueryFilters': [],
  'results': [
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
  'resultsCount': 1,
  'source': Source.KnowledgeManager,
  'verticalKey': 'restaurants'
}];

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

const apiResponseValidator = new ApiResponseValidator();

describe('Generative Direct Answer Vertical Results', () => {
  let mockHttp, gdaService, response, mockCalls, actualHttpParams;

  beforeAll(async () => {
    mockHttp = new HttpServiceMock();
    mockHttp.post.mockResolvedValue(mockApiResponse);
    gdaService = new GenerativeDirectAnswerServiceImpl(
      baseCoreConfig, mockHttp as HttpService, apiResponseValidator);
    response = await gdaService.generateAnswer(gdaRequestVerticalResults);
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

    gdaService = new GenerativeDirectAnswerServiceImpl(
      coreConfig, mockHttp as HttpService, apiResponseValidator);
    response = await gdaService.generateAnswer(gdaRequestVerticalResults);
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
      results: mockVerticalResults[0],
    };
    const actualBodyParams = actualHttpParams[2];
    expect(actualBodyParams).toEqual(expectedBodyParams);
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
  const gdaService = new GenerativeDirectAnswerServiceImpl(
    coreConfig, mockHttp as HttpService, apiResponseValidator);
  await gdaService.generateAnswer(gdaRequestVerticalResults);
  const mockCalls = mockHttp.post.mock.calls;
  const actualQueryParams = mockCalls[0][1];
  expect(actualQueryParams).toEqual(expect.objectContaining({
    jsLibVersion: 'LIB_VERSION'
  }));
});

const mockUniversalResults = [
  { ...mockVerticalResults, 'queryDurationMillis': 141 },
  {
    'appliedQueryFilters': [],
    'queryDurationMillis': 313,
    'results': [
      {
        'id': '4038721755206544552',
        'index': 3,
        'name': 'How do I create a Very Special Event?',
        'rawData': {
          'id': '4038721755206544552',
          'name': 'How do I create a Very Special Event?',
          'question': 'How do I create a Very Special Event?',
          'type': 'faq',
          'uid': '8367352'
        },
        'source': 'CUSTOM_SEARCHER'
      }
    ],
    'resultsCount': 1,
    'source': 'DOCUMENT_VERTICAL',
    'verticalKey': 'faq_vector'
  }
];

const gdaRequestUniversalResults: GenerativeDirectAnswerRequest = {
  searchId: 'testSeachId',
  searchTerm: 'testSearchTerm',
  results: mockUniversalResults
};

describe('Generative Direct Answer Universal Results', () => {
  let mockHttp, gdaService, response, mockCalls, actualHttpParams;

  beforeAll(async () => {
    mockHttp = new HttpServiceMock();
    mockHttp.post.mockResolvedValue(mockApiResponse);
    gdaService = new GenerativeDirectAnswerServiceImpl(
      baseCoreConfig, mockHttp as HttpService, apiResponseValidator);
    response = await gdaService.generateAnswer(gdaRequestUniversalResults);
    mockCalls = mockHttp.post.mock.calls;
    actualHttpParams = mockCalls[mockCalls.length - 1];
  });

  it('passed the right body params', () => {
    const expectedBodyParams = {
      searchId: 'testSeachId',
      searchTerm: 'testSearchTerm',
      results: { verticals: mockUniversalResults },
    };
    const actualBodyParams = actualHttpParams[2];
    expect(actualBodyParams).toEqual(expectedBodyParams);
  });

  it('parses the response correctly', () => {
    expect(response).toMatchObject(mockCoreResponse);
  });
});