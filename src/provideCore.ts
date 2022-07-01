import { SearchServiceImpl } from './infra/SearchServiceImpl';
import { QuestionSubmissionServiceImpl } from './infra/QuestionSubmissionServiceImpl';
import { HttpServiceImpl } from './infra/HttpServiceImpl';
import { AnswersConfig, AnswersConfigWithDefaulting } from './models/core/AnswersConfig';
import { AutocompleteServiceImpl } from './infra/AutocompleteServiceImpl';
import { ApiResponseValidator } from './validation/ApiResponseValidator';
import { SearchCore } from './SearchCore';
import { defaultEndpoints } from './constants';

/**
 * The entrypoint to the search-core library.
 *
 * @remarks
 * Returns an {@link SearchCore} instance.
 *
 * @param config - The answers-core config
 *
 * @public
 */
export function provideCore(config: AnswersConfig): SearchCore {
  if ('apiKey' in config && 'token' in config) {
    throw new Error('Both apiKey and token are present. Only one authentication method should be provided');
  }

  const defaultedConfig: AnswersConfigWithDefaulting = {
    ...config,
    endpoints: {
      ...defaultEndpoints,
      ...config.endpoints
    }
  };

  const httpService = new HttpServiceImpl();
  const apiResponseValidator = new ApiResponseValidator();

  const searchService = new SearchServiceImpl(defaultedConfig, httpService, apiResponseValidator);
  const questionSubmissionService = new QuestionSubmissionServiceImpl(
    defaultedConfig, httpService, apiResponseValidator);
  const autoCompleteService = new AutocompleteServiceImpl(defaultedConfig, httpService, apiResponseValidator);

  return new SearchCore(searchService, questionSubmissionService, autoCompleteService);
}
