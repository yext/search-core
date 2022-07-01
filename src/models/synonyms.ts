import { SearchError } from './answersapi/AnswersError';
export class AnswersError extends SearchError{};

import { SearchConfigWithApiKey } from './core/AnswersConfig';
export interface AnswersConfigWithApiKey extends SearchConfigWithApiKey{};
