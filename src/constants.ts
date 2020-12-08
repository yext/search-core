import Endpoints from './models/core/Endpoints';

export const defaultApiVersion = 20190101;

export const defaultEndpoints: Required<Endpoints> = {
  universalSearch: 'https://liveapi.yext.com/v2/accounts/me/answers/query',
  verticalSearch: 'https://liveapi.yext.com/v2/accounts/me/answers/vertical/query',
  questionSubmission: 'https://api.yext.com/v2/accounts/me/createQuestion',
  status: 'https://answersstatus.pagescdn.com',
  universalAutoComplete: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/autocomplete',
  verticalAutoComplete: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/vertical/autocomplete',
  filterAutoComplete: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/filtersearch',
};