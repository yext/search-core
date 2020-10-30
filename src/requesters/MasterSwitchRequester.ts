import Urls from '../http/urls';
import HttpRequester from '../http/HttpRequester';
import MasterSwitchResponse from '../responses/MasterSwitchResponse';

/**
 * MasterSwitchRequester makes and returns a call to the MasterSwitch api.
 */
export default class MasterSwitchRequester {
  constructor(private apiKey: string, private experienceKey: string) {}

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