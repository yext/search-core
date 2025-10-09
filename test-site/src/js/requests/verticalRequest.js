import { QueryTrigger } from '@yext/search-core';

export const verticalRequest = {
  verticalKey: 'people',
  query: 'virginia',
  queryTrigger: QueryTrigger.Initialize,
  sessionTrackingEnabled: true,
  context: {
    entityId: '3942',
    randomize: true,
  },
  referrerPageUrl: 'www.google.com/answers/not/ads'
};

export const locationsVerticalRequest = {
  verticalKey: 'KM',
  query: 'virginia',
  retrieveFacets: true,
  facetAllowlist: ['address.city', 'services']
};

export const functionVerticalRequest = {
  verticalKey: 'function_vertical',
  query: 'virginia',
};
