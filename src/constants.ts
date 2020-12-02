export enum BaseUrls {
  MasterSwitch = 'https://answersstatus.pagescdn.com',
  LiveApi = 'https://liveapi.yext.com',
  KnowledgeApi = 'https://api.yext.com',
  KnowledgeApiSandbox = 'https://api-sandbox.yext.com'
}

export enum LiveApiEndpoints {
  UniversalSearch = '/v2/accounts/me/answers/query',
  VerticalSearch = '/v2/accounts/me/answers/vertical/query',
  UniversalAutoComplete = '/v2/accounts/me/answers/autocomplete',
  VerticalAutoComplete = '/v2/accounts/me/answers/vertical/autocomplete',
  FilterAutoComplete = '/v2/accounts/me/answers/filtersearch'
}

export enum KnowledgeApiEndpoints {
  CreateQuestion = '/v2/accounts/me/createQuestion'
}

export enum QuerySource {
  Standard = 'STANDARD',
  Overlay = 'OVERLAY'
}

export const defaultApiVersion = 20190101;

export enum Environments {
  Production = 'production',
  Sandbox = 'sandbox'
}
