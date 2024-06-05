import { SearchRequest } from '../core/SearchRequest';
import { VerticalResults } from '../searchservice/response/VerticalResults';

/**
 * Options which can be specified for a generative direct answer request.
 *
 * @public
 */
export interface GenerativeDirectAnswerRequest extends SearchRequest {
  /** The ID of the search request. */
  searchId: string,
  /** The text of the user-written query that prompted Search results. */
  searchTerm: string,
  /** The complete set of Search Results */
  results: VerticalResults[]
}
