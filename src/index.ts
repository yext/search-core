import { MasterSwitch } from './services/MasterSwitch';
import { Core, CoreOptions } from './core';

export default function provideCore(opts: CoreOptions): Promise<Core> {
  const masterSwitch = new MasterSwitch({
    apiKey: opts.apiKey,
    experienceKey: opts.experienceKey
  });
  return masterSwitch.isDisabled().then(isDisabled => {
    if (isDisabled) {
      throw new Error('MasterSwitchApi determined the front-end should be disabled');
    }
    return new Core();
  });
}
