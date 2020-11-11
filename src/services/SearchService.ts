import UniversalSearchRequest from '../models/searchservice/UniversalSearchRequest';
import UniversalSearchResponse from '../models/searchservice/UniversalSearchResponse';

export default interface SearchService {
  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse>
}