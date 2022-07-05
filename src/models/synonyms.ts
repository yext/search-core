import { SearchError } from './answersapi/AnswersError';
import { SearchConfigWithApiKey } from './core/AnswersConfig';
import { SearchConfigWithToken } from './core/AnswersConfig';
import { SearchRequest } from './core/SearchRequest';

/**
 * @public @deprecated AnswersError was deprecated and replaced by SearchError
 */
export class AnswersError extends SearchError{};

/**
 * @public @deprecated AnswersConfigWithApiKey was deprecated and replaced by SearchConfigWithApiKey
 */
export interface AnswersConfigWithApiKey extends SearchConfigWithApiKey{};

/**
 * @public @deprecated AnswersConfigWithToken was deprecated and replaced by SearchConfigWithToken
 */
export interface AnswersConfigWithToken extends SearchConfigWithToken{};

/**
 * @public @deprecated AnswersRequest was deprecated and replaced by SearchRequest
 */
export interface AnswersRequest extends SearchRequest{};