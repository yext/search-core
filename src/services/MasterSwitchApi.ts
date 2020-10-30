import MasterSwitchRequest from '../request/MasterSwitchRequest';

interface MasterSwitchOptions {
  apiKey: string;
  experienceKey: string;
}

/**
 * MasterSwitch checks if the front-end for the given experience should be temporarily disabled.
 */
export default class MasterSwitchApi {
  constructor(private opts: MasterSwitchOptions) {}

  /**
   * Note that this check errs on the side of enabling the front-end. If the network call
   * does not complete successfully, due to timeout or other error, those failures are caught.
   * In these failure cases, the assumption is that things are enabled.
   */
  isEnabled(): Promise<boolean> {
    // A 100ms timeout is enforced on the status call.
    const timeout = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => reject(true), 100);
    });

    return Promise.race([timeout, this._checkApi()])
      .then(isDisabled => isDisabled)
      .catch(() => true);
  }

  _checkApi(): Promise<boolean> {
    return new MasterSwitchRequest(this.opts).get().then(res => !res.disabled);
  }
}