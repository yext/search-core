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

export enum LocationBiasMethod {
  Ip = 'IP',
  Device = 'DEVICE',
  Unknown = 'UNKNOWN'
}

export enum QueryTrigger {
  Initialize = 'initialize',
  QueryParameter = 'query-parameter'
}

export const defaultApiVersion = 20190101;