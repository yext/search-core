import Urls from '../http/urls';
import HttpRequester from '../http/HttpRequester';
import MasterSwitchResponse from '../response/MasterSwitchResponse';

interface MasterSwitchRequestOptions {
  apiKey: string;
  experienceKey: string;
}

/**
 * MasterSwitchRequest makes and returns a call to the MasterSwitch api.
 */
export default class MasterSwitchRequest {
  private apiKey: string;
  private experienceKey: string;

  constructor(opts: MasterSwitchRequestOptions) {
    this.apiKey = opts.apiKey;
    this.experienceKey = opts.experienceKey;
  }

  get(): Promise<MasterSwitchResponse> {
    const requester = new HttpRequester();
    const baseUrl = Urls.MasterSwitchApi;
    const url = `${baseUrl}/${this.apiKey}/${this.experienceKey}/status.json`;

    const reqInit = {
      credentials: ('omit' as RequestCredentials)
    };
    return requester.get<MasterSwitchResponse>(url, {}, reqInit);
  }
}