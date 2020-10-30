import Urls from '../../http/urls';
import { HttpRequesterImpl } from '../../http/HttpRequester';
import { MasterSwitchOptions, MasterSwitchResponse } from '../../services/MasterSwitch';

export default class MasterSwitchRequest {
  private apiKey:string;
  private experienceKey:string;

  constructor(opts: MasterSwitchOptions) {
    this.apiKey = opts.apiKey;
    this.experienceKey = opts.experienceKey;
  }

  get(): Promise<boolean> {
    const requester = new HttpRequesterImpl();
    const baseUrl = Urls.MasterSwitchApi;
    const url = `${baseUrl}/${this.apiKey}/${this.experienceKey}/status.json`;

    const reqInit = {
      credentials: ('omit' as RequestCredentials)
    };
    return requester.get<MasterSwitchResponse>(url, {}, reqInit)
      .then(json => json.disabled);
  }
}