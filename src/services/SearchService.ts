import HttpRequester from '../http/HttpRequester';
import { UniversalSearchQueryParams } from '../http/params';
import { BaseUrls, LiveApiEndpoints, defaultApiVersion} from '../constants';
import UniversalSearchRequest from '../models/searchservice/UniversalSearchRequest';
//import VerticalSearchRequest from '../models/VerticalSearchResponse';
import UniversalSearchResponse from '../models/searchservice/UniversalSearchResponse';
//import VerticalSearchResponse from '../models/VerticalSearchResponse';

export default class SearchService {
  constructor(
    private config: Config,
    private httpRequester: HttpRequester
  ) {}

  async universalSearch(request: UniversalSearchRequest): Promise<UniversalSearchResponse> {
    const requestUrl: string = BaseUrls.LiveApi + LiveApiEndpoints.UniversalSearch;

    const queryParams: UniversalSearchQueryParams = {
      input: request.query,
      experienceKey: this.config.experienceKey,
      api_key: this.config.apiKey,
      v: this.config.apiVersion || defaultApiVersion,
      version: this.config.configurationLabel,
      location: request.geolocation && `${request.geolocation.lat},${request.geolocation.lng}`,
      locale: this.config.locale,
      skipSpellCheck: !request.spellCheckEnabled,
      sessionTrackingEnabled: request.sessionTrackingEnabled,
      queryTrigger: request.queryTrigger,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawUniversalSearchResponse = await this.httpRequester.get<any>(requestUrl, queryParams);

    console.log('Raw Universal Response:');
    console.log(rawUniversalSearchResponse);

    return UniversalSearchResponse.from(rawUniversalSearchResponse);
  }

  /*async verticalSearch(): Promise<VerticalSearchResponse> {

  }*/
}