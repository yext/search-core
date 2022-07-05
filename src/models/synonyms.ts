import { SearchError } from './answersapi/AnswersError';
import { SearchConfigWithApiKey } from './core/AnswersConfig';
import { SearchConfigWithToken } from './core/AnswersConfig';
import { SearchRequest } from './core/SearchRequest';

/**
 * @deprecated 
 */
export class AnswersError extends SearchError{};

/**
 * @deprecated 
 */
export interface AnswersConfigWithApiKey extends SearchConfigWithApiKey{};

/**
 * @deprecated 
 */
export interface AnswersConfigWithToken extends SearchConfigWithToken{};

/**
 * @deprecated 
 */
export interface AnswersRequest extends SearchRequest{};