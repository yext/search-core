import { AnswersCore } from './AnswersCore';
import { SearchServiceImpl } from './infra/SearchServiceImpl';
import { QuestionSubmissionServiceImpl } from './infra/QuestionSubmissionServiceImpl';
import { HttpServiceImpl } from './infra/HttpServiceImpl';
import { AnswersConfig } from './models/core/AnswersConfig';
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
export function provideCore(config: AnswersConfig): AnswersCore {
  if (config.apiKey && config.token) {
    throw new Error('Both apiKey and token are present. Only one authentication method should be provided');
  }

  const httpService = new HttpServiceImpl();
  const apiResponseValidator = new ApiResponseValidator();

  const searchService = new SearchServiceImpl(config, httpService, apiResponseValidator);
  const questionSubmissionService = new QuestionSubmissionServiceImpl(
    config, httpService, apiResponseValidator);
  const autoCompleteService = new AutocompleteServiceImpl(config, httpService, apiResponseValidator);

  return new AnswersCore(searchService, questionSubmissionService, autoCompleteService);
}

export { AnswersCore };
export * from './models';