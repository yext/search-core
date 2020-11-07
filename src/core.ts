import SearchService from './search/SearchService';
import { UniversalSearchRequest } from './search/SearchService'
import UniversalSearchResponse from './models/UniversalSearchResponse';

export interface CoreDependencies {
  searchService: SearchService;
}

export class Core implements CoreDependencies {
  searchService: SearchService;

  constructor(dependencies: CoreDependencies) {
    this.searchService = dependencies.searchService;
  }

  universalSearch (request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    return this.searchService.universalSearch(request);
  }

  verticalSearch () {
    return this.searchService.verticalSearch();
  }
}