import MasterSwitchApi from './infra/MasterSwitchApi';
import Core from './core';
import SearchServiceImpl from './infra/SearchServiceImpl';
import QuestionSubmissionServiceImpl from './infra/QuestionSubmissionServiceImpl';
import HttpServiceImpl from './infra/HttpServiceImpl';
import Config from './models/core/Config';
import { Environments } from './constants';

export default function provideCore(userConfig: Config): Promise<Core> {
  const config = {
    environment: Environments.Production,
    ...userConfig
  };

  const masterSwitch = new MasterSwitchApi(config.apiKey, config.experienceKey);

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