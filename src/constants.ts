export enum BaseUrls {
  MasterSwitch = 'https://answersstatus.pagescdn.com',
  LiveApi = 'https://liveapi.yext.com'
}

export enum LiveApiEndpoints {
  UniversalSearch = '/v2/accounts/me/answers/query',
  VerticalSearch = '/v2/accounts/me/answers/vertical/query'
}

export enum SearchIntent {
  NearMe = 'NEAR_ME'
}

export const defaultApiVersion = 20190101;