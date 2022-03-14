import { QueryTrigger } from '@yext/answers-core';
import { VerticalSearchRequest } from '@yext/answers-core';

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
  customSdkClients: {
    CORE_TEST_SITE: 'test'
  }
};

export default verticalRequest;