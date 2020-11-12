import UniversalSearchRequest from '../models/searchservice/UniversalSearchRequest';
import UniversalSearchResponse from '../models/searchservice/UniversalSearchResponse';

/**
 * A service which performs Yext Answers searches
 */
export default interface SearchService {
  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>
}