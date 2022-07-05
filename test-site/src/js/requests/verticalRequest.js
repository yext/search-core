import { QueryTrigger } from '@yext/search-core';

const verticalRequest = {
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

export default verticalRequest;