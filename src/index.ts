import MasterSwitchApi from './infra/MasterSwitchApi';
import Core from './core';
import SearchServiceImpl from './infra/SearchServiceImpl';
import HttpServiceImpl from './infra/HttpServiceImpl';
import Config from './models/core/Config';

export default function provideCore(config: Config): Promise<Core> {
  const masterSwitch = new MasterSwitchApi(config.apiKey, config.experienceKey);

  return masterSwitch.isEnabled().then(isEnabled => {
    if (!isEnabled) {
      throw new Error('MasterSwitchApi determined the front-end should be disabled');
    }
    const httpRequester = new HttpServiceImpl();
    const searchService = new SearchServiceImpl(config, httpRequester);
    return new Core(searchService);
  });
}