import { AnswersCore } from './AnswersCore';
import { SearchServiceImpl } from './infra/SearchServiceImpl';
import { QuestionSubmissionServiceImpl } from './infra/QuestionSubmissionServiceImpl';
import { HttpServiceImpl } from './infra/HttpServiceImpl';
import { AnswersConfig } from './models/core/AnswersConfig';
import { AutoCompleteServiceImpl } from './infra/AutoCompleteServiceImpl';
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
  const httpService = new HttpServiceImpl();
  const apiResponseValidator = new ApiResponseValidator();

  const searchService = new SearchServiceImpl(config, httpService, apiResponseValidator);
  const questionSubmissionService = new QuestionSubmissionServiceImpl(config, httpService, apiResponseValidator);
  const autoCompleteService = new AutoCompleteServiceImpl(config, httpService, apiResponseValidator);

  return new AnswersCore(searchService, questionSubmissionService, autoCompleteService);
}

export { AnswersCore };
export * from './models';