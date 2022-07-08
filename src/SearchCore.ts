import { SearchService } from './services/SearchService';
import { UniversalSearchRequest } from './models/searchservice/request/UniversalSearchRequest';
import { UniversalSearchResponse } from './models/searchservice/response/UniversalSearchResponse';
import { VerticalSearchRequest } from './models/searchservice/request/VerticalSearchRequest';
import { VerticalSearchResponse } from './models/searchservice/response/VerticalSearchResponse';

import { QuestionSubmissionService } from './services/QuestionSubmissionService';
import { QuestionSubmissionRequest } from './models/questionsubmission/QuestionSubmissionRequest';
import { QuestionSubmissionResponse } from './models/questionsubmission/QuestionSubmissionResponse';
import { UniversalAutocompleteRequest, VerticalAutocompleteRequest, FilterSearchRequest }
  from './models/autocompleteservice/AutocompleteRequest';
import { AutocompleteResponse, FilterSearchResponse } from './models/autocompleteservice/AutocompleteResponse';
import { AutocompleteService } from './services/AutocompleteService';

/**
 * Provides methods for executing searches, submitting questions, and performing autocompletes.
 *
 * @public
 */
export class SearchCore {
  constructor(
    private searchService: SearchService,
    private questionSubmissionService: QuestionSubmissionService,
    private autoCompleteService: AutocompleteService
  ) {}

  /**
   * Performs a search across all verticals.
   *
   * @remarks
   * If rejected, the reason will be an {@link SearchError}.
   *
   * @param request - Universal search request options
   */
  universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    return this.searchService.universalSearch(request);
  }

  /**
   * Performs a search for a single vertical.
   *
   * @remarks
   * If rejected, the reason will be an {@link SearchError}.
   *
   * @param request - Vertical search request options
   */
  verticalSearch(request: VerticalSearchRequest): Promise<VerticalSearchResponse> {
    return this.searchService.verticalSearch(request);
  }

  /**
   * Submits a custom question to the Search API.
   *
   * @remarks
   * If rejected, the reason will be an {@link SearchError}.
   *
   * @param request - Question submission request options
   */
  submitQuestion(request: QuestionSubmissionRequest): Promise<QuestionSubmissionResponse> {
    return this.questionSubmissionService.submitQuestion(request);
  }

  /**
   * Performs an autocomplete request across all verticals.
   *
   * @remarks
   * If rejected, the reason will be an {@link SearchError}.
   *
   * @param request - Universal autocomplete request options
   */
  universalAutocomplete(request: UniversalAutocompleteRequest): Promise<AutocompleteResponse> {
    return this.autoCompleteService.universalAutocomplete(request);
  }

  /**
   * Performs an autocomplete request for a single vertical.
   *
   * @remarks
   * If rejected, the reason will be an {@link SearchError}.
   *
   * @param request - Vertical autocomplete request options
   */
  verticalAutocomplete(request: VerticalAutocompleteRequest): Promise<AutocompleteResponse> {
    return this.autoCompleteService.verticalAutocomplete(request);
  }

  /**
   * Performs a filtersearch request against specified fields within a single vertical.
   *
   * @remarks
   * This differs from the vertical autocomplete because the vertical autocomplete
   * operates on all entity fields whereas filtersearch operates only on specified fields.
   * If rejected, the reason will be an {@link SearchError}.
   *
   * @example
   * A site has a 'products' vertical and would like a way to allow the user to narrow down
   * the results by the product name. The site can add a second search bar powered by filtersearch
   * which will include only product names as search suggestions.
   *
   * @param request - filtersearch request options
   */
  filterSearch(request: FilterSearchRequest): Promise<FilterSearchResponse> {
    return this.autoCompleteService.filterSearch(request);
  }
}