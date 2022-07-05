import { SearchConfig } from './core/SearchConfig';
import { BaseSearchConfig } from './core/SearchConfig';
import { SearchConfigWithApiKey } from './core/SearchConfig';
import { SearchConfigWithToken } from './core/SearchConfig';

/**
 * @deprecated AnswersConfig is deprecated and has been replaced by SearchConfig
 * @public
 */
export type AnswersConfig = SearchConfig;

/**
 * @deprecated BaseAnswersConfig is deprecated and has been replaced by BaseSearchConfig
 * @public
 */
export type BaseAnswersConfig = BaseSearchConfig;

/**
 * @deprecated AnswersConfigWithApiKey is deprecated and has been replaced by SearchConfigWithApiKey
 * @public
 */
export type AnswersConfigWithApiKey = SearchConfigWithApiKey;

/**
 * @deprecated AnswersConfigWithToken is deprecated and has been replaced by SearchConfigWithToken
 * @public
 */
export type AnswersConfigWithToken = SearchConfigWithToken;