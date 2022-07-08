/* eslint-disable @typescript-eslint/no-empty-interface */
import { SearchConfig } from './core/SearchConfig';
import { BaseSearchConfig } from './core/SearchConfig';
import { SearchConfigWithApiKey } from './core/SearchConfig';
import { SearchConfigWithToken } from './core/SearchConfig';
import { SearchError } from './searchapi/SearchError';
import { SearchRequest } from './core/SearchRequest';

/**
 * @deprecated AnswersConfig is deprecated and has been replaced by {@link SearchConfig}
 * @public
 */
export type AnswersConfig = SearchConfig;

/**
 * @deprecated BaseAnswersConfig is deprecated and has been replaced by {@link BaseSearchConfig}
 * @public
 */
export interface BaseAnswersConfig extends BaseSearchConfig{}

/**
 * @deprecated AnswersConfigWithApiKey is deprecated and has been replaced by {@link SearchConfigWithApiKey}
 * @public
 */
export interface AnswersConfigWithApiKey extends SearchConfigWithApiKey{}

/**
 * @deprecated AnswersConfigWithToken is deprecated and has been replaced by {@link SearchConfigWithToken}
 * @public
 */
export interface AnswersConfigWithToken extends SearchConfigWithToken{}

/**
 * @deprecated AnswersError is deprecated and has been replaced by {@link SearchError}
 * @public
 */
export interface AnswersError extends SearchError{}

/**
* @deprecated AnswersRequest is deprecated and has been replaced by {@link SearchRequest}
* @public
*/
export interface AnswersRequest extends SearchRequest{}
