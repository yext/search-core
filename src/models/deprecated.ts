import { SearchError } from './answersapi/SearchError';
import { SearchRequest } from './core/SearchRequest';

/**
 * @deprecated AnswersError is deprecated and has been replaced by {@link SearchError}
 * @public
 */
export type AnswersError = SearchError;

/**
* @deprecated AnswersRequest is deprecated and has been replaced by {@link SearchRequest}
* @public
*/
export type AnswersRequest = SearchRequest;