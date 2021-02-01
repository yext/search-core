import { UniversalSearchRequest } from '../models/searchservice/request/UniversalSearchRequest';
import { UniversalSearchResponse } from '../models/searchservice/response/UniversalSearchResponse';
import { VerticalSearchRequest } from '../models/searchservice/request/VerticalSearchRequest';
import { VerticalSearchResponse } from '../models/searchservice/response/VerticalSearchResponse';

/**
 * A service which performs Yext Answers searches
 */
export interface SearchService {
  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>
  verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse>
}