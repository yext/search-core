import SearchService from './services/SearchService';
import UniversalSearchRequest from './models/searchservice/request/UniversalSearchRequest';
import UniversalSearchResponse from './models/searchservice/response/UniversalSearchResponse';
import VerticalSearchRequest from './models/searchservice/request/VerticalSearchRequest';
import VerticalSearchResponse from './models/searchservice/response/VerticalSearchResponse';

export default class Core {
  constructor(private searchService: SearchService) {}

  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    return this.searchService.universalSearch(request);
  }

  verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    return this.searchService.verticalSearch(request);
  }
}