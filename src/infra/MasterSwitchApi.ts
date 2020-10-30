import Urls from '../http/urls';
import HttpRequester from '../http/HttpRequester';

/**
 * The shape of the MasterSwitch api response.
 */
interface MasterSwitchResponse {
  disabled: boolean
}

/**
 * MasterSwitch checks if the front-end for the given experience should be temporarily disabled.
 */
export default class MasterSwitchApi {
  constructor(private apiKey: string, private experienceKey: string) {}

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

  _get(): Promise<MasterSwitchResponse> {
    const requester = new HttpRequester();
    const baseUrl = Urls.MASTER_SWITCH;
    const url = `${baseUrl}/${this.apiKey}/${this.experienceKey}/status.json`;

    const reqInit = {
      credentials: ('omit' as RequestCredentials)
    };
    return requester.get<MasterSwitchResponse>(url, {}, reqInit);
  }

  _checkApi(): Promise<boolean> {
    return this._get().then(res => !res.disabled);
  }
}