export enum BaseUrls {
  MasterSwitch = 'https://answersstatus.pagescdn.com',
  LiveApi = 'https://liveapi.yext.com'
}

export enum LiveApiEndpoints {
  UniversalSearch = '/v2/accounts/me/answers/query',
  VerticalSearch = '/v2/accounts/me/answers/vertical/query'
}

// (cea2aj) Do we want to use this version? I have also seen '20190301' in the SDK.
// Is that newer?
export const defaultApiVersion = 20190101;