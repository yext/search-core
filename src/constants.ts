import { Endpoints } from './models/core/Endpoints';

export const defaultApiVersion = 20220511;

export const defaultEndpoints: Required<Endpoints> = {
  universalSearch: 'https://liveapi.yext.com/v2/accounts/me/answers/query',
  verticalSearch: 'https://liveapi.yext.com/v2/accounts/me/answers/vertical/query',
  questionSubmission: 'https://liveapi.yext.com/v2/accounts/me/createQuestion',
  status: 'https://answersstatus.pagescdn.com',
  universalAutocomplete: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/autocomplete',
  verticalAutocomplete: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/vertical/autocomplete',
  filterSearch: 'https://liveapi-cached.yext.com/v2/accounts/me/answers/filtersearch',
};