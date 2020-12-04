import SearchService from './services/SearchService';
import UniversalSearchRequest from './models/searchservice/request/UniversalSearchRequest';
import UniversalSearchResponse from './models/searchservice/response/UniversalSearchResponse';
import VerticalSearchRequest from './models/searchservice/request/VerticalSearchRequest';
import VerticalSearchResponse from './models/searchservice/response/VerticalSearchResponse';

import QuestionSubmissionService from './services/QuestionSubmissionService';
import QuestionSubmissionRequest from './models/questionsubmission/QuestionSubmissionRequest';
import QuestionSubmissionResponse from './models/questionsubmission/QuestionSubmissionResponse';
import { AutoCompleteRequest } from './models/autocompleteservice/AutoCompleteRequest';
import { AutoCompleteResponse } from './models/autocompleteservice/AutoCompleteResponse';
import { AutoCompleteService } from './services/AutoCompleteService';

export default class Core {
  constructor(
    private searchService: SearchService,
    private questionSubmissionService: QuestionSubmissionService,
    private autoCompleteService: AutoCompleteService
  ) {}

  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    return this.searchService.universalSearch(request);
  }

  verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    return this.searchService.verticalSearch(request);
  }

  submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse> {
    return this.questionSubmissionService.submitQuestion(request);
  }

  autoComplete(request: AutoCompleteRequest): Promise<AutoCompleteResponse> {
    return this.autoCompleteService.autoComplete(request);
  }
}