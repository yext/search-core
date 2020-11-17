export enum BaseUrls {
  MasterSwitch = 'https://answersstatus.pagescdn.com',
  LiveApi = 'https://liveapi.yext.com',
  KnowledgeApi = 'https://api.yext.com',
  KnowledgeApiSandbox = 'https://api-sandbox.yext.com'
}

export enum LiveApiEndpoints {
  UniversalSearch = '/v2/accounts/me/answers/query',
  VerticalSearch = '/v2/accounts/me/answers/vertical/query'
}

export enum KnowledgeApiEndpoints {
  CreateQuestion = '/v2/accounts/me/createQuestion'
}

export const defaultApiVersion = 20190101;

export enum Environments {
  PRODUCTION = 'production',
  SANDBOX = 'sandbox'
}