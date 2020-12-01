import { defaultEndpoints } from '../constants';
import Config from '../models/core/Config';
import HttpServiceImpl from './HttpServiceImpl';

/**
 * MasterSwitch checks if the front-end for the given experience should be temporarily disabled.
 */
export default class MasterSwitchApi {
  private config: Config;
  private endpoint: string;

  constructor(config: Config) {
    this.config = config;
    this.endpoint = config.endpoints?.status ?? defaultEndpoints.status;
  }

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

    return Promise.race([timeout, this.checkApi()])
      .then(isEnabled => isEnabled)
      .catch(() => true);
  }

  private checkApi(): Promise<boolean> {
    const requester = new HttpServiceImpl();
    const baseUrl = this.endpoint;
    const url = `${baseUrl}/${this.config.apiKey}/${this.config.experienceKey}/status.json`;

    const reqInit = {
      credentials: ('omit' as RequestCredentials)
    };
    return requester.get<{ disabled: boolean }>(url, {}, reqInit)
      .then(res => !res.disabled);
  }
}