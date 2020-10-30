import MasterSwitchRequest from '../request/MasterSwitchRequest';

export interface MasterSwitchOptions {
  apiKey: string;
  experienceKey: string;
}

export interface MasterSwitchResponse {
  disabled: boolean
}

export interface MasterSwitchService {
  /**
   * Checks if the front-end for the given experience should be temporarily disabled.
   * Note that this check errs on the side of enabling the front-end. If the network call
   * does not complete successfully, due to timeout or other error, those failures are caught.
   * In these failure cases, the assumption is that things are enabled.
   *
   * @returns {Promise<boolean>} A Promise containing a boolean indicating if the front-end
   *                             should be disabled.
   */
  isDisabled(): Promise<boolean>;
}

export class MasterSwitch implements MasterSwitchService {
  constructor(private opts: MasterSwitchOptions) {}

  isDisabled(): Promise<boolean> {
    // A 100ms timeout is enforced on the status call.
    const timeout = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => reject(false), 100);
    });

    return Promise.race([timeout, this._checkApi()])
      .then(isDisabled => isDisabled)
      .catch(() => false);
  }

  _checkApi(): Promise<boolean> {
    return new MasterSwitchRequest(this.opts).get();
  }
}