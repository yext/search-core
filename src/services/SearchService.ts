import { UniversalSearchRequest } from '../models/searchservice/request/UniversalSearchRequest';
import { UniversalSearchResponse } from '../models/searchservice/response/UniversalSearchResponse';
import { VerticalSearchRequest } from '../models/searchservice/request/VerticalSearchRequest';
import { VerticalSearchResponse } from '../models/searchservice/response/VerticalSearchResponse';

/**
 * A service which performs Yext Search.
 *
 * @public
 */
export interface SearchService {
  /**
   * Performs a Universal search across all verticals.
   *
   * @param request - The details of the Universal search request.
   */
  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>,

  /**
   * Performs a search across a particular Vertical.
   *
   * @param request - The details of the Vertical search request.
   */
  verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse>
}