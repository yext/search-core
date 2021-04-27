import { AnswersCore } from './AnswersCore';
import { SearchServiceImpl } from './infra/SearchServiceImpl';
import { QuestionSubmissionServiceImpl } from './infra/QuestionSubmissionServiceImpl';
import { HttpServiceImpl } from './infra/HttpServiceImpl';
import { AutocompleteServiceImpl } from './infra/AutocompleteServiceImpl';
import { ApiResponseValidator } from './validation/ApiResponseValidator';
/**
 * The entrypoint to the answers-core library.
 *
 * @remarks
 * Returns an {@link AnswersCore} instance.
 *
 * @param config - The answers-core config
 *
 * @public
 */
export function provideCore(config) {
    var httpService = new HttpServiceImpl();
    var apiResponseValidator = new ApiResponseValidator();
    var searchService = new SearchServiceImpl(config, httpService, apiResponseValidator);
    var questionSubmissionService = new QuestionSubmissionServiceImpl(config, httpService, apiResponseValidator);
    var autoCompleteService = new AutocompleteServiceImpl(config, httpService, apiResponseValidator);
    return new AnswersCore(searchService, questionSubmissionService, autoCompleteService);
}
export { AnswersCore };
export * from './models';
//# sourceMappingURL=index.js.map