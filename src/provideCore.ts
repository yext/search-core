import { SearchServiceImpl } from './infra/SearchServiceImpl';
import { QuestionSubmissionServiceImpl } from './infra/QuestionSubmissionServiceImpl';
import { HttpServiceImpl } from './infra/HttpServiceImpl';
import { SearchConfig, SearchConfigWithDefaulting } from './models/core/SearchConfig';
import { AutocompleteServiceImpl } from './infra/AutocompleteServiceImpl';
import { ApiResponseValidator } from './validation/ApiResponseValidator';
import { SearchCore } from './SearchCore';
import { EndpointsFactory } from './provideEndpoints';

/**
 * The entrypoint to the search-core library.
 *
 * @remarks
 * Returns an {@link SearchCore} instance.
 *
 * @param config - The search-core config
 *
 * @public
 */
export function provideCore(config: SearchConfig): SearchCore {
  if ('apiKey' in config && 'token' in config) {
    throw new Error('Both apiKey and token are present. Only one authentication method should be provided');
  }

  const defaultedConfig: SearchConfigWithDefaulting = {
    ...config,
    endpoints: {
      ...new EndpointsFactory(config).getEndpoints(),
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
