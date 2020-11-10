import SearchService from './services/SearchService';
import UniversalSearchRequest from './models/searchservice/UniversalSearchRequest';
import UniversalSearchResponse from './models/searchservice/UniversalSearchResponse';
//import VerticalSearchResponse from './models/VerticalSearchResponse';

export default class Core{
  constructor(private searchService: SearchService) {}

  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    return this.searchService.universalSearch(request);
  }

  /*verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    return this.searchService.verticalSearch();
  }*/
}