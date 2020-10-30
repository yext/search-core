import MasterSwitchApi from './infra/MasterSwitchApi';
import { Core, CoreOptions } from './core';

export default function provideCore(opts: CoreOptions): Promise<Core> {
  const masterSwitch = new MasterSwitchApi(opts.apiKey, opts.experienceKey);

  return masterSwitch.isEnabled().then(isEnabled => {
    if (!isEnabled) {
      throw new Error('MasterSwitchApi determined the front-end should be disabled');
    }
    return new Core();
  });
}
