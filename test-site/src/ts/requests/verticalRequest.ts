import { QueryTrigger } from '@yext/search-core';
import { VerticalSearchRequest } from '@yext/search-core';

const verticalRequest: VerticalSearchRequest = {
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

export default verticalRequest;