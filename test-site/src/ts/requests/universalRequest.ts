import { QueryTrigger, UniversalSearchRequest } from '@yext/answers-core';

const universalRequest: UniversalSearchRequest = {
  query: 'office near me',
  queryTrigger: QueryTrigger.Initialize,
  sessionTrackingEnabled: true,
  context: {
    entityId: '3942',
    randomize: true,
  },
  location: {
    latitude: 0.0,
    longitude: 0.0,
  },
  referrerPageUrl: 'www.google.com/answers/not/ads',
  restrictVerticals: ['faq', 'links'],
  customClientSdk: {
    CORE_TEST_SITE: 'test'
  }
};

export default universalRequest;