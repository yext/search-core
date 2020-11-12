import UniversalSearchRequest from '../models/searchservice/request/UniversalSearchRequest';
import UniversalSearchResponse from '../models/searchservice/response/UniversalSearchResponse';

/**
 * A service which performs Yext Answers searches
 */
export default interface SearchService {
  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>
}