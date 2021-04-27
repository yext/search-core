"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswersCore = void 0;
/**
 * Provides methods for executing searches, submitting questions, and performing autocompletes.
 *
 * @public
 */
class AnswersCore {
    /** @internal */
    constructor(searchService, questionSubmissionService, autoCompleteService) {
        this.searchService = searchService;
        this.questionSubmissionService = questionSubmissionService;
        this.autoCompleteService = autoCompleteService;
    }
    /**
     * Performs an Answers search across all verticals.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Universal search request options
     */
    universalSearch(request) {
        return this.searchService.universalSearch(request);
    }
    /**
     * Performs an Answers search for a single vertical.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Vertical search request options
     */
    verticalSearch(request) {
        return this.searchService.verticalSearch(request);
    }
    /**
     * Submits a custom question to the Answers API.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Question submission request options
     */
    submitQuestion(request) {
        return this.questionSubmissionService.submitQuestion(request);
    }
    /**
     * Performs an autocomplete request across all verticals.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Universal autocomplete request options
     */
    universalAutocomplete(request) {
        return this.autoCompleteService.universalAutocomplete(request);
    }
    /**
     * Performs an autocomplete request for a single vertical.
     *
     * @remarks
     * If rejected, the reason will be an {@link AnswersError}.
     *
     * @param request - Vertical autocomplete request options
     */
    verticalAutocomplete(request) {
        return this.autoCompleteService.verticalAutocomplete(request);
    }
    /**
     * Performs a filtersearch request against specified fields within a single vertical.
     *
     * @remarks
     * This differs from the vertical autocomplete because the vertical autocomplete operates on all entity fields whereas
     * filtersearch operates only on specified fields. If rejected, the reason will be an {@link AnswersError}.
     *
     * @example
     * A site has a 'products' vertical and would like a way to allow the user to narrow down the results by the product name.
     * The site can add a second search bar powered by filtersearch which will include only product names as search
     * suggestions.
     *
     * @param request - filtersearch request options
     */
    filterSearch(request) {
        return this.autoCompleteService.filterSearch(request);
    }
}
exports.AnswersCore = AnswersCore;
//# sourceMappingURL=AnswersCore.js.map