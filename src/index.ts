import MasterSwitchApi from './infra/MasterSwitchApi';
import Core from './core';
import SearchServiceImpl from './infra/SearchServiceImpl';
import QuestionSubmissionServiceImpl from './infra/QuestionSubmissionServiceImpl';
import HttpServiceImpl from './infra/HttpServiceImpl';
import Config from './models/core/Config';

export default function provideCore(config: Config): Promise<Core> {
  const masterSwitch = new MasterSwitchApi(config);

  return masterSwitch.isEnabled().then(isEnabled => {
    if (!isEnabled) {
      throw new Error('MasterSwitchApi determined the front-end should be disabled');
    }
    const httpService = new HttpServiceImpl();
    const searchService = new SearchServiceImpl(config, httpService);
    const questionSubmissionService = new QuestionSubmissionServiceImpl(config, httpService);
    return new Core(searchService, questionSubmissionService);
  });
}