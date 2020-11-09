import MasterSwitchApi from './status/MasterSwitchApi';
import { Core, CoreDependencies } from './core';
import SearchService from './search/SearchService';

export default function provideCore(config: CoreConfig): Promise<Core> {
  const masterSwitch = new MasterSwitchApi(config.apiKey, config.experienceKey);

  return masterSwitch.isEnabled().then(isEnabled => {
    if (!isEnabled) {
      throw new Error('MasterSwitchApi determined the front-end should be disabled');
    }
    const coreDependencies: CoreDependencies = {
      searchService: new SearchService(config)
    };
    return new Core(coreDependencies);
  });
}