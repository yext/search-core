import { SearchServiceImpl } from './infra/SearchServiceImpl';
import { QuestionSubmissionServiceImpl } from './infra/QuestionSubmissionServiceImpl';
import { HttpServiceImpl } from './infra/HttpServiceImpl';
import { AnswersConfig } from './models/core/AnswersConfig';
import { AutocompleteServiceImpl } from './infra/AutocompleteServiceImpl';
import { ApiResponseValidator } from './validation/ApiResponseValidator';
import { AnswersCore } from './AnswersCore';
import { defaultEndpoints } from './constants';

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
export function provideCore(userSpecifiedConfig: AnswersConfig): AnswersCore {
  if ('apiKey' in userSpecifiedConfig && 'token' in userSpecifiedConfig) {
    throw new Error('Both apiKey and token are present. Only one authentication method should be provided');
  }

  const config = {
    ...userSpecifiedConfig,
    endpoints: {
      ...defaultEndpoints,
      ...userSpecifiedConfig.endpoints
    }
  };

  const httpService = new HttpServiceImpl();
  const apiResponseValidator = new ApiResponseValidator();

  const searchService = new SearchServiceImpl(config, httpService, apiResponseValidator);
  const questionSubmissionService = new QuestionSubmissionServiceImpl(
    config, httpService, apiResponseValidator);
  const autoCompleteService = new AutocompleteServiceImpl(config, httpService, apiResponseValidator);

  return new AnswersCore(searchService, questionSubmissionService, autoCompleteService);
}
