/* eslint-disable @typescript-eslint/no-empty-interface */
import { SearchError } from './answersapi/SearchError';
import { SearchRequest } from './core/SearchRequest';

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