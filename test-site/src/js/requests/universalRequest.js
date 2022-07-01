import { QueryTrigger } from '@yext/search-core';

const universalRequest = {
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
  referrerPageUrl: 'www.google.com/answers/not/ads'
};

export default universalRequest;