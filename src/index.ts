import MasterSwitchApi from './infra/MasterSwitchApi';
import AnswersCore from './AnswersCore';
import SearchServiceImpl from './infra/SearchServiceImpl';
import QuestionSubmissionServiceImpl from './infra/QuestionSubmissionServiceImpl';
import HttpServiceImpl from './infra/HttpServiceImpl';
import AnswersConfig from './models/core/AnswersConfig';
import AutoCompleteServiceImpl from './infra/AutoCompleteServiceImpl';

/**
 * The entrypoint to the answers-core library.
 *
 * @remarks
 * Returns a Promise containing an {@link AnswersCore} instance
 * If the backend determines that the core should be disabled, this function returns a rejected promise.
 *
 * @param config - The answers-core config
 *
 * @public
 */
export function provideCore(config: AnswersConfig): Promise<AnswersCore> {
  const masterSwitch = new MasterSwitchApi(config);

  return masterSwitch.isEnabled().then(isEnabled => {
    if (!isEnabled) {
      throw new Error('MasterSwitchApi determined the front-end should be disabled');
    }
    const httpService = new HttpServiceImpl();
    const searchService = new SearchServiceImpl(config, httpService);
    const questionSubmissionService = new QuestionSubmissionServiceImpl(config, httpService);
    const autoCompleteService = new AutoCompleteServiceImpl(config, httpService);
    return new AnswersCore(searchService, questionSubmissionService, autoCompleteService);
  });
}

export { AnswersCore };
export * from './models';