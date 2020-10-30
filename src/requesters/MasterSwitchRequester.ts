import Urls from '../http/urls';
import HttpRequester from '../http/HttpRequester';
import MasterSwitchResponse from '../responses/MasterSwitchResponse';

interface MasterSwitchRequesterOptions {
  apiKey: string;
  experienceKey: string;
}

/**
 * MasterSwitchRequester makes and returns a call to the MasterSwitch api.
 */
export default class MasterSwitchRequester {
  private apiKey: string;
  private experienceKey: string;

  constructor(opts: MasterSwitchRequesterOptions) {
    this.apiKey = opts.apiKey;
    this.experienceKey = opts.experienceKey;
  }

  get(): Promise<MasterSwitchResponse> {
    const requester = new HttpRequester();
    const baseUrl = Urls.MASTER_SWITCH;
    const url = `${baseUrl}/${this.apiKey}/${this.experienceKey}/status.json`;

    const reqInit = {
      credentials: ('omit' as RequestCredentials)
    };
    return requester.get<MasterSwitchResponse>(url, {}, reqInit);
  }
}