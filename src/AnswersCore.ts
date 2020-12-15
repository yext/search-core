import { SearchService } from './services/SearchService';
import { UniversalSearchRequest } from './models/searchservice/request/UniversalSearchRequest';
import { UniversalSearchResponse } from './models/searchservice/response/UniversalSearchResponse';
import { VerticalSearchRequest } from './models/searchservice/request/VerticalSearchRequest';
import { VerticalSearchResponse } from './models/searchservice/response/VerticalSearchResponse';

import { QuestionSubmissionService } from './services/QuestionSubmissionService';
import { QuestionSubmissionRequest } from './models/questionsubmission/QuestionSubmissionRequest';
import { QuestionSubmissionResponse } from './models/questionsubmission/QuestionSubmissionResponse';
import { UniversalAutoCompleteRequest, VerticalAutoCompleteRequest, FilterAutoCompleteRequest }
  from './models/autocompleteservice/AutoCompleteRequest';
import { AutoCompleteResponse, FilterAutoCompleteResponse } from './models/autocompleteservice/AutoCompleteResponse';
import { AutoCompleteService } from './services/AutoCompleteService';

/**
 * Provides methods for executing searches, submitting questions, and performing autocompletes.
 *
 * @public
 */
export class AnswersCore {
  /** @internal */
  constructor(
    private searchService: SearchService,
    private questionSubmissionService: QuestionSubmissionService,
    private autoCompleteService: AutoCompleteService
  ) {}

  /**
   * Performs an Answers search across all verticals.
   *
   * @param request - Universal search request options
   */
  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    return this.searchService.universalSearch(request);
  }

  /**
   * Performs an Answers search for a single vertical.
   *
   * @param request - Vertical search request options
   */
  verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    return this.searchService.verticalSearch(request);
  }

  submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse> {
    return this.questionSubmissionService.submitQuestion(request);
  }

  /**
   * Performs an autocomplete request across all verticals.
   *
   * @param request - Universal autocomplete request options
   */
  universalAutoComplete(request: UniversalAutoCompleteRequest): Promise<AutoCompleteResponse> {
    return this.autoCompleteService.universalAutoComplete(request);
  }

  /**
   * Performs an autocomplete request for a single vertical.
   *
   * @param request - Vertical autocomplete request options
   */
  verticalAutoComplete(request: VerticalAutoCompleteRequest): Promise<AutoCompleteResponse> {
    return this.autoCompleteService.verticalAutoComplete(request);
  }

  /**
   * Performs an autocomplete request against specified fields within a single vertical.
   *
   * @remarks
   * This differs from the vertical autocomplete because the vertical autocomplete operates on all entity fields whereas
   * filter autocomplete operates only on specified fields.
   *
   * @example
   * A site has a 'products' vertical and would like a way to allow the user to narrow down the results by the product name.
   * The site can add a second search bar powered by filter autocomplete which will include only product names as search
   * suggestions.
   *
   * @param request - Universal autocomplete request options
   */
  filterAutoComplete(request: FilterAutoCompleteRequest): Promise<FilterAutoCompleteResponse> {
    return this.autoCompleteService.filterAutoComplete(request);
  }
}