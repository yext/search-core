import { SearchError } from './answersapi/SearchError';
import { SearchRequest } from './core/SearchRequest';

/**
 * @deprecated AnswersError is deprecated and has been replaced by SearchError
 * @public
 */
export type AnswersError = SearchError;

/**
* @deprecated AnswersRequest is deprecated and has been replaced by SearchRequest
* @public
*/
export type AnswersRequest = SearchRequest;