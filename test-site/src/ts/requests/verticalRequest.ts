import { QueryTrigger, VerticalSearchRequest } from '@yext/search-core';

export const verticalRequest: VerticalSearchRequest = {
  verticalKey: 'people',
  query: 'virginia',
  queryTrigger: QueryTrigger.Initialize,
  sessionTrackingEnabled: true,
  context: {
    entityId: '3942',
    randomize: true,
  },
  referrerPageUrl: 'www.google.com/answers/not/ads',
  additionalHttpHeaders: {
    'Client-SDK': {
      CORE_TEST_SITE: 'test'
    }
  }
};

export const locationsVerticalRequest: VerticalSearchRequest = {
  verticalKey: 'KM',
  query: 'virginia',
  retrieveFacets: true,
  facetAllowlist: ['address.city', 'services']
};

export const functionVerticalRequest: VerticalSearchRequest = {
  verticalKey: 'function_vertical',
  query: 'virginia',
};
