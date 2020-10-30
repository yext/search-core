import MasterSwitchApi from './services/MasterSwitchApi';
import { Core, CoreOptions } from './core';

export default function provideCore(opts: CoreOptions): Promise<Core> {
  const masterSwitch = new MasterSwitchApi({
    apiKey: opts.apiKey,
    experienceKey: opts.experienceKey
  });
  return masterSwitch.isEnabled().then(isEnabled => {
    if (!isEnabled) {
      throw new Error('MasterSwitchApi determined the front-end should be disabled');
    }
    return new Core();
  });
}
