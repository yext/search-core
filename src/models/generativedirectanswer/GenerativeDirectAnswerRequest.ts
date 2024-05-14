import { SearchRequest } from '../core/SearchRequest';
import { VerticalResults } from '../searchservice/response/VerticalResults';

/**
 * Options which can be specified for a generative direct answer request.
 *
 * @public
 */
export interface GenerativeDirectAnswerRequest extends SearchRequest {
  searchId: string,
  searchTerm: string,
  results: VerticalResults[]
}
