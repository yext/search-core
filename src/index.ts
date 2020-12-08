import MasterSwitchApi from './infra/MasterSwitchApi';
import AnswersCore from './AnswersCore';
import SearchServiceImpl from './infra/SearchServiceImpl';
import QuestionSubmissionServiceImpl from './infra/QuestionSubmissionServiceImpl';
import HttpServiceImpl from './infra/HttpServiceImpl';
import AnswersConfig from './models/core/AnswersConfig';
import AutoCompleteServiceImpl from './infra/AutoCompleteServiceImpl';

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