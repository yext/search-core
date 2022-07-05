import { SearchError } from './answersapi/AnswersError';
import { SearchConfigWithApiKey } from './core/AnswersConfig';
import { SearchConfigWithToken } from './core/AnswersConfig';
import { SearchRequest } from './core/SearchRequest';

/**
 * @public @deprecated 
 */
export class AnswersError extends SearchError{};

/**
 * @public @deprecated 
 */
export interface AnswersConfigWithApiKey extends SearchConfigWithApiKey{};

/**
 * @public @deprecated 
 */
export interface AnswersConfigWithToken extends SearchConfigWithToken{};

/**
 * @public @deprecated 
 */
export interface AnswersRequest extends SearchRequest{};